---
title: "Warrior Smith of Kitava Forge & Slam Build Guide"
class: "Warrior"
ascendancy: "Smith of Kitava"
coreSkill: "Forge Hammer / Volcanic Fissure / Supercharged Slam"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "C"
playstyle: "budget"
estCost: "medium"
summary: "A forge-and-fire-themed ascendancy focused on maximum life, maximum resistances, and temporarily empowering your own weapon mid-fight. Outperforms Titan and Warbringer on raw survivability, but its offensive ceiling is lower than both."
pros:
  - "Arguably the highest raw-survivability Warrior ascendancy, ahead of Titan on pure defense"
  - "Unique weapon-empowerment mechanic gives it a distinct feel from the other two Warrior ascendancies"
  - "A dedicated Supercharged Slam endgame build variant exists and is actively maintained"
cons:
  - "Significantly weaker offense than both Titan and Warbringer in the current patch"
  - "Much smaller player base means fewer optimized, up-to-date build guides to reference"
  - "Not recommended as a league starter, better approached after you already understand the game"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Heat of the Forge"
    effect: "Grants Fire Spell on Hit, a meta skill that casts socketed fire spells as energy builds up from melee hits"
  - order: 2
    name: "Coal Stoker"
    effect: "Modifiers to Fire Resistance also grant Cold and Lightning Resistance at 50% of their value"
  - order: 3
    name: "Forged in Flame"
    effect: "Modifiers to Maximum Fire Resistance also grant an equal amount of Maximum Cold and Lightning Resistance"
  - order: 4
    name: "Against the Anvil"
    effect: "Grants Temper Weapon, a channeled skill that empowers your next melee hits and triggers Combust explosions"
  - order: 5
    name: "Living Weapon"
    effect: "Grants Manifest Weapon, summoning an animated copy of your equipped weapon to fight alongside you"
  - order: 6
    name: "Smith's Masterwork"
    effect: "Free to allocate; restricts you to a Normal-rarity Body Armour but lets you pick custom modifiers from a list including Tantalum Alloy, Kitavan Engraving, and Dedication to Kitava"
skillGems:
  mainSkill:
    gem: "Forge Hammer"
    supports: ["Fire Penetration", "Melee Physical", "Close Combat"]
  secondarySkill:
    gem: "Volcanic Fissure"
    supports: ["Fire Penetration", "Magnified Area"]
  spiritSkills:
    - gem: "Herald of Ash"
      supports: ["Magnified Effect"]
    - gem: "Anger"
      supports: []
  utilitySkills:
    - gem: "Infernal Cry"
      supports: ["Raging Cry"]
    - gem: "Leap Slam"
      supports: ["Faster Attack"]
gearPriority:
  - slot: "Weapon (2H Mace/Axe)"
    item: "Physical damage %, Fire damage %, Attack speed"
    note: "Increased elemental damage"
    priority: "core"
  - slot: "Body Armour"
    item: "Armour, Life, Fire resistance"
    note: "% reduced fire damage taken"
    priority: "recommended"
  - slot: "Other slots"
    item: "Life, Resistances"
    note: "Fire damage, Ignite magnitude"
    priority: "recommended"
passiveTreePriority:
  earlyGame: "Fire damage clusters, Life, Melee damage"
  midGame: "Ignite/elemental clusters, Armour"
  endGame: "Fire penetration, Ignite magnitude, Maximum life"
levelingGuide:
  act1to3: "Boneshatter + Ground Slam, Smith of Kitava's forge mechanic activates at your first Ascendancy point"
  act4to6: "Transition into Forge Hammer / Volcanic Fissure and start stacking fire damage on gear"
  mapping: "Full Smith setup focused on fire penetration and ignite scaling"
faqs:
  - q: "Should I league-start this?"
    a: "No, Titan or Warbringer are both stronger starting points. Smith of Kitava suits players who want a distinct playstyle and don't mind being off-meta."
  - q: "Is it actually weak, or just underplayed?"
    a: "Both, to some extent. The mechanic has real defensive merit, but the small player base means less optimization has been done on it compared to the other two."
dataSources:
  - "Mobalytics Smith of Kitava ascendancy node list"
  - "Maxroll.gg Smith of Kitava Ascendancy Overview"
  - "PoE2Wiki Fextralife Smith of Kitava page"
  - "Deltia's Gaming Smith of Kitava ascendancy guide"
  - "Maxroll.gg Boneshatter Smith of Kitava endgame build guide"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

A forge-and-fire-themed ascendancy focused on maximum life, maximum resistances, and temporarily empowering your own weapon mid-fight. Outperforms Titan and Warbringer on raw survivability, but its offensive ceiling is lower than both.

