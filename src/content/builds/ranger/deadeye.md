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
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

Whirling Slash builds up to 3 combo stages, then Twister converts those stages into a burst of ranged tornado projectiles, a spear-based combo usable on nearly any class, but scaling especially well on Deadeye's projectile-focused tree.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this
build's power comes from hitting the right nodes at the right stage rather than rushing
everything at once. Cross-check the ascendancy node names against the in-game tree before
following this as a precise, click-by-click plan, especially for anything marked as not yet
individually verified above.
