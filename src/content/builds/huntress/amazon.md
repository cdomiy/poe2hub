---
title: "Huntress Amazon Bleed / Crit Spear Build Guide"
class: "Huntress"
ascendancy: "Amazon"
coreSkill: "Rake (Bleed) / Twister Hybrid"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "league-starter"
estCost: "low"
summary: "The straightforward, gear-agnostic Huntress path. Exploit enemy weaknesses for movement and skill speed, convert excess Accuracy into Critical Strike Chance, and leech life off elemental attacks. Currently the recommended leveling ascendancy for the class."
pros:
  - "Rated the recommended leveling Ascendancy for Huntress specifically, strong out of the gate with no complex setup"
  - "Converts spare Accuracy into Crit Chance, making rare-item shopping simpler than crit-dependent builds"
  - "Can also run the Twister core if you'd rather hybridize into the class's signature spear combo"
cons:
  - "Spirit Walker outperforms it specifically for Twister scaling, since Amazon's nodes weren't designed around that skill"
  - "Purely offensive ascendancy, you'll need to source your defensive layer from gear and passive tree rather than ascendancy nodes"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Predatory Instinct"
    effect: "The first Ascendancy pick for a Bleed-focused Huntress; reveals weaknesses and grants 50% more damage against enemies with an Open Weakness, no gear requirement"
  - order: 2
    name: "Elemental Surge"
    effect: "Grants a skill that creates a high-damage elemental explosion when a projectile attack reaches the end of its flight, consuming stored Infusion"
  - order: 3
    name: "Surging Avatar"
    effect: "Grants 2 Cold, Fire, and Lightning Surges each time you consume a Charge, instead of just Lightning Surges"
  - order: 4
    name: "Stalking Panther"
    effect: "Increases the effectiveness of Helmet, Gloves, and Boots"
  - order: 5
    name: "Mystic Harvest"
    effect: "Enables Elemental Leech, converting a portion of elemental damage dealt into life recovery"
skillGems:
  mainSkill:
    gem: "Rake"
    supports: ["Bleed", "Melee Physical", "Impact"]
  secondarySkill:
    gem: "Herald of Blood"
    supports: ["Blind II"]
  spiritSkills:
    - gem: "Wind Dancer"
      supports: ["Maim", "Blind II"]
  utilitySkills:
    - gem: "Disengage"
      supports: ["Holy Descent"]
    - gem: "Thunderous Leap"
      supports: []
gearPriority:
  - slot: "Weapon (Spear)"
    item: "Physical damage, Attack speed"
    note: "Bleed magnitude"
    priority: "core"
  - slot: "Boots"
    item: "Movement speed, Life"
    note: "Resistances"
    priority: "recommended"
  - slot: "Amulet"
    item: "Crit chance"
    note: "Charge stack-cap"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Bleed and Physical damage clusters, Life"
  midGame: "Critical Strike and Penetrate nodes"
  endGame: "Full crit-conversion setup or hybridize into Twister for a mapping-speed variant"
levelingGuide:
  act1to3: "Rake for Bleed application, Disengage and Thunderous Leap for mobility"
  act4to6: "Add Herald of Blood for Bleed-triggered explosions and Wind Dancer for defense"
  mapping: "Full Bleed/Crit setup, or transition into the Twister combo if you prefer that playstyle"
faqs:
  - q: "How do I cover this build's defense?"
    a: "Amazon leans offensive by design, plan evasion or armour mods from gear and the passive tree rather than expecting the ascendancy to cover it."
  - q: "Amazon or Spirit Walker?"
    a: "Amazon is the more beginner-friendly, gear-agnostic leveling pick; Spirit Walker specifically out-scales it for the Twister endgame variant."
dataSources:
  - "Maxroll.gg Spear Huntress leveling guide"
  - "Boostmatch Huntress best-build guide"
  - "Game8 Huntress ascendancies guide"
  - "VULKK.com Amazon Huntress ascendancy breakdown"
  - "PoE2Wiki Fextralife Amazon page"
  - "Maxroll.gg PoE 2 Ascendancy Overview"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

The straightforward, gear-agnostic Huntress path. Exploit enemy weaknesses for movement and skill speed, convert excess Accuracy into Critical Strike Chance, and leech life off elemental attacks. Currently the recommended leveling ascendancy for the class.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this
build's power comes from hitting the right nodes at the right stage rather than rushing
everything at once. Cross-check the ascendancy node names against the in-game tree before
following this as a precise, click-by-click plan, especially for anything marked as not yet
individually verified above.
