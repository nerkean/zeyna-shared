import mongoose, { Document } from 'mongoose';

type ItemType = 'background' | 'frame' | 'role' | 'consumable' | 'lootbox' | 'material' | 'key';
type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
interface IItemRecipe {
    itemId: string;
    amount: number;
}
interface IItemLimit {
    type: 'personal' | 'global';
    amount: number;
    period: 'daily' | 'weekly';
}
interface IItemDefinition {
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
declare const ITEMS: Record<string, IItemDefinition>;

interface ILootReward {
    type: 'item' | 'currency';
    itemId?: string;
    minAmount: number;
    maxAmount: number;
    chance: number;
}
declare const LOOT_TABLES: Record<string, ILootReward[]>;

declare const Article: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    slug: string;
    title: string;
    description: string;
    content: string;
    attachments: mongoose.Types.DocumentArray<{
        name?: string;
        path?: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string;
        path?: string;
    }, {}, {}> & {
        name?: string;
        path?: string;
    }>;
    category: "guides" | "bees" | "items" | "mechanics" | "server";
    icon: string;
    author: string;
    views: number;
    isPublished: any;
    reactionsFire: number;
    reactionsHelpful: number;
    tags: string[];
    image?: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const AuditLog: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    adminId: string;
    adminName: string;
    action: string;
    details: string;
    targetId?: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const AwardCategory: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    title: string;
    description: string;
    icon: string;
    guildId: string;
    order: number;
    unlockDay: number;
    nominees: mongoose.Types.DocumentArray<{
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }, {}, {}> & {
        id: string;
        name: string;
        subtitle: string;
        discordUserId: string;
        imageUrl: string;
    }>;
    winnerNomineeId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const AwardSettings: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
}, mongoose.Document<unknown, {}, {
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    updatedAt: NativeDate;
    guildId: string;
    eventTitle: string;
    eventSubtitle: string;
    votingOpen: any;
    minDaysOnServer: number;
    resultsRevealed: any;
    streamUrl: string;
    startTime?: NativeDate;
    endTime?: NativeDate;
    streamTime?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const AwardSuggestion: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    categoryTitle: string;
    suggestedByUserId: string;
    suggestedByUsername: string;
    candidateName: string;
    candidateDiscordId: string;
    reason: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const AwardVote: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    categoryId: any;
    nomineeId: string;
    userId: string;
    username: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

interface IBan extends Document {
    userId: string;
    guildId: string;
    moderatorId: string;
    reason: string;
    expiresAt: Date;
}
declare const Ban: mongoose.Model<IBan, {}, {}, {}, mongoose.Document<unknown, {}, IBan, {}, mongoose.DefaultSchemaOptions> & IBan & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IBan & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const BanAppeal: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    userId: string;
    username: string;
    banReason: string;
    appealText: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    adminComment?: string;
    handledBy?: string;
    handledAt?: NativeDate;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

type FactionType = 'neon' | 'quantum' | 'iron' | null;
interface IBattlePass extends Document {
    userId: string;
    guildId: string;
    seasonId: string;
    xp: number;
    level: number;
    isPremium: boolean;
    claimedFreeLevels: number[];
    claimedPremiumLevels: number[];
    faction: FactionType;
}
declare const BattlePass: mongoose.Model<IBattlePass, {}, {}, {}, mongoose.Document<unknown, {}, IBattlePass, {}, mongoose.DefaultSchemaOptions> & IBattlePass & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IBattlePass & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const BssBee: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    name: string;
    imageUrl: string;
    order: number;
    code: string;
    nameRu: string;
    color: "blue" | "red" | "white" | "colorless";
    rarity: "common" | "rare" | "epic" | "legendary" | "mythic" | "event";
    giftedBonus: string;
    roleTag: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const BssValueItem: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
}, mongoose.Document<unknown, {}, {
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    updatedAt: NativeDate;
    name: string;
    category: "vouchers" | "cubs" | "signs" | "stamps" | "stickers" | "hives" | "beequips";
    imageUrl: string;
    order: number;
    nameRu: string;
    itemId: string;
    stackBoost: string;
    valueSigns: number;
    demand: "high" | "mid" | "low";
    trend: "rising" | "stable" | "falling";
    updatedBy: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

interface ICustomRole extends Document {
    userId: string;
    guildId: string;
    roleId: string;
    expiresAt: Date;
}
declare const CustomRole: mongoose.Model<ICustomRole, {}, {}, {}, mongoose.Document<unknown, {}, ICustomRole, {}, mongoose.DefaultSchemaOptions> & ICustomRole & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ICustomRole & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IDeposit extends Document {
    depositId: string;
    userId: string;
    guildId: string;
    amount: number;
    planId: string;
    createdAt: Date;
    endTime: Date;
}
declare const Deposit: mongoose.Model<IDeposit, {}, {}, {}, mongoose.Document<unknown, {}, IDeposit, {}, mongoose.DefaultSchemaOptions> & IDeposit & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IDeposit & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IGiveaway extends Document {
    messageId: string;
    channelId: string;
    guildId: string;
    title: string;
    description: string;
    prize: string;
    winnersCount: number;
    endTime: Date;
    participants: string[];
    forcedWinners: string[];
    ended: boolean;
    requiredRoleId: string | null;
    rewardItemId: string | null;
    rewardStars: number;
    minMessages: number;
}
declare const Giveaway: mongoose.Model<IGiveaway, {}, {}, {}, mongoose.Document<unknown, {}, IGiveaway, {}, mongoose.DefaultSchemaOptions> & IGiveaway & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IGiveaway & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IGuildSettings extends Document {
    guildId: string;
    prefix: string;
    muteRoleId: string | null;
    moderatorRoleIds: string[];
    supporterRoleId: string | null;
    goldplayerRoleId: string | null;
    finalbossRoleId: string | null;
    vipRoleId: string | null;
    verifyRoleId: string | null;
    auditChannelId?: string | null;
    globalShopLimits: Map<string, {
        amountBought: number;
        resetAt: Date;
    }>;
}
declare const GuildSettings: mongoose.Model<IGuildSettings, {}, {}, {}, mongoose.Document<unknown, {}, IGuildSettings, {}, mongoose.DefaultSchemaOptions> & IGuildSettings & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IGuildSettings & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IMarriage extends Document {
    guildId: string;
    partner1Id: string;
    partner2Id: string;
    marriedAt: Date;
    familyBalance: number;
    lovePoints: number;
    level: number;
    lastDateAt?: Date | null;
}
declare const Marriage: mongoose.Model<IMarriage, {}, {}, {}, mongoose.Document<unknown, {}, IMarriage, {}, mongoose.DefaultSchemaOptions> & IMarriage & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IMarriage & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IModActionLog extends Document {
    moderatorId: string;
    guildId: string;
    actionType: string;
    targetId: string;
    date: Date;
}
declare const ModActionLog: mongoose.Model<IModActionLog, {}, {}, {}, mongoose.Document<unknown, {}, IModActionLog, {}, mongoose.DefaultSchemaOptions> & IModActionLog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IModActionLog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IMute extends Document {
    userId: string;
    guildId: string;
    moderatorId: string;
    reason: string;
    expiresAt: Date | null;
    hasAppealed: boolean;
}
declare const Mute: mongoose.Model<IMute, {}, {}, {}, mongoose.Document<unknown, {}, IMute, {}, mongoose.DefaultSchemaOptions> & IMute & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IMute & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const Notification: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    message: string;
    read: any;
    userId: string;
    link?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

interface IRecruitment extends Document {
    guildId: string;
    recruitmentId: string;
    title: string;
    description?: string;
    roleId: string;
    publicChannelId: string;
    adminChannelId: string;
    messageId: string;
    questions: string[];
    applicants: string[];
    status: 'active' | 'ended';
}
declare const Recruitment: mongoose.Model<IRecruitment, {}, {}, {}, mongoose.Document<unknown, {}, IRecruitment, {}, mongoose.DefaultSchemaOptions> & IRecruitment & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IRecruitment & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const RecruitmentApplication: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    username: string;
    status: "PENDING" | "REJECTED" | "INTERVIEW" | "ACCEPTED";
    formId: any;
    formTitle: string;
    targetStaffRole: string;
    isAuthenticated: any;
    discordContact: string;
    answers: mongoose.Types.DocumentArray<{
        value: string;
        questionId: string;
        questionLabel: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        value: string;
        questionId: string;
        questionLabel: string;
    }, {}, {}> & {
        value: string;
        questionId: string;
        questionLabel: string;
    }>;
    reviewComment: string;
    userId?: string;
    avatar?: string;
    userStatsSnapshot?: any;
    reviewedBy?: any;
    reviewedAt?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const RecruitmentForm: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    slug: string;
    title: string;
    icon: string;
    guildId: string;
    minMessages: number;
    questions: mongoose.Types.DocumentArray<{
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }, {}, {}> & {
        id: string;
        type: "number" | "select" | "short_text" | "paragraph" | "checkbox";
        required: any;
        minLength: number;
        maxLength: number;
        label: string;
        placeholder: string;
        options: string[];
    }>;
    targetStaffRole: string;
    shortDescription: string;
    requirements: string[];
    accentColor: string;
    isOpen: any;
    maxSlots: number;
    requireAuth: any;
    minLevel: number;
    cooldownDays: number;
    reviewerRoles: string[];
    createdBy: string;
    deadline?: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

type FactionKey = 'neon' | 'quantum' | 'iron';
type FactionPerkType = 'shop_discount' | 'bp_xp_boost' | 'casino_cashback' | 'work_boost' | 'msg_stars_boost' | 'voice_stars_boost';
interface IFactionConfig {
    name: string;
    emoji: string;
    color: number;
    description: string;
    perkType: FactionPerkType;
    perkValue: number;
}
interface ISeasonReward {
    level: number;
    type: 'item' | 'stars';
    amount: number;
    itemId?: string | null;
}
interface ISeason extends Document {
    seasonId: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    themeColor: string;
    isActive: boolean;
    freeRewards: ISeasonReward[];
    premiumRewards: ISeasonReward[];
    announcementChannelId: string | null;
    rewardPreset?: string;
    factions: {
        neon: IFactionConfig;
        quantum: IFactionConfig;
        iron: IFactionConfig;
    };
}
declare const PERK_LABELS: Record<FactionPerkType, (val: number) => string>;
declare const DEFAULT_FACTIONS: Record<FactionKey, IFactionConfig>;
declare function getSeasonFactions(season?: any): Record<FactionKey, IFactionConfig>;
declare function getTotalSeasonXP(level: number, currentXp: number): number;
declare const Season: mongoose.Model<ISeason, {}, {}, {}, mongoose.Document<unknown, {}, ISeason, {}, mongoose.DefaultSchemaOptions> & ISeason & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ISeason & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const StaffBlacklist: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    guildId: string;
    reason: string;
    userId: string;
    username: string;
    expiresAt?: NativeDate;
    avatar?: string;
    addedBy?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const StaffDossier: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
}, mongoose.Document<unknown, {}, {
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    updatedAt: NativeDate;
    guildId: string;
    userId: string;
    competenceScore: number;
    appointedAt: NativeDate;
    appointedBy: string;
    initialRole: string;
    adminNotes: string;
    history: mongoose.Types.DocumentArray<{
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }, {}, {}> & {
        createdAt: NativeDate;
        type: "INCIDENT" | "COMMENDATION" | "PROMOTION" | "DEMOTION" | "HIRED" | "DISMISSED" | "LOA";
        title: string;
        description: string;
        adminId: string;
        adminName: string;
        pointsDelta: number;
        pointsAfter: number;
        evidenceUrls: string[];
    }>;
    leaveOfAbsence?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

interface ISubscription extends Document {
    userId: string;
    guildId: string;
    roleId: string;
    tier: string;
    expiresAt: Date;
}
declare const Subscription: mongoose.Model<ISubscription, {}, {}, {}, mongoose.Document<unknown, {}, ISubscription, {}, mongoose.DefaultSchemaOptions> & ISubscription & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ISubscription & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const SystemStatus: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    collection: string;
}> & Omit<{
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps" | "collection"> & {
    timestamps: true;
    collection: string;
}> & Omit<{
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    type: "incident";
    message: string;
    status: "offline" | "degraded";
    service: "site" | "bot" | "database";
    resolved: any;
    resolvedAt?: NativeDate;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

interface IUserActivity extends Document {
    userId: string;
    guildId: string;
    date: Date;
    messages: number;
    voiceMinutes: number;
    starsEarned: number;
}
declare const UserActivity: mongoose.Model<IUserActivity, {}, {}, {}, mongoose.Document<unknown, {}, IUserActivity, {}, mongoose.DefaultSchemaOptions> & IUserActivity & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUserActivity & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

interface IInventoryItem {
    itemId: string;
    amount: number;
    acquiredAt: Date;
}
interface IActiveExpedition {
    zoneId: string | null;
    startedAt: Date | null;
    endsAt: Date | null;
}
interface ISupplyContract {
    id: string;
    itemId: string;
    requiredAmount: number;
    rewardStars: number;
    rewardXP: number;
    completed: boolean;
}
interface IWalletTransaction {
    type: 'in' | 'out';
    amount: number;
    reason: string;
    date: Date;
}
interface IAwardBadge {
    categoryTitle: string;
    year: number;
    awardName: string;
    icon: string;
}
interface IUserProfile extends Document {
    userId: string;
    guildId: string;
    username: string;
    avatar?: string | null;
    staffRole: string;
    joinedAt: Date;
    mutesIssued: number;
    isBanned: boolean;
    banReason?: string | null;
    deviceTokens: string[];
    ips: string[];
    isVerified: boolean;
    firstLoginAt?: Date;
    stars: number;
    inventory: IInventoryItem[];
    activeBackground?: string | null;
    activeFrame?: string | null;
    skipLootboxAnimation: boolean;
    xpMultiplier: number;
    xpMultiplierExpiresAt?: Date | null;
    starsMultiplier: number;
    starsMultiplierExpiresAt?: Date | null;
    luckMultiplier: number;
    luckMultiplierExpiresAt?: Date | null;
    antiMuteShields: number;
    lastDailyAt?: Date | null;
    dailyStreak: number;
    totalMessages: number;
    totalVoiceMinutes: number;
    muteNotificationsDisabled: boolean;
    transferNotifDisabled: boolean;
    dailyNotifEnabled: boolean;
    inflationNotifDisabled: boolean;
    questNotifDisabled: boolean;
    bpNotifDisabled: boolean;
    totalEarned: number;
    totalSpent: number;
    gamesPlayedToday: number;
    lastGameAt: Date | null;
    lastUpgraderDate?: Date | null;
    upgraderPlaysToday: number;
    upgraderTotalPlays: number;
    upgraderTotalProfit: number;
    reputation: number;
    lastReputationGivenAt?: Date | null;
    isWikiEditor: boolean;
    lastWorkAt?: Date | null;
    workShifts: number;
    lastRobAt?: Date | null;
    unlockedAchievements: string[];
    activeTitle?: string | null;
    patreonSince?: Date | null;
    lastPatreonRewardAt?: Date | null;
    lastShieldUsedAt?: Date | null;
    commentStrikes: number;
    commentBannedUntil?: Date | null;
    awardBadges: IAwardBadge[];
    personalShopLimits: Map<string, {
        amountBought: number;
        resetAt: Date;
    }>;
    activeExpedition?: IActiveExpedition;
    supplyContracts: ISupplyContract[];
    lastContractsGeneratedAt?: Date | null;
    transactions: IWalletTransaction[];
}
declare const UserProfile: mongoose.Model<IUserProfile, {}, {}, {}, mongoose.Document<unknown, {}, IUserProfile, {}, mongoose.DefaultSchemaOptions> & IUserProfile & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUserProfile & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

type QuestActionType = 'messages' | 'voice' | 'daily' | 'shop_buy' | 'craft' | 'lootbox' | 'inventory_use' | 'casino' | 'work' | 'rob';
type QuestPeriod = 'daily' | 'weekly' | 'monthly' | 'season';
interface IQuest {
    id: string;
    type: QuestActionType;
    target: number;
    progress: number;
    rewardStars: number;
    rewardXP: number;
    completed: boolean;
    description: string;
    period: QuestPeriod;
}
interface IUserQuest extends Document {
    userId: string;
    guildId: string;
    quests: IQuest[];
    lastDailyGenerated: Date;
    lastWeeklyGenerated: Date;
    lastMonthlyGenerated: Date;
    lastDailyReroll?: Date;
    dailyAllBonusClaimed?: boolean;
}
declare const UserQuest: mongoose.Model<IUserQuest, {}, {}, {}, mongoose.Document<unknown, {}, IUserQuest, {}, mongoose.DefaultSchemaOptions> & IUserQuest & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUserQuest & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;

declare const ViolationEvidence: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    createdAt: NativeDate;
    title: string;
    description: string;
    category: "voice" | "chat" | "cheats" | "scam" | "ban_evasion" | "other";
    guildId: string;
    staffRole: string;
    violatorId: string;
    violatorName: string;
    punishment: "ban" | "mute" | "pending";
    timecodes: string;
    videoUrl: string;
    videoSource: "local" | "external";
    fileSize: number;
    staffId: string;
    staffName: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

declare const WallMessage: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<{
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, mongoose.FlattenMaps<{
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, mongoose.FlattenMaps<{
    text: string;
    targetUserId: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;

export { Article, AuditLog, AwardCategory, AwardSettings, AwardSuggestion, AwardVote, Ban, BanAppeal, BattlePass, BssBee, BssValueItem, CustomRole, DEFAULT_FACTIONS, Deposit, type FactionKey, type FactionPerkType, type FactionType, Giveaway, GuildSettings, type IActiveExpedition, type IAwardBadge, type IBan, type IBattlePass, type ICustomRole, type IDeposit, type IFactionConfig, type IGiveaway, type IGuildSettings, type IInventoryItem, type IItemDefinition, type IItemLimit, type IItemRecipe, type ILootReward, type IMarriage, type IModActionLog, type IMute, type IQuest, type IRecruitment, type ISeason, type ISeasonReward, type ISubscription, type ISupplyContract, ITEMS, type IUserActivity, type IUserProfile, type IUserQuest, type IWalletTransaction, type ItemRarity, type ItemType, LOOT_TABLES, Marriage, ModActionLog, Mute, Notification, PERK_LABELS, type QuestActionType, type QuestPeriod, Recruitment, RecruitmentApplication, RecruitmentForm, Season, StaffBlacklist, StaffDossier, Subscription, SystemStatus, UserActivity, UserProfile, UserQuest, ViolationEvidence, WallMessage, getSeasonFactions, getTotalSeasonXP };
