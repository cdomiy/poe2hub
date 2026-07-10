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

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this
build's power comes from hitting the right nodes at the right stage rather than rushing
everything at once. Cross-check the ascendancy node names against the in-game tree before
following this as a precise, click-by-click plan, especially for anything marked as not yet
individually verified above.
