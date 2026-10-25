var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Article: () => Article,
  AuditLog: () => AuditLog,
  AwardCategory: () => AwardCategory,
  AwardSettings: () => AwardSettings,
  AwardSuggestion: () => AwardSuggestion,
  AwardVote: () => AwardVote,
  Ban: () => Ban,
  BanAppeal: () => BanAppeal,
  BattlePass: () => BattlePass,
  BssBee: () => BssBee,
  BssValueItem: () => BssValueItem,
  CustomRole: () => CustomRole,
  DEFAULT_FACTIONS: () => DEFAULT_FACTIONS,
  Deposit: () => Deposit,
  Giveaway: () => Giveaway,
  GuildSettings: () => GuildSettings,
  ITEMS: () => ITEMS,
  LOOT_TABLES: () => LOOT_TABLES,
  Marriage: () => Marriage,
  ModActionLog: () => ModActionLog,
  Mute: () => Mute,
  Notification: () => Notification,
  PERK_LABELS: () => PERK_LABELS,
  Recruitment: () => Recruitment,
  RecruitmentApplication: () => RecruitmentApplication,
  RecruitmentForm: () => RecruitmentForm,
  Season: () => Season,
  StaffBlacklist: () => StaffBlacklist,
  StaffDossier: () => StaffDossier,
  Subscription: () => Subscription,
  SystemStatus: () => SystemStatus,
  UserActivity: () => UserActivity,
  UserProfile: () => UserProfile,
  UserQuest: () => UserQuest,
  ViolationEvidence: () => ViolationEvidence,
  WallMessage: () => WallMessage,
  getSeasonFactions: () => getSeasonFactions,
  getTotalSeasonXP: () => getTotalSeasonXP
});
module.exports = __toCommonJS(index_exports);

