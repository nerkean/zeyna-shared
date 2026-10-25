export type ItemType = 'background' | 'frame' | 'role' | 'consumable' | 'lootbox' | 'material' | 'key';
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';

export interface IItemRecipe {
    itemId: string;
    amount: number;
}

export interface IItemLimit {
    type: 'personal' | 'global';
    amount: number;
    period: 'daily' | 'weekly';
}

export interface IItemDefinition {
    id: string;
    name: string;
    description: string;
    lore?: string;
    price: number;
    sellPrice: number; 
    type: ItemType;
    rarity: ItemRarity;
    icon: string;
    emoji: string;
    craftable: boolean;
    recipe?: IItemRecipe[];
    roleId?: string;
    buyLimit?: IItemLimit;
}

export const ITEMS: Record<string, IItemDefinition> = {
    // МАТЕРИАЛЫ
    'wood': { 
        id: 'wood', name: 'Дерево', description: 'Обычное дерево для крафта предметов', 
        lore: 'Простые сухие ветки, собранные в лесу за городом', 
        price: 50, sellPrice: 20, type: 'material', rarity: 'common', icon: '<:wood:1516021740495699969>', emoji: '🪵', craftable: false 
    },
    'iron': { 
        id: 'iron', name: 'Железо', description: 'Кусок необработанного железа', 
        lore: 'Обычный ржавый металлолом, который откопали на свалке', 
        price: 100, sellPrice: 40, type: 'material', rarity: 'common', icon: '<:iron:1516021732417470474>', emoji: '🪨', craftable: false 
    },
    'electronic_part': { 
        id: 'electronic_part', name: 'Электроника', description: 'Набор транзисторов и плат для сборки', 
        lore: 'Куча деталек и цветных проводков из старой разобранной техники', 
        price: 250, sellPrice: 100, type: 'material', rarity: 'uncommon', icon: '<:electronic_part:1516021730093563974>', emoji: '🔌', craftable: false 
    },
    'star_dust': { 
        id: 'star_dust', name: 'Звездная пыль', description: 'Базовый светящийся порошок для крафта', 
        lore: 'Красивая мерцающая пыль, которая нужна для простых рецептов', 
        price: 60, sellPrice: 24, type: 'material', rarity: 'common', icon: '<:star_dust:1516023288726294558>', emoji: '✨', craftable: false 
    },
    'iron_ingot': { 
        id: 'iron_ingot', name: 'Слиток железа', description: 'Прочный кусок металла для создания простых ключей', 
        lore: 'Тяжёлый чистый брусок стали, только что из печи', 
        price: 150, sellPrice: 60, type: 'material', rarity: 'common', icon: '<:iron_ignot:1516021733625303040>', emoji: '🥈', craftable: true, recipe: [{ itemId: 'iron', amount: 1 }, { itemId: 'wood', amount: 1 }] 
    },
    'gold_ingot': { 
        id: 'gold_ingot', name: 'Слиток золото', description: 'Драгоценный металл для ценных вещей', 
        lore: 'Тяжёлый блестящий слиток, который очень дорого ценится на рынке', 
        price: 400, sellPrice: 160, type: 'material', rarity: 'uncommon', icon: '<:gold_ignot:1516021731024830485>', emoji: '🪙', craftable: true, recipe: [{ itemId: 'iron_ingot', amount: 2 }, { itemId: 'star_dust', amount: 1 }, { itemId: 'iron', amount: 1 }]
    },
    'magic_powder': { 
        id: 'magic_powder', name: 'Магический порошок', description: 'Светящаяся пыльца, нужная для создания бустеров', 
        lore: 'Странный порошок, который прикольно светится ярким фиолетовым цветом в темноте', 
        price: 200, sellPrice: 80, type: 'material', rarity: 'uncommon', icon: '<:magic_powder:1516021736301400105>', emoji: '🪄', craftable: true, recipe: [{ itemId: 'star_dust', amount: 3 }, { itemId: 'wood', amount: 1 }]
    },
    'neon_tube': { 
        id: 'neon_tube', name: 'Неоновая трубка', description: 'Светящий элемент для крафта косметики', 
        lore: 'Яркая неоновая лампа, скрученная ночью с уличной вывески', 
        price: 300, sellPrice: 120, type: 'material', rarity: 'uncommon', icon: '<:neon_tube:1516021737618407524>', emoji: '💡', craftable: true, recipe: [{ itemId: 'electronic_part', amount: 1 }, { itemId: 'wood', amount: 1 }] 
    },
    'cyber_part': { 
        id: 'cyber_part', name: 'Кибер-деталь', description: 'Высокотехнологичный компонент для крафта', 
        lore: 'Продвинутая микросхема, нужная для создания сложных предметов', 
        price: 500, sellPrice: 200, type: 'material', rarity: 'rare', icon: '<:cyber_part:1516021727505678437>', emoji: '⚙️', craftable: true, recipe: [{ itemId: 'electronic_part', amount: 1 }, { itemId: 'iron_ingot', amount: 1 }, { itemId: 'wood', amount: 2 }] 
    },
    'ancient_scroll': { 
        id: 'ancient_scroll', name: 'Древний свиток', description: 'Старая бумага, которая содержит секретный код', 
        lore: 'Потрёпанный временем пергамент со странными старыми записями', 
        price: 800, sellPrice: 320, type: 'material', rarity: 'rare', icon: '<:ancient_scroll:1516021724573859880>', emoji: '📜', craftable: false 
    },
    'quantum_chip': { 
        id: 'quantum_chip', name: 'Квантовый чип', description: 'Очень мощный процессор нового поколения', 
        lore: 'Маленький, но супербыстрый чип для самых ценных крафтов', 
        price: 1500, sellPrice: 600, type: 'material', rarity: 'epic', icon: '<:quantum_chip:1516021738868310197>', emoji: '💽', craftable: true, recipe: [{ itemId: 'cyber_part', amount: 2 }, { itemId: 'gold_ingot', amount: 1 }, { itemId: 'iron', amount: 1 }],
        buyLimit: { type: 'personal', amount: 5, period: 'daily' }
    },
    'crystal_core': { 
        id: 'crystal_core', name: 'Кристальное ядро', description: 'Ядро, которое излучает мощную энергию', 
        lore: 'Редкий светящийся кристалл, заряженный огромным количеством энергии', 
        price: 1200, sellPrice: 480, type: 'material', rarity: 'epic', icon: '<:crystal_core:1516021726113304666>', emoji: '💠', craftable: true, recipe: [{ itemId: 'magic_powder', amount: 3 }, { itemId: 'star_dust', amount: 10 }],
        buyLimit: { type: 'personal', amount: 5, period: 'daily' }
    },
    'dark_matter': { 
        id: 'dark_matter', name: 'Темная материя', description: 'Самый редкий ресурс для мифического крафта', 
        lore: 'Загадочное вещество, похожее на летающую черную жижу', 
        price: 5000, sellPrice: 2000, type: 'material', rarity: 'legendary', icon: '<:dark_matter:1516021728709705809>', emoji: '🌌', craftable: false,
        buyLimit: { type: 'personal', amount: 2, period: 'daily' }
    },
    'key_fragment': { 
        id: 'key_fragment', name: 'Фрагмент ключа', description: 'Собери 3 куска, чтобы скрафтить Мистический ключ', 
        lore: 'Осколок от сломанного ключа, сам по себе он бесполезен', 
        price: 250, sellPrice: 100, type: 'material', rarity: 'uncommon', icon: '<:key_fragment:1516021735105757234>', emoji: '🧩', craftable: false 
    },

    // ЛУТБОКСЫ
    'daily_bag': { 
        id: 'daily_bag', name: 'Ежедневный мешок', description: 'Бесплатный мешок с полезными ресурсами', 
        lore: 'Подарок от бота, который можно получить с команды `/daily`', 
        price: 0, sellPrice: 0, type: 'lootbox', rarity: 'common', icon: '<:daily_bag:1516032744021426407>', emoji: '🛍️', craftable: false 
    },
    'bronze_chest': { 
        id: 'bronze_chest', name: 'Бронзовый сундук', description: 'Обычный сундук, нужен Бронзовый ключ', 
        lore: 'Простой деревянный ящик с простеньким навесным замком', 
        price: 1500, sellPrice: 600, type: 'lootbox', rarity: 'common', icon: '<:bronze_chest:1516032737704939570>', emoji: '🧰', craftable: true, recipe: [{ itemId: 'wood', amount: 20 }, { itemId: 'iron', amount: 5 }] 
    },
    'bronze_key': { 
        id: 'bronze_key', name: 'Бронзовый ключ', description: 'Открывает Бронзовый сундук', 
        lore: 'Простой железный ключ для самого обычного деревянного сундука', 
        price: 800, sellPrice: 320, type: 'key', rarity: 'common', icon: '<:bronze_key:1516032738921152645>', emoji: '🗝️', craftable: true, recipe: [{ itemId: 'iron_ingot', amount: 5 }, { itemId: 'wood', amount: 1 }] 
    },
    'silver_chest': { 
        id: 'silver_chest', name: 'Серебряный сундук', description: 'Сундук с хорошим лутом, нужен Серебряный ключ', 
        lore: 'Крепкий металлический сейф, в котором спрятаны ценные ресурсы', 
        price: 4000, sellPrice: 1600, type: 'lootbox', rarity: 'uncommon', icon: '<:silver_chest:1516032752808493107>', emoji: '🗄️', craftable: true, recipe: [{ itemId: 'bronze_chest', amount: 2 }, { itemId: 'iron_ingot', amount: 5 }, { itemId: 'electronic_part', amount: 1 }] 
    },
    'silver_key': { 
        id: 'silver_key', name: 'Серебряный ключ', description: 'Открывает Серебряный сундук', 
        lore: 'Блестящий ключ, который идеально подходит для серебряного сейфа', 
        price: 2000, sellPrice: 800, type: 'key', rarity: 'uncommon', icon: '<:silver_key:1516032754880610496>', emoji: '🔑', craftable: true, recipe: [{ itemId: 'bronze_key', amount: 2 }, { itemId: 'gold_ingot', amount: 1 }] 
    },
    'cyber_box': { 
        id: 'cyber_box', name: 'Кибер-кейс', description: 'Высокотехнологичный ящик, нужен Кибер-ключ', 
        lore: 'Стильный черный кейс со сложным кодовым замком на крышке', 
        price: 10000, sellPrice: 4000, type: 'lootbox', rarity: 'epic', icon: '<:cyber_box:1516032740292694136>', emoji: '🗃️', craftable: false 
    },
    'cyber_key': { 
        id: 'cyber_key', name: 'Кибер-ключ', description: 'Взламывает и открывает Кибер-кейс', 
        lore: 'Специальная электронная флешка со скриптом для разблокировки кейса', 
        price: 5000, sellPrice: 2000, type: 'key', rarity: 'epic', icon: '<:cyber_key:1516032741605376110>', emoji: '📟', craftable: true, recipe: [{ itemId: 'cyber_part', amount: 4 }, { itemId: 'quantum_chip', amount: 2 }] 
    },
    'mystery_box': { 
        id: 'mystery_box', name: 'Мистический сундук', description: 'Сундук с редкими шмотками, нужен Мистический ключ', 
        lore: 'Красивый загадочный сундук, который слегка светится фиолетовым дымом', 
        price: 15000, sellPrice: 6000, type: 'lootbox', rarity: 'rare', icon: '<:mystery_box:1516032747691315220>', emoji: '🎁', craftable: true, recipe: [{ itemId: 'silver_chest', amount: 3 }, { itemId: 'magic_powder', amount: 15 }] 
    },
    'mystery_key': { 
        id: 'mystery_key', name: 'Мистический ключ', description: 'Открывает Мистический сундук', 
        lore: 'Необычный светящийся ключ, сделанный словно из чистой магии', 
        price: 8000, sellPrice: 3200, type: 'key', rarity: 'rare', icon: '<:mystery_key:1516032750417874985>', emoji: '🗝️', craftable: true, recipe: [{ itemId: 'key_fragment', amount: 10 }, { itemId: 'crystal_core', amount: 2 }, { itemId: 'quantum_chip', amount: 1 }, { itemId: 'ancient_scroll', amount: 2 }] 
    },
    'legendary_cache': { 
        id: 'legendary_cache', name: 'Тайник Легенд', description: 'Топовый лут Эпик или Легенда, открывается без ключа', 
        lore: 'Очень редкое секретное хранилище с гарантированными крутыми наградами внутри', 
        price: 50000, sellPrice: 20000, type: 'lootbox', rarity: 'legendary', icon: '<:legendary_cache:1516032746034692148>', emoji: '🏺', craftable: false,
        buyLimit: { type: 'global', amount: 3, period: 'weekly' }
    },
    'season_case': { 
        id: 'season_case', name: 'Сезонный кейс', description: 'Эксклюзивная награда Боевого Пропуска, ключ не нужен', 
        lore: 'Особый подарочный кейс, который выдается самым активным игрокам сезона', 
        price: 0, sellPrice: 0, type: 'lootbox', rarity: 'epic', icon: '<:season_case:1516032751944470548>', emoji: '🎒', craftable: false 
    },
   
    // БУСТЕРЫ И БИЛЕТЫ
    'luck_potion': { 
        id: 'luck_potion', name: 'Зелье Удачи', description: 'Повышает шанс выбить редкий лут из сундуков на 10%', 
        lore: 'Прикольная светящаяся жижа в колбе, которая временно подкрутит твою удачу в кейсах', 
        price: 800, sellPrice: 320, type: 'consumable', rarity: 'rare', icon: '<:luck_potion:1516042442275684412>', emoji: '🧪', craftable: true, recipe: [{ itemId: 'magic_powder', amount: 2 }, { itemId: 'neon_tube', amount: 1 }, { itemId: 'wood', amount: 2 }],
        buyLimit: { type: 'personal', amount: 3, period: 'daily' }
    },
    'xp_boost_small': { 
        id: 'xp_boost_small', name: 'Малый энергетик', description: 'Дает +25% к опыту БП на 1 час', 
        lore: 'Обычная баночка газировки из автомата, которая взбодрит и ускорит прокачку уровня', 
        price: 400, sellPrice: 160, type: 'consumable', rarity: 'uncommon', icon: '<:xp_boost_small:1516044788749566095>', emoji: '🥤', craftable: false,
        buyLimit: { type: 'personal', amount: 3, period: 'daily' }
    },
    'xp_boost_large': { 
        id: 'xp_boost_large', name: 'Большой энергетик', description: 'Дает +50% к опыту БП на 3 часа', 
        lore: 'Большая бутылка бодрящего напитка для тех, кто решил быстро апнуть уровни пропуска', 
        price: 1200, sellPrice: 480, type: 'consumable', rarity: 'epic', icon: '<:xp_boost_large:1516044786510069800>', emoji: '🍺', craftable: true, recipe: [{ itemId: 'xp_boost_small', amount: 2 }, { itemId: 'magic_powder', amount: 2 }],
        buyLimit: { type: 'personal', amount: 2, period: 'daily' }
    },
    'xp_boost_mega': { 
        id: 'xp_boost_mega', name: 'Квантовый ускоритель', description: 'Дает +100% к опыту БП на 6 часов', 
        lore: 'Ультимативный мощный буст, с которым твой опыт будет капать в два раза быстрее', 
        price: 3500, sellPrice: 1400, type: 'consumable', rarity: 'legendary', icon: '<:xp_boost_mega:1516044787818692679>', emoji: '⚡', craftable: true, recipe: [{ itemId: 'xp_boost_large', amount: 2 }, { itemId: 'cyber_part', amount: 2 }, { itemId: 'iron', amount: 1 }],
        buyLimit: { type: 'personal', amount: 3, period: 'weekly' }
    },
    'star_contract': { 
        id: 'star_contract', name: 'Звездный контракт', description: 'Удваивает получение звезд за активность в голосовых или текстовых каналах на 2 часа', 
        lore: 'Официальный договор, который окупится с лихвой, если ты будешь активно общаться', 
        price: 400, sellPrice: 160, type: 'consumable', rarity: 'rare', icon: '<:star_contract:1516047756588748871>', emoji: '📝', craftable: true, recipe: [{ itemId: 'star_dust', amount: 5 }, { itemId: 'iron', amount: 1 }],
        buyLimit: { type: 'personal', amount: 3, period: 'daily' }
    },
    'star_contract_premium': { 
        id: 'star_contract_premium', name: 'Контракт Монополиста', description: 'Умножает получение звезд за активность в голосовых или текстовых каналах в 4 раза на 3 часа', 
        lore: 'Супер-контракт для тех, кто планирует провести весь вечер в голосовых каналах', 
        price: 1200, sellPrice: 480, type: 'consumable', rarity: 'epic', icon: '<:star_contract_premium:1516047758291898509>', emoji: '📄', craftable: true, recipe: [{ itemId: 'star_contract', amount: 2 }, { itemId: 'magic_powder', amount: 2 }],
        buyLimit: { type: 'personal', amount: 1, period: 'daily' }
    },
    'anti_mute_shield': { 
        id: 'anti_mute_shield', name: 'Щит свободы', description: 'Автоматически отменяет выданный тебе мут', 
        lore: 'Твоя личная страховка от администрации — щит сам снимет мут, если тебя заглушат', 
        price: 8000, sellPrice: 3200, type: 'consumable', rarity: 'legendary', icon: '<:anti_mute_shield:1516043118997143562>', emoji: '🛡️', craftable: true, recipe: [{ itemId: 'crystal_core', amount: 4 }, { itemId: 'quantum_chip', amount: 2 }, { itemId: 'magic_powder', amount: 1 }],
        buyLimit: { type: 'personal', amount: 1, period: 'weekly' }
    },
    'custom_role_ticket': { 
        id: 'custom_role_ticket', name: 'Билет Создателя', description: 'Право на создание личной кастомной роли на 30 дней', 
        lore: 'Ценный купон, с помощью которого ты можешь сделать себе любую роль на сервере', 
        price: 325000, sellPrice: 130000, type: 'consumable', rarity: 'mythic', icon: '<:custom_role_ticket:1516042438974767196>', emoji: "🎫", craftable: false,
        buyLimit: { type: 'global', amount: 1, period: 'weekly' } 
    },
    'firewall': { 
        id: 'firewall', name: 'Брандмауэр', description: 'Пассивная защита твоих звезд от ограбления по команде /rob', 
        lore: 'Надежный цифровой щит, который не позволит другим игрокам украсть твои монеты', 
        price: 4000, sellPrice: 1600, type: 'consumable', rarity: 'epic', icon: '<:firewall:1516042752457052211>', emoji: '🧱', craftable: false,
        buyLimit: { type: 'personal', amount: 2, period: 'weekly' }
    },

    // КОСМЕТИКА
    'bg_stars_dark': { 
        id: 'bg_stars_dark', name: 'Фон "Темные Звезды"', description: 'Минималистичный фон с красивой россыпью звезд', 
        lore: 'Простой и очень приятный темный фон с ночным звездным небом для твоего профиля', 
        price: 15000, sellPrice: 6000, type: 'background', rarity: 'uncommon', icon: '🌌', emoji: '🌌', craftable: false 
    },
    'bg_matrix': { 
        id: 'bg_matrix', name: 'Фон "Матрица"', description: 'Фон со спадающим вниз зеленым кодом', 
        lore: 'Крутые зеленые циферки и символы, бегущие вниз как в старых фильмах про хакеров', 
        price: 20000, sellPrice: 8000, type: 'background', rarity: 'rare', icon: '💻', emoji: '💻', craftable: false 
    },
    'bg_deep_ocean': { 
        id: 'bg_deep_ocean', name: 'Фон "Океанская Бездна"', description: 'Красивый глубокий синий фон', 
        lore: 'Стильный темно-синий фон с эффектом бескрайней морской глубины', 
        price: 20000, sellPrice: 8000, type: 'background', rarity: 'rare', icon: '🌊', emoji: '🌊', craftable: false 
    },
    'bg_halloween_pumpkins': { 
        id: 'bg_halloween_pumpkins', name: 'Фон "Хэллоуин"', description: 'Атмосферный жуткий фон со светящимися тыквами', 
        lore: 'Праздничный осенний фон с тыквами для любителей мистики', 
        price: 25000, sellPrice: 10000, type: 'background', rarity: 'rare', icon: '🎃', emoji: '🎃', craftable: false 
    },
    'bg_crimson_moon': { 
        id: 'bg_crimson_moon', name: 'Фон "Багровая Луна"', description: 'Завораживающий мрачный красный пейзаж', 
        lore: 'Красивый и очень стильный фон с огромной красной луной на ночном небе', 
        price: 35000, sellPrice: 14000, type: 'background', rarity: 'epic', icon: '🩸', emoji: '🩸', craftable: false,
        buyLimit: { type: 'global', amount: 10, period: 'weekly' }
    },
    'bg_cyberpunk_city': { 
        id: 'bg_cyberpunk_city', name: 'Фон "Найт-Сити"', description: 'Красивые неоновые огни ночного города', 
        lore: 'Вид на огромный ночной мегаполис с кучей яркой неоновой рекламы вывесок', 
        price: 45000, sellPrice: 18000, type: 'background', rarity: 'epic', icon: '🏙️', emoji: '🏙️', craftable: true, recipe: [{ itemId: 'neon_tube', amount: 50 }, { itemId: 'quantum_chip', amount: 10 }, { itemId: 'cyber_part', amount: 30 }] 
    },
    'bg_premium_galaxy': { 
        id: 'bg_premium_galaxy', name: 'Фон "Галактика"', description: 'Премиальный фон с бесконечным открытым космосом', 
        lore: 'Космический арт с далекими разноцветными планетами, звездами и туманностями', 
        price: 55000, sellPrice: 22000, type: 'background', rarity: 'epic', icon: '🪐', emoji: '🪐', craftable: true, recipe: [{ itemId: 'star_dust', amount: 200 }, { itemId: 'crystal_core', amount: 15 }, { itemId: 'dark_matter', amount: 5 }] 
    },
    'bg_sakura_garden': { 
        id: 'bg_sakura_garden', name: 'Фон "Сад Сакуры"', description: 'Безмятежный красивый японский сад', 
        lore: 'Уютный и спокойный фон с нежными падающими лепестками розовой сакуры', 
        price: 80000, sellPrice: 32000, type: 'background', rarity: 'legendary', icon: '🌸', emoji: '🌸', craftable: false,
        buyLimit: { type: 'global', amount: 3, period: 'weekly' }
    },
    'bg_legend': { 
        id: 'bg_legend', name: 'Фон "Легенда"', description: 'Уникальный золотой фон для истинных легенд', 
        lore: 'Пафосный золотой фон, который покажет всем твой высокий статус на сервере', 
        price: 150000, sellPrice: 60000, type: 'background', rarity: 'legendary', icon: '🔥', emoji: '🔥', craftable: false,
        buyLimit: { type: 'global', amount: 1, period: 'weekly' }
    },
    'bg_abyss': { 
        id: 'bg_abyss', name: 'Фон "Пустота"', description: 'Стильный черный фон, поглощающий свет', 
        lore: 'Полностью матовый черный фон для любителей строгого и чистого стиля', 
        price: 0, sellPrice: 0, type: 'background', rarity: 'mythic', icon: '🕳️', emoji: '🕳️', craftable: true, recipe: [{ itemId: 'dark_matter', amount: 10 }, { itemId: 'ancient_scroll', amount: 10 }, { itemId: 'crystal_core', amount: 5 }] 
    },

    'frame_laurel_blue': { 
        id: 'frame_laurel_blue', name: 'Рамка "Синий Лавр"', description: 'Классическая аккуратная рамка для аватара', 
        lore: 'Красивый лазурный венок, который будет аккуратно смотреться вокруг твоей аватарки', 
        price: 10000, sellPrice: 4000, type: 'frame', rarity: 'uncommon', icon: '🌿', emoji: '🌿', craftable: false 
    },
    'frame_patterned_bronze': { 
        id: 'frame_patterned_bronze', name: 'Рамка "Бронза"', description: 'Рамка со стильными шестеренками', 
        lore: 'Бронзовый ободок с маленькими тикающими шестеренками по бокам карточки', 
        price: 15000, sellPrice: 6000, type: 'frame', rarity: 'rare', icon: '⚙️', emoji: '⚙️', craftable: true, recipe: [{ itemId: 'cyber_part', amount: 20 }, { itemId: 'iron_ingot', amount: 20 }, { itemId: 'iron', amount: 20 }] 
    },
    'frame_halloween_web': { 
        id: 'frame_halloween_web', name: 'Рамка "Паутина"', description: 'Хэллоуинская рамка с углами из паутины', 
        lore: 'Мрачная серая паутина, которая покроет углы твоей аватарки в профиле', 
        price: 18000, sellPrice: 7200, type: 'frame', rarity: 'rare', icon: '🕸️', emoji: '🕸️', craftable: false 
    },
    'frame_neon_pink': { 
        id: 'frame_neon_pink', name: 'Рамка "Неоновый Розовый"', description: 'Яркое розовое неоновое свечение', 
        lore: 'Красивая ярко-розовая светящаяся линия, круто выделяющая аватарку', 
        price: 22000, sellPrice: 8800, type: 'frame', rarity: 'rare', icon: '🦩', emoji: '🦩', craftable: true, recipe: [{ itemId: 'neon_tube', amount: 40 }, { itemId: 'cyber_part', amount: 20 }] 
    },
    'frame_azure_spark': { 
        id: 'frame_azure_spark', name: 'Рамка "Лазурная Искра"', description: 'Электрические разряды вокруг аватарки', 
        lore: 'Красивые лазерные синие молнии, бегающие по кругу вокруг твоего аватара', 
        price: 30000, sellPrice: 12000, type: 'frame', rarity: 'epic', icon: '⚡', emoji: '⚡', craftable: true, recipe: [{ itemId: 'cyber_part', amount: 20 }, { itemId: 'crystal_core', amount: 10 }, { itemId: 'quantum_chip', amount: 5 }, { itemId: 'electronic_part', amount: 1 }] 
    },
    'frame_magma': { 
        id: 'frame_magma', name: 'Рамка "Магма"', description: 'Огненная рамка с эффектом жара', 
        lore: 'Горящий ободок со спецэффектом расплавленной вулканической лавы', 
        price: 45000, sellPrice: 18000, type: 'frame', rarity: 'epic', icon: '🌋', emoji: '🌋', craftable: false 
    },
    'frame_gold_plated': { 
        id: 'frame_gold_plated', name: 'Рамка "Чистое Золото"', description: 'Премиальная золотая рамка твоего статуса', 
        lore: 'Дорогая рамка из чистого золота, чтобы сразу показать всем свое богатство', 
        price: 60000, sellPrice: 24000, type: 'frame', rarity: 'legendary', icon: '🥇', emoji: '🥇', craftable: true, recipe: [{ itemId: 'gold_ingot', amount: 100 }, { itemId: 'crystal_core', amount: 10 }, { itemId: 'ancient_scroll', amount: 10 }],
        buyLimit: { type: 'global', amount: 5, period: 'weekly' }
    },
    'frame_diamond': { 
        id: 'frame_diamond', name: 'Рамка "Алмазная"', description: 'Сияющая рамка из редких алмазов', 
        lore: 'Блестящие драгоценные камни идеальной огранки для самых топовых игроков сервера', 
        price: 100000, sellPrice: 40000, type: 'frame', rarity: 'legendary', icon: '💎', emoji: '💎', craftable: false,
        buyLimit: { type: 'global', amount: 2, period: 'weekly' }
    },
    'frame_void': { 
        id: 'frame_void', name: 'Рамка "Аномалия"', description: 'Искажает пространство вокруг аватарки', 
        lore: 'Космическая темно-фиолетовая воронка, плавно крутящаяся вокруг твоего аватара', 
        price: 0, sellPrice: 0, type: 'frame', rarity: 'mythic', icon: '🌀', emoji: '🌀', craftable: true, recipe: [{ itemId: 'dark_matter', amount: 15 }, { itemId: 'quantum_chip', amount: 10 }] 
    },
    'frame_veteran': { 
        id: 'frame_veteran', name: 'Рамка "Ветеран"', description: 'Для самых преданных олдов сервера', 
        lore: 'Почетный знак отличия для тех ребят, кто сидит на сервере уже очень долго', 
        price: 0, sellPrice: 0, type: 'frame', rarity: 'mythic', icon: '🎖️', emoji: '🎖️', craftable: false 
    }

    // РОЛИ
    // 'role_vip': { id: 'role_vip', name: 'Роль "VIP"', description: 'Специальный значок и преимущества', lore: 'Пропуск в закрытый клуб, где Звёзды льются рекой, а разговоры ведутся только о высоких материях.', price: 195000, sellPrice: 78000, type: 'role', rarity: 'legendary', icon: '👑', emoji: '👑', craftable: false, roleId: '1489960643850276965' },
    // 'role_sponsor': { id: 'role_sponsor', name: 'Роль "Спонсор"', description: 'Выдается исключительно за поддержку проекта', lore: 'Знак высшей признательности создателей сервера. Спонсоры не просто играют — они творят историю.', price: 0, sellPrice: 0, type: 'role', rarity: 'mythic', icon: '❤️', emoji: '❤️', craftable: false, roleId: '1489960634111098995' }
};