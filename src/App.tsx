import { useState, useRef, useEffect } from 'react'
import { CATEGORIES, MENU, type MenuItem } from './data/menu'

const PHONE = '+995599156401'
const TELEGRAM_PHONE = '995599156401'
const EMAIL = 'nekosushibarbarumi@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/neko.sushibar/'

// ── Cat SVG logo ─────────────────────────────────────────────────────────────
function CatLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.5 2 4 5.5 4 10v2c0 1.5-.5 2.5-1 3.5C2.5 17 3 18 4 18h1c0 2 2 4 7 4s7-2 7-4h1c1 0 1.5-1 1-2.5-.5-1-1-2-1-3.5v-2C20 5.5 16.5 2 12 2z" fill="#E8A838" opacity="0.9"/>
      <path d="M4 10V7L7 4v3" stroke="#0D0D0D" strokeWidth="0.5" fill="#C8881A"/>
      <path d="M20 10V7L17 4v3" stroke="#0D0D0D" strokeWidth="0.5" fill="#C8881A"/>
      <circle cx="9" cy="11" r="1.5" fill="#0D0D0D"/>
      <circle cx="15" cy="11" r="1.5" fill="#0D0D0D"/>
      <circle cx="9.5" cy="10.5" r="0.5" fill="#fff"/>
      <circle cx="15.5" cy="10.5" r="0.5" fill="#fff"/>
      <path d="M10 14.5c0 .8.9 1.5 2 1.5s2-.7 2-1.5" stroke="#0D0D0D" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M12 14.5v.5" stroke="#0D0D0D" strokeWidth="1" strokeLinecap="round"/>
      <path d="M8 13l-2 .5M16 13l2 .5" stroke="#0D0D0D" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
  )
}

// ── Header ───────────────────────────────────────────────────────────────────
function Header({ onContact }: { onContact: () => void }) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo"><CatLogo /></div>
        <div>
          <div className="header-title">NEKO</div>
          <div className="header-sub">Суши-бар · Батуми</div>
        </div>
      </div>
      <button className="header-contact" onClick={onContact}>
        <span>📞</span>
        <span>Контакты</span>
      </button>
    </header>
  )
}

// ── Special offer banner ──────────────────────────────────────────────────────
function OfferBanner() {
  return (
    <div className="offer-banner">
      <div className="offer-badge">16:00 – 18:00</div>
      <div className="offer-text">
        <div className="offer-title">Специальное предложение</div>
        <div className="offer-desc">
          Ролл или поке + коктейль — <strong style={{ color: 'var(--primary)' }}>45 ₾</strong>
          &nbsp;&nbsp;·&nbsp;&nbsp;Ролл или поке + лимонад — <strong style={{ color: 'var(--primary)' }}>35 ₾</strong>
        </div>
      </div>
    </div>
  )
}

// ── Category tabs ─────────────────────────────────────────────────────────────
function CategoryTabs({
  active, onChange,
}: { active: string; onChange: (id: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current?.querySelector<HTMLButtonElement>('.tab.active')
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <div className="tabs-wrap">
      <div className="tabs" ref={ref}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`tab${active === cat.id ? ' active' : ''}`}
            onClick={() => onChange(cat.id)}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Item card ─────────────────────────────────────────────────────────────────
function ItemCard({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const priceStr = item.price % 1 === 0
    ? `${item.price} ₾`
    : `${item.price.toFixed(2)} ₾`

  return (
    <button className="item-card" onClick={onClick}>
      <span className="item-icon">{item.emoji}</span>
      <div className="item-body">
        <div className="item-name">{item.name}</div>
        {item.description && (
          <div className="item-desc">{item.description}</div>
        )}
      </div>
      <span className="item-price">{priceStr}</span>
    </button>
  )
}

// ── Item modal ────────────────────────────────────────────────────────────────
function ItemModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const priceStr = item.price % 1 === 0
    ? `${item.price}`
    : item.price.toFixed(2)

  function handleOrder() {
    const tg = (window as { Telegram?: { WebApp?: { openTelegramLink: (url: string) => void } } }).Telegram?.WebApp
    if (tg) {
      tg.openTelegramLink(`https://t.me/+${TELEGRAM_PHONE}`)
    } else {
      window.open(`tel:${PHONE}`, '_self')
    }
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div className="modal-body">
          <div className="modal-icon">{item.emoji}</div>
          <div className="modal-name">{item.name}</div>
          {item.description && (
            <div className="modal-desc">{item.description}</div>
          )}
          <div className="modal-footer">
            <div className="modal-price">
              {priceStr} <span>₾</span>
            </div>
            <button className="btn-close" onClick={onClose}>Закрыть</button>
            <button className="btn-order" onClick={handleOrder}>
              📞 Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Contact sheet ─────────────────────────────────────────────────────────────
function ContactSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div className="contact-sheet">
          <div className="contact-title">🐱 Neko Sushi Bar</div>

          <a className="contact-row" href={`tel:${PHONE}`}>
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Телефон</div>
              <div className="contact-value">{PHONE}</div>
            </div>
          </a>

          <a className="contact-row" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E8A838" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" stroke="#E8A838" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#E8A838"/>
              </svg>
            </div>
            <div>
              <div className="contact-label">Instagram</div>
              <div className="contact-value">@neko.sushibar</div>
            </div>
          </a>

          <a className="contact-row" href={`mailto:${EMAIL}`}>
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{EMAIL}</div>
            </div>
          </a>

          <a className="contact-row" href="https://www.tripadvisor.ru/Restaurant_Review-g297576-d26177863-Reviews-Neko-Batumi_Adjara_Region.html" target="_blank" rel="noreferrer">
            <div className="contact-icon">⭐</div>
            <div>
              <div className="contact-label">TripAdvisor</div>
              <div className="contact-value">Neko Batumi — отзывы</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [showContact, setShowContact] = useState(false)

  const items = MENU.filter(i => i.category === activeCategory)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header onContact={() => setShowContact(true)} />
      <OfferBanner />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <div className="menu-list">
        {items.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-hint)', padding: '40px 0' }}>
            Нет позиций
          </div>
        )}
        {items.map(item => (
          <ItemCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
      {showContact && (
        <ContactSheet onClose={() => setShowContact(false)} />
      )}
    </div>
  )
}
