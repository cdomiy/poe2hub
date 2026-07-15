---
title: "Warrior Titan Shield Wall / Boneshatter Build Guide"
class: "Warrior"
ascendancy: "Titan"
coreSkill: "Shield Wall / Boneshatter / Whirling Assault"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "league-starter"
estCost: "low"
summary: "The highest-HP-ceiling melee ascendancy in the game, anchored by Hulking Form, widely regarded as one of the strongest single nodes in PoE2. Multiple viable skill variants (Shield Wall, Boneshatter, Whirling Assault) all scale off the same core tree."
pros:
  - "Hulking Form gives +50% effect to every small passive you allocate, making the whole tree scale harder than on any other ascendancy"
  - "Multiple proven skill variants: Shield Wall for screen-clearing fissures, Boneshatter for stun-focused single target, or Whirling Assault for pure mapping speed"
  - "Extremely gear-flexible league starter, playable on budget rare weapons"
cons:
  - "Never allocate Crushing Impacts unless you understand it removes your ability to prime enemies for stun, a common new-player mistake"
  - "Clear speed trails behind ranged/spell builds despite strong AoE, since it's still a melee playstyle"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Stone Skin"
    effect: "Increases Armour granted by your equipped Body Armour"
  - order: 2
    name: "Earthbreaker"
    effect: "Adds Aftershocks, bursts of area damage after your initial hit, to more Slam skills"
  - order: 3
    name: "Ancestral Empowerment"
    effect: "Every second Slam Skill you use yourself deals 20% more damage and area of effect"
  - order: 4
    name: "Colossal Capacity"
    effect: "Grants a chest that adds 20 inventory slots"
  - order: 5
    name: "Hulking Form"
    effect: "50% increased effect of Small Passive Skills, does not affect attribute travel nodes"
  - order: 6
    name: "Crushing Impacts"
    effect: "Your Hits are Crushing Blows, causing Heavy Stun on enemies primed for stun"
  - order: 7
    name: "Mountain Splitter"
    effect: "Every third Slam Skill that doesn't create Fissures causes additional Aftershocks"
  - order: 8
    name: "Mysterious Lineage"
    effect: "15% more maximum Life, a multiplicative bonus on your total life pool"
skillGems:
  mainSkill:
    gem: "Shield Wall"
    supports: ["Prolonged Duration II", "Magnified Area II", "Ahn's Citadel", "Fortifying Cry"]
  secondarySkill:
    gem: "Boneshatter"
    supports: ["Melee Physical", "Close Combat", "Impact", "Heft"]
  spiritSkills:
    - gem: "Herald of Ash"
      supports: ["Magnified Effect"]
    - gem: "Determination"
      supports: []
  utilitySkills:
    - gem: "Leap Slam"
      supports: ["Faster Attack"]
    - gem: "Infernal Cry"
      supports: ["Raging Cry"]
gearPriority:
  - slot: "Weapon (2H Mace)"
    item: "Physical damage %, Attack speed, Stun duration"
    note: "Elemental damage as extra, Crit chance"
    priority: "core"
  - slot: "Shield"
    item: "Block chance, Life, Armour"
    note: "Resistances, Spell suppression"
    priority: "recommended"
  - slot: "Body Armour"
    item: "High Armour, Life, Resistances"
    note: "% increased Armour, Stun threshold"
    priority: "recommended"
  - slot: "Boots"
    item: "Movement speed 20%+, Life, Resistances"
    note: "% increased Armour"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Life nodes near the Warrior start, Armour clusters, Melee damage"
  midGame: "Stun/Slam clusters, Warcry effect nodes, Block nodes if running a shield"
  endGame: "Heavy impact clusters, Maximum life % nodes, Armour-as-elemental-defense clusters"
levelingGuide:
  act1to3: "Boneshatter + Ground Slam, Shield Charge for mobility, prioritize life and armour nodes"
  act4to6: "Swap to your main setup, add Herald of Ash, prioritize capping resistances"
  mapping: "Full Shield Wall or Whirling Assault setup, target 4,000+ life and 75% all resistances"
faqs:
  - q: "Is Titan still good after balance changes?"
    a: "Yes, Hulking Form alone keeps it near the top of Warrior ascendancies regardless of which skill variant you run."
  - q: "Mace or Axe?"
    a: "Mace for the stun synergy Titan is built around; Axe works for pure damage but loses the stun feedback loop."
dataSources:
  - "Maxroll.gg Shield Wall/Whirling Assault/Boneshatter Titan build guides"
  - "PoE2Wiki Fextralife Titan page"
  - "Mobalytics Titan guide"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

