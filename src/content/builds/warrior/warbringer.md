---
title: "Warrior Warbringer Totem & War Cry Build Guide"
class: "Warrior"
ascendancy: "Warbringer"
coreSkill: "Grenade Ballista Totems / Ancestral Warrior Totems"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "league-starter"
estCost: "low"
summary: "A totem-and-warcry ascendancy proven across multiple patches as a league starter. The Grenade Ballista Totem variant has been successfully played through 0.3, 0.4, and 0.5 by the same build creator, a rare mark of consistency in an Early Access game."
pros:
  - "Totems tank for you, making this one of the tankiest budget-friendly options in the game"
  - "Warcaller's Bellow removes warcry cooldowns entirely once allocated, turning warcries into a spammable damage-and-buff tool"
  - "Fully functional on a low budget, playable start to finish on 1-2 Divine Orbs of gear"
cons:
  - "Clear speed is noticeably slower than meta speed-clearing builds"
  - "Totem placement feels clunky in narrow corridors and tight boss arenas"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Anvil's Weight"
    effect: "Break Armour equal to a portion of your Hit damage dealt"
  - order: 2
    name: "Imploding Impacts"
    effect: "You can Break Enemy Armour below 0, increasing all damage they take from Hits"
  - order: 3
    name: "Jade Heritage"
    effect: "Grants Encase in Jade, gain a stack of Jade every second, consume all stacks for a damage-absorbing buff"
  - order: 4
    name: "Answered Call"
    effect: "Grants Ancestral Spirits, triggered when you summon a Totem, plus +1 maximum summoned Totems"
  - order: 5
    name: "Wooden Wall"
    effect: "20% of damage from Hits is taken from your nearest Totem's Life before you"
  - order: 6
    name: "Renly's Training"
    effect: "Gain 35% base Block Chance from an equipped Shield instead of the Shield's own value"
  - order: 7
    name: "Turtle Charm"
    effect: "Take 30% of damage from Blocked Hits, Maximum Block Chance raised to 75%"
  - order: 8
    name: "Warcaller's Bellow"
    effect: "Warcries explode corpses for 25% of their life as physical damage, and ignore all Warcry cooldowns"
skillGems:
  mainSkill:
    gem: "Explosive Grenade"
    supports: ["Grenade Speed", "Controlled Destruction", "Physical Damage"]
  secondarySkill:
    gem: "Artillery Ballista"
    supports: ["Fire Penetration", "Magnified Area"]
  spiritSkills:
    - gem: "Determination"
      supports: []
    - gem: "Herald of Ash"
      supports: []
  utilitySkills:
    - gem: "Infernal Cry"
      supports: ["Raging Cry"]
    - gem: "Leap Slam"
      supports: ["Faster Attack"]
gearPriority:
  - slot: "Weapon (2H Mace)"
    item: "Physical damage %, Attack speed"
    note: "Increased totem damage, Stun duration"
    priority: "core"
  - slot: "Body Armour"
    item: "High Armour, Life, Resistances"
    note: "% increased Armour, Totem life"
    priority: "recommended"
  - slot: "Boots"
    item: "Movement speed 20%+, Life, Resistances"
    note: "% increased Armour"
    priority: "recommended"
  - slot: "Amulet"
    item: "Life, Attributes"
    note: "Physical damage %, Warcry effect"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Totem damage nodes, Life clusters, Armour"
  midGame: "Warcry effect clusters, Rage generation, Totem duration"
  endGame: "Maximum totem count, Armour/ES hybrid clusters, Defiance nodes"
levelingGuide:
  act1to3: "Boneshatter + Shockwave Totem, Grenade skills become available from Act 2"
  act4to6: "Transition into the Grenade Ballista setup and add Rage support"
  mapping: "Full Ancestral Warrior Totem or Grenade Totem setup, budget 1-2 Divine Orbs for endgame-capable gear"
faqs:
  - q: "Ancestral Warrior Totems or Grenade Totems?"
    a: "AWT hits harder for a more hands-off playstyle; Grenade Ballista is cheaper to set up and safer at range. Both clear all content."
  - q: "Can it do pinnacle bosses?"
    a: "Yes, this exact archetype has been played through multiple patches into pinnacle content by its originating build creator."