// src/constants/items.ts
var ITEMS = {
  // МАТЕРИАЛЫ
  "wood": {
    id: "wood",
    name: "\u0414\u0435\u0440\u0435\u0432\u043E",
    description: "\u041E\u0431\u044B\u0447\u043D\u043E\u0435 \u0434\u0435\u0440\u0435\u0432\u043E \u0434\u043B\u044F \u043A\u0440\u0430\u0444\u0442\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432",
    lore: "\u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u0441\u0443\u0445\u0438\u0435 \u0432\u0435\u0442\u043A\u0438, \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0432 \u043B\u0435\u0441\u0443 \u0437\u0430 \u0433\u043E\u0440\u043E\u0434\u043E\u043C",
    price: 50,
    sellPrice: 20,
    type: "material",
    rarity: "common",
    icon: "<:wood:1516021740495699969>",
    emoji: "\u{1FAB5}",
    craftable: false
  },
  "iron": {
    id: "iron",
    name: "\u0416\u0435\u043B\u0435\u0437\u043E",
    description: "\u041A\u0443\u0441\u043E\u043A \u043D\u0435\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u043E\u0433\u043E \u0436\u0435\u043B\u0435\u0437\u0430",
    lore: "\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0436\u0430\u0432\u044B\u0439 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043B\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043A\u043E\u043F\u0430\u043B\u0438 \u043D\u0430 \u0441\u0432\u0430\u043B\u043A\u0435",
    price: 100,
    sellPrice: 40,
    type: "material",
    rarity: "common",
    icon: "<:iron:1516021732417470474>",
    emoji: "\u{1FAA8}",
    craftable: false
  },
  "electronic_part": {
    id: "electronic_part",
    name: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",
    description: "\u041D\u0430\u0431\u043E\u0440 \u0442\u0440\u0430\u043D\u0437\u0438\u0441\u0442\u043E\u0440\u043E\u0432 \u0438 \u043F\u043B\u0430\u0442 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438",
    lore: "\u041A\u0443\u0447\u0430 \u0434\u0435\u0442\u0430\u043B\u0435\u043A \u0438 \u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u043E\u0432 \u0438\u0437 \u0441\u0442\u0430\u0440\u043E\u0439 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438",
    price: 250,
    sellPrice: 100,
    type: "material",
    rarity: "uncommon",
    icon: "<:electronic_part:1516021730093563974>",
    emoji: "\u{1F50C}",
    craftable: false
  },
  "star_dust": {
    id: "star_dust",
    name: "\u0417\u0432\u0435\u0437\u0434\u043D\u0430\u044F \u043F\u044B\u043B\u044C",
    description: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043F\u043E\u0440\u043E\u0448\u043E\u043A \u0434\u043B\u044F \u043A\u0440\u0430\u0444\u0442\u0430",
    lore: "\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u043C\u0435\u0440\u0446\u0430\u044E\u0449\u0430\u044F \u043F\u044B\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0443\u0436\u043D\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0440\u0435\u0446\u0435\u043F\u0442\u043E\u0432",
    price: 60,
    sellPrice: 24,
    type: "material",
    rarity: "common",
    icon: "<:star_dust:1516023288726294558>",
    emoji: "\u2728",
    craftable: false
  },
  "iron_ingot": {
    id: "iron_ingot",
    name: "\u0421\u043B\u0438\u0442\u043E\u043A \u0436\u0435\u043B\u0435\u0437\u0430",
    description: "\u041F\u0440\u043E\u0447\u043D\u044B\u0439 \u043A\u0443\u0441\u043E\u043A \u043C\u0435\u0442\u0430\u043B\u043B\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u043A\u043B\u044E\u0447\u0435\u0439",
    lore: "\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0447\u0438\u0441\u0442\u044B\u0439 \u0431\u0440\u0443\u0441\u043E\u043A \u0441\u0442\u0430\u043B\u0438, \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0438\u0437 \u043F\u0435\u0447\u0438",
    price: 150,
    sellPrice: 60,
    type: "material",
    rarity: "common",
    icon: "<:iron_ignot:1516021733625303040>",
    emoji: "\u{1F948}",
    craftable: true,
    recipe: [{ itemId: "iron", amount: 1 }, { itemId: "wood", amount: 1 }]
  },
  "gold_ingot": {
    id: "gold_ingot",
    name: "\u0421\u043B\u0438\u0442\u043E\u043A \u0437\u043E\u043B\u043E\u0442\u043E",
    description: "\u0414\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u043C\u0435\u0442\u0430\u043B\u043B \u0434\u043B\u044F \u0446\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0449\u0435\u0439",
    lore: "\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u0439 \u0441\u043B\u0438\u0442\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0447\u0435\u043D\u044C \u0434\u043E\u0440\u043E\u0433\u043E \u0446\u0435\u043D\u0438\u0442\u0441\u044F \u043D\u0430 \u0440\u044B\u043D\u043A\u0435",
    price: 400,
    sellPrice: 160,
    type: "material",
    rarity: "uncommon",
    icon: "<:gold_ignot:1516021731024830485>",
    emoji: "\u{1FA99}",
    craftable: true,
    recipe: [{ itemId: "iron_ingot", amount: 2 }, { itemId: "star_dust", amount: 1 }, { itemId: "iron", amount: 1 }]
  },
  "magic_powder": {
    id: "magic_powder",
    name: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0440\u043E\u0448\u043E\u043A",
    description: "\u0421\u0432\u0435\u0442\u044F\u0449\u0430\u044F\u0441\u044F \u043F\u044B\u043B\u044C\u0446\u0430, \u043D\u0443\u0436\u043D\u0430\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0431\u0443\u0441\u0442\u0435\u0440\u043E\u0432",
    lore: "\u0421\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u043E\u0448\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u043A\u043E\u043B\u044C\u043D\u043E \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u044F\u0440\u043A\u0438\u043C \u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C \u0432 \u0442\u0435\u043C\u043D\u043E\u0442\u0435",
    price: 200,
    sellPrice: 80,
    type: "material",
    rarity: "uncommon",
    icon: "<:magic_powder:1516021736301400105>",
    emoji: "\u{1FA84}",
    craftable: true,
    recipe: [{ itemId: "star_dust", amount: 3 }, { itemId: "wood", amount: 1 }]
  },
  "neon_tube": {
    id: "neon_tube",
    name: "\u041D\u0435\u043E\u043D\u043E\u0432\u0430\u044F \u0442\u0440\u0443\u0431\u043A\u0430",
    description: "\u0421\u0432\u0435\u0442\u044F\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u043A\u0440\u0430\u0444\u0442\u0430 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438",
    lore: "\u042F\u0440\u043A\u0430\u044F \u043D\u0435\u043E\u043D\u043E\u0432\u0430\u044F \u043B\u0430\u043C\u043F\u0430, \u0441\u043A\u0440\u0443\u0447\u0435\u043D\u043D\u0430\u044F \u043D\u043E\u0447\u044C\u044E \u0441 \u0443\u043B\u0438\u0447\u043D\u043E\u0439 \u0432\u044B\u0432\u0435\u0441\u043A\u0438",
    price: 300,
    sellPrice: 120,
    type: "material",
    rarity: "uncommon",
    icon: "<:neon_tube:1516021737618407524>",
    emoji: "\u{1F4A1}",
    craftable: true,
    recipe: [{ itemId: "electronic_part", amount: 1 }, { itemId: "wood", amount: 1 }]
  },
  "cyber_part": {
    id: "cyber_part",
    name: "\u041A\u0438\u0431\u0435\u0440-\u0434\u0435\u0442\u0430\u043B\u044C",
    description: "\u0412\u044B\u0441\u043E\u043A\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043A\u0440\u0430\u0444\u0442\u0430",
    lore: "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0441\u0445\u0435\u043C\u0430, \u043D\u0443\u0436\u043D\u0430\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432",
    price: 500,
    sellPrice: 200,
    type: "material",
    rarity: "rare",
    icon: "<:cyber_part:1516021727505678437>",
    emoji: "\u2699\uFE0F",
    craftable: true,
    recipe: [{ itemId: "electronic_part", amount: 1 }, { itemId: "iron_ingot", amount: 1 }, { itemId: "wood", amount: 2 }]
  },
  "ancient_scroll": {
    id: "ancient_scroll",
    name: "\u0414\u0440\u0435\u0432\u043D\u0438\u0439 \u0441\u0432\u0438\u0442\u043E\u043A",
    description: "\u0421\u0442\u0430\u0440\u0430\u044F \u0431\u0443\u043C\u0430\u0433\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u043A\u043E\u0434",
    lore: "\u041F\u043E\u0442\u0440\u0451\u043F\u0430\u043D\u043D\u044B\u0439 \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u043F\u0435\u0440\u0433\u0430\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u0437\u0430\u043F\u0438\u0441\u044F\u043C\u0438",
    price: 800,
    sellPrice: 320,
    type: "material",
    rarity: "rare",
    icon: "<:ancient_scroll:1516021724573859880>",
    emoji: "\u{1F4DC}",
    craftable: false
  },
  "quantum_chip": {
    id: "quantum_chip",
    name: "\u041A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u0439 \u0447\u0438\u043F",
    description: "\u041E\u0447\u0435\u043D\u044C \u043C\u043E\u0449\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F",
    lore: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439, \u043D\u043E \u0441\u0443\u043F\u0435\u0440\u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0447\u0438\u043F \u0434\u043B\u044F \u0441\u0430\u043C\u044B\u0445 \u0446\u0435\u043D\u043D\u044B\u0445 \u043A\u0440\u0430\u0444\u0442\u043E\u0432",
    price: 1500,
    sellPrice: 600,
    type: "material",
    rarity: "epic",
    icon: "<:quantum_chip:1516021738868310197>",
    emoji: "\u{1F4BD}",
    craftable: true,
    recipe: [{ itemId: "cyber_part", amount: 2 }, { itemId: "gold_ingot", amount: 1 }, { itemId: "iron", amount: 1 }],
    buyLimit: { type: "personal", amount: 5, period: "daily" }
  },
  "crystal_core": {
    id: "crystal_core",
    name: "\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u044F\u0434\u0440\u043E",
    description: "\u042F\u0434\u0440\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438\u0437\u043B\u0443\u0447\u0430\u0435\u0442 \u043C\u043E\u0449\u043D\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E",
    lore: "\u0420\u0435\u0434\u043A\u0438\u0439 \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B, \u0437\u0430\u0440\u044F\u0436\u0435\u043D\u043D\u044B\u0439 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u044D\u043D\u0435\u0440\u0433\u0438\u0438",
    price: 1200,
    sellPrice: 480,
    type: "material",
    rarity: "epic",
    icon: "<:crystal_core:1516021726113304666>",
    emoji: "\u{1F4A0}",
    craftable: true,
    recipe: [{ itemId: "magic_powder", amount: 3 }, { itemId: "star_dust", amount: 10 }],
    buyLimit: { type: "personal", amount: 5, period: "daily" }
  },
  "dark_matter": {
    id: "dark_matter",
    name: "\u0422\u0435\u043C\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u044F",
    description: "\u0421\u0430\u043C\u044B\u0439 \u0440\u0435\u0434\u043A\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u0434\u043B\u044F \u043C\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043A\u0440\u0430\u0444\u0442\u0430",
    lore: "\u0417\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u043E\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u043F\u043E\u0445\u043E\u0436\u0435\u0435 \u043D\u0430 \u043B\u0435\u0442\u0430\u044E\u0449\u0443\u044E \u0447\u0435\u0440\u043D\u0443\u044E \u0436\u0438\u0436\u0443",
    price: 5e3,
    sellPrice: 2e3,
    type: "material",
    rarity: "legendary",
    icon: "<:dark_matter:1516021728709705809>",
    emoji: "\u{1F30C}",
    craftable: false,
    buyLimit: { type: "personal", amount: 2, period: "daily" }
  },
  "key_fragment": {
    id: "key_fragment",
    name: "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043A\u043B\u044E\u0447\u0430",
    description: "\u0421\u043E\u0431\u0435\u0440\u0438 3 \u043A\u0443\u0441\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0440\u0430\u0444\u0442\u0438\u0442\u044C \u041C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043B\u044E\u0447",
    lore: "\u041E\u0441\u043A\u043E\u043B\u043E\u043A \u043E\u0442 \u0441\u043B\u043E\u043C\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043B\u044E\u0447\u0430, \u0441\u0430\u043C \u043F\u043E \u0441\u0435\u0431\u0435 \u043E\u043D \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u0435\u043D",
    price: 250,
    sellPrice: 100,
    type: "material",
    rarity: "uncommon",
    icon: "<:key_fragment:1516021735105757234>",
    emoji: "\u{1F9E9}",
    craftable: false
  },
  // ЛУТБОКСЫ
  "daily_bag": {
    id: "daily_bag",
    name: "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u043C\u0435\u0448\u043E\u043A",
    description: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043C\u0435\u0448\u043E\u043A \u0441 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u043C\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043C\u0438",
    lore: "\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u043E\u0442 \u0431\u043E\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441 \u043A\u043E\u043C\u0430\u043D\u0434\u044B `/daily`",
    price: 0,
    sellPrice: 0,
    type: "lootbox",
    rarity: "common",
    icon: "<:daily_bag:1516032744021426407>",
    emoji: "\u{1F6CD}\uFE0F",
    craftable: false
  },
  "bronze_chest": {
    id: "bronze_chest",
    name: "\u0411\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",
    description: "\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A, \u043D\u0443\u0436\u0435\u043D \u0411\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u043A\u043B\u044E\u0447",
    lore: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u044F\u0449\u0438\u043A \u0441 \u043F\u0440\u043E\u0441\u0442\u0435\u043D\u044C\u043A\u0438\u043C \u043D\u0430\u0432\u0435\u0441\u043D\u044B\u043C \u0437\u0430\u043C\u043A\u043E\u043C",
    price: 1500,
    sellPrice: 600,
    type: "lootbox",
    rarity: "common",
    icon: "<:bronze_chest:1516032737704939570>",
    emoji: "\u{1F9F0}",
    craftable: true,
    recipe: [{ itemId: "wood", amount: 20 }, { itemId: "iron", amount: 5 }]
  },
  "bronze_key": {
    id: "bronze_key",
    name: "\u0411\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u043A\u043B\u044E\u0447",
    description: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0411\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",
    lore: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0430\u043C\u043E\u0433\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0433\u043E \u0441\u0443\u043D\u0434\u0443\u043A\u0430",
    price: 800,
    sellPrice: 320,
    type: "key",
    rarity: "common",
    icon: "<:bronze_key:1516032738921152645>",
    emoji: "\u{1F5DD}\uFE0F",
    craftable: true,
    recipe: [{ itemId: "iron_ingot", amount: 5 }, { itemId: "wood", amount: 1 }]
  },
  "silver_chest": {
    id: "silver_chest",
    name: "\u0421\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",
    description: "\u0421\u0443\u043D\u0434\u0443\u043A \u0441 \u0445\u043E\u0440\u043E\u0448\u0438\u043C \u043B\u0443\u0442\u043E\u043C, \u043D\u0443\u0436\u0435\u043D \u0421\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u043A\u043B\u044E\u0447",
    lore: "\u041A\u0440\u0435\u043F\u043A\u0438\u0439 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0435\u0439\u0444, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043F\u0440\u044F\u0442\u0430\u043D\u044B \u0446\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B",
    price: 4e3,
    sellPrice: 1600,
    type: "lootbox",
    rarity: "uncommon",
    icon: "<:silver_chest:1516032752808493107>",
    emoji: "\u{1F5C4}\uFE0F",
    craftable: true,
    recipe: [{ itemId: "bronze_chest", amount: 2 }, { itemId: "iron_ingot", amount: 5 }, { itemId: "electronic_part", amount: 1 }]
  },
  "silver_key": {
    id: "silver_key",
    name: "\u0421\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u043A\u043B\u044E\u0447",
    description: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0421\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",
    lore: "\u0411\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u0439 \u043A\u043B\u044E\u0447, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u043E\u0433\u043E \u0441\u0435\u0439\u0444\u0430",
    price: 2e3,
    sellPrice: 800,
    type: "key",
    rarity: "uncommon",
    icon: "<:silver_key:1516032754880610496>",
    emoji: "\u{1F511}",
    craftable: true,
    recipe: [{ itemId: "bronze_key", amount: 2 }, { itemId: "gold_ingot", amount: 1 }]
  },
  "cyber_box": {
    id: "cyber_box",
    name: "\u041A\u0438\u0431\u0435\u0440-\u043A\u0435\u0439\u0441",
    description: "\u0412\u044B\u0441\u043E\u043A\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u0439 \u044F\u0449\u0438\u043A, \u043D\u0443\u0436\u0435\u043D \u041A\u0438\u0431\u0435\u0440-\u043A\u043B\u044E\u0447",
    lore: "\u0421\u0442\u0438\u043B\u044C\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439 \u043A\u0435\u0439\u0441 \u0441\u043E \u0441\u043B\u043E\u0436\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u0432\u044B\u043C \u0437\u0430\u043C\u043A\u043E\u043C \u043D\u0430 \u043A\u0440\u044B\u0448\u043A\u0435",
    price: 1e4,
    sellPrice: 4e3,
    type: "lootbox",
    rarity: "epic",
    icon: "<:cyber_box:1516032740292694136>",
    emoji: "\u{1F5C3}\uFE0F",
    craftable: false
  },
  "cyber_key": {
    id: "cyber_key",
    name: "\u041A\u0438\u0431\u0435\u0440-\u043A\u043B\u044E\u0447",
    description: "\u0412\u0437\u043B\u0430\u043C\u044B\u0432\u0430\u0435\u0442 \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u041A\u0438\u0431\u0435\u0440-\u043A\u0435\u0439\u0441",
    lore: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0444\u043B\u0435\u0448\u043A\u0430 \u0441\u043E \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u043C \u0434\u043B\u044F \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438 \u043A\u0435\u0439\u0441\u0430",
    price: 5e3,
    sellPrice: 2e3,
    type: "key",
    rarity: "epic",
    icon: "<:cyber_key:1516032741605376110>",
    emoji: "\u{1F4DF}",
    craftable: true,
    recipe: [{ itemId: "cyber_part", amount: 4 }, { itemId: "quantum_chip", amount: 2 }]
  },
  "mystery_box": {
    id: "mystery_box",
    name: "\u041C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",
    description: "\u0421\u0443\u043D\u0434\u0443\u043A \u0441 \u0440\u0435\u0434\u043A\u0438\u043C\u0438 \u0448\u043C\u043E\u0442\u043A\u0430\u043C\u0438, \u043D\u0443\u0436\u0435\u043D \u041C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043B\u044E\u0447",
    lore: "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u0437\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043B\u0435\u0433\u043A\u0430 \u0441\u0432\u0435\u0442\u0438\u0442\u0441\u044F \u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u043C \u0434\u044B\u043C\u043E\u043C",
    price: 15e3,
    sellPrice: 6e3,
    type: "lootbox",
    rarity: "rare",
    icon: "<:mystery_box:1516032747691315220>",
    emoji: "\u{1F381}",
    craftable: true,
    recipe: [{ itemId: "silver_chest", amount: 3 }, { itemId: "magic_powder", amount: 15 }]
  },
  "mystery_key": {
    id: "mystery_key",
    name: "\u041C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043B\u044E\u0447",
    description: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u041C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",
    lore: "\u041D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043A\u043B\u044E\u0447, \u0441\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0432\u043D\u043E \u0438\u0437 \u0447\u0438\u0441\u0442\u043E\u0439 \u043C\u0430\u0433\u0438\u0438",
    price: 8e3,
    sellPrice: 3200,
    type: "key",
    rarity: "rare",
    icon: "<:mystery_key:1516032750417874985>",
    emoji: "\u{1F5DD}\uFE0F",
    craftable: true,
    recipe: [{ itemId: "key_fragment", amount: 10 }, { itemId: "crystal_core", amount: 2 }, { itemId: "quantum_chip", amount: 1 }, { itemId: "ancient_scroll", amount: 2 }]
  },
  "legendary_cache": {
    id: "legendary_cache",
    name: "\u0422\u0430\u0439\u043D\u0438\u043A \u041B\u0435\u0433\u0435\u043D\u0434",
    description: "\u0422\u043E\u043F\u043E\u0432\u044B\u0439 \u043B\u0443\u0442 \u042D\u043F\u0438\u043A \u0438\u043B\u0438 \u041B\u0435\u0433\u0435\u043D\u0434\u0430, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u043A\u043B\u044E\u0447\u0430",
    lore: "\u041E\u0447\u0435\u043D\u044C \u0440\u0435\u0434\u043A\u043E\u0435 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0441 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043A\u0440\u0443\u0442\u044B\u043C\u0438 \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C\u0438 \u0432\u043D\u0443\u0442\u0440\u0438",
    price: 5e4,
    sellPrice: 2e4,
    type: "lootbox",
    rarity: "legendary",
    icon: "<:legendary_cache:1516032746034692148>",
    emoji: "\u{1F3FA}",
    craftable: false,
    buyLimit: { type: "global", amount: 3, period: "weekly" }
  },
  "season_case": {
    id: "season_case",
    name: "\u0421\u0435\u0437\u043E\u043D\u043D\u044B\u0439 \u043A\u0435\u0439\u0441",
    description: "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430\u044F \u043D\u0430\u0433\u0440\u0430\u0434\u0430 \u0411\u043E\u0435\u0432\u043E\u0433\u043E \u041F\u0440\u043E\u043F\u0443\u0441\u043A\u0430, \u043A\u043B\u044E\u0447 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D",
    lore: "\u041E\u0441\u043E\u0431\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u043A\u0435\u0439\u0441, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u044B\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438\u0433\u0440\u043E\u043A\u0430\u043C \u0441\u0435\u0437\u043E\u043D\u0430",
    price: 0,
    sellPrice: 0,
    type: "lootbox",
    rarity: "epic",
    icon: "<:season_case:1516032751944470548>",
    emoji: "\u{1F392}",
    craftable: false
  },
  // БУСТЕРЫ И БИЛЕТЫ
  "luck_potion": {
    id: "luck_potion",
    name: "\u0417\u0435\u043B\u044C\u0435 \u0423\u0434\u0430\u0447\u0438",
    description: "\u041F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u0448\u0430\u043D\u0441 \u0432\u044B\u0431\u0438\u0442\u044C \u0440\u0435\u0434\u043A\u0438\u0439 \u043B\u0443\u0442 \u0438\u0437 \u0441\u0443\u043D\u0434\u0443\u043A\u043E\u0432 \u043D\u0430 10%",
    lore: "\u041F\u0440\u0438\u043A\u043E\u043B\u044C\u043D\u0430\u044F \u0441\u0432\u0435\u0442\u044F\u0449\u0430\u044F\u0441\u044F \u0436\u0438\u0436\u0430 \u0432 \u043A\u043E\u043B\u0431\u0435, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u0434\u043A\u0440\u0443\u0442\u0438\u0442 \u0442\u0432\u043E\u044E \u0443\u0434\u0430\u0447\u0443 \u0432 \u043A\u0435\u0439\u0441\u0430\u0445",
    price: 800,
    sellPrice: 320,
    type: "consumable",
    rarity: "rare",
    icon: "<:luck_potion:1516042442275684412>",
    emoji: "\u{1F9EA}",
    craftable: true,
    recipe: [{ itemId: "magic_powder", amount: 2 }, { itemId: "neon_tube", amount: 1 }, { itemId: "wood", amount: 2 }],
    buyLimit: { type: "personal", amount: 3, period: "daily" }
  },
  "xp_boost_small": {
    id: "xp_boost_small",
    name: "\u041C\u0430\u043B\u044B\u0439 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A",
    description: "\u0414\u0430\u0435\u0442 +25% \u043A \u043E\u043F\u044B\u0442\u0443 \u0411\u041F \u043D\u0430 1 \u0447\u0430\u0441",
    lore: "\u041E\u0431\u044B\u0447\u043D\u0430\u044F \u0431\u0430\u043D\u043E\u0447\u043A\u0430 \u0433\u0430\u0437\u0438\u0440\u043E\u0432\u043A\u0438 \u0438\u0437 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0437\u0431\u043E\u0434\u0440\u0438\u0442 \u0438 \u0443\u0441\u043A\u043E\u0440\u0438\u0442 \u043F\u0440\u043E\u043A\u0430\u0447\u043A\u0443 \u0443\u0440\u043E\u0432\u043D\u044F",
    price: 400,
    sellPrice: 160,
    type: "consumable",
    rarity: "uncommon",
    icon: "<:xp_boost_small:1516044788749566095>",
    emoji: "\u{1F964}",
    craftable: false,
    buyLimit: { type: "personal", amount: 3, period: "daily" }
  },
  "xp_boost_large": {
    id: "xp_boost_large",
    name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A",
    description: "\u0414\u0430\u0435\u0442 +50% \u043A \u043E\u043F\u044B\u0442\u0443 \u0411\u041F \u043D\u0430 3 \u0447\u0430\u0441\u0430",
    lore: "\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430 \u0431\u043E\u0434\u0440\u044F\u0449\u0435\u0433\u043E \u043D\u0430\u043F\u0438\u0442\u043A\u0430 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0440\u0435\u0448\u0438\u043B \u0431\u044B\u0441\u0442\u0440\u043E \u0430\u043F\u043D\u0443\u0442\u044C \u0443\u0440\u043E\u0432\u043D\u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430",
    price: 1200,
    sellPrice: 480,
    type: "consumable",
    rarity: "epic",
    icon: "<:xp_boost_large:1516044786510069800>",
    emoji: "\u{1F37A}",
    craftable: true,
    recipe: [{ itemId: "xp_boost_small", amount: 2 }, { itemId: "magic_powder", amount: 2 }],
    buyLimit: { type: "personal", amount: 2, period: "daily" }
  },
  "xp_boost_mega": {
    id: "xp_boost_mega",
    name: "\u041A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C",
    description: "\u0414\u0430\u0435\u0442 +100% \u043A \u043E\u043F\u044B\u0442\u0443 \u0411\u041F \u043D\u0430 6 \u0447\u0430\u0441\u043E\u0432",
    lore: "\u0423\u043B\u044C\u0442\u0438\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043C\u043E\u0449\u043D\u044B\u0439 \u0431\u0443\u0441\u0442, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0442\u0432\u043E\u0439 \u043E\u043F\u044B\u0442 \u0431\u0443\u0434\u0435\u0442 \u043A\u0430\u043F\u0430\u0442\u044C \u0432 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u0431\u044B\u0441\u0442\u0440\u0435\u0435",
    price: 3500,
    sellPrice: 1400,
    type: "consumable",
    rarity: "legendary",
    icon: "<:xp_boost_mega:1516044787818692679>",
    emoji: "\u26A1",
    craftable: true,
    recipe: [{ itemId: "xp_boost_large", amount: 2 }, { itemId: "cyber_part", amount: 2 }, { itemId: "iron", amount: 1 }],
    buyLimit: { type: "personal", amount: 3, period: "weekly" }
  },
  "star_contract": {
    id: "star_contract",
    name: "\u0417\u0432\u0435\u0437\u0434\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442",
    description: "\u0423\u0434\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0432\u0435\u0437\u0434 \u0437\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0432 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0438\u043B\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u0430\u0445 \u043D\u0430 2 \u0447\u0430\u0441\u0430",
    lore: "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0433\u043E\u0432\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043A\u0443\u043F\u0438\u0442\u0441\u044F \u0441 \u043B\u0438\u0445\u0432\u043E\u0439, \u0435\u0441\u043B\u0438 \u0442\u044B \u0431\u0443\u0434\u0435\u0448\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F",
    price: 400,
    sellPrice: 160,
    type: "consumable",
    rarity: "rare",
    icon: "<:star_contract:1516047756588748871>",
    emoji: "\u{1F4DD}",
    craftable: true,
    recipe: [{ itemId: "star_dust", amount: 5 }, { itemId: "iron", amount: 1 }],
    buyLimit: { type: "personal", amount: 3, period: "daily" }
  },
  "star_contract_premium": {
    id: "star_contract_premium",
    name: "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u041C\u043E\u043D\u043E\u043F\u043E\u043B\u0438\u0441\u0442\u0430",
    description: "\u0423\u043C\u043D\u043E\u0436\u0430\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0432\u0435\u0437\u0434 \u0437\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0432 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0438\u043B\u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u0430\u0445 \u0432 4 \u0440\u0430\u0437\u0430 \u043D\u0430 3 \u0447\u0430\u0441\u0430",
    lore: "\u0421\u0443\u043F\u0435\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0432\u0435\u0441\u044C \u0432\u0435\u0447\u0435\u0440 \u0432 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u0430\u0445",
    price: 1200,
    sellPrice: 480,
    type: "consumable",
    rarity: "epic",
    icon: "<:star_contract_premium:1516047758291898509>",
    emoji: "\u{1F4C4}",
    craftable: true,
    recipe: [{ itemId: "star_contract", amount: 2 }, { itemId: "magic_powder", amount: 2 }],
    buyLimit: { type: "personal", amount: 1, period: "daily" }
  },
  "anti_mute_shield": {
    id: "anti_mute_shield",
    name: "\u0429\u0438\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u044B",
    description: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u043C\u0435\u043D\u044F\u0435\u0442 \u0432\u044B\u0434\u0430\u043D\u043D\u044B\u0439 \u0442\u0435\u0431\u0435 \u043C\u0443\u0442",
    lore: "\u0422\u0432\u043E\u044F \u043B\u0438\u0447\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430 \u043E\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u2014 \u0449\u0438\u0442 \u0441\u0430\u043C \u0441\u043D\u0438\u043C\u0435\u0442 \u043C\u0443\u0442, \u0435\u0441\u043B\u0438 \u0442\u0435\u0431\u044F \u0437\u0430\u0433\u043B\u0443\u0448\u0430\u0442",
    price: 8e3,
    sellPrice: 3200,
    type: "consumable",
    rarity: "legendary",
    icon: "<:anti_mute_shield:1516043118997143562>",
    emoji: "\u{1F6E1}\uFE0F",
    craftable: true,
    recipe: [{ itemId: "crystal_core", amount: 4 }, { itemId: "quantum_chip", amount: 2 }, { itemId: "magic_powder", amount: 1 }],
    buyLimit: { type: "personal", amount: 1, period: "weekly" }
  },
  "custom_role_ticket": {
    id: "custom_role_ticket",
    name: "\u0411\u0438\u043B\u0435\u0442 \u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044F",
    description: "\u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0439 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u043E\u0439 \u0440\u043E\u043B\u0438 \u043D\u0430 30 \u0434\u043D\u0435\u0439",
    lore: "\u0426\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u043F\u043E\u043D, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043B\u044E\u0431\u0443\u044E \u0440\u043E\u043B\u044C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",
    price: 325e3,
    sellPrice: 13e4,
    type: "consumable",
    rarity: "mythic",
    icon: "<:custom_role_ticket:1516042438974767196>",
    emoji: "\u{1F3AB}",
    craftable: false,
    buyLimit: { type: "global", amount: 1, period: "weekly" }
  },
  "firewall": {
    id: "firewall",
    name: "\u0411\u0440\u0430\u043D\u0434\u043C\u0430\u0443\u044D\u0440",
    description: "\u041F\u0430\u0441\u0441\u0438\u0432\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u0442\u0432\u043E\u0438\u0445 \u0437\u0432\u0435\u0437\u0434 \u043E\u0442 \u043E\u0433\u0440\u0430\u0431\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0435 /rob",
    lore: "\u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0449\u0438\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0434\u0440\u0443\u0433\u0438\u043C \u0438\u0433\u0440\u043E\u043A\u0430\u043C \u0443\u043A\u0440\u0430\u0441\u0442\u044C \u0442\u0432\u043E\u0438 \u043C\u043E\u043D\u0435\u0442\u044B",
    price: 4e3,
    sellPrice: 1600,
    type: "consumable",
    rarity: "epic",
    icon: "<:firewall:1516042752457052211>",
    emoji: "\u{1F9F1}",
    craftable: false,
    buyLimit: { type: "personal", amount: 2, period: "weekly" }
  },
  // КОСМЕТИКА
  "bg_stars_dark": {
    id: "bg_stars_dark",
    name: '\u0424\u043E\u043D "\u0422\u0435\u043C\u043D\u044B\u0435 \u0417\u0432\u0435\u0437\u0434\u044B"',
    description: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0444\u043E\u043D \u0441 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0439 \u0440\u043E\u0441\u0441\u044B\u043F\u044C\u044E \u0437\u0432\u0435\u0437\u0434",
    lore: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0438 \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0442\u0435\u043C\u043D\u044B\u0439 \u0444\u043E\u043D \u0441 \u043D\u043E\u0447\u043D\u044B\u043C \u0437\u0432\u0435\u0437\u0434\u043D\u044B\u043C \u043D\u0435\u0431\u043E\u043C \u0434\u043B\u044F \u0442\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F",
    price: 15e3,
    sellPrice: 6e3,
    type: "background",
    rarity: "uncommon",
    icon: "\u{1F30C}",
    emoji: "\u{1F30C}",
    craftable: false
  },
  "bg_matrix": {
    id: "bg_matrix",
    name: '\u0424\u043E\u043D "\u041C\u0430\u0442\u0440\u0438\u0446\u0430"',
    description: "\u0424\u043E\u043D \u0441\u043E \u0441\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C \u0432\u043D\u0438\u0437 \u0437\u0435\u043B\u0435\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C",
    lore: "\u041A\u0440\u0443\u0442\u044B\u0435 \u0437\u0435\u043B\u0435\u043D\u044B\u0435 \u0446\u0438\u0444\u0435\u0440\u043A\u0438 \u0438 \u0441\u0438\u043C\u0432\u043E\u043B\u044B, \u0431\u0435\u0433\u0443\u0449\u0438\u0435 \u0432\u043D\u0438\u0437 \u043A\u0430\u043A \u0432 \u0441\u0442\u0430\u0440\u044B\u0445 \u0444\u0438\u043B\u044C\u043C\u0430\u0445 \u043F\u0440\u043E \u0445\u0430\u043A\u0435\u0440\u043E\u0432",
    price: 2e4,
    sellPrice: 8e3,
    type: "background",
    rarity: "rare",
    icon: "\u{1F4BB}",
    emoji: "\u{1F4BB}",
    craftable: false
  },
  "bg_deep_ocean": {
    id: "bg_deep_ocean",
    name: '\u0424\u043E\u043D "\u041E\u043A\u0435\u0430\u043D\u0441\u043A\u0430\u044F \u0411\u0435\u0437\u0434\u043D\u0430"',
    description: "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0441\u0438\u043D\u0438\u0439 \u0444\u043E\u043D",
    lore: "\u0421\u0442\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043C\u043D\u043E-\u0441\u0438\u043D\u0438\u0439 \u0444\u043E\u043D \u0441 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u043C \u0431\u0435\u0441\u043A\u0440\u0430\u0439\u043D\u0435\u0439 \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0433\u043B\u0443\u0431\u0438\u043D\u044B",
    price: 2e4,
    sellPrice: 8e3,
    type: "background",
    rarity: "rare",
    icon: "\u{1F30A}",
    emoji: "\u{1F30A}",
    craftable: false
  },
  "bg_halloween_pumpkins": {
    id: "bg_halloween_pumpkins",
    name: '\u0424\u043E\u043D "\u0425\u044D\u043B\u043B\u043E\u0443\u0438\u043D"',
    description: "\u0410\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043D\u044B\u0439 \u0436\u0443\u0442\u043A\u0438\u0439 \u0444\u043E\u043D \u0441\u043E \u0441\u0432\u0435\u0442\u044F\u0449\u0438\u043C\u0438\u0441\u044F \u0442\u044B\u043A\u0432\u0430\u043C\u0438",
    lore: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439 \u043E\u0441\u0435\u043D\u043D\u0438\u0439 \u0444\u043E\u043D \u0441 \u0442\u044B\u043A\u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 \u043C\u0438\u0441\u0442\u0438\u043A\u0438",
    price: 25e3,
    sellPrice: 1e4,
    type: "background",
    rarity: "rare",
    icon: "\u{1F383}",
    emoji: "\u{1F383}",
    craftable: false
  },
  "bg_crimson_moon": {
    id: "bg_crimson_moon",
    name: '\u0424\u043E\u043D "\u0411\u0430\u0433\u0440\u043E\u0432\u0430\u044F \u041B\u0443\u043D\u0430"',
    description: "\u0417\u0430\u0432\u043E\u0440\u0430\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u043C\u0440\u0430\u0447\u043D\u044B\u0439 \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u0435\u0439\u0437\u0430\u0436",
    lore: "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u0438 \u043E\u0447\u0435\u043D\u044C \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u043D \u0441 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0439 \u043A\u0440\u0430\u0441\u043D\u043E\u0439 \u043B\u0443\u043D\u043E\u0439 \u043D\u0430 \u043D\u043E\u0447\u043D\u043E\u043C \u043D\u0435\u0431\u0435",
    price: 35e3,
    sellPrice: 14e3,
    type: "background",
    rarity: "epic",
    icon: "\u{1FA78}",
    emoji: "\u{1FA78}",
    craftable: false,
    buyLimit: { type: "global", amount: 10, period: "weekly" }
  },
  "bg_cyberpunk_city": {
    id: "bg_cyberpunk_city",
    name: '\u0424\u043E\u043D "\u041D\u0430\u0439\u0442-\u0421\u0438\u0442\u0438"',
    description: "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u0435 \u043E\u0433\u043D\u0438 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430",
    lore: "\u0412\u0438\u0434 \u043D\u0430 \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u043D\u043E\u0447\u043D\u043E\u0439 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441 \u0441 \u043A\u0443\u0447\u0435\u0439 \u044F\u0440\u043A\u043E\u0439 \u043D\u0435\u043E\u043D\u043E\u0432\u043E\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u044B \u0432\u044B\u0432\u0435\u0441\u043E\u043A",
    price: 45e3,
    sellPrice: 18e3,
    type: "background",
    rarity: "epic",
    icon: "\u{1F3D9}\uFE0F",
    emoji: "\u{1F3D9}\uFE0F",
    craftable: true,
    recipe: [{ itemId: "neon_tube", amount: 50 }, { itemId: "quantum_chip", amount: 10 }, { itemId: "cyber_part", amount: 30 }]
  },
  "bg_premium_galaxy": {
    id: "bg_premium_galaxy",
    name: '\u0424\u043E\u043D "\u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430"',
    description: "\u041F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u043D \u0441 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u043C \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u043A\u043E\u0441\u043C\u043E\u0441\u043E\u043C",
    lore: "\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0440\u0442 \u0441 \u0434\u0430\u043B\u0435\u043A\u0438\u043C\u0438 \u0440\u0430\u0437\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u043C\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u0430\u043C\u0438, \u0437\u0432\u0435\u0437\u0434\u0430\u043C\u0438 \u0438 \u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438",
    price: 55e3,
    sellPrice: 22e3,
    type: "background",
    rarity: "epic",
    icon: "\u{1FA90}",
    emoji: "\u{1FA90}",
    craftable: true,
    recipe: [{ itemId: "star_dust", amount: 200 }, { itemId: "crystal_core", amount: 15 }, { itemId: "dark_matter", amount: 5 }]
  },
  "bg_sakura_garden": {
    id: "bg_sakura_garden",
    name: '\u0424\u043E\u043D "\u0421\u0430\u0434 \u0421\u0430\u043A\u0443\u0440\u044B"',
    description: "\u0411\u0435\u0437\u043C\u044F\u0442\u0435\u0436\u043D\u044B\u0439 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u044F\u043F\u043E\u043D\u0441\u043A\u0438\u0439 \u0441\u0430\u0434",
    lore: "\u0423\u044E\u0442\u043D\u044B\u0439 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439 \u0444\u043E\u043D \u0441 \u043D\u0435\u0436\u043D\u044B\u043C\u0438 \u043F\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u0430\u043C\u0438 \u0440\u043E\u0437\u043E\u0432\u043E\u0439 \u0441\u0430\u043A\u0443\u0440\u044B",
    price: 8e4,
    sellPrice: 32e3,
    type: "background",
    rarity: "legendary",
    icon: "\u{1F338}",
    emoji: "\u{1F338}",
    craftable: false,
    buyLimit: { type: "global", amount: 3, period: "weekly" }
  },
  "bg_legend": {
    id: "bg_legend",
    name: '\u0424\u043E\u043D "\u041B\u0435\u0433\u0435\u043D\u0434\u0430"',
    description: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u043E\u043B\u043E\u0442\u043E\u0439 \u0444\u043E\u043D \u0434\u043B\u044F \u0438\u0441\u0442\u0438\u043D\u043D\u044B\u0445 \u043B\u0435\u0433\u0435\u043D\u0434",
    lore: "\u041F\u0430\u0444\u043E\u0441\u043D\u044B\u0439 \u0437\u043E\u043B\u043E\u0442\u043E\u0439 \u0444\u043E\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u0432\u0441\u0435\u043C \u0442\u0432\u043E\u0439 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",
    price: 15e4,
    sellPrice: 6e4,
    type: "background",
    rarity: "legendary",
    icon: "\u{1F525}",
    emoji: "\u{1F525}",
    craftable: false,
    buyLimit: { type: "global", amount: 1, period: "weekly" }
  },
  "bg_abyss": {
    id: "bg_abyss",
    name: '\u0424\u043E\u043D "\u041F\u0443\u0441\u0442\u043E\u0442\u0430"',
    description: "\u0421\u0442\u0438\u043B\u044C\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u043D, \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u044E\u0449\u0438\u0439 \u0441\u0432\u0435\u0442",
    lore: "\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043C\u0430\u0442\u043E\u0432\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u043D \u0434\u043B\u044F \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 \u0441\u0442\u0440\u043E\u0433\u043E\u0433\u043E \u0438 \u0447\u0438\u0441\u0442\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044F",
    price: 0,
    sellPrice: 0,
    type: "background",
    rarity: "mythic",
    icon: "\u{1F573}\uFE0F",
    emoji: "\u{1F573}\uFE0F",
    craftable: true,
    recipe: [{ itemId: "dark_matter", amount: 10 }, { itemId: "ancient_scroll", amount: 10 }, { itemId: "crystal_core", amount: 5 }]
  },
  "frame_laurel_blue": {
    id: "frame_laurel_blue",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u0421\u0438\u043D\u0438\u0439 \u041B\u0430\u0432\u0440"',
    description: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u0434\u043B\u044F \u0430\u0432\u0430\u0442\u0430\u0440\u0430",
    lore: "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u043B\u0430\u0437\u0443\u0440\u043D\u044B\u0439 \u0432\u0435\u043D\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F \u0432\u043E\u043A\u0440\u0443\u0433 \u0442\u0432\u043E\u0435\u0439 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438",
    price: 1e4,
    sellPrice: 4e3,
    type: "frame",
    rarity: "uncommon",
    icon: "\u{1F33F}",
    emoji: "\u{1F33F}",
    craftable: false
  },
  "frame_patterned_bronze": {
    id: "frame_patterned_bronze",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u0411\u0440\u043E\u043D\u0437\u0430"',
    description: "\u0420\u0430\u043C\u043A\u0430 \u0441\u043E \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u043C\u0438 \u0448\u0435\u0441\u0442\u0435\u0440\u0435\u043D\u043A\u0430\u043C\u0438",
    lore: "\u0411\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u043E\u0431\u043E\u0434\u043E\u043A \u0441 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u043C\u0438 \u0442\u0438\u043A\u0430\u044E\u0449\u0438\u043C\u0438 \u0448\u0435\u0441\u0442\u0435\u0440\u0435\u043D\u043A\u0430\u043C\u0438 \u043F\u043E \u0431\u043E\u043A\u0430\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
    price: 15e3,
    sellPrice: 6e3,
    type: "frame",
    rarity: "rare",
    icon: "\u2699\uFE0F",
    emoji: "\u2699\uFE0F",
    craftable: true,
    recipe: [{ itemId: "cyber_part", amount: 20 }, { itemId: "iron_ingot", amount: 20 }, { itemId: "iron", amount: 20 }]
  },
  "frame_halloween_web": {
    id: "frame_halloween_web",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u041F\u0430\u0443\u0442\u0438\u043D\u0430"',
    description: "\u0425\u044D\u043B\u043B\u043E\u0443\u0438\u043D\u0441\u043A\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u0441 \u0443\u0433\u043B\u0430\u043C\u0438 \u0438\u0437 \u043F\u0430\u0443\u0442\u0438\u043D\u044B",
    lore: "\u041C\u0440\u0430\u0447\u043D\u0430\u044F \u0441\u0435\u0440\u0430\u044F \u043F\u0430\u0443\u0442\u0438\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043A\u0440\u043E\u0435\u0442 \u0443\u0433\u043B\u044B \u0442\u0432\u043E\u0435\u0439 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0435",
    price: 18e3,
    sellPrice: 7200,
    type: "frame",
    rarity: "rare",
    icon: "\u{1F578}\uFE0F",
    emoji: "\u{1F578}\uFE0F",
    craftable: false
  },
  "frame_neon_pink": {
    id: "frame_neon_pink",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u041D\u0435\u043E\u043D\u043E\u0432\u044B\u0439 \u0420\u043E\u0437\u043E\u0432\u044B\u0439"',
    description: "\u042F\u0440\u043A\u043E\u0435 \u0440\u043E\u0437\u043E\u0432\u043E\u0435 \u043D\u0435\u043E\u043D\u043E\u0432\u043E\u0435 \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u0435",
    lore: "\u041A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u044F\u0440\u043A\u043E-\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u0441\u0432\u0435\u0442\u044F\u0449\u0430\u044F\u0441\u044F \u043B\u0438\u043D\u0438\u044F, \u043A\u0440\u0443\u0442\u043E \u0432\u044B\u0434\u0435\u043B\u044F\u044E\u0449\u0430\u044F \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0443",
    price: 22e3,
    sellPrice: 8800,
    type: "frame",
    rarity: "rare",
    icon: "\u{1F9A9}",
    emoji: "\u{1F9A9}",
    craftable: true,
    recipe: [{ itemId: "neon_tube", amount: 40 }, { itemId: "cyber_part", amount: 20 }]
  },
  "frame_azure_spark": {
    id: "frame_azure_spark",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u041B\u0430\u0437\u0443\u0440\u043D\u0430\u044F \u0418\u0441\u043A\u0440\u0430"',
    description: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0437\u0440\u044F\u0434\u044B \u0432\u043E\u043A\u0440\u0443\u0433 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438",
    lore: "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0435 \u0441\u0438\u043D\u0438\u0435 \u043C\u043E\u043B\u043D\u0438\u0438, \u0431\u0435\u0433\u0430\u044E\u0449\u0438\u0435 \u043F\u043E \u043A\u0440\u0443\u0433\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u0442\u0432\u043E\u0435\u0433\u043E \u0430\u0432\u0430\u0442\u0430\u0440\u0430",
    price: 3e4,
    sellPrice: 12e3,
    type: "frame",
    rarity: "epic",
    icon: "\u26A1",
    emoji: "\u26A1",
    craftable: true,
    recipe: [{ itemId: "cyber_part", amount: 20 }, { itemId: "crystal_core", amount: 10 }, { itemId: "quantum_chip", amount: 5 }, { itemId: "electronic_part", amount: 1 }]
  },
  "frame_magma": {
    id: "frame_magma",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u041C\u0430\u0433\u043C\u0430"',
    description: "\u041E\u0433\u043D\u0435\u043D\u043D\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u0441 \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u043C \u0436\u0430\u0440\u0430",
    lore: "\u0413\u043E\u0440\u044F\u0449\u0438\u0439 \u043E\u0431\u043E\u0434\u043E\u043A \u0441\u043E \u0441\u043F\u0435\u0446\u044D\u0444\u0444\u0435\u043A\u0442\u043E\u043C \u0440\u0430\u0441\u043F\u043B\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0432\u0443\u043B\u043A\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043B\u0430\u0432\u044B",
    price: 45e3,
    sellPrice: 18e3,
    type: "frame",
    rarity: "epic",
    icon: "\u{1F30B}",
    emoji: "\u{1F30B}",
    craftable: false
  },
  "frame_gold_plated": {
    id: "frame_gold_plated",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u0427\u0438\u0441\u0442\u043E\u0435 \u0417\u043E\u043B\u043E\u0442\u043E"',
    description: "\u041F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u043E\u043B\u043E\u0442\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u0442\u0432\u043E\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430",
    lore: "\u0414\u043E\u0440\u043E\u0433\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u0438\u0437 \u0447\u0438\u0441\u0442\u043E\u0433\u043E \u0437\u043E\u043B\u043E\u0442\u0430, \u0447\u0442\u043E\u0431\u044B \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435\u043C \u0441\u0432\u043E\u0435 \u0431\u043E\u0433\u0430\u0442\u0441\u0442\u0432\u043E",
    price: 6e4,
    sellPrice: 24e3,
    type: "frame",
    rarity: "legendary",
    icon: "\u{1F947}",
    emoji: "\u{1F947}",
    craftable: true,
    recipe: [{ itemId: "gold_ingot", amount: 100 }, { itemId: "crystal_core", amount: 10 }, { itemId: "ancient_scroll", amount: 10 }],
    buyLimit: { type: "global", amount: 5, period: "weekly" }
  },
  "frame_diamond": {
    id: "frame_diamond",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u0410\u043B\u043C\u0430\u0437\u043D\u0430\u044F"',
    description: "\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u0438\u0437 \u0440\u0435\u0434\u043A\u0438\u0445 \u0430\u043B\u043C\u0430\u0437\u043E\u0432",
    lore: "\u0411\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u0435 \u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u044B\u0435 \u043A\u0430\u043C\u043D\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0433\u0440\u0430\u043D\u043A\u0438 \u0434\u043B\u044F \u0441\u0430\u043C\u044B\u0445 \u0442\u043E\u043F\u043E\u0432\u044B\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
    price: 1e5,
    sellPrice: 4e4,
    type: "frame",
    rarity: "legendary",
    icon: "\u{1F48E}",
    emoji: "\u{1F48E}",
    craftable: false,
    buyLimit: { type: "global", amount: 2, period: "weekly" }
  },
  "frame_void": {
    id: "frame_void",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u0410\u043D\u043E\u043C\u0430\u043B\u0438\u044F"',
    description: "\u0418\u0441\u043A\u0430\u0436\u0430\u0435\u0442 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0432\u043E\u043A\u0440\u0443\u0433 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438",
    lore: "\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0435\u043C\u043D\u043E-\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u0430\u044F \u0432\u043E\u0440\u043E\u043D\u043A\u0430, \u043F\u043B\u0430\u0432\u043D\u043E \u043A\u0440\u0443\u0442\u044F\u0449\u0430\u044F\u0441\u044F \u0432\u043E\u043A\u0440\u0443\u0433 \u0442\u0432\u043E\u0435\u0433\u043E \u0430\u0432\u0430\u0442\u0430\u0440\u0430",
    price: 0,
    sellPrice: 0,
    type: "frame",
    rarity: "mythic",
    icon: "\u{1F300}",
    emoji: "\u{1F300}",
    craftable: true,
    recipe: [{ itemId: "dark_matter", amount: 15 }, { itemId: "quantum_chip", amount: 10 }]
  },
  "frame_veteran": {
    id: "frame_veteran",
    name: '\u0420\u0430\u043C\u043A\u0430 "\u0412\u0435\u0442\u0435\u0440\u0430\u043D"',
    description: "\u0414\u043B\u044F \u0441\u0430\u043C\u044B\u0445 \u043F\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u043B\u0434\u043E\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
    lore: "\u041F\u043E\u0447\u0435\u0442\u043D\u044B\u0439 \u0437\u043D\u0430\u043A \u043E\u0442\u043B\u0438\u0447\u0438\u044F \u0434\u043B\u044F \u0442\u0435\u0445 \u0440\u0435\u0431\u044F\u0442, \u043A\u0442\u043E \u0441\u0438\u0434\u0438\u0442 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0443\u0436\u0435 \u043E\u0447\u0435\u043D\u044C \u0434\u043E\u043B\u0433\u043E",
    price: 0,
    sellPrice: 0,
    type: "frame",
    rarity: "mythic",
    icon: "\u{1F396}\uFE0F",
    emoji: "\u{1F396}\uFE0F",
    craftable: false
  }
  // РОЛИ
  // 'role_vip': { id: 'role_vip', name: 'Роль "VIP"', description: 'Специальный значок и преимущества', lore: 'Пропуск в закрытый клуб, где Звёзды льются рекой, а разговоры ведутся только о высоких материях.', price: 195000, sellPrice: 78000, type: 'role', rarity: 'legendary', icon: '👑', emoji: '👑', craftable: false, roleId: '1489960643850276965' },
  // 'role_sponsor': { id: 'role_sponsor', name: 'Роль "Спонсор"', description: 'Выдается исключительно за поддержку проекта', lore: 'Знак высшей признательности создателей сервера. Спонсоры не просто играют — они творят историю.', price: 0, sellPrice: 0, type: 'role', rarity: 'mythic', icon: '❤️', emoji: '❤️', craftable: false, roleId: '1489960634111098995' }
};

