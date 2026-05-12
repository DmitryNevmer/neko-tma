# Neko Sushi Bar TMA — коммерческий проект
> Проектные правила. Общие правила → корневой `CLAUDE.md` в `C:\Users\user\Claude Code\`.
> Security audit правило №0 — см. корневой CLAUDE.md.
> Актуально: май 2026.

## Проект

| | |
|---|---|
| Прод | https://neko-tma.vercel.app |
| Репо | DmitryNevmer/neko-tma |
| Стек | React 19 + TypeScript + Vite |
| Vercel | korob-ka scope (dmitrynevmer) |
| Бот | @AppHub_Studio_Bot, shortname `neko` → `t.me/AppHub_Studio_Bot/neko` |
| Клиент | Neko Sushi Bar, Батуми |
| Контакт | +995599156401 · nekosushibarbarumi@gmail.com |
| Instagram | @neko.sushibar |

## Данные заведения

- Спецпредложение 16:00-18:00: ролл+коктейль = 45 ₾, ролл+лимонад = 35 ₾
- Меню: 80+ позиций в 12 категориях (всё в `src/data/menu.ts`)
- Нет изображений блюд (text-only, взято с menu.ps.me/92hEkkfQWNM)

## Архитектура

Всё — один SPA без роутинга. Три файла:
- `src/App.tsx` — весь UI (Header, OfferBanner, CategoryTabs, ItemCard, ItemModal, ContactSheet)
- `src/data/menu.ts` — все позиции меню (`CATEGORIES` + `MENU`)
- `src/index.css` — CSS-переменные и стили

Добавление позиций меню: только `src/data/menu.ts`.
Изменение цветов: CSS-переменные в начале `src/index.css`.

## Субагенты

Приоритетные агенты: frontend-dev, code-reviewer.
Субагенты наследуют все правила из этого CLAUDE.md и корневого.

## Коммиты

- На русском языке