Smith of Kitava occupies a unique niche among Warrior ascendancies: where Titan leans into raw passive-tree amplification and Warbringer specializes in totems and warcries, Smith of Kitava is the defensive specialist. The centerpiece is **Smith's Masterwork**, a free-to-allocate node that locks you into a Normal-rarity Body Armour but lets you customize it with powerful modifiers that no other Body Armour in the game can simultaneously provide. This single mechanic is what makes the ascendancy so defensively potent — you can stack Heatproofing (immunity to all Damaging Ailments), Dedication to Kitava (Armour applies to Chaos Damage), Molten Symbol (25% of Physical Damage from Hits taken as Fire), and Internal Layer (100% reduced Critical Damage Bonus from Hits against you) all on one piece of gear. [(Mobalytics Smith of Kitava Guide)](https://mobalytics.gg/poe-2/guides/smith-of-kitava)

The trade-off is real: you sacrifice the raw damage output that Hulking Form gives Titan or the totem-and-warcry synergy of Warbringer. Your offensive tools — Temper Weapon, Manifest Weapon, and Fire Spell on Hit — are interesting but do not scale as aggressively. The smaller player base also means fewer refined build guides and less community-driven optimization, which is reflected in its C-tier rating on current tier lists. [(aoeah.com 0.5 Tier List)](https://www.aoeah.com/news/4539--poe-2-05-tier-list--best-class--league-starter-builds-return-of-the-ancients)

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this build's power comes from hitting the right nodes at the right stage rather than rushing everything at once. Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan, especially for anything marked as not yet individually verified above.

**Act 1–3 (Campaign Start):** Use Boneshatter + Ground Slam as your primary skills. Prioritize life nodes and fire damage clusters near the Warrior start. A good two-handed mace with high physical damage will carry you through these acts. Once you complete your first Ascendancy trial, allocate Heat of the Forge — the Fire Spell on Hit mechanic starts providing supplemental damage even at low investment. Focus on capping resistances, particularly Cold resistance for Act 1 bosses.

**Act 4–6 (Mid-Campaign):** Transition into Forge Hammer / Volcanic Fissure. By this point you should have your second Ascendancy points — allocate Coal Stoker for the resistance efficiency it provides. Start stacking fire damage on gear and pick up the Ignite/elemental clusters on the passive tree. Your resistances should be approaching 75% across all elements. Complete your second set of Ascendancy trials and consider whether you want to path toward Smith's Masterwork or pick up Against the Anvil for the Temper Weapon skill first.

**Early Maps (White/Yellow):** Your Smith's Masterwork setup should be online by now. Prioritize Heatproofing and Kitavan Engraving on your Normal Body Armour for the ailment immunity and life scaling. Add Herald of Ash with Magnified Effect for the overkill fire explosions. Aim for 3,500+ life and capped resistances. Forge Hammer linked with Fire Penetration and Melee Physical should be your primary boss-killer.

**Late Maps/Endgame:** Full fire penetration and ignite scaling. If running the Supercharged Slam variant, invest in charge-level maximization since Supercharged Slam's charge speed cannot be increased by attack speed — each charge must count. The Supercharged Slam variant has been confirmed as endgame-viable on a budget in 0.5, with community reports of it clearing all pinnacle content. [(POECurrency.com Supercharged Slam Guide)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-budget-supercharged-slam-smith-of-kitava-crushes-endgame)

## Key Mechanics & Interactions

**Smith's Masterwork Body Armour Customization:** The core identity of this ascendancy. You wear a Normal (white) Body Armour and choose modifiers from a fixed list. The highest-priority picks are:

- **Heatproofing:** Unaffected by all Damaging Ailments (Bleeding, Poison, Ignite). This is arguably the strongest single defensive pick on the tree — it renders three ailment types completely irrelevant. [(Mobalytics)](https://mobalytics.gg/poe-2/guides/smith-of-kitava)
- **Molten Symbol:** 25% of Physical Damage from Hits taken as Fire Damage. Combined with high Fire Resistance and Armour (which reduces the converted fire portion), this significantly reduces physical spike damage.
- **Dedication to Kitava:** 100% of Armour applies to Chaos Damage. Chaos damage is typically hard to mitigate; this node makes your armour pull double duty.
- **Internal Layer:** Hits against you have 100% reduced Critical Damage Bonus. This effectively nullifies enemy crit multipliers, a powerful defensive layer against spike damage. [(POECurrency.com Gigachad Warrior Guide)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-gigachad-warrior-build-guide-unkillable-one-shot-bosses)
- **Kitavan Engraving:** 15% increased maximum Life — always valuable for a life-stacking build.
- **Tribute to Utula:** 30% increased Spirit — helps fit more persistent skills if you are Spirit-constrained. [(Mobalytics)](https://mobalytics.gg/poe-2/guides/smith-of-kitava)

**Fire Spell on Hit + Temper Weapon Interaction:** Heat of the Forge grants a meta skill that builds energy from melee hits and triggers socketed fire spells. Temper Weapon (from Against the Anvil) is a channeled skill that empowers your next melee hits and triggers Combust explosions. These two mechanics create a rhythm where you channel Temper Weapon briefly, release empowered melee hits that build Fire Spell on Hit energy, and trigger fire spells simultaneously. As of the 0.4 patch update, Fire Spell on Hit costs no mana when triggering and gains 10% increased damage per level, making it scale well into endgame. [(Mobalytics 0.4 Patch Notes for Smith of Kitava)](https://mobalytics.gg/poe-2/guides/smith-of-kitava)

**Supercharged Slam Charge Mechanic:** Supercharged Slam charges up to four layers, with each charge level increasing damage and generating additional Aftershocks. At full charge, a single cast triggers five initial hits and four Aftershocks. Critically, charge speed is fixed and cannot be increased by attack speed bonuses — it can only be affected by special effects like Temporal Chains or specific shrines. This means you must maximize the value of each charged attack rather than relying on frequency. Community reports indicate that simply tapping the skill button (instead of holding) may trigger the full charge animation and autocomplete the sequence, though this may be a bug. [(POECurrency.com)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-budget-supercharged-slam-smith-of-kitava-crushes-endgame)

## Gear Progression

**Early Game (Acts 1–3):** Any two-handed mace with high physical damage percentage and attack speed. Look for Storm Runes to apply Shock on bosses — this is a huge damage increase for all damage types while the ailment is active. Boots with movement speed are a priority. A shield with block chance and life can help with survivability. [(Mobalytics Lexd Build)](https://mobalytics.gg/poe-2/profile/lexd/builds/avatar-of-fire-smith-of-kitava)

**Mid Game (Acts 4–6):** Transition to a strong 2H mace with Physical damage %, Fire damage %, and Attack speed. Begin crafting or trading for gear with fire resistance rolls — Coal Stoker makes fire resistance pull triple duty. A Normal Body Armour (any base with high Armour) should be your Smith's Masterwork vessel. Aim for a Maraketh Cuirass base for the highest armour values.

**Late Game (Mapping+):** For the Supercharged Slam variant, the **Twisted Empyrean Aberrant Sledge** (unique 2H mace) is the recommended weapon — it provides excellent base physical, fire, and cold damage plus an average of ~110 damage based on character mana, solving the problem of weak crafted hammers in 0.5. For the Shield Wall variant, a high-armour shield with block chance and a strong 2H mace via Giant's Blood are core. The **Fury of the King Ashbark Talisman** is the signature item for the Bear Form variant, granting Molten Crash and strong fire damage scaling. [(POECurrency.com)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-budget-supercharged-slam-smith-of-kitava-crushes-endgame) [(Mobalytics Kris Droverson Build)](https://mobalytics.gg/poe-2/profile/krisdroverson-dqfr7a/builds/9fdcd35c-c8b0-460d-99d2-bd3720bdce1f)

For the Body Armour, use **Runeforged Conjurer Mantle** with Runic Wards for additional defense — the +30 Spirit roll is highly valuable, and the armour deficit from using a Normal chest is offset by the Smith's Masterwork bonuses themselves. [(Mobalytics Kris Droverson Build)](https://mobalytics.gg/poe-2/profile/krisdroverson-dqfr7a/builds/9fdcd35c-c8b0-460d-99d2-bd3720bdce1f)

## Ascendancy Node Breakdown

1. **Heat of the Forge** — Grants Fire Spell on Hit. Take this first for supplemental damage during the campaign. The triggered fire spells scale with gem level (10% increased damage per level), so keeping the socketed spells leveled matters.

2. **Coal Stoker** — Fire Resistance grants Cold and Lightning Resistance at 50% value. This is your resistance efficiency engine — a single Fire Resistance roll on gear effectively becomes 1.5 elemental resistance rolls. Essential for capping resistances cheaply.

3. **Forged in Flame** — Maximum Fire Resistance also grants Maximum Cold and Lightning Resistance. This is the cap-stacking companion to Coal Stoker. If you can push Maximum Fire Resistance above 75%, you gain that same amount for Cold and Lightning. Extremely powerful for resistance cap builds.

4. **Against the Anvil** — Grants Temper Weapon, a channeled empower skill with Combust explosions. The Combust now deals 25% more damage at all levels with a base radius of 3 metres (buffed in 0.4). Take this when you want more active damage during combat, but it competes with Smith's Masterwork for ascendancy points.

5. **Living Weapon** — Grants Manifest Weapon, an animated weapon minion. The Manifest Weapon now changes target less frequently and has reduced cooldowns on its skills (6 seconds for Slam/Sweep, down from 10). Useful for supplemental damage but not build-defining.

6. **Smith's Masterwork** — The centerpiece. Free to allocate. Restricts you to Normal Body Armour but lets you pick custom modifiers. The priority picks are Heatproofing > Molten Symbol > Dedication to Kitava > Internal Layer > Kitavan Engraving, with Flowing Metal (+5% Max Fire Res) and Tribute to Utula (30% Spirit) as situational picks. Each connected Notable also grants +200 Armour as of the 0.4 update. [(Mobalytics)](https://mobalytics.gg/poe-2/guides/smith-of-kitava)

**Recommended allocation order:** Heat of the Forge → Coal Stoker → Smith's Masterwork (with Heatproofing + Kitavan Engraving) → Forged in Flame. This maximizes your defensive floor early and builds into resistance cap dominance later.

## Common Mistakes & Pitfalls

- **Allocating Smith's Masterwork too early without understanding the Normal Body Armour restriction.** Once you take this node, you cannot wear any Rare or Unique Body Armour. This is permanent until you respec. Many new players take it and then find they cannot equip a strong dropped Unique chest. Test your build plan before committing. [(PoE Forum Feedback Thread)](https://www.pathofexile.com/forum/view-thread/3930961)

- **Ignoring Heatproofing on Smith's Masterwork.** Heatproofing (unaffected by all Damaging Ailments) is arguably the strongest defensive option available from the Masterwork list. Skipping it for a damage option leaves you vulnerable to Ignite, Bleeding, and Poison — all common threats in mapping.

- **Trying to scale offence like Titan or Warbringer.** Smith of Kitava's offence is fundamentally lower. Investing heavily into damage nodes at the expense of the defensive synergies that make the ascendancy special will leave you with a worse Titan. Lean into what makes Smith unique: maximum resistance stacking, ailment immunity, and physical-as-fire conversion.

- **Forgetting that Supercharged Slam charge speed is fixed.** Players often invest in attack speed expecting faster charges on Supercharged Slam, but the charge mechanic ignores attack speed entirely. Invest in damage per hit and area of effect instead.

- **Not taking advantage of Coal Stoker / Forged in Flame for resistance capping.** These nodes let you focus almost entirely on Fire Resistance on gear, effectively tripling your resistance budget. Failing to leverage this by spreading resistance types across gear wastes the ascendancy's core efficiency.

## Mapping & Endgame Tips

**Map Clearing:** The Shield Wall variant excels at screen-wide clearing through fissure AoE, especially when combined with Ahn's Citadel and Kaom's Madness. For dense mapping, link Shield Wall with Rapid Attacks II and Pin to continuously generate Frenzy Charges, converting them into attack speed and defensive bonuses. [(POECurrency.com Gigachad Guide)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-gigachad-warrior-build-guide-unkillable-one-shot-bosses)

**Bossing:** The Supercharged Slam variant is the recommended boss-killer. Use Frost Wall with Effigy of Cruelty to stack 20 layers of Critical Weakness, then use Infernal Cry with Vruun's Aftermath Lineage Gem to detonate Ice Crystals for additional damage windows. The combo grants approximately 60% bonus fire damage and 10% Critical Hit Chance before you even swing. [(POECurrency.com)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-budget-supercharged-slam-smith-of-kitava-crushes-endgame)

**Defensive Considerations in Maps:** Smith of Kitava is tanky by design — Heatproofing eliminates Damaging Ailments, Dedication to Kitava covers Chaos, and Molten Symbol converts physical spikes to fire (mitigated by your fire resistance and armour). However, you are still a melee character. Be cautious of ground effects and degens that are not classified as Damaging Ailments. Projectile-heavy map mods can still overwhelm you despite your Armour stacking.

**Delirium and Juiced Content:** The Shield Wall + Avatar of Fire Smith variant has been confirmed to handle 200% Delirium and juiced Grand Expeditions, though it requires the optimized setup with proper attack speed investment. The Bear Form variant using Fury of the King + Walking Calamity also handles juiced content well due to the massive area coverage. [(Mobalytics Lexd Build)](https://mobalytics.gg/poe-2/profile/lexd/builds/avatar-of-fire-smith-of-kitava) [(aoeah.com)](https://www.aoeah.com/news/4539--poe-2-05-tier-list--best-class--league-starter-builds-return-of-the-ancients)

**Ritual and Expedition:** The Supercharged Slam variant performs well in stationary DPS scenarios like Ritual encounters and Expedition logbooks, where the prolonged charge-up time is less of a liability. The defensive layers from Smith's Masterwork keep you alive during the extended engagement windows these activities require.