// src/constants/lootTables.ts
var LOOT_TABLES = {
  "daily_bag": [
    { type: "currency", minAmount: 10, maxAmount: 50, chance: 40 },
    { type: "item", itemId: "star_dust", minAmount: 5, maxAmount: 15, chance: 40 },
    { type: "item", itemId: "iron_ingot", minAmount: 1, maxAmount: 3, chance: 15 },
    { type: "item", itemId: "key_fragment", minAmount: 1, maxAmount: 1, chance: 5 }
  ],
  "bronze_chest": [
    { type: "currency", minAmount: 50, maxAmount: 150, chance: 30 },
    { type: "item", itemId: "iron_ingot", minAmount: 3, maxAmount: 8, chance: 30 },
    { type: "item", itemId: "gold_ingot", minAmount: 1, maxAmount: 2, chance: 20 },
    { type: "item", itemId: "magic_powder", minAmount: 1, maxAmount: 3, chance: 15 },
    { type: "item", itemId: "xp_boost_small", minAmount: 1, maxAmount: 1, chance: 5 }
  ],
  "silver_chest": [
    { type: "currency", minAmount: 150, maxAmount: 400, chance: 25 },
    { type: "item", itemId: "gold_ingot", minAmount: 2, maxAmount: 5, chance: 30 },
    { type: "item", itemId: "neon_tube", minAmount: 1, maxAmount: 3, chance: 20 },
    { type: "item", itemId: "cyber_part", minAmount: 1, maxAmount: 1, chance: 15 },
    { type: "item", itemId: "bg_stars_dark", minAmount: 1, maxAmount: 1, chance: 5 },
    { type: "item", itemId: "frame_laurel_blue", minAmount: 1, maxAmount: 1, chance: 5 }
  ],
  "cyber_box": [
    { type: "currency", minAmount: 500, maxAmount: 1e3, chance: 20 },
    { type: "item", itemId: "cyber_part", minAmount: 2, maxAmount: 4, chance: 30 },
    { type: "item", itemId: "quantum_chip", minAmount: 1, maxAmount: 2, chance: 20 },
    { type: "item", itemId: "xp_boost_large", minAmount: 1, maxAmount: 1, chance: 15 },
    { type: "item", itemId: "bg_matrix", minAmount: 1, maxAmount: 1, chance: 10 },
    { type: "item", itemId: "frame_neon_pink", minAmount: 1, maxAmount: 1, chance: 5 }
  ],
  "mystery_box": [
    { type: "item", itemId: "crystal_core", minAmount: 1, maxAmount: 3, chance: 25 },
    { type: "item", itemId: "ancient_scroll", minAmount: 1, maxAmount: 2, chance: 25 },
    { type: "item", itemId: "luck_potion", minAmount: 1, maxAmount: 1, chance: 20 },
    { type: "item", itemId: "bg_deep_ocean", minAmount: 1, maxAmount: 1, chance: 10 },
    { type: "item", itemId: "frame_patterned_bronze", minAmount: 1, maxAmount: 1, chance: 10 },
    { type: "item", itemId: "star_contract", minAmount: 1, maxAmount: 1, chance: 10 }
  ],
  "legendary_cache": [
    { type: "item", itemId: "dark_matter", minAmount: 1, maxAmount: 2, chance: 30 },
    { type: "item", itemId: "xp_boost_mega", minAmount: 1, maxAmount: 1, chance: 25 },
    { type: "item", itemId: "anti_mute_shield", minAmount: 1, maxAmount: 1, chance: 20 },
    { type: "item", itemId: "bg_crimson_moon", minAmount: 1, maxAmount: 1, chance: 10 },
    { type: "item", itemId: "frame_magma", minAmount: 1, maxAmount: 1, chance: 10 },
    { type: "item", itemId: "custom_role_ticket", minAmount: 1, maxAmount: 1, chance: 5 }
  ],
  "season_case": [
    { type: "currency", minAmount: 1e3, maxAmount: 2500, chance: 30 },
    { type: "item", itemId: "bg_cyberpunk_city", minAmount: 1, maxAmount: 1, chance: 20 },
    { type: "item", itemId: "frame_azure_spark", minAmount: 1, maxAmount: 1, chance: 20 },
    { type: "item", itemId: "bg_premium_galaxy", minAmount: 1, maxAmount: 1, chance: 15 },
    { type: "item", itemId: "frame_gold_plated", minAmount: 1, maxAmount: 1, chance: 15 }
  ]
};

