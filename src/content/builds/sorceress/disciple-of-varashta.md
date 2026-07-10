---
title: "Sorceress Disciple of Varashta Djinn Summon Build Guide"
class: "Sorceress"
ascendancy: "Disciple of Varashta"
coreSkill: "Djinn Command (Ruzhan / Navira / Kelari)"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "C"
playstyle: "all-rounder"
estCost: "medium"
summary: "The Sorceress's summoner ascendancy, commanding up to three permanent Djinn (Ruzhan, Navira, Kelari), each with up to 4 selectable command skills. Plays closer to a Witch Necromancer than to a direct-damage caster."
pros:
  - "Djinn are permanent, reliable minions that free you up to focus on curses, utility, or your own spell damage"
  - "Very flexible, lean into a pure-summon playstyle or use Djinn purely for buffs while you cast yourself"
  - "Instruments of Power lets you dual-wield a Focus and Staff simultaneously, a build-enabling mechanic unique to this ascendancy"
cons:
  - "Rated as the weakest of the three Sorceress ascendancies for players who specifically want direct-caster or boss-melting gameplay"
  - "Minion-adjacent playstyle means less raw burst than Stormweaver or Chronomancer"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "The Fourth Teaching / Sacred Rituals"
    effect: "40% more Energy Shield Recharge Rate on low ES, reduced recharge delay; converts current ES into Armour for physical mitigation"
  - order: 2
    name: "Varashta's Intuition"
    effect: "100% of Elemental Damage is taken from Mana before Life"
  - order: 3
    name: "Instruments of Power"
    effect: "Equip a Focus while wielding a Staff, at 50% reduced Focus bonuses"
  - order: 4
    name: "Baryanic Leylines"
    effect: "Non-Unique Time-Lost Jewels have 40% increased radius"
  - order: 5
    name: "Ruzhan, the Blazing Sword"
    effect: "Command Ruzhan to hurl his greatsword, spreading hazardous runes"
  - order: 6
    name: "Navira, the Last Mirage"
    effect: "Command Navira to fracture Chilled Ground for high Spell damage and Freeze potential"
  - order: 7
    name: "Kelari's Malediction"
    effect: "Passively consume corpses in your presence, spawning Corpse Beetle minions"
skillGems:
  mainSkill:
    gem: "Living Lightning"
    supports: ["Muster", "Controlled Destruction"]
  secondarySkill:
    gem: "Fireball"
    supports: ["Fire Penetration"]
  spiritSkills:
    - gem: "Muster"
      supports: []
    - gem: "Clarity"
      supports: []
  utilitySkills:
    - gem: "Living Bomb"
      supports: []
gearPriority:
  - slot: "Focus + Staff"
    item: "Spell damage, Life/ES"
    note: "Minion damage"
    priority: "core"
  - slot: "Sceptre (alt weapon set)"
    item: "Minion damage, Spirit"
    note: "Cast speed"
    priority: "recommended"
  - slot: "Jewel"
    item: "Minion-specific bonuses"
    note: "Time-lost jewel radius"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Minion damage, Life/ES, Mana"
  midGame: "Djinn-support clusters, Time-Lost Jewel radius nodes"
  endGame: "Full 3-Djinn setup with Muster stacking for minion damage multiplier"
levelingGuide:
  act1to3: "Living Lightning on Fireball for minion generation from Act 1"
  act4to6: "Add Muster support once available for a per-minion damage multiplier"
  mapping: "Full Djinn command setup, decide between pure summon and self-cast hybrid based on preference"
faqs:
  - q: "Is this a real summoner build or a caster build?"
    a: "Both are viable, you can go pure minion-focused with the Djinn doing the work, or use them purely for buffs while you cast your own spells."
  - q: "Why is it rated C-tier?"
    a: "Not because it's non-functional, but because it's a minion-adjacent playstyle competing against two ascendancies (Stormweaver, Chronomancer) built for much higher direct damage."
dataSources:
  - "VULKK.com Disciple of Varashta ascendancy breakdown"
  - "PoE2Wiki Fextralife Disciple of Varashta page"
  - "Mobalytics Disciple of Varashta node cheat sheet"
  - "PoE-Vault Djinn Minion leveling guide"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

The Sorceress's summoner ascendancy, commanding up to three permanent Djinn (Ruzhan, Navira, Kelari), each with up to 4 selectable command skills. Plays closer to a Witch Necromancer than to a direct-damage caster.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this
build's power comes from hitting the right nodes at the right stage rather than rushing
everything at once. Cross-check the ascendancy node names against the in-game tree before
following this as a precise, click-by-click plan, especially for anything marked as not yet
individually verified above.
