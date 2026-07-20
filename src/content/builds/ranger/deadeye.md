---
title: "Ranger Deadeye Twister / Whirling Slash Build Guide"
class: "Ranger"
ascendancy: "Deadeye"
coreSkill: "Twister + Whirling Slash (spear combo)"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "S"
playstyle: "league-starter"
estCost: "low"
summary: "Whirling Slash builds up to 3 combo stages, then Twister converts those stages into a burst of ranged tornado projectiles, a spear-based combo usable on nearly any class, but scaling especially well on Deadeye's projectile-focused tree."
pros:
  - "Whirling Slash doubles as your movement skill, so mapping speed and damage output share the same button"
  - "The combo is intuitive to learn, 2-3 Whirling Slashes into a Twister covers most content"
  - "Extremely well documented right now, with multiple independent build guides across major sites confirming the same core rotation"
cons:
  - "Weapon-set management (fast-attack spear for Whirling Slash, high-damage spear for Twister) adds real setup complexity"
  - "Twister's damage is weak in the very first Act until you get some flat elemental damage on gear"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Avidity"
    effect: "50% chance to gain an additional Frenzy Charge when you gain a Frenzy Charge"
  - order: 2
    name: "Called Shots"
    effect: "Grants a Meta Skill that repeatedly marks nearby enemies (bypassing your normal Mark limit) and causes projectiles to chain to marked targets"
  - order: 3
    name: "Endless Munitions"
    effect: "Adds an extra projectile to supported skills"
  - order: 4
    name: "Far Shot"
    effect: "Increases damage the further your projectiles travel, rewarding long-range play"
  - order: 5
    name: "Eagle Eye"
    effect: "Removes accuracy penalties at range, supporting a pure run-and-gun playstyle"
  - order: 6
    name: "Gathering Winds / Tailwind"
    effect: "Gain Tailwind on skill use for movement speed, skill speed, and evasion; lost when you're Hit"
  - order: 7
    name: "Thrilling Chase"
    effect: "Boosts damage output for both Spear and Bow skills"
  - order: 8
    name: "Bullseye"
    effect: "Applies Critical Weakness, requires Called Shots as a prerequisite node"
skillGems:
  mainSkill:
    gem: "Twister"
    supports: ["Advancing Storm", "Overabundance", "Prolonged Duration", "Catalysing Elements"]
  secondarySkill:
    gem: "Whirling Slash"
    supports: ["Staged", "Wind", "Melee Physical"]
  spiritSkills:
    - gem: "Herald of Ice"
      supports: []
    - gem: "Herald of Thunder"
      supports: []
  utilitySkills:
    - gem: "Barrage"
      supports: []
    - gem: "Sniper's Mark"
      supports: []
gearPriority:
  - slot: "Weapon Set 1 (Spear)"
    item: "Attack speed, empty off-hand for Dance with Death"
    note: "Winged/Soaring Spear base"
    priority: "core"
  - slot: "Weapon Set 2 (Spear)"
    item: "Flat physical/elemental damage, Crit chance, +Projectile levels"
    note: "High Physical damage roll"
    priority: "core"
  - slot: "Boots"
    item: "Life, Resistances"
    note: "Skill effect duration"
    priority: "recommended"
  - slot: "Gloves"
    item: "Flat damage, Attack speed"
    note: "Life/mana leech"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Projectile damage, Attack speed, Life"
  midGame: "Duration and Projectile Speed nodes, do not skip these"
  endGame: "Dance with Death keystone, Critical Strike cluster once you have a high-crit spear"
levelingGuide:
  act1to3: "Whirling Slash into Twister from level 1, this combo is available immediately on a Huntress or Ranger start"
  act4to6: "Add Barrage and Ice-Tipped Arrows once available, buy Wake of Destruction boots for elemental ground generation"
  mapping: "Optimize for projectile speed and duration, add freeze chains for crowd control"
faqs:
  - q: "Is Twister exclusive to Deadeye?"
    a: "No, it's a spear skill usable by multiple classes, but Deadeye's projectile-focused ascendancy tree scales it particularly well."
  - q: "Why do I need two weapon sets?"
    a: "Whirling Slash wants attack speed to build combo stages fast; Twister wants raw damage and doesn't benefit from attack speed at all, splitting them onto separate weapon sets lets you optimize both independently."
dataSources:
  - "Maxroll.gg Twister Deadeye build guide"
  - "Mobalytics Whirling Slash Twister campaign guide"
  - "Odealo Twister Amazon build (cross-class comparison)"
  - "PoE2Wiki Fextralife Deadeye page"
  - "Deltia's Gaming Deadeye ascendancy guide"
  - "Game8 Deadeye ascendancy overview"
