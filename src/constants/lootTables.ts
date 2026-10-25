export interface ILootReward {
    type: 'item' | 'currency';
    itemId?: string;
    minAmount: number;
    maxAmount: number;
    chance: number; 
}

export const LOOT_TABLES: Record<string, ILootReward[]> = {
    'daily_bag': [
        { type: 'currency', minAmount: 10, maxAmount: 50, chance: 40 },
        { type: 'item', itemId: 'star_dust', minAmount: 5, maxAmount: 15, chance: 40 },
        { type: 'item', itemId: 'iron_ingot', minAmount: 1, maxAmount: 3, chance: 15 },
        { type: 'item', itemId: 'key_fragment', minAmount: 1, maxAmount: 1, chance: 5 }
    ],
    'bronze_chest': [
        { type: 'currency', minAmount: 50, maxAmount: 150, chance: 30 },
        { type: 'item', itemId: 'iron_ingot', minAmount: 3, maxAmount: 8, chance: 30 },
        { type: 'item', itemId: 'gold_ingot', minAmount: 1, maxAmount: 2, chance: 20 },
        { type: 'item', itemId: 'magic_powder', minAmount: 1, maxAmount: 3, chance: 15 },
        { type: 'item', itemId: 'xp_boost_small', minAmount: 1, maxAmount: 1, chance: 5 }
    ],
    'silver_chest': [
        { type: 'currency', minAmount: 150, maxAmount: 400, chance: 25 },
        { type: 'item', itemId: 'gold_ingot', minAmount: 2, maxAmount: 5, chance: 30 },
        { type: 'item', itemId: 'neon_tube', minAmount: 1, maxAmount: 3, chance: 20 },
        { type: 'item', itemId: 'cyber_part', minAmount: 1, maxAmount: 1, chance: 15 },
        { type: 'item', itemId: 'bg_stars_dark', minAmount: 1, maxAmount: 1, chance: 5 },
        { type: 'item', itemId: 'frame_laurel_blue', minAmount: 1, maxAmount: 1, chance: 5 }
    ],
    'cyber_box': [
        { type: 'currency', minAmount: 500, maxAmount: 1000, chance: 20 },
        { type: 'item', itemId: 'cyber_part', minAmount: 2, maxAmount: 4, chance: 30 },
        { type: 'item', itemId: 'quantum_chip', minAmount: 1, maxAmount: 2, chance: 20 },
        { type: 'item', itemId: 'xp_boost_large', minAmount: 1, maxAmount: 1, chance: 15 },
        { type: 'item', itemId: 'bg_matrix', minAmount: 1, maxAmount: 1, chance: 10 },
        { type: 'item', itemId: 'frame_neon_pink', minAmount: 1, maxAmount: 1, chance: 5 }
    ],
    'mystery_box': [
        { type: 'item', itemId: 'crystal_core', minAmount: 1, maxAmount: 3, chance: 25 },
        { type: 'item', itemId: 'ancient_scroll', minAmount: 1, maxAmount: 2, chance: 25 },
        { type: 'item', itemId: 'luck_potion', minAmount: 1, maxAmount: 1, chance: 20 },
        { type: 'item', itemId: 'bg_deep_ocean', minAmount: 1, maxAmount: 1, chance: 10 },
        { type: 'item', itemId: 'frame_patterned_bronze', minAmount: 1, maxAmount: 1, chance: 10 },
        { type: 'item', itemId: 'star_contract', minAmount: 1, maxAmount: 1, chance: 10 }
    ],
    'legendary_cache': [
        { type: 'item', itemId: 'dark_matter', minAmount: 1, maxAmount: 2, chance: 30 },
        { type: 'item', itemId: 'xp_boost_mega', minAmount: 1, maxAmount: 1, chance: 25 },
        { type: 'item', itemId: 'anti_mute_shield', minAmount: 1, maxAmount: 1, chance: 20 },
        { type: 'item', itemId: 'bg_crimson_moon', minAmount: 1, maxAmount: 1, chance: 10 },
        { type: 'item', itemId: 'frame_magma', minAmount: 1, maxAmount: 1, chance: 10 },
        { type: 'item', itemId: 'custom_role_ticket', minAmount: 1, maxAmount: 1, chance: 5 }
    ],
    'season_case': [
        { type: 'currency', minAmount: 1000, maxAmount: 2500, chance: 30 },
        { type: 'item', itemId: 'bg_cyberpunk_city', minAmount: 1, maxAmount: 1, chance: 20 },
        { type: 'item', itemId: 'frame_azure_spark', minAmount: 1, maxAmount: 1, chance: 20 },
        { type: 'item', itemId: 'bg_premium_galaxy', minAmount: 1, maxAmount: 1, chance: 15 },
        { type: 'item', itemId: 'frame_gold_plated', minAmount: 1, maxAmount: 1, chance: 15 }
    ]
};