// src/models/Article.ts
var import_mongoose = __toESM(require("mongoose"));
var articleSchema = new import_mongoose.default.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    attachments: [
      {
        name: String,
        path: String
      }
    ],
    category: {
      type: String,
      required: true,
      enum: ["guides", "bees", "items", "mechanics", "server"]
    },
    icon: { type: String, default: "fas fa-book" },
    image: { type: String, default: null },
    author: { type: String, default: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Server" },
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
    reactionsFire: { type: Number, default: 0 },
    reactionsHelpful: { type: Number, default: 0 },
    tags: [String]
  },
  { timestamps: true }
);
var Article = import_mongoose.default.models.Article || import_mongoose.default.model("Article", articleSchema);

// src/models/AuditLog.ts
var import_mongoose2 = __toESM(require("mongoose"));
var { Schema, model } = import_mongoose2.default;
var auditLogSchema = new Schema({
  adminId: { type: String, required: true },
  adminName: { type: String, required: true },
  action: { type: String, required: true },
  targetId: { type: String, default: null },
  details: { type: String, required: true }
}, { timestamps: true });
auditLogSchema.index({ createdAt: -1 });
var AuditLog = import_mongoose2.default.models.AuditLog || model("AuditLog", auditLogSchema, "audit_logs");

// src/models/AwardCategory.ts
var import_mongoose3 = __toESM(require("mongoose"));
var nomineeSchema = new import_mongoose3.default.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    subtitle: { type: String, default: "" },
    discordUserId: { type: String, default: "" },
    imageUrl: { type: String, default: "/assets/img/avatars/default_avatar.png" }
  },
  { _id: false }
);
var awardCategorySchema = new import_mongoose3.default.Schema({
  guildId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  icon: { type: String, default: "fa-broom" },
  order: { type: Number, default: 0 },
  unlockDay: { type: Number, default: 1, min: 1, max: 7 },
  nominees: [nomineeSchema],
  winnerNomineeId: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});
