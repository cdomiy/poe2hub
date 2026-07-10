import { defineCollection, z } from "astro:content";
import { reference } from "astro:content";

// ---------- Build 攻略 ----------
const builds = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    class: z.string(),          // 如 Huntress
    ascendancy: z.string(),     // 如 Spirit Walker
    coreSkill: z.string(),      // 如 Bleed / Minion / Lightning
    patchVersion: z.string(),   // 该build最后校验过的版本，如 "0.5.4b"
    updatedAt: z.date(),
    tier: z.enum(["S", "A", "B", "C"]),
    playstyle: z.enum(["league-starter", "budget", "endgame", "all-rounder"]),
    estCost: z.enum(["low", "medium", "high"]),
    summary: z.string(),         // TL;DR 一句话摘要
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    // 升华节点：nodesVerified=true表示节点名称逐个核实过官方/wiki数据，false表示只做了
    // 机制方向的定性描述，没有逐点核实具体节点名，避免把未核实的具体名称当事实发布
    nodesVerified: z.boolean().default(false),
    ascendancyNodes: z.array(
      z.object({
        order: z.number(),
        name: z.string(),
        effect: z.string(),
      })
    ).default([]),
    skillGems: z.object({
      mainSkill: z.object({ gem: z.string(), supports: z.array(z.string()) }).optional(),
      secondarySkill: z.object({ gem: z.string(), supports: z.array(z.string()) }).optional(),
      spiritSkills: z.array(z.object({ gem: z.string(), supports: z.array(z.string()) })).default([]),
      utilitySkills: z.array(z.object({ gem: z.string(), supports: z.array(z.string()) })).default([]),
    }).optional(),
    gearPriority: z.array(
      z.object({
        slot: z.string(),
        item: z.string(),
        note: z.string().optional(),
        priority: z.enum(["core", "recommended", "luxury"]),
      })
    ),
    passiveTreePriority: z.object({
      earlyGame: z.string(),
      midGame: z.string(),
      endGame: z.string(),
    }).optional(),
    levelingGuide: z.object({
      act1to3: z.string(),
      act4to6: z.string(),
      mapping: z.string(),
    }).optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    dataSources: z.array(z.string()).default([]),
    relatedBosses: z.array(reference("bosses")).default([]),
    relatedMechanics: z.array(reference("mechanics")).default([]),
  }),
});

// ---------- Boss 攻略 ----------
const bosses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum(["campaign", "pinnacle"]),
    recommendedLevel: z.number().optional(),
    updatedAt: z.date(),
    patchVersion: z.string(),
    phases: z.array(
      z.object({
        name: z.string(),
        trigger: z.string(),      // 触发条件，如"血量低于50%"
        mechanic: z.string(),
        counter: z.string(),      // 应对方式
      })
    ),
    commonDeaths: z.array(z.string()),
    drops: z.array(z.string()).default([]),
    relatedBuilds: z.array(reference("builds")).default([]),
  }),
});

// ---------- 机制百科（常青页） ----------
const mechanics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    system: z.string(),          // 如 "Runes of Aldur" / "Delirium"
    lastUpdated: z.date(),
    currentPatch: z.string(),    // 用于顶部 version-flag
    changelog: z.array(
      z.object({
        version: z.string(),
        date: z.date(),
        change: z.string(),
      })
    ),
    relatedBuilds: z.array(reference("builds")).default([]),
  }),
});

// ---------- 补丁速报 ----------
const patches = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    version: z.string(),
    releaseDate: z.date(),
    summary: z.string(),
    changes: z.array(
      z.object({
        category: z.enum(["class", "mechanic", "item", "bugfix"]),
        text: z.string(),
        linkedMechanic: reference("mechanics").optional(),
        linkedBuild: reference("builds").optional(),
      })
    ),
  }),
});

// ---------- 职业导览（Class Guide） ----------
const classes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    attributeFocus: z.string(),   // 如 "Strength" / "Dexterity / Intelligence"
    weaponType: z.string(),       // 如 "Maces and Slams"
    summary: z.string(),
    playstyleNotes: z.array(z.string()),
    goodFor: z.array(z.string()),
    ascendancySlugs: z.array(reference("builds")).default([]),
  }),
});

export const collections = { builds, bosses, mechanics, patches, classes };