The highest-HP-ceiling melee ascendancy in the game, anchored by Hulking Form, widely regarded as one of the strongest single nodes in PoE2. Multiple viable skill variants (Shield Wall, Boneshatter, Whirling Assault) all scale off the same core tree.

Titan's power comes from a single node that amplifies everything else: **Hulking Form** grants 50% increased effect of all Small Passive Skills on the tree. This means every 10% life small passive becomes 15%, every 8% armour node becomes 12%, and every damage cluster hits proportionally harder. No other ascendancy in the game provides this kind of universal scaling multiplier. It is the reason Titan remains A-tier across multiple patches — even when specific skills get nerfed, the raw numerical advantage of Hulking Form keeps the ascendancy competitive regardless of which skill variant you choose. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

The ascendancy also provides **Mysterious Lineage**, a 15% *more* maximum Life multiplier — one of the few multiplicative life bonuses in the game. When combined with Hulking Form's amplification of life small passives, Titan reaches life pools that other Warrior ascendancies simply cannot match. Multiple community-verified builds report 4,000+ life as a standard mapping benchmark, with endgame builds pushing significantly higher. [(PoE Forum Titan League Starter Guide)](https://jp.pathofexile.com/forum/view-thread/3625751/page/1)

The skill flexibility is another major strength. Shield Wall provides screen-clearing fissures for mapping, Boneshatter delivers stun-focused single-target damage for bosses, and Whirling Assault offers pure mapping speed. All three scale off the same passive tree core, meaning you can pivot between them without major respeccing.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this build's power comes from hitting the right nodes at the right stage rather than rushing everything at once. Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan, especially for anything marked as not yet individually verified above.