var AwardCategory = import_mongoose3.default.models.AwardCategory || import_mongoose3.default.model("AwardCategory", awardCategorySchema);

// src/models/AwardSettings.ts
var import_mongoose4 = __toESM(require("mongoose"));
var awardSettingsSchema = new import_mongoose4.default.Schema({
  guildId: { type: String, required: true, unique: true },
  eventTitle: { type: String, default: "DACHA AWARDS 2026" },
  eventSubtitle: {
    type: String,
    default: "\u0415\u0436\u0435\u0433\u043E\u0434\u043D\u0430\u044F \u043F\u0440\u0435\u043C\u0438\u044F \xAB\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0412\u0435\u043D\u0438\u043A\xBB \u2014 7 \u0434\u043D\u0435\u0439 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430 \u043B\u0443\u0447\u0448\u0438\u0445 \u043B\u044E\u0434\u0435\u0439 \u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0433\u043E\u0434\u0430"
  },
  votingOpen: { type: Boolean, default: true },
  minDaysOnServer: { type: Number, default: 30 },
  resultsRevealed: { type: Boolean, default: false },
  startTime: { type: Date, default: null },
  endTime: { type: Date, default: null },
  streamTime: { type: Date, default: null },
  streamUrl: { type: String, default: "https://discord.gg/bandazeyna" },
  updatedAt: { type: Date, default: Date.now }
});
var AwardSettings = import_mongoose4.default.models.AwardSettings || import_mongoose4.default.model("AwardSettings", awardSettingsSchema);