dataSources:
  - "Maxroll.gg Boneshatter Warbringer leveling guide"
  - "PoE2Wiki Fextralife Warbringer page"
  - "Switchblade Gaming Warbringer rage-loop guide"
  - "aoeah.com 0.5 Tier List"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

A totem-and-warcry ascendancy proven across multiple patches as a league starter. The Grenade Ballista Totem variant has been successfully played through 0.3, 0.4, and 0.5 by the same build creator, a rare mark of consistency in an Early Access game.

Warbringer's identity is built on two pillars: **totem-based combat** and **warcry spam**. The totems deal damage for you while absorbing a portion of incoming hits, and Warcaller's Bellow removes all warcry cooldowns while adding corpse explosions to every warcry cast. This combination creates a uniquely safe playstyle — you stand behind your totems, spam warcries for damage and buffs, and let the explosions chain through packs. [(poe2dictionary Warbringer)](https://poe2dictionary.com/ascendancy-class/warbringer/)

The Grenade Ballista Totem variant, originated and maintained by POEGuy007, has been verified across three consecutive patches (0.3, 0.4, 0.5). In 0.5, it clears Waystone 15/16 maps and pinnacle bosses at difficulty +1 and +2 on the "normal" budget version. The consistency of this build across balance changes is remarkable in an Early Access game where metas shift every patch. [(PoE Forum POEGuy Build Thread)](https://www.pathofexile.com/forum/view-thread/3761391)

The ascendancy also supports a melee variant — the Firebringer — which uses Forge Hammer, Infernal Cry, and Stampede in a direct-combat loop. This variant trades the safety of totems for faster kill times but requires significantly more skill to pilot safely. [(Boostmatch Firebringer Guide)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this build's power comes from hitting the right nodes at the right stage rather than rushing everything at once. Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan, especially for anything marked as not yet individually verified above.

**Act 1 (Levels 1–16):** Use Boneshatter and Shockwave Totem as your primary skills. Boneshatter handles packs that are primed for stun, while Shockwave Totem provides safe ranged damage. The build does not feel great during Acts 1 and 2 — the creator is candid about this. Push through with standard melee skills until your Ascendancy nodes come online. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

**Act 2 (Levels 14–29):** Grenade skills become available. Begin transitioning toward the Grenade Ballista setup. Complete your first Ascendancy trial and allocate Anvil's Weight — the armour break on hit provides immediate value against all enemies, especially armoured bosses. Add Rage support as it becomes available.

**Act 3–4 (Levels 30–55):** This is where the build starts to come together. Allocate Imploding Impacts as your second Ascendancy node — the ability to break armour below zero means every hit after the break is amplifying all physical damage the enemy takes. Complete more Ascendancy trials and aim for Warcaller's Bellow as your third node, which transforms warcries from occasional buffs into spammable damage tools. [(Boostmatch Firebringer Guide)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

**Early Maps (White/Yellow):** Full Grenade Ballista Totem setup online. The weapon is your top gear priority — look for a crossbow with the extra Ballista Totem implicit, the grenade implicit, and high flat physical damage. In 0.5, the +5 attack skills craft is no longer cheap on day one, so run without gem levels on the weapon initially. The extra totem and grenade implicits plus flat physical are the minimum requirements. Day-three or day-four rare gear is enough to push Waystone 15 content. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

**Late Maps/Endgame:** Budget 1–2 Divine Orbs for endgame-capable gear. The normal version handles Waystone 15/16 maps and pinnacle bosses at difficulty +1 and +2. For pinnacle difficulty +3, transition to the maxed version with the +5 attack skill crossbow (30–40 Exalt range later in the league). [(PoE Forum POEGuy Build Thread)](https://www.pathofexile.com/forum/view-thread/3761391)

## Key Mechanics & Interactions

**Armour Break Loop (Anvil's Weight + Imploding Impacts):** Anvil's Weight breaks armour equal to a portion of your hit damage. Imploding Impacts allows armour to break below zero, meaning over-breaking makes enemies take increased physical damage from all hits. This is particularly effective against armoured bosses — the more armour they have, the more negative their armour goes, and the more damage they take from every subsequent hit. [(Boostmatch Firebringer Guide)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

**Warcaller's Bellow — Cooldown Removal + Corpse Explosion:** This node does two things simultaneously: it removes all warcry cooldowns and causes warcries to explode nearby corpses for 25% of their life as physical damage. In practice, this means you can spam warcries as fast as you can press the button, and each cast detonates any corpses in range. In dense maps, the first few kills create corpses, and subsequent warcry casts chain-explode them for massive AoE clear. This is the engine that makes Warbringer mapping feel smooth despite being a totem build. [(poe2dictionary Warbringer)](https://poe2dictionary.com/ascendancy-class/warbringer/)

**Answered Call — Ancestral Spirits + Totem Damage Mitigation:** Answered Call triggers Ancestral Spirits when you summon a totem and grants +1 maximum summoned totems. The Ancestral Spirits fight alongside you, and if the totem that summoned them dies, the spirits also die. Combined with Wooden Wall (20% of damage from hits is taken from your nearest Totem's Life before you), your totems serve double duty as both damage dealers and damage absorbers. [(poe2dictionary Warbringer)](https://poe2dictionary.com/ascendancy-class/warbringer/)

**No Mana in Core Rotation:** The Grenade Ballista Totem variant uses no mana in its core rotation — totems do the work while you stand back and reposition. This eliminates an entire class of sustain problems that other builds must solve, and the creator specifically frames this as a major quality-of-life advantage. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

## Gear Progression

**Early Game (Acts 1–3):** Use whatever weapons you find — a strong two-handed mace with high physical damage works for the melee phase. Do not invest in specific crossbow crafting until you reach the point where Ballista Totems become your primary damage source. Prioritize life and armour on all other gear.

**Mid Game (Acts 4–6):** Begin seeking a crossbow with the extra Ballista Totem implicit and grenade implicit. Flat physical damage is the next priority affix. In 0.5, the +5 attack skills combination is no longer cheaply craftable on league start, so do not stress about gem levels initially. For amulets, three flexible options exist: a rare with +2 or +3 to projectile skills, the unique Idol of Full Doom for one extra totem, or the unique Firefly for fire scaling. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

**Late Game (Mapping+):** The weapon remains the priority. The normal version uses a crossbow with extra Ballista Totem implicit + grenade implicit + high flat physical damage — affordable at 1–2 Divine Orbs. The maxed version adds +5 to attack skills, pushing the weapon into the 30–40 Exalt range. Rings and gloves want flat physical damage to attacks, with fire damage to attacks as a viable add-on. Body armour should be whatever rolls the highest armour value you can find plus resistances. No mandatory unique on the body armour slot. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

For the Firebringer melee variant, the goal is to acquire three strong two-handed maces for the weapon-set system once Giant's Blood is online. Pre-Giant's Blood with one good mace clears T12 comfortably. [(Boostmatch Firebringer Guide)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

## Ascendancy Node Breakdown

1. **Anvil's Weight** — Breaks armour equal to 10% of hit damage dealt. Take this first — the armour break is an instant value-add in every fight and scales with your damage output. [(Boostmatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

2. **Imploding Impacts** — Allows armour to break below zero. More armour equals more negative armour, which translates into more physical damage taken by enemies. Extremely powerful against armoured bosses. Take this second. [(Boostmatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

3. **Jade Heritage** — Grants Encase in Jade, a damage-absorbing buff that consumes accumulated Jade stacks. Defensive utility node, situational but valuable for hardcore or difficult content.

4. **Answered Call** — Triggers Ancestral Spirits on totem summon and grants +1 maximum summoned totems. Provides both offense (spirits deal damage) and defense (more totems = more Wooden Wall damage absorption). Take this as your fourth node for maximum totem synergy. [(Boostmatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

5. **Wooden Wall** — 20% of damage from hits is taken from your nearest Totem's Life before you. This is a powerful defensive layer — your totems literally tank for you. The more totems you have active, the more consistently this triggers. [(poe2dictionary)](https://poe2dictionary.com/ascendancy-class/warbringer/)

6. **Renly's Training** — Gain 35% base Block Chance from your shield instead of the shield's own value. Useful if your shield has low block but you want a guaranteed block floor. Arguably does not scale if your shield already has more than 35% block. [(PoE Forum Feedback)](https://www.pathofexile.com/forum/view-thread/3930961)

7. **Turtle Charm** — Take 30% of damage from Blocked Hits, and Maximum Block Chance is raised to 75%. Combined with Renly's Training, this creates a solid block-based defense. Less relevant for totem builds that already benefit from Wooden Wall.

8. **Warcaller's Bellow** — The build-defining node. Warcries explode corpses for 25% of their life as physical damage and ignore all warcry cooldowns. Take this as early as your third Ascendancy allocation. It transforms the entire playstyle from methodical to spammable. [(poe2dictionary)](https://poe2dictionary.com/ascendancy-class/warbringer/)

**Recommended allocation order:** Anvil's Weight → Imploding Impacts → Warcaller's Bellow → Answered Call. This maximizes damage amplification first and then adds the totem synergy for defense and additional damage.

## Common Mistakes & Pitfalls

- **Expecting the build to feel good in Acts 1–2.** The creator is explicit: Acts 1 and 2 are clunky on Warrior, especially for new players. The build does not start to feel good until end-of-campaign when totems and Ascendancy nodes are fully online. Push through — the payoff is worth it. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

- **Neglecting Ascendancy trials on time.** The Warbringer nodes are what make the defenses hold up. Delaying Ascendancy progression means playing without Wooden Wall, Answered Call, and Warcaller's Bellow — all of which are essential for the build to function properly in maps.

- **Trying to facetank like a Titan.** Warbringer is tanky *through totems*, not through raw life/armor stacking. Standing in the middle of a pack without totems active is a quick way to die. Position behind your totems and let them absorb damage via Wooden Wall.

- **Over-investing in a league-start crossbow.** In 0.5, the +5 attack skills craft is no longer cheap. Spending your entire budget on a maxed crossbow early in the league leaves no currency for other gear. The normal version (extra totem implicit + grenade implicit + flat physical) clears all content at difficulty +1/+2. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

- **Forgetting that totems need line of sight.** In narrow corridors and tight boss arenas, totem placement feels clunky. If totems cannot see enemies, they do not fire. Plan your totem positions carefully in enclosed spaces.

## Mapping & Endgame Tips

**Map Clearing:** Place 4 Ballista Totems, spam warcries for corpse explosions, and reposition as needed. The one-button gameplay is intentionally simple — the creator designed it for new players and relaxed sessions. No mana management is required in the core rotation. Clear speed is fast but not in the same tier as Flicker Strike or Lightning Arrow builds. [(Exile Codex Warbringer Guide)](https://exile.codex-wiki.com/builds/poe-2-0-5-grenade-totem-warbringer-starter-more-gameplay)

**Pinnacle Bossing:** The normal version clears King of the Mist at difficulty +1 and +2. For difficulty +3, transition to the maxed version with the +5 attack skill crossbow. The build has been verified against the Arbiter of Divinity (0.5 pinnacle boss) on both budget and maxed gear. [(PoE Forum POEGuy Build Thread)](https://www.pathofexile.com/forum/view-thread/3761391)

**Firebringer Melee Variant Bossing:** Place Shockwave Totem ×4 → Infernal Cry (only if you have Ancestral Cry) → Forge Hammer → Ancestral Cry → Walk around (every step triggers a slam from Ancestral Cry procs) → War Banner when available → Sunder once armour is fully broken. Single target falls apart when the boss moves, as totems are static and Ancestral Cry slams require positioning. Accept this limitation. [(Boostmatch Firebringer Guide)](https://boostmatch.gg/blog/poe-2/articles/poe2-warbringer-best-build-firebringer-guide)

**Atlas Content:** The build handles the standard Atlas rotation (Ritual, Abyss, Expedition, Breach) comfortably on budget gear. Totem placement is particularly effective for stationary encounters like Ritual circles and Expedition logbooks. For Breach and Abyss, the totems auto-target enemies within range, reducing the need for active targeting.

**Budget Planning:** The entire build is playable from start to finish on 1–2 Divine Orbs of gear. The normal version clears all content at difficulty +1/+2. The maxed version (30–40 Exalts for the crossbow) extends this to difficulty +3. This makes it one of the best budget-to-performance ratios in the game. [(PoE Forum POEGuy Build Thread)](https://www.pathofexile.com/forum/view-thread/3761391)