relatedBosses:
  - "arbiter-of-divinity"
  - "doryani-royal-thaumaturge"
  - "kabala-constrictor-queen"
  - "the-bodach"
  - "zarokh-the-temporal"
relatedMechanics:
  - "abyss"
  - "atlas-waystones-towers"
  - "expedition"
---

## Why This Ascendancy

Whirling Slash builds up to 3 combo stages, then Twister converts those stages into a burst of ranged tornado projectiles -- a spear-based combo usable on nearly any class, but scaling especially well on Deadeye's projectile-focused tree. The synergy is natural: Deadeye's ascendancy amplifies exactly the mechanics that Twister depends on (projectile count, projectile speed, chaining, and long-range damage), making this the premier class for the Twister archetype.

The build is extremely well documented across multiple independent sources. Travic's Whirling Slash Twister guide on Mobalytics is the primary reference, confirmed by his Codex Wiki write-up and cross-class comparisons on Odealo [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye) [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start). The core rotation is intuitive: 2-3 Whirling Slashes build combo stages, then Twister unleashes the damage. Whirling Slash doubles as your movement skill, so mapping speed and damage output share the same button.

Deadeye's ascendancy nodes amplify this loop at every level. Tailwind provides movement speed, skill speed, and evasion on every skill use. Called Shots auto-marks nearby enemies and causes projectiles to chain to marked targets. Endless Munitions adds an extra projectile. Far Shot increases damage the further projectiles travel. The whole ascendancy is designed around the fantasy of a run-and-gun spear thrower, and Twister is the skill that delivers on that fantasy most completely.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order. This build's power comes from hitting the right nodes at the right stage rather than rushing everything at once.

**Act 1-3 (Levels 1-33):** Whirling Slash into Twister from level 1 -- this combo is available immediately on a Huntress or Ranger start. Keep Whirling Slash at gem level 1 (never level it up -- it exists only for movement and combo building, and leveling inflates its mana cost) [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye). Grab a Spear from the gambling vendor. Upgrade your spear a few times through Act 1 chasing flat physical and elemental damage. Save currency for Wake of Destruction boots as your first unique purchase.

**Act 4-6 (Levels 34-55):** Add Barrage and Ice-Tipped Arrows once available. Buy Wake of Destruction boots for lightning ground generation -- these are the build's defining chase item because Twisters scale enormously off ground effects (standing on shock/ignite/chilled ground before firing imbues the Twisters with that element) [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start). Continue upgrading your spear around levels 26 and 48.

**Mapping (Levels 56+):** Optimize for projectile speed and duration -- these are the scaling axes that make Twisters ricochet through entire packs. Add freeze chains for crowd control. The Sine Aequo gloves are a major upgrade that makes immobilize 50% versus 100%, causing everything to be instantly frozen [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye). Essentia Sanguis gloves provide leech sustain for harder content.

Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan.

## Key Mechanics & Interactions

**Whirling Slash + Twister combo.** Whirling Slash spins the character in place, stacking an invisible tornado (up to 3 combo stages). Twister then consumes those stages to unleash a burst of ranged tornado projectiles. The combo is intuitive but has subtlety: Whirling Slash must stay at gem level 1 forever because leveling it only increases mana cost without benefiting the build [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye).

**Ground effect imbuing.** Twisters scale enormously off ground effects. Standing on shock, ignite, or chilled ground before firing imbues the Twisters with that element and converts the build's damage profile on the fly. This is why Wake of Destruction (lightning ground) and Birth of Fury (ignite ground) boots are the build's defining items [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start). Without ground-effect boots, the damage profile collapses to a basic spear attack.

**Weapon set split.** Weapon Set 1 holds the fast-attack spear (Skysliver recommended for highest attack speed) for Whirling Slash; Weapon Set 2 holds the high-damage/crit spear for Twister. This separation is critical because Whirling Slash wants attack speed to build combo fast, while Twister wants raw damage and doesn't benefit from attack speed at all [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye).

**Deadeye's Tailwind cycle.** Gain Tailwind on skill use for movement speed, skill speed, and evasion -- lost when you're Hit. In mapping, where you're constantly using Whirling Slash, Tailwind has near-permanent uptime, giving you both speed and evasion. In boss fights where you take hits, Tailwind cycles more, but the offensive bursts between hits are still amplified.

**Frenzy charge scaling.** Combat Frenzy generates frenzy charges off freeze/electrocute. Barrage consumes those charges for massive damage amplification on Twister volleys. Avidity gives 50% chance to gain an additional Frenzy Charge when you gain one, doubling your charge generation rate.

## Gear Progression

**Early Game (Acts 1-3):** A rare Spear with flat physical and elemental damage, upgraded every ~10 levels. Rings and gloves with flat damage. Everything else is Life/Energy Shield/Resistances. No uniques required this early.