// src/models/AwardSuggestion.ts
var import_mongoose5 = __toESM(require("mongoose"));
var awardSuggestionSchema = new import_mongoose5.default.Schema({
  guildId: { type: String, required: true, index: true },
  categoryId: { type: import_mongoose5.default.Schema.Types.ObjectId, ref: "AwardCategory", required: true, index: true },
  categoryTitle: { type: String, default: "" },
  suggestedByUserId: { type: String, required: true },
  suggestedByUsername: { type: String, default: "" },
  candidateName: { type: String, required: true },
  candidateDiscordId: { type: String, default: "" },
  reason: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});
awardSuggestionSchema.index({ guildId: 1, categoryId: 1, suggestedByUserId: 1 }, { unique: true });
var AwardSuggestion = import_mongoose5.default.models.AwardSuggestion || import_mongoose5.default.model("AwardSuggestion", awardSuggestionSchema);

// src/models/AwardVote.ts
var import_mongoose6 = __toESM(require("mongoose"));
var awardVoteSchema = new import_mongoose6.default.Schema({
  guildId: { type: String, required: true, index: true },
  categoryId: { type: import_mongoose6.default.Schema.Types.ObjectId, ref: "AwardCategory", required: true, index: true },
  nomineeId: { type: String, required: true },
  userId: { type: String, required: true, index: true },
  username: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});
awardVoteSchema.index({ guildId: 1, categoryId: 1, userId: 1 }, { unique: true });
var AwardVote = import_mongoose6.default.models.AwardVote || import_mongoose6.default.model("AwardVote", awardVoteSchema);

// src/models/Ban.ts
var import_mongoose7 = __toESM(require("mongoose"));
var banSchema = new import_mongoose7.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  moderatorId: { type: String, required: true },
  reason: { type: String, default: "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430" },
  expiresAt: { type: Date, required: true }
});
banSchema.index({ expiresAt: 1 });
var Ban = import_mongoose7.default.models.Ban || (0, import_mongoose7.model)("Ban", banSchema);

// src/models/BanAppeal.ts
var import_mongoose8 = __toESM(require("mongoose"));
var banAppealSchema = new import_mongoose8.default.Schema({
  userId: { type: String, required: true, index: true },
  username: { type: String, required: true },
  banReason: { type: String, default: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430" },
  appealText: { type: String, required: true, maxlength: 1e3 },
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING"
  },
  adminComment: { type: String, default: null },
  handledBy: { type: String, default: null },
  handledAt: { type: Date, default: null }
}, { timestamps: true });
var BanAppeal = import_mongoose8.default.models.BanAppeal || import_mongoose8.default.model("BanAppeal", banAppealSchema);

// src/models/BattlePass.ts
var import_mongoose9 = __toESM(require("mongoose"));
var BattlePassSchema = new import_mongoose9.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  seasonId: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  isPremium: { type: Boolean, default: false },
  claimedFreeLevels: { type: [Number], default: [] },
  claimedPremiumLevels: { type: [Number], default: [] },
  faction: { type: String, enum: ["neon", "quantum", "iron", null], default: null }
});
BattlePassSchema.index({ userId: 1, guildId: 1, seasonId: 1 }, { unique: true });
var BattlePass = import_mongoose9.default.models.BattlePass || import_mongoose9.default.model("BattlePass", BattlePassSchema);

// src/models/BssBee.ts
var import_mongoose10 = __toESM(require("mongoose"));
var bssBeeSchema = new import_mongoose10.default.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameRu: { type: String, default: "" },
  color: { type: String, enum: ["blue", "red", "white", "colorless"], default: "colorless" },
  rarity: {
    type: String,
    enum: ["common", "rare", "epic", "legendary", "mythic", "event"],
    default: "mythic"
  },
  imageUrl: { type: String, required: true },
  giftedBonus: { type: String, default: "" },
  roleTag: { type: String, default: "" },
  order: { type: Number, default: 0 }
});
var BssBee = import_mongoose10.default.models.BssBee || import_mongoose10.default.model("BssBee", bssBeeSchema);

// src/models/BssValueItem.ts
var import_mongoose11 = __toESM(require("mongoose"));
var bssValueItemSchema = new import_mongoose11.default.Schema({
  itemId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameRu: { type: String, default: "" },
  category: {
    type: String,
    enum: ["vouchers", "cubs", "signs", "stamps", "stickers", "hives", "beequips"],
    default: "stickers"
  },
  stackBoost: { type: String, default: "" },
  imageUrl: { type: String, required: true },
  valueSigns: { type: Number, required: true, default: 1 },
  demand: { type: String, enum: ["high", "mid", "low"], default: "mid" },
  trend: { type: String, enum: ["rising", "stable", "falling"], default: "stable" },
  order: { type: Number, default: 0 },
  updatedBy: { type: String, default: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430" },
  updatedAt: { type: Date, default: Date.now }
});
var BssValueItem = import_mongoose11.default.models.BssValueItem || import_mongoose11.default.model("BssValueItem", bssValueItemSchema);

// src/models/CustomRole.ts
var import_mongoose12 = __toESM(require("mongoose"));
var customRoleSchema = new import_mongoose12.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  roleId: { type: String, required: true },
  expiresAt: { type: Date, required: true }
}, { timestamps: true });
var CustomRole = import_mongoose12.default.models.CustomRole || (0, import_mongoose12.model)("CustomRole", customRoleSchema);

// src/models/Deposit.ts
var import_mongoose13 = __toESM(require("mongoose"));
var depositSchema = new import_mongoose13.Schema({
  depositId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  amount: { type: Number, required: true },
  planId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  endTime: { type: Date, required: true }
});
var Deposit = import_mongoose13.default.models.Deposit || (0, import_mongoose13.model)("Deposit", depositSchema);

// src/models/Giveaway.ts
var import_mongoose14 = __toESM(require("mongoose"));
var GiveawaySchema = new import_mongoose14.Schema({
  messageId: { type: String, required: true, unique: true },
  channelId: { type: String, required: true },
  guildId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  prize: { type: String, required: true },
  winnersCount: { type: Number, required: true, min: 1 },
  endTime: { type: Date, required: true },
  participants: { type: [String], default: [] },
  forcedWinners: { type: [String], default: [] },
  ended: { type: Boolean, default: false },
  requiredRoleId: { type: String, default: null },
  rewardItemId: { type: String, default: null },
  rewardStars: { type: Number, default: 0 },
  minMessages: { type: Number, default: 0 }
});
var Giveaway = import_mongoose14.default.models.Giveaway || import_mongoose14.default.model("Giveaway", GiveawaySchema);

// src/models/GuildSettings.ts
var import_mongoose15 = __toESM(require("mongoose"));
var GuildSettingsSchema = new import_mongoose15.Schema({
  guildId: { type: String, required: true, unique: true },
  prefix: { type: String, default: "!" },
  muteRoleId: { type: String, default: null },
  moderatorRoleIds: { type: [String], default: [] },
  supporterRoleId: { type: String, default: null },
  goldplayerRoleId: { type: String, default: null },
  finalbossRoleId: { type: String, default: null },
  vipRoleId: { type: String, default: null },
  verifyRoleId: { type: String, default: null },
  auditChannelId: { type: String, default: null },
  globalShopLimits: {
    type: Map,
    of: new import_mongoose15.Schema({
      amountBought: { type: Number, default: 0 },
      resetAt: { type: Date, required: true }
    }, { _id: false }),
    default: {}
  }
});
var GuildSettings = import_mongoose15.default.models.GuildSettings || import_mongoose15.default.model("GuildSettings", GuildSettingsSchema);

