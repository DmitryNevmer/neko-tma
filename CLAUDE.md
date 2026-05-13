# Neko Sushi Bar TMA — коммерческий проект
> Проектные правила. Общие правила → корневой `CLAUDE.md` в `C:\Users\user\Claude Code\`.
> Security audit правило №0 — см. корневой CLAUDE.md.
> Актуально: май 2026.

## Проект

| | |
|---|---|
| Прод | https://neko-tma.vercel.app |
| Репо | DmitryNevmer/neko-tma |
| Стек | Vanilla HTML/CSS/JS SPA (один файл index.html, без сборщика) |
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

Всё — один файл `index.html` (~1650 строк). Никакого сборщика, никаких npm-зависимостей кроме Telegram WebApp JS.

Структура файла:
- Lines 1–9: `<head>` + подключение Telegram WebApp JS + Google Fonts
- Lines 10–304: `<style>` — CSS переменные и все стили
- Lines 305–783: HTML — экраны, навигация, модалы
- Lines 784–930: JS i18n (константы `i18n.ru/en/ge`)
- Lines 931–1125: JS данные меню (`CATS` + `MENU`)
- Lines 1126–1628: JS логика (инит, навигация, корзина, share, модалы)

Экраны: welcome → menu → cart → booking → about (+ orphan: loyalty — в DOM, но нет nav-кнопки)
Внешние ссылки: заказ/бронь → `t.me/+995599156401?text=...` через `tg.openTelegramLink(url)`

Добавление позиций меню: только массив `MENU` в JS.
Изменение цветов: CSS-переменные в начале `<style>`.
Фото блюд: `PH(uuid)` — Cloudflare Image Resizing, bucket `67ed23d0e361a76a3c182c71`.

## Субагенты

Приоритетные агенты: frontend-dev, code-reviewer.
Субагенты наследуют все правила из этого CLAUDE.md и корневого.

## Коммиты

- На русском языке