**Mid Game (Acts 4-6):** Wake of Destruction boots are your first priority unique -- the lightning ground they generate is the damage enabler for Twisters [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye). Skysliver (fastest attack speed spear) on Weapon Set 1, a crit/damage spear on Weapon Set 2. Tangletongue is an alternative early spear option. Guiding Palm of the Eye scepter for off-hand Spirit.

**Late Game (Mapping+):** Sine Aequo gloves for 50% immobilize leading to instant freeze (major upgrade) [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye). Essentia Sanguis for leech sustain. Hand of Wisdom and Action as a budget glove alternative. Birth of Fury boots for ignite ground. Long-term scaling includes Headhunter and potentially Mageblood [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start).

## Ascendancy Node Breakdown

1. **Avidity** -- 50% chance to gain an additional Frenzy Charge when you gain a Frenzy Charge. Doubles charge generation, which directly amplifies Barrage's damage consumption of those charges.

2. **Called Shots** -- Grants a Meta Skill that repeatedly marks nearby enemies and causes projectiles to chain to marked targets. This is the mapping enabler -- your Twisters ricochet between marked enemies, clearing entire screens per cast.

3. **Endless Munitions** -- Adds an extra projectile to supported skills. More Twisters per cast equals more damage and more coverage.

4. **Far Shot** -- Increases damage the further your projectiles travel. Rewards the build's natural playstyle of kiting at range. Since Twisters travel across screens, this bonus is nearly always active at full value.

5. **Eagle Eye** -- Removes accuracy penalties at range. Quality of life for a pure run-and-gun playstyle, ensuring your projectiles always hit regardless of distance.

6. **Gathering Winds / Tailwind** -- Gain Tailwind on skill use for movement speed, skill speed, and evasion; lost when you're Hit. The core speed and evasion engine for mapping.

7. **Thrilling Chase** -- Boosts damage output for both Spear and Bow skills. Universal damage amplification that benefits both Whirling Slash and Twister.

8. **Bullseye** -- Applies Critical Weakness, requires Called Shots as a prerequisite. The boss-killer node -- Critical Weakness debuff amplifies all your damage against the targeted enemy.

## Common Mistakes & Pitfalls

- **Leveling Whirling Slash.** Never level this gem. It exists only for movement and combo building. Higher levels increase mana cost without meaningful benefit [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye).

- **Playing the build as melee.** Despite Whirling Slash being a melee skill on paper, the build is played strictly at range -- Twisters do the killing while you kite and reapply ground effects. New players regularly try to play it melee and get stomped [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start).

- **Skipping ground-effect boots.** Without Wake of Destruction or Birth of Fury, your damage profile collapses. These are not optional -- they are build-defining. Buy Wake of Destruction as early as possible.

- **Not upgrading your spear.** Flat damage upgrades on rings, gloves, and weapon must be replaced repeatedly through the campaign or damage falls off hard [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start).

- **Confusing weapon set assignments.** Weapon Set 1 equals fast spear for Whirling Slash (movement/combo). Weapon Set 2 equals damage spear for Twister (burst). Mixing these up destroys your efficiency.

## Mapping & Endgame Tips

**Mapping:** The mapping loop is simple and fast: Whirling Slash to build combo and move, Twister to unleash damage, Barrage to consume frenzy charges for amplified volleys. With Tailwind active and ground-effect boots equipped, you clear multiple screens per pull. The build is considered one of the safer league starters specifically because Twister's ricocheting projectiles handle crowd control while you stay at range [(Codex Wiki)](https://exile.codex-wiki.com/builds/poe-2-0-5-whirling-slash-twisters-deadeye-league-start).

**Pinnacle Bosses:** Boss damage is not this build's strongest suit. The kit is built around ricocheting projectiles over packs, not single targets. Called Shots plus Bullseye provides some boss amplification, but you won't match dedicated boss-killer builds. For bossing, stack as many Twisters on the target as possible and maintain Sniper's Mark for the damage amplification.

**Defensive Layers:** Evasion plus Energy Shield hybrid with Ghost Dance and Wind Dancer for passive defense. Tailwind provides evasion on skill use. The build is squishy until high-end gear and leech come online -- Essentia Sanguis gloves or Hand of Wisdom and Action provide sustain in harder content [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye).

**Mana Sustain:** Mark Siphoning on Called Shots provides mana return. If running dry, add percent Physical Damage Leeched as Mana on rings or gloves, and Gain 2 percent Mana on Kill on Sapphire Jewels [(Mobalytics)](https://mobalytics.gg/poe-2/builds/whirling-slash-twister-all-content-and-leveling-guide-for-deadeye).