// src/models/Marriage.ts
var import_mongoose16 = __toESM(require("mongoose"));
var marriageSchema = new import_mongoose16.Schema({
  guildId: { type: String, required: true },
  partner1Id: { type: String, required: true },
  partner2Id: { type: String, required: true },
  marriedAt: { type: Date, default: Date.now },
  familyBalance: { type: Number, default: 0 },
  lovePoints: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  lastDateAt: { type: Date, default: null }
});
marriageSchema.index({ guildId: 1, partner1Id: 1 });
marriageSchema.index({ guildId: 1, partner2Id: 1 });
var Marriage = import_mongoose16.default.models.Marriage || (0, import_mongoose16.model)("Marriage", marriageSchema);

// src/models/ModActionLog.ts
var import_mongoose17 = __toESM(require("mongoose"));
var modActionLogSchema = new import_mongoose17.Schema({
  moderatorId: { type: String, required: true },
  guildId: { type: String, required: true },
  actionType: { type: String, required: true },
  targetId: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });
modActionLogSchema.index({ moderatorId: 1, guildId: 1, actionType: 1, date: -1 });
var ModActionLog = import_mongoose17.default.models.ModActionLog || (0, import_mongoose17.model)("ModActionLog", modActionLogSchema);

// src/models/Mute.ts
var import_mongoose18 = __toESM(require("mongoose"));
var muteSchema = new import_mongoose18.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  moderatorId: { type: String, required: true },
  reason: { type: String, default: "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430" },
  expiresAt: { type: Date, default: null },
  hasAppealed: { type: Boolean, default: false }
}, { timestamps: true });
muteSchema.index({ userId: 1, guildId: 1 });
muteSchema.index({ expiresAt: 1 });
var Mute = import_mongoose18.default.models.Mute || (0, import_mongoose18.model)("Mute", muteSchema);

// src/models/Notification.ts
var import_mongoose19 = __toESM(require("mongoose"));
var schema = new import_mongoose19.default.Schema({
  userId: { type: String, required: true, index: true },
  type: { type: String, enum: ["INFO", "SUCCESS", "WARNING", "ERROR"], default: "INFO" },
  message: { type: String, required: true },
  link: { type: String },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, expires: 604800 }
});
var Notification = import_mongoose19.default.models.Notification || import_mongoose19.default.model("Notification", schema);

// src/models/Recruitment.ts
var import_mongoose20 = __toESM(require("mongoose"));
var recruitmentSchema = new import_mongoose20.Schema({
  guildId: { type: String, required: true },
  recruitmentId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  roleId: { type: String, required: true },
  publicChannelId: { type: String, required: true },
  adminChannelId: { type: String, required: true },
  messageId: { type: String, required: true },
  questions: { type: [String], required: true },
  applicants: { type: [String], default: [] },
  status: { type: String, default: "active" }
});
var Recruitment = import_mongoose20.default.models.Recruitment || (0, import_mongoose20.model)("Recruitment", recruitmentSchema);

// src/models/RecruitmentApplication.ts
var import_mongoose21 = __toESM(require("mongoose"));
var answerSchema = new import_mongoose21.default.Schema({
  questionId: { type: String, required: true },
  questionLabel: { type: String, required: true },
  value: { type: String, required: true }
}, { _id: false });
var recruitmentApplicationSchema = new import_mongoose21.default.Schema({
  guildId: { type: String, required: true, index: true },
  formId: { type: import_mongoose21.default.Schema.Types.ObjectId, ref: "RecruitmentForm", required: true, index: true },
  formTitle: { type: String, required: true },
  targetStaffRole: { type: String, default: "" },
  isAuthenticated: { type: Boolean, default: true },
  userId: { type: String, default: null, index: true },
  username: { type: String, required: true },
  avatar: { type: String, default: null },
  discordContact: { type: String, default: "" },
  userStatsSnapshot: {
    level: { type: Number, default: 1 },
    stars: { type: Number, default: 0 },
    totalMessages: { type: Number, default: 0 },
    totalVoiceMinutes: { type: Number, default: 0 },
    mutesIssued: { type: Number, default: 0 },
    warningsReceived: { type: Number, default: 0 }
  },
  answers: [answerSchema],
  status: {
    type: String,
    enum: ["PENDING", "INTERVIEW", "ACCEPTED", "REJECTED"],
    default: "PENDING",
    index: true
  },
  reviewedBy: {
    id: { type: String, default: null },
    username: { type: String, default: null },
    role: { type: String, default: null }
  },
  reviewComment: { type: String, default: "" },
  reviewedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now, index: true }
});
var RecruitmentApplication = import_mongoose21.default.models.RecruitmentApplication || import_mongoose21.default.model("RecruitmentApplication", recruitmentApplicationSchema);

