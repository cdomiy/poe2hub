---
title: "Monk Invoker Elemental Crit Build Guide"
class: "Monk"
ascendancy: "Invoker"
coreSkill: "Cast on Critical / Elemental Avatar (Cold/Lightning)"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "league-starter"
estCost: "low"
summary: "A Cast-on-Critical-friendly ascendancy leaning on the Meditate skill for Energy Shield recharge, giving Invoker a strong defensive floor while scaling cold or lightning damage. Ranked second among Monk ascendancies behind Martial Artist."
pros:
  - "Meditate channel doubles Energy Shield, giving a strong panic-button defensive layer"
  - "Strong pick for Cast on Critical builds specifically"
  - "Flexible between cold and lightning damage routes depending on available gear"
cons:
  - "Lacks the immediate, gear-independent power spike that Martial Artist's bell mechanics provide"
  - "Meditate's channeling requirement needs some testing to use smoothly in fast-paced fights"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Lead me through Grace..."
    effect: "Gain 1 Spirit for every 6 Energy Shield on your equipped Body Armour"
  - order: 2
    name: "...and Protect me from Harm"
    effect: "Gain 1 Spirit for every 15 Evasion Rating on your equipped Body Armour"
  - order: 3
    name: "I am the Blizzard..."
    effect: "Empowers cold-based elemental avatar transformations"
  - order: 4
    name: "I am the Thunder..."
    effect: "Empowers lightning-based elemental avatar transformations"
  - order: 5
    name: "Sunder my Enemies..."
    effect: "Critical Hits ignore non-negative Enemy Monster Elemental Resistances"
skillGems:
  mainSkill:
    gem: "Glacial Cascade"
    supports: ["Cold Penetration", "Controlled Destruction"]
  secondarySkill:
    gem: "Falling Thunder"
    supports: ["Lightning Penetration"]
  spiritSkills:
    - gem: "Meditate"
      supports: []
    - gem: "Clarity"
      supports: []
  utilitySkills:
    - gem: "Killing Palm"
      supports: []
gearPriority:
  - slot: "Weapon (Quarterstaff)"
    item: "Elemental damage, Cast speed, Crit"
    note: "Cold/Lightning conversion"
    priority: "core"
  - slot: "Body Armour"
    item: "Energy Shield, Life"
    note: "Spell suppression"
    priority: "recommended"
  - slot: "Amulet"
    item: "Crit multiplier"
    note: "Energy Shield recharge"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Cold/Lightning damage, Life/ES, Cast speed"
  midGame: "Crit chance and multiplier clusters"
  endGame: "Cast on Critical setup with Meditate for sustained ES recharge"
levelingGuide:
  act1to3: "Falling Thunder and Glacial Cascade for elemental damage from Act 1"
  act4to6: "Add Meditate once available for ES sustain in tougher fights"
  mapping: "Full Cast on Critical setup with your chosen elemental damage type"
faqs:
  - q: "Cold or lightning?"
    a: "Pick based on what drops early, both routes come fully online by endgame, so don't stress the choice while leveling."
  - q: "How does Invoker compare to Martial Artist?"
    a: "Martial Artist currently rates higher due to its gear-independent bell mechanics, but Invoker's Cast on Critical synergy and Meditate defense make it a strong second choice."
dataSources:
  - "Mobalytics Monk Deep Dive"
  - "RPGStash Martial Artist comparison guide"
  - "Mobalytics Falling Thunder leveling build"
  - "Maxroll.gg All Ascendancy Nodes Revealed"
  - "Maxroll.gg PoE 2 Ascendancy Overview"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

A Cast-on-Critical-friendly ascendancy leaning on the Meditate skill for Energy Shield recharge, giving Invoker a strong defensive floor while scaling cold or lightning damage. Ranked second among Monk ascendancies behind Martial Artist.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this
build's power comes from hitting the right nodes at the right stage rather than rushing
everything at once. Cross-check the ascendancy node names against the in-game tree before
following this as a precise, click-by-click plan, especially for anything marked as not yet
individually verified above.