**Act 1 (Levels 1–16):** Use Boneshatter + Rolling Slam as your core combo. Cast Rolling Slam into a pack, then immediately use Boneshatter to clean up. Mastering this quick combo is key to smooth Act 1 progression. Use Pounce for movement. Prioritize life nodes and armour clusters near the Warrior start. A strong two-handed mace with high physical damage will carry you — even a level-appropriate white mace crafted with some luck can be excellent. Pick up fire nodes even if you are not exclusively dealing fire damage yet; they become valuable once you transition to your main setup. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Act 2 (Levels 14–29):** Replace Rolling Slam with Leap Slam for an easier Boneshatter combo and added mobility. Continue using Pounce and Wolf Form for zone traversal. Around 32 skill points, pick up Resolute Technique — this build is not a crit build, so eliminating accuracy requirements is pure upside. Complete your first Ascendancy trial here. If strapped for currency, take Colossal Capacity first (it is lackluster but serves as a prerequisite). If you can afford a respec, take Mysterious Lineage for the 15% life boost immediately. [(PoE Forum Titan Guide)](https://jp.pathofexile.com/forum/view-thread/3625751/page/1)

**Act 3 (Levels 30–42):** Things hit significantly harder here, especially with Chaos damage. Prioritize resistances and physical damage reduction. Switch from Leap Slam to Stampede for more consistent damage and safer movement. The Stampede → Boneshatter combo clears most packs in a single rotation. Add Forge Hammer for boss damage. By 74 skill points, you should have Hulking Form allocated — this is your major damage and defensive spike. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Act 4–6 + Interludes (Levels 42–60):** Add Herald of Ash and prioritize capping all resistances at 75%. Your second Ascendancy points should go to Hulking Form if you took Mysterious Lineage first, or vice versa. Begin transitioning to your endgame skill variant. Complete all Ascendancy trials for full point access.

**Early Maps (White/Yellow):** Target 3,500–4,000+ life and 75% all resistances. Shield Wall with Prolonged Duration II and Magnified Area II becomes your primary mapping skill. Add Infernal Cry for damage spikes. The Shattering Blow passive (breaks armour on heavy stun) synergizes with your mace-stun loop and provides 20% more damage against Fully Broken Armour enemies. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Late Maps/Endgame:** Full Shield Wall or Whirling Assault setup. Ancestral Empowerment (every second Slam deals 20% more damage and AoE) becomes your third Ascendancy priority after Hulking Form and Mysterious Lineage. Earthbreaker stacks with other Aftershock sources and can scale toward 100% Aftershock chance, effectively doubling your damage. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

## Key Mechanics & Interactions

**Hulking Form Amplification:** The 50% increased effect applies to all Small Passive Skills but does not affect Notable passives, Attribute travel nodes, or Keystones. This means the value proposition is straightforward: every small node you path through becomes 50% more effective. The optimal Titan tree maximizes the number of small passives taken and minimizes travel overhead. Life small passives (normally 10%) become 15%, Armour small passives scale proportionally, and damage small passives get the same boost. [(PoE Forum Titan Guide)](https://jp.pathofexile.com/forum/view-thread/3625751/page/1)

**Stun → Armour Break → Damage Loop:** Titan's Shattering Blow passive breaks armour on enemies you heavy stun. Fully Broken Armour grants 20% more damage against that enemy. Combined with The Molten One's Gift (increased fire damage against enemies with Fully Broken Armour), this creates a loop: stun → break armour → deal more damage → stun faster. This is why maces are recommended over axes — the stun synergy is core to the Titan identity. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Ancestral Empowerment + Fist of War III Interaction:** Ancestral Empowerment makes every second Slam skill you use deal 20% more damage with 20% more area of effect. This bonus works with Fist of War III, overriding its 14-second cooldown and granting enormous damage and AoE increases. This interaction is a significant part of Titan's bossing damage ceiling. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Earthbreaker Aftershock Scaling:** Earthbreaker adds Aftershocks to more Slam skills. Aftershocks are bursts of area damage after your initial hit, dealing the same damage as the initial strike. This stacks with other Aftershock sources on the passive tree and from support gems. Community builds have demonstrated that stacking Aftershock chance toward 100% effectively doubles your Slam damage output. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Instant Earthquake Tech:** The Earthquake skill normally has a 4-second delay before its Aftershock detonates. By stacking Reduced Skill Effect Duration everywhere — Forthcoming, Near at Hand, Overabundance I, Palm of the Dreamer — and leveraging Hulking Form's amplification of the small duration-reduction nodes, you can bring Earthquake's duration to zero, making it explode instantly. This creates a one-button build that slams the ground for instant Aftershock damage. [(Mobalytics Ulfhednar Earthquake Build)](https://mobalytics.gg/poe-2/profile/ulfhednar/builds/0-5-ulf-s-instant-earthquake-is-back)

## Gear Progression

**Early Game (Acts 1–3):** Any two-handed mace with high physical damage range. Resist rings (Ruby, Topaz, Sapphire) from vendors to balance resistances. Strength amulets with life and resistances. Boots with movement speed. Do not over-invest in specific unique items — Titan is designed to work on budget gear.

**Mid Game (Acts 4–6):** A strong 2H mace with Physical damage %, Attack speed, and Stun duration. Body armour and helmet should be Armour-base with Life, Strength, and Resistances. Gloves can benefit from "adds # damage to attacks" rolls. Shield with Block chance, Life, and Armour if running the Shield Wall variant. [(PoE Forum Titan Guide)](https://jp.pathofexile.com/forum/view-thread/3625751/page/1)

**Late Game (Mapping+):** The **Constricting Command Viper Cap** helmet is highly recommended — it grants bonuses from surrounding-area passive tree nodes, providing up to 270% increased damage, attack speed, movement speed, and armour. Look for the "4 fewer to be Surrounded" modifier. For weapons, a well-crafted 2H mace with +5 skill levels, physical damage %, and attack speed is the endgame goal. A Lunar Amulet with +3 to all melee skill levels provides a massive damage spike. [(POECurrency.com Gigachad Warrior Guide)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-gigachad-warrior-build-guide-unkillable-one-shot-bosses)

For the Earthquake variant, the **Redblade Banner** combined with Echoing Cry on Weapon Set 2 enables permanent Infernal Cry, providing near-continuous empowered attacks and Ignite immunity through Extinguishing Exhalation. [(Mobalytics Ulfhednar Build)](https://mobalytics.gg/poe-2/profile/ulfhednar/builds/0-5-ulf-s-instant-earthquake-is-back)

## Ascendancy Node Breakdown

1. **Stone Skin** — Increases Armour from your equipped Body Armour. Straightforward defensive node. Take it when you need physical damage reduction but your gear is not yet providing enough armour on its own.

2. **Earthbreaker** — Adds Aftershocks to more Slam skills. This is a core damage multiplier for all Slam-based Titan builds. Stack it with other Aftershock sources on the tree for up to 100% Aftershock chance.

3. **Ancestral Empowerment** — Every second Slam deals 20% more damage and AoE. The interaction with Fist of War III makes this one of the strongest damage nodes available. Take it as your third or fourth Ascendancy point.

4. **Colossal Capacity** — Grants a chest with 20 inventory slots. Mechanically lackluster but serves as a prerequisite node. Take it early if you are strapped for cash and plan to respec later.

5. **Hulking Form** — 50% increased effect of Small Passive Skills. This is the entire reason to play Titan. Take it as early as your second Ascendancy point allocation. It amplifies everything — life, armour, damage, duration — making it the single most impactful node on the tree.

6. **Crushing Impacts** — Your Hits are Crushing Blows, causing Heavy Stun on enemies primed for stun. **WARNING:** This is a common trap for new players. Crushing Impacts causes your hits to immediately heavy stun enemies that are primed for stun, which *removes* the "primed for stun" state. This can break the stun → armour break → damage loop if you do not understand the interaction. Most builds should skip this node entirely. [(Source: Multiple community guides warn against this node)]

7. **Mountain Splitter** — Every third non-Fissure Slam causes additional Aftershocks. Niche synergy for builds not already creating Fissures.

8. **Mysterious Lineage** — 15% more maximum Life. Multiplicative, not additive. This is a top-tier node and should be taken as early as your first Ascendancy allocation if you can afford the respec later, or as your second major point after Hulking Form.

**Recommended allocation order:** Mysterious Lineage (or Colossal Capacity as placeholder) → Hulking Form → Ancestral Empowerment → Stone Skin. This maximizes your life and damage scaling as early as possible.

## Common Mistakes & Pitfalls

- **Taking Crushing Impacts without understanding the stun interaction.** This is the single most common Titan mistake. Crushing Impacts causes instant heavy stuns, which removes the "primed for stun" state that enables your armour break loop via Shattering Blow. Unless you have a specific reason and understand the mechanic, skip this node entirely.

- **Pathing to too many Notable passives at the expense of Small passives.** Because Hulking Form amplifies small passives by 50% but does not affect Notables, the optimal Titan tree takes more small passives than typical builds. Over-investing in Notable passives dilutes Hulking Form's value.

- **Using Axes instead of Maces.** Axes work for raw damage but lose the stun feedback loop that is core to Titan's identity. Maces provide stun synergy that enables Shattering Blow's armour break, which feeds back into more damage. If you want pure damage without stun, consider a different ascendancy.

- **Neglecting resistances in Act 3.** Act 3 is notorious for Chaos damage and burst-heavy encounters. Many Titan players die here because they focused on damage nodes over resistance capping. Prioritize getting all three elemental resistances to 75% before Act 3.

- **Not using weapon set swapping for bossing vs. mapping.** Titan benefits significantly from using Weapon Set 2 for utility skills like Infernal Cry with Echoing Cry, while keeping primary attacks on Weapon Set 1. Failing to use the weapon set system leaves damage on the table. [(Mobalytics Ulfhednar Build)](https://mobalytics.gg/poe-2/profile/ulfhednar/builds/0-5-ulf-s-instant-earthquake-is-back)

## Mapping & Endgame Tips

**Map Clearing:** Shield Wall with Ahn's Citadel and Kaom's Madness provides massive AoE fissure coverage. For the Earthquake variant, instant Earthquake tech (zero duration) lets you slam and move without waiting for detonations. Stampede through packs and follow up with Boneshatter for stragglers. The Forge Hammer → Infernal Cry → Sunder → Hammer of the Gods combo handles rare mobs and league mechanics. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Bossing:** The full boss combo is: Place Shockwave Totem ×4 → Forge Hammer → Infernal Cry to detonate → Stampede around the boss. Once the boss is in Heavy Stun range, hit with Boneshatter, then cast Hammer of the Gods. Add Sunder for additional burst. Zerphi's Infamy in Hammer of the Gods increases Glory requirement to 50 but allows ALL life costs to generate Glory, letting you freely cast Hammer of the Gods without needing to heavy stun bosses first. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)

**Armour Break Strategy:** Shattering Blow breaks armour on heavy stun, and The Molten One's Gift provides increased fire damage against Fully Broken Armour enemies. Against pinnacle bosses, the strategy is to build up stun → heavy stun → armour break → then unleash your big combo while the boss has Fully Broken Armour for the 20% more damage modifier.

**Defensive Layers:** Titan's defensive stack includes massive life pool (4,000+), high armour from Stone Skin and Hulking Form amplification, block chance from shields, and Fortify from warcries. The Constricting Command helmet also provides evasion and attack speed from its surrounded-mechanic bonuses. For additional defense, allocate Charge Regulation (18% increased Armour/Evasion/ES from Endurance Charges) and Guts (3% life recovery on Endurance Charge consumption). [(POECurrency.com Gigachad Guide)](https://www.poecurrency.com/news/poe-2-patch-0-5-0-gigachad-warrior-build-guide-unkillable-one-shot-bosses)

**Pinnacle Bossing:** The Forge Hammer + Infernal Cry + Hammer of the Gods combo has been verified to handle all pinnacle content. Rakiata's Flow Lineage Gem provides a ~50% damage increase for Forge Hammer but is expensive — Fire Penetration II works as a budget alternative. For the most demanding pinnacle content, ensure your life pool exceeds 4,500 and all resistances are overcapped to handle resistance-penetrating map mods. [(Mobalytics Slam Titan Guide)](https://mobalytics.gg/poe-2/builds/slam-warrior-leveling-build)
