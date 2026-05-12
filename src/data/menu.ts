export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
  category: string
  emoji: string
}

export interface Category {
  id: string
  label: string
  emoji: string
}

export const CATEGORIES: Category[] = [
  { id: 'snacks',    label: 'Закуски',       emoji: '🥗' },
  { id: 'tempura',   label: 'Темпура роллы', emoji: '🔥' },
  { id: 'rolls',     label: 'Роллы',         emoji: '🍣' },
  { id: 'poke',      label: 'Поке',          emoji: '🥣' },
  { id: 'soups',     label: 'Супы',          emoji: '🍲' },
  { id: 'extras',    label: 'Прочее',        emoji: '🥗' },
  { id: 'cocktails', label: 'Коктейли Неко', emoji: '🍹' },
  { id: 'classics',  label: 'Классика',      emoji: '🍸' },
  { id: 'shots',     label: 'Шоты',          emoji: '🥃' },
  { id: 'bar',       label: 'Бар',           emoji: '🍺' },
  { id: 'spirits',   label: 'Алкоголь',      emoji: '🥃' },
  { id: 'soft',      label: 'Напитки',       emoji: '☕' },
]

export const MENU: MenuItem[] = [
  // ── Закуски ──────────────────────────────────────────────────────
  { id: 's1', category: 'snacks', emoji: '🍤', name: 'Креветки темпура', price: 21 },
  { id: 's2', category: 'snacks', emoji: '🍱', name: 'Сэндвич с лососем', price: 21,
    description: 'Лосось, авокадо, темпура, панко, нори, рис, сливочный сыр, соевый соус' },
  { id: 's3', category: 'snacks', emoji: '🍱', name: 'Сэндвич с угрём', price: 21,
    description: 'Угорь, чука, темпура, панко, нори, рис, сливочный сыр, соевый соус' },
  { id: 's4', category: 'snacks', emoji: '🍱', name: 'Сэндвич с тунцом', price: 21,
    description: 'Тунец, морковь, темпура, панко, нори, рис, сливочный сыр, соевый соус' },
  { id: 's5', category: 'snacks', emoji: '🌿', name: 'Чука', price: 15 },
  { id: 's6', category: 'snacks', emoji: '🥩', name: 'Тартар из говядины в японском стиле', price: 29,
    description: 'Говядина, соус ворчестер, соус понзу, кунжутное масло, соевый соус, зелёный лук, такуан, креветочные чипсы, нити чили' },

  // ── Темпура роллы ─────────────────────────────────────────────────
  { id: 't1', category: 'tempura', emoji: '🔥', name: 'Горячий ролл с креветкой, кальмаром и сырным соусом', price: 30,
    description: 'Тигровая креветка, кальмар, манго, кунжут, рис, нори, темпура, сливочный сыр, соус васаби, сырный соус' },
  { id: 't2', category: 'tempura', emoji: '🔥', name: 'Горячий ролл с лососем и пряно-ореховым соусом', price: 30,
    description: 'Норвежский лосось, чука, тартар из огурца, нори, темпура, рис, сливочный сыр, пряно-ореховый соус (орех, кунжут, лимон, шрирача, майонез, масло кунжутное)' },
  { id: 't3', category: 'tempura', emoji: '🔥', name: 'Горячий ролл с крабом, тунцом и кокосовым соусом', price: 30,
    description: 'Тунец, сурими, икра масаго, темпура, сливочный сыр, рис, нори, соус кокос-лемонграсс, чили-майо, том-ям паста' },
  { id: 't4', category: 'tempura', emoji: '🔥', name: 'Темпура ролл с креветкой и соусом кимчи-том ям', price: 30,
    description: 'Тигровая креветка, шиитаке, маринованная морковь, сырная шапка, чёрный кунжут, темпура, нори, рис, сливочный сыр, соус кимчи-том ям' },

  // ── Роллы ─────────────────────────────────────────────────────────
  { id: 'r1', category: 'rolls', emoji: '🍣', name: 'Веган ролл', price: 21,
    description: 'Морской чука салат, хрустящий дайкон, манго, свежее авокадо, нори, японский рис, соевый соус' },
  { id: 'r2', category: 'rolls', emoji: '🍣', name: 'Ролл с лососем и кокосовым соусом', price: 29,
    description: 'Норвежский лосось, свежее авокадо, соус чили-майо, чёрная икра, терияки, рис, золотые нори, сливочный сыр, кокосовый соус' },
  { id: 'r3', category: 'rolls', emoji: '🍣', name: 'Ролл с двумя видами тунца и цитрусово-сливочным соусом', price: 29,
    description: 'Тартар из розового тунца, стружка копчёного тунца, такуан, чили-майо, унаги, сливочный сыр, рис, цитрусово-сливочный соус' },
  { id: 'r4', category: 'rolls', emoji: '🍣', name: 'Ролл с угрём и трюфельным соусом', price: 29,
    description: 'Копчёный угорь, хрустящий огурец, чука-салат, домашний унаги, хлопья миндаля, тёртый пармезан, рис, золотые нори, сливочный сыр, трюфельный соус' },
  { id: 'r5', category: 'rolls', emoji: '🍣', name: 'Ролл с лососем, шиитаке и соусом "Спайси манго"', price: 29,
    description: 'Норвежский лосось, грибы шиитаке, жареный кунжут, зелёный лук, рис, золотые нори, сливочный сыр, соус спайси манго' },
  { id: 'r6', category: 'rolls', emoji: '🍣', name: 'Ролл с тунцом, лососем и сливочным соусом', price: 29,
    description: 'Тунец, свежий лосось, манго, сочный нектарин, рис, золотые нори, сливочный сыр, соус сливочный манго' },
  { id: 'r7', category: 'rolls', emoji: '🍣', name: 'Ролл с тунцом и соусом юдзу', price: 29,
    description: 'Тунец, такуан, икра масаго, цедра лайма, сливочный сыр, рис, нори, соус юдзу' },
  { id: 'r8', category: 'rolls', emoji: '🍣', name: 'Ролл с курицей и соусом BBQ', price: 29,
    description: 'Курочка терияки, такуан, два вида кунжута, соус чили-майо, нори, рис, сливочный сыр, соус BBQ' },
  { id: 'r9', category: 'rolls', emoji: '🍣', name: 'Ролл с лососем и соусом "Лесные ягоды"', price: 29,
    description: 'Тартар из лосося, креветка, бонита, манго, красная икра, соус чили майо, нори, сливочный сыр, рис, соус лесные ягоды' },
  { id: 'r10', category: 'rolls', emoji: '🍣', name: 'Ролл с креветкой и соусом киви', price: 29,
    description: 'Тигровая креветка, киви, икра масаго, нори, рис, сливочный сыр, соус киви' },
  { id: 'r11', category: 'rolls', emoji: '🍣', name: 'Ролл с лососем и миндальным соусом', price: 29,
    description: 'Лосось, тунец, груша, бонита, зелёный лук, паста том ям, тобика, унаги, кунжутное масло, нори, рис, сливочный сыр, миндальный соус' },

  // ── Поке ──────────────────────────────────────────────────────────
  { id: 'p1', category: 'poke', emoji: '🥣', name: 'Поке с лососем', price: 29,
    description: 'Свежий лосось, спелое авокадо, чука салат, хрустящий огурец, красная и чёрная икра, рис, кокосовый соус, чили майо, унаги, нори, кунжут' },
  { id: 'p2', category: 'poke', emoji: '🥣', name: 'Поке с креветкой', price: 29,
    description: 'Тигровые креветки, авокадо, чука салат, огурец, красная и чёрная икра, рис, соус маракуйя, чили майо, унаги, нори, кунжут' },
  { id: 'p3', category: 'poke', emoji: '🥣', name: 'Поке с тунцом', price: 29,
    description: 'Тунец, рис, авокадо, огурец, водоросли чука, чили-майо, сливочный цитрус, унаги, кунжут, нори' },

  // ── Супы ──────────────────────────────────────────────────────────
  { id: 'sp1', category: 'soups', emoji: '🍲', name: 'Трюфельный Том Ям', price: 29,
    description: 'Подаётся с онигири. Кокосовое молоко, паста том ям, грибы шиитаке, тигровые креветки, лемонграсс, водоросли вакаме, лайм, трюфель, соевый соус' },
  { id: 'sp2', category: 'soups', emoji: '🍜', name: 'Кунжутный рамен', price: 29,
    description: 'Лапша соба, сочная куриная грудка, ткемали, нарутомаки, зелёный лук, нори, бульон, соевый соус, лайм, лемонграсс, кунжутное масло' },
  { id: 'sp3', category: 'soups', emoji: '🍜', name: 'Рамен даси с тунцом', price: 29,
    description: 'Яичная лапша, бульон даси, маринованный тунец, вакаме, маринованное яйцо, мисо паста, кунжут, кунжутное масло, зелёный лук, бонита' },
  { id: 'sp4', category: 'soups', emoji: '🍜', name: 'Кунжутный рамен 2.0', price: 29,
    description: 'Лапша соба, куриное филе, бульон Neko, шиитаке, маринованное яйцо, шрирача, свит чили, белый кунжут, нори, зелёный лук' },

  // ── Прочее (Салат, Десерт, Гарниры) ──────────────────────────────
  { id: 'e1', category: 'extras', emoji: '🥗', name: 'Салат с тунцом юдзу', price: 20,
    description: 'Тунец, перепелиные яйца, авокадо, айсберг, огурец, дрессинг (понзу, цитрус, кунжутное масло)' },
  { id: 'e2', category: 'extras', emoji: '🍰', name: 'Десерт', price: 14,
    description: 'Пышный шоколадный бисквит, веган-сливки, свежее манго и пюре юдзу' },
  { id: 'e3', category: 'extras', emoji: '🌶', name: 'Васаби', price: 1.5 },
  { id: 'e4', category: 'extras', emoji: '🫚', name: 'Имбирь', price: 1.5 },
  { id: 'e5', category: 'extras', emoji: '🍶', name: 'Соевый соус', price: 1.5 },
  { id: 'e6', category: 'extras', emoji: '🍙', name: 'Онигири', price: 2 },

  // ── Коктейли Неко ─────────────────────────────────────────────────
  { id: 'c1', category: 'cocktails', emoji: '🍹', name: 'Карай', price: 24,
    description: 'Манго, имбирь, васаби, ром' },
  { id: 'c2', category: 'cocktails', emoji: '🍹', name: 'Акаи', price: 24,
    description: 'Киви, эстрагон, виноград, саке' },
  { id: 'c3', category: 'cocktails', emoji: '🍹', name: 'Кабуки', price: 24,
    description: 'Маракуйя, чили перец, цитрус, ром' },
  { id: 'c4', category: 'cocktails', emoji: '🐱', name: 'Неко 2.0', price: 24,
    description: 'Малина, юдзу, джин, апероль, помощь котикам' },
  { id: 'c5', category: 'cocktails', emoji: '🍹', name: 'Уцусу', price: 24,
    description: 'Джин, белый улун, дыня, ваниль' },
  { id: 'c6', category: 'cocktails', emoji: '🍹', name: 'Цусима', price: 24,
    description: 'Джин, апельсин, клюква, апероль' },
  { id: 'c7', category: 'cocktails', emoji: '🍹', name: 'Когэцу', price: 24,
    description: 'Джин, груша, мёд, имбирь' },
  { id: 'c8', category: 'cocktails', emoji: '🍹', name: 'Шизуку', price: 24,
    description: 'Ром, кокос, лаванда, лимон' },
  { id: 'c9', category: 'cocktails', emoji: '🍹', name: 'Сэн', price: 24,
    description: 'Джин, лемонграсс, базилик, гуава, лимон' },
  { id: 'c10', category: 'cocktails', emoji: '🍹', name: 'Юмэ', price: 24,
    description: 'Ром, зелёный банан, фиалка, карамель, лайм' },
  { id: 'c11', category: 'cocktails', emoji: '🍹', name: 'Нагасаки', price: 28,
    description: 'Виски, яблоко, корица, дым' },

  // ── Классика с японским акцентом ──────────────────────────────────
  { id: 'cl1', category: 'classics', emoji: '🍸', name: 'Японский Негрони', price: 26,
    description: 'Японский джин Tenjaku, кампари, домашний вермут' },
  { id: 'cl2', category: 'classics', emoji: '🍸', name: 'Японский Олд Фешнд', price: 26,
    description: 'Японский виски Tenjaku, тростниковый сахар, биттер Ангостура' },
  { id: 'cl3', category: 'classics', emoji: '🍸', name: 'Японский Джин-тоник', price: 26,
    description: 'Японский джин Tenjaku, тоник, юдзу' },
  { id: 'cl4', category: 'classics', emoji: '🍸', name: 'Японский глинтвейн', price: 26,
    description: 'Саке, имбирь, мёд, специи, маршмелоу' },
  { id: 'cl5', category: 'classics', emoji: '🍸', name: 'Porn Star', price: 26,
    description: 'Водка, маракуйя, личи, лимон' },
  { id: 'cl6', category: 'classics', emoji: '🍸', name: 'Tom Yam Bloody Mary', price: 26,
    description: 'Водка, томатный сок, паста Том Ям, лемонграсс, устричный соус, ворчестер' },
  { id: 'cl7', category: 'classics', emoji: '🍸', name: 'Классический коктейль', price: 26 },
  { id: 'cl8', category: 'classics', emoji: '✨', name: 'The Greatest cocktail', price: 28 },

  // ── Шоты ──────────────────────────────────────────────────────────
  { id: 'sh1', category: 'shots', emoji: '🥃', name: 'Сакура', price: 9 },
  { id: 'sh2', category: 'shots', emoji: '🥃', name: 'Лемонграсс-дыня', price: 9 },
  { id: 'sh3', category: 'shots', emoji: '🥃', name: 'Яблоко-корица-имбирь', price: 9 },
  { id: 'sh4', category: 'shots', emoji: '🥃', name: 'Манго-кокос', price: 9 },
  { id: 'sh5', category: 'shots', emoji: '🥃', name: 'Личи-цитрус', price: 9 },
  { id: 'sh6', category: 'shots', emoji: '🥃', name: 'Пирог из смородины', price: 9 },
  { id: 'sh7', category: 'shots', emoji: '🥃', name: 'Барбарис-малина', price: 9 },
  { id: 'sh8', category: 'shots', emoji: '🎁', name: 'Сет из 7 шотов', price: 56,
    description: 'Один шот каждого вкуса' },
  { id: 'sh9', category: 'shots', emoji: '🍾', name: 'Бутылка шотов 0.5', price: 80 },

  // ── Бар (Саке, Пиво, Вино, Микс) ──────────────────────────────────
  { id: 'b1',  category: 'bar', emoji: '🍶', name: 'Sake Yesaki', price: 9 },
  { id: 'b2',  category: 'bar', emoji: '🍶', name: 'Sake Yesaki Hot', price: 9 },
  { id: 'b3',  category: 'bar', emoji: '🍺', name: 'Beer 0.33 (Lager)', price: 12 },
  { id: 'b4',  category: 'bar', emoji: '🍷', name: 'Vermouth Bianco', price: 14 },
  { id: 'b5',  category: 'bar', emoji: '🥂', name: 'White wine', price: 14 },
  { id: 'b6',  category: 'bar', emoji: '🍷', name: 'Pedro Ximenez', price: 19 },
  { id: 'b7',  category: 'bar', emoji: '🍷', name: 'Portwine', price: 19 },
  { id: 'b8',  category: 'bar', emoji: '🥂', name: 'Prosecco', price: 18 },
  { id: 'b9',  category: 'bar', emoji: '🍷', name: 'Vermouth Rosso', price: 14 },
  { id: 'b10', category: 'bar', emoji: '🥂', name: 'Sparkling wine', price: 14 },
  { id: 'b11', category: 'bar', emoji: '🥂', name: 'Osborne Fino', price: 16 },
  { id: 'b12', category: 'bar', emoji: '🍹', name: 'Gin-Tonic', price: 18 },
  { id: 'b13', category: 'bar', emoji: '🥤', name: 'Rum-Cola', price: 18 },
  { id: 'b14', category: 'bar', emoji: '🥤', name: 'Vodka-Tonic', price: 14 },
  { id: 'b15', category: 'bar', emoji: '🥤', name: 'Whiskey-Cola', price: 18 },

  // ── Алкоголь (крепкий) ────────────────────────────────────────────
  { id: 'a1',  category: 'spirits', emoji: '🥃', name: 'Водка', price: 9 },
  { id: 'a2',  category: 'spirits', emoji: '🥃', name: 'Чача', price: 9 },
  { id: 'a3',  category: 'spirits', emoji: '🥃', name: 'Текила Sombrero Silver', price: 16 },
  { id: 'a4',  category: 'spirits', emoji: '🥃', name: 'Джин Etsu', price: 25 },
  { id: 'a5',  category: 'spirits', emoji: '🥃', name: 'Джин', price: 15 },
  { id: 'a6',  category: 'spirits', emoji: '🥃', name: 'Tenjaku Gin', price: 25 },
  { id: 'a7',  category: 'spirits', emoji: '🥃', name: 'Dead Man\'s Fingers Rum', price: 17 },
  { id: 'a8',  category: 'spirits', emoji: '🥃', name: 'Old Captain Black', price: 15 },
  { id: 'a9',  category: 'spirits', emoji: '🥃', name: 'Jack Daniels', price: 23 },
  { id: 'a10', category: 'spirits', emoji: '🥃', name: 'John Jameson', price: 20 },
  { id: 'a11', category: 'spirits', emoji: '🥃', name: 'Glenfiddich 12', price: 25 },
  { id: 'a12', category: 'spirits', emoji: '🥃', name: 'Nikka Coffey Grain', price: 27 },
  { id: 'a13', category: 'spirits', emoji: '🥃', name: 'Jagermeister', price: 17 },
  { id: 'a14', category: 'spirits', emoji: '🥃', name: 'Luxardo Aperitivo', price: 15 },
  { id: 'a15', category: 'spirits', emoji: '🥃', name: 'Xenta Absenta', price: 16 },

  // ── Напитки (лимонады, чай, вода) ─────────────────────────────────
  { id: 'dr1', category: 'soft', emoji: '🍋', name: 'Лимонад Имбирь-Юдзу', price: 11,
    description: 'Юдзу, имбирь, лимон, содовая' },
  { id: 'dr2', category: 'soft', emoji: '🍋', name: 'Лимонад Киви-Эстрагон', price: 11,
    description: 'Киви, эстрагон, лимон, содовая' },
  { id: 'dr3', category: 'soft', emoji: '🍋', name: 'Лимонад Ягодный микс-Бузина', price: 11 },
  { id: 'dr4', category: 'soft', emoji: '☕', name: 'Чай Генмайча', price: 9 },
  { id: 'dr5', category: 'soft', emoji: '☕', name: 'Чай Кутяо', price: 9 },
  { id: 'dr6', category: 'soft', emoji: '☕', name: 'Чай Пуэр', price: 9 },
  { id: 'dr7', category: 'soft', emoji: '☕', name: 'Чай Tie Guan Yin', price: 9 },
  { id: 'dr8', category: 'soft', emoji: '☕', name: 'Чёрный чай', price: 7 },
  { id: 'dr9', category: 'soft', emoji: '☕', name: 'Улун', price: 9 },
  { id: 'dr10', category: 'soft', emoji: '🍵', name: 'Сенча', price: 9 },
  { id: 'dr11', category: 'soft', emoji: '🫧', name: 'Тоник', price: 5 },
  { id: 'dr12', category: 'soft', emoji: '🥤', name: 'Coca-Cola', price: 5 },
  { id: 'dr13', category: 'soft', emoji: '💧', name: 'Вода газированная', price: 5 },
]