// src/models/RecruitmentForm.ts
var import_mongoose22 = __toESM(require("mongoose"));
var questionSchema = new import_mongoose22.default.Schema({
  id: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String, default: "" },
  type: {
    type: String,
    enum: ["short_text", "paragraph", "number", "select", "checkbox"],
    default: "paragraph"
  },
  options: [{ type: String }],
  required: { type: Boolean, default: true },
  minLength: { type: Number, default: 0 },
  maxLength: { type: Number, default: 1e3 }
}, { _id: false });
var recruitmentFormSchema = new import_mongoose22.default.Schema({
  guildId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, index: true },
  targetStaffRole: { type: String, default: "\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440" },
  shortDescription: { type: String, default: "" },
  requirements: [{ type: String }],
  icon: { type: String, default: "fa-user-shield" },
  accentColor: { type: String, default: "#d946ef" },
  isOpen: { type: Boolean, default: true },
  deadline: { type: Date, default: null },
  maxSlots: { type: Number, default: 0 },
  requireAuth: { type: Boolean, default: true },
  minLevel: { type: Number, default: 0 },
  minMessages: { type: Number, default: 0 },
  cooldownDays: { type: Number, default: 7 },
  reviewerRoles: {
    type: [String],
    default: ["\u0417\u0435\u0439\u043D", "\u0422\u0435\u0445 \u0430\u0434\u043C\u0438\u043D", "\u0410\u0434\u043C\u0438\u043D", "\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440"]
  },
  questions: [questionSchema],
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
var RecruitmentForm = import_mongoose22.default.models.RecruitmentForm || import_mongoose22.default.model("RecruitmentForm", recruitmentFormSchema);

// src/models/Season.ts
var import_mongoose23 = __toESM(require("mongoose"));
var PERK_LABELS = {
  shop_discount: (val) => `-${Math.round(val * 100)}% \u043D\u0430 \u0432\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0432 /shop`,
  bp_xp_boost: (val) => `+${Math.round(val * 100)}% \u043A\u043E \u0432\u0441\u0435\u043C\u0443 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C\u043E\u043C\u0443 \u043E\u043F\u044B\u0442\u0443 \u0411\u041F`,
  casino_cashback: (val) => `+${Math.round(val * 100)}% \u043A\u044D\u0448\u0431\u0435\u043A \u043F\u0440\u0438 \u043F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u0432 /casino \u0438 /tower`,
  work_boost: (val) => `+${Math.round(val * 100)}% \u043A \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0435 \u043D\u0430 \u0441\u043C\u0435\u043D\u0430\u0445 \u0432 /work`,
  msg_stars_boost: (val) => `+${val} \u2B50 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0432 \u0447\u0430\u0442\u0435`,
  voice_stars_boost: (val) => `+${val} \u2B50 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443 \u0432 \u0432\u043E\u0439\u0441\u0435`
};
var DEFAULT_FACTIONS = {
  neon: {
    name: "\u042D\u0441\u043A\u0438\u0437",
    emoji: "\u270F\uFE0F",
    color: 10181046,
    description: "\u041C\u0430\u0441\u0442\u0435\u0440\u0430 \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0437\u0430\u0440\u0438\u0441\u043E\u0432\u043E\u043A, \u0441\u0442\u0440\u0438\u0442-\u0430\u0440\u0442\u0430 \u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0442-\u0434\u0438\u0437\u0430\u0439\u043D\u0430",
    perkType: "shop_discount",
    perkValue: 0.05
  },
  quantum: {
    name: "\u041F\u0430\u043B\u0438\u0442\u0440\u0430",
    emoji: "\u{1F3A8}",
    color: 3447003,
    description: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0436\u0438\u0432\u043E\u043F\u0438\u0441\u044C, \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u0446\u0432\u0435\u0442\u043E\u043C \u0438 \u0442\u0435\u043D\u044F\u043C\u0438",
    perkType: "bp_xp_boost",
    perkValue: 0.15
  },
  iron: {
    name: "\u0425\u043E\u043B\u0441\u0442",
    emoji: "\u{1F5BC}\uFE0F",
    color: 15158332,
    description: "\u0410\u0432\u0430\u043D\u0433\u0430\u0440\u0434 \u0438 \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u0438\u044F. \u0422\u0435, \u043A\u0442\u043E \u043D\u0435 \u0431\u043E\u0438\u0442\u0441\u044F \u0438\u0441\u043F\u0430\u0447\u043A\u0430\u0442\u044C \u0440\u0443\u043A\u0438 \u0432 \u043A\u0440\u0430\u0441\u043A\u0435",
    perkType: "casino_cashback",
    perkValue: 0.05
  }
};
function getSeasonFactions(season) {
  if (!season || !season.factions) return DEFAULT_FACTIONS;
  return {
    neon: season.factions.neon?.name ? season.factions.neon : DEFAULT_FACTIONS.neon,
    quantum: season.factions.quantum?.name ? season.factions.quantum : DEFAULT_FACTIONS.quantum,
    iron: season.factions.iron?.name ? season.factions.iron : DEFAULT_FACTIONS.iron
  };
}
function getTotalSeasonXP(level, currentXp) {
  const safeLevel = Math.max(1, level || 1);
  const completedLevels = Math.min(safeLevel - 1, 99);
  const levelsXp = completedLevels * 500 + 100 * (completedLevels * (completedLevels + 1) / 2);
  return levelsXp + (currentXp || 0);
}
var factionConfigSchema = new import_mongoose23.Schema({
  name: { type: String, required: true },
  emoji: { type: String, default: "\u{1F6A9}" },
  color: { type: Number, default: 5793266 },
  description: { type: String, default: "" },
  perkType: { type: String, default: "bp_xp_boost" },
  perkValue: { type: Number, default: 0.1 }
}, { _id: false });
var seasonRewardSchema = new import_mongoose23.Schema({
  level: { type: Number, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  itemId: { type: String, default: null }
}, { _id: false });
var seasonSchema = new import_mongoose23.Schema({
  seasonId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, default: "" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  themeColor: { type: String, default: "#5865F2" },
  isActive: { type: Boolean, default: false },
  freeRewards: { type: [seasonRewardSchema], default: [] },
  premiumRewards: { type: [seasonRewardSchema], default: [] },
  announcementChannelId: { type: String, default: null },
  rewardPreset: { type: String, default: "classic" },
  factions: {
    neon: { type: factionConfigSchema, default: () => ({ ...DEFAULT_FACTIONS.neon }) },
    quantum: { type: factionConfigSchema, default: () => ({ ...DEFAULT_FACTIONS.quantum }) },
    iron: { type: factionConfigSchema, default: () => ({ ...DEFAULT_FACTIONS.iron }) }
  }
});
var Season = import_mongoose23.default.models.Season || (0, import_mongoose23.model)("Season", seasonSchema);

// src/models/StaffBlacklist.ts
var import_mongoose24 = __toESM(require("mongoose"));
var staffBlacklistSchema = new import_mongoose24.default.Schema({
  guildId: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  username: { type: String, default: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C" },
  avatar: { type: String, default: null },
  reason: { type: String, required: true },
  addedBy: {
    id: { type: String, required: true },
    username: { type: String, required: true }
  },
  expiresAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});
staffBlacklistSchema.index({ guildId: 1, userId: 1 }, { unique: true });
var StaffBlacklist = import_mongoose24.default.models.StaffBlacklist || import_mongoose24.default.model("StaffBlacklist", staffBlacklistSchema);

// src/models/StaffDossier.ts
var import_mongoose25 = __toESM(require("mongoose"));
var staffLogEntrySchema = new import_mongoose25.default.Schema({
  type: {
    type: String,
    enum: ["INCIDENT", "COMMENDATION", "PROMOTION", "DEMOTION", "HIRED", "DISMISSED", "LOA"],
    default: "INCIDENT"
  },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  pointsDelta: { type: Number, default: 0 },
  pointsAfter: { type: Number, default: 10 },
  evidenceUrls: [{ type: String }],
  adminId: { type: String, required: true },
  adminName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
var staffDossierSchema = new import_mongoose25.default.Schema({
  guildId: { type: String, required: true, index: true },
  userId: { type: String, required: true, index: true },
  competenceScore: { type: Number, default: 10, min: 0, max: 10 },
  appointedAt: { type: Date, default: Date.now },
  appointedBy: { type: String, default: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" },
  initialRole: { type: String, default: "" },
  adminNotes: { type: String, default: "" },
  leaveOfAbsence: {
    active: { type: Boolean, default: false },
    reason: { type: String, default: "" },
    until: { type: Date, default: null }
  },
  history: [staffLogEntrySchema],
  updatedAt: { type: Date, default: Date.now }
});
staffDossierSchema.index({ guildId: 1, userId: 1 }, { unique: true });
var StaffDossier = import_mongoose25.default.models.StaffDossier || import_mongoose25.default.model("StaffDossier", staffDossierSchema);

// src/models/Subscription.ts
var import_mongoose26 = __toESM(require("mongoose"));
var subscriptionSchema = new import_mongoose26.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  roleId: { type: String, required: true },
  tier: { type: String, default: "VIP" },
  expiresAt: { type: Date, required: true }
});
subscriptionSchema.index({ expiresAt: 1 });
var Subscription = import_mongoose26.default.models.Subscription || (0, import_mongoose26.model)("Subscription", subscriptionSchema);

// src/models/SystemStatus.ts
var import_mongoose27 = __toESM(require("mongoose"));
var systemStatusSchema = new import_mongoose27.default.Schema({
  type: { type: String, enum: ["incident"], required: true, default: "incident" },
  service: { type: String, enum: ["site", "bot", "database"], required: true },
  status: { type: String, enum: ["offline", "degraded"], required: true },
  message: { type: String, required: true },
  resolved: { type: Boolean, default: false },
  resolvedAt: { type: Date }
}, {
  timestamps: true,
  collection: "system_status"
});
var SystemStatus = import_mongoose27.default.models.SystemStatus || import_mongoose27.default.model("SystemStatus", systemStatusSchema);

// src/models/UserActivity.ts
var import_mongoose28 = __toESM(require("mongoose"));
var userActivitySchema = new import_mongoose28.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  date: { type: Date, required: true },
  messages: { type: Number, default: 0 },
  voiceMinutes: { type: Number, default: 0 },
  starsEarned: { type: Number, default: 0 }
});
userActivitySchema.index({ userId: 1, guildId: 1, date: 1 }, { unique: true });
userActivitySchema.index({ date: 1 }, { expireAfterSeconds: 7776e3 });
var UserActivity = import_mongoose28.default.models.UserActivity || (0, import_mongoose28.model)("UserActivity", userActivitySchema);

// src/models/UserProfile.ts
var import_mongoose29 = __toESM(require("mongoose"));
var inventoryItemSchema = new import_mongoose29.Schema({
  itemId: { type: String, required: true },
  amount: { type: Number, default: 1 },
  acquiredAt: { type: Date, default: Date.now }
}, { _id: false });
var supplyContractSchema = new import_mongoose29.Schema({
  id: { type: String, required: true },
  itemId: { type: String, required: true },
  requiredAmount: { type: Number, required: true },
  rewardStars: { type: Number, required: true },
  rewardXP: { type: Number, required: true },
  completed: { type: Boolean, default: false }
}, { _id: false });
var walletTransactionSchema = new import_mongoose29.Schema({
  type: { type: String, enum: ["in", "out"], required: true },
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });
var userProfileSchema = new import_mongoose29.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  username: { type: String, default: "\u0418\u0433\u0440\u043E\u043A" },
  avatar: { type: String, default: null },
  staffRole: { type: String, default: "\u0418\u0433\u0440\u043E\u043A" },
  joinedAt: { type: Date, default: Date.now },
  mutesIssued: { type: Number, default: 0 },
  isBanned: { type: Boolean, default: false },
  banReason: { type: String, default: null },
  deviceTokens: { type: [String], default: [] },
  ips: { type: [String], default: [] },
  isVerified: { type: Boolean, default: false },
  firstLoginAt: { type: Date },
  stars: { type: Number, default: 0 },
  inventory: { type: [inventoryItemSchema], default: [] },
  activeBackground: { type: String, default: null },
  activeFrame: { type: String, default: null },
  skipLootboxAnimation: { type: Boolean, default: false },
  xpMultiplier: { type: Number, default: 1 },
  xpMultiplierExpiresAt: { type: Date, default: null },
  starsMultiplier: { type: Number, default: 1 },
  starsMultiplierExpiresAt: { type: Date, default: null },
  luckMultiplier: { type: Number, default: 1 },
  luckMultiplierExpiresAt: { type: Date, default: null },
  antiMuteShields: { type: Number, default: 0 },
  lastDailyAt: { type: Date, default: null },
  dailyStreak: { type: Number, default: 0 },
  totalMessages: { type: Number, default: 0 },
  totalVoiceMinutes: { type: Number, default: 0 },
  muteNotificationsDisabled: { type: Boolean, default: false },
  transferNotifDisabled: { type: Boolean, default: false },
  dailyNotifEnabled: { type: Boolean, default: false },
  inflationNotifDisabled: { type: Boolean, default: false },
  questNotifDisabled: { type: Boolean, default: false },
  bpNotifDisabled: { type: Boolean, default: false },
  totalEarned: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  gamesPlayedToday: { type: Number, default: 0 },
  lastGameAt: { type: Date, default: null },
  lastUpgraderDate: { type: Date, default: null },
  upgraderPlaysToday: { type: Number, default: 0 },
  upgraderTotalPlays: { type: Number, default: 0 },
  upgraderTotalProfit: { type: Number, default: 0 },
  reputation: { type: Number, default: 0 },
  lastReputationGivenAt: { type: Date, default: null },
  isWikiEditor: { type: Boolean, default: false },
  lastWorkAt: { type: Date, default: null },
  workShifts: { type: Number, default: 0 },
  lastRobAt: { type: Date, default: null },
  unlockedAchievements: { type: [String], default: [] },
  activeTitle: { type: String, default: null },
  patreonSince: { type: Date, default: null },
  lastPatreonRewardAt: { type: Date, default: null },
  lastShieldUsedAt: { type: Date, default: null },
  commentStrikes: { type: Number, default: 0 },
  commentBannedUntil: { type: Date, default: null },
  awardBadges: [
    {
      categoryTitle: { type: String, required: true },
      year: { type: Number, default: 2026 },
      awardName: { type: String, default: "\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u0412\u0435\u043D\u0438\u043A" },
      icon: { type: String, default: "fa-broom" }
    }
  ],
  personalShopLimits: {
    type: Map,
    of: new import_mongoose29.Schema({
      amountBought: { type: Number, default: 0 },
      resetAt: { type: Date, required: true }
    }, { _id: false }),
    default: {}
  },
  activeExpedition: {
    zoneId: { type: String, default: null },
    startedAt: { type: Date, default: null },
    endsAt: { type: Date, default: null }
  },
  supplyContracts: { type: [supplyContractSchema], default: [] },
  lastContractsGeneratedAt: { type: Date, default: null },
  transactions: { type: [walletTransactionSchema], default: [] }
}, { timestamps: true });
userProfileSchema.index({ userId: 1, guildId: 1 }, { unique: true });
userProfileSchema.index({ guildId: 1, stars: -1 });
userProfileSchema.index({ guildId: 1, totalMessages: -1 });
userProfileSchema.index({ guildId: 1, totalVoiceMinutes: -1 });
userProfileSchema.index({ guildId: 1, reputation: -1 });
var UserProfile = import_mongoose29.default.models.UserProfile || (0, import_mongoose29.model)("UserProfile", userProfileSchema, "user_profiles");

// src/models/UserQuest.ts
var import_mongoose30 = __toESM(require("mongoose"));
var QuestSchema = new import_mongoose30.Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  target: { type: Number, required: true },
  progress: { type: Number, default: 0 },
  rewardStars: { type: Number, default: 0 },
  rewardXP: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  description: { type: String, required: true },
  period: { type: String, enum: ["daily", "weekly", "monthly", "season"], required: true }
});
var UserQuestSchema = new import_mongoose30.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  quests: [QuestSchema],
  lastDailyGenerated: { type: Date, default: () => /* @__PURE__ */ new Date(0) },
  lastWeeklyGenerated: { type: Date, default: () => /* @__PURE__ */ new Date(0) },
  lastMonthlyGenerated: { type: Date, default: () => /* @__PURE__ */ new Date(0) },
  lastDailyReroll: { type: Date, default: () => /* @__PURE__ */ new Date(0) },
  dailyAllBonusClaimed: { type: Boolean, default: false }
});
UserQuestSchema.index({ userId: 1, guildId: 1 }, { unique: true });
var UserQuest = import_mongoose30.default.models.UserQuest || import_mongoose30.default.model("UserQuest", UserQuestSchema);

// src/models/ViolationEvidence.ts
var import_mongoose31 = __toESM(require("mongoose"));
var violationEvidenceSchema = new import_mongoose31.default.Schema({
  guildId: { type: String, required: true, index: true },
  violatorId: { type: String, required: true, index: true },
  violatorName: { type: String, required: true },
  category: {
    type: String,
    enum: ["voice", "chat", "cheats", "scam", "ban_evasion", "other"],
    default: "voice"
  },
  punishment: {
    type: String,
    enum: ["ban", "mute", "pending"],
    default: "mute"
  },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  timecodes: { type: String, default: "" },
  videoUrl: { type: String, required: true },
  videoSource: { type: String, enum: ["local", "external"], default: "local" },
  fileSize: { type: Number, default: 0 },
  staffId: { type: String, required: true },
  staffName: { type: String, required: true },
  staffRole: { type: String, default: "\u0410\u0434\u043C\u0438\u043D" },
  createdAt: { type: Date, default: Date.now }
});
var ViolationEvidence = import_mongoose31.default.models.ViolationEvidence || import_mongoose31.default.model("ViolationEvidence", violationEvidenceSchema);

// src/models/WallMessage.ts
var import_mongoose32 = __toESM(require("mongoose"));
var wallMessageSchema = new import_mongoose32.default.Schema({
  targetUserId: { type: String, required: true, index: true },
  authorId: { type: String, required: true },
  authorName: { type: String, required: true },
  authorAvatar: { type: String, default: "/assets/img/avatars/default_avatar.png" },
  text: { type: String, required: true, maxlength: 200 }
}, {
  timestamps: true
});
var WallMessage = import_mongoose32.default.models.WallMessage || import_mongoose32.default.model("WallMessage", wallMessageSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Article,
  AuditLog,
  AwardCategory,
  AwardSettings,
  AwardSuggestion,
  AwardVote,
  Ban,
  BanAppeal,
  BattlePass,
  BssBee,
  BssValueItem,
  CustomRole,
  DEFAULT_FACTIONS,
  Deposit,
  Giveaway,
  GuildSettings,
  ITEMS,
  LOOT_TABLES,
  Marriage,
  ModActionLog,
  Mute,
  Notification,
  PERK_LABELS,
  Recruitment,
  RecruitmentApplication,
  RecruitmentForm,
  Season,
  StaffBlacklist,
  StaffDossier,
  Subscription,
  SystemStatus,
  UserActivity,
  UserProfile,
  UserQuest,
  ViolationEvidence,
  WallMessage,
  getSeasonFactions,
  getTotalSeasonXP
});
