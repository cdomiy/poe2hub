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

Disciple of Varashta is the Sorceress's summoner ascendancy, commanding up to three permanent Djinn (Ruzhan, Navira, Kelari), each with up to 4 selectable command skills. The ascendancy plays closer to a Witch Necromancer than to a direct-damage caster, which makes it a unique option for Sorceress players who want minion-focused gameplay without switching classes.

The ascendancy received significant buffs in 0.5, with extra djinn cooldown recovery on the passive tree, a new Archon node that triggers off djinn casts, and a stacking Puppet Master buff on minion supports like Feeding Frenzy [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2). Dslily's Djinns of Varashta build is rated 5/5 for League Start and 5/5 for Bossing in 0.5, though only 3/5 for Mapping clear speed [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2). The Archon Djinn Blaster variant by P4wnyhof uses the hidden Archon of Undeath node to remove all djinn cooldowns, enabling zero-downtime spam [(Kami-Labs)](https://kami-labs.fr/path-of-exile-2/builds-path-of-exile-2/build-magicienne-archon-djinn-blaster-saison-5/).

However, community sentiment is mixed. Forum threads describe djinn gameplay as feeling bad due to long cooldowns, slow spell animations, and the fact that djinn don't tank, don't block, and don't have persistent presence like traditional minions [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3890502/page-2). The ascendancy is rated as the weakest of the three Sorceress ascendancies for players who specifically want direct-caster or boss-melting gameplay. For summoner enthusiasts, it offers a viable and unique path.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order. This build's power comes from hitting the right nodes at the right stage rather than rushing everything at once.

**Act 1-3 (Levels 1-33):** Use Essence Drain plus Contagion early for clear, Skeletal Sniper plus Flame Wall for single target. Swap to Bone Storm at level 14 for a strong leveling powerhouse [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2). Take the first sand djinn (Kelari) at your first Ascendancy, and fire djinn (Ruzhan) at the second.

**Act 4-6 (Levels 34-55):** Commit fully to djinns and minions around level 50. Add Muster support once available for a per-minion damage multiplier. The Fourth Teaching ascendancy node is immediately impactful, reducing ES recharge delay by 1 second and adding 40% more recharge rate on low ES.

**Mapping (Levels 56+):** Full Djinn command setup. Decide between pure summon (let the djinn and minions do all the work) and self-cast hybrid (use djinn purely for buffs while you cast your own spells). The Archon of Undeath variant, unlocked through endgame content, removes all djinn cooldowns and enables a dramatically different playstyle [(Kami-Labs)](https://kami-labs.fr/path-of-exile-2/builds-path-of-exile-2/build-magicienne-archon-djinn-blaster-saison-5/).

Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan.

## Key Mechanics & Interactions

**Three Djinn with complementary roles.** Kelari (sand) applies Critical Weakness and delivers stacking single-target damage through Deception repeats. Ruzhan (fire) lays down hazardous rune fields and is the primary Archon of Undeath activator (zero mana cost, zero cooldown). Navira (cold) fractures Chilled Ground for screen-wide freeze potential and provides on-demand ES recharge restart [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2).

**Instruments of Power dual wield.** This node lets you equip a Focus while wielding a Staff, at 50% reduced Focus bonuses. This is a build-enabling mechanic unique to this ascendancy -- no other class can simultaneously benefit from both a Staff's spell damage and a Focus's minion/cast bonuses.

**Fourth Teaching ES sustain.** 40% more Energy Shield Recharge Rate on low ES and reduced recharge delay. Community consensus is that this node keeps Disciple of Varashta's ES sustain "busted relative to the rest of the field" even after the 0.5 ES nerfs [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2).

**Archon of Undeath zero-cooldown mode.** The hidden node from endgame content grants a buff that removes all djinn skill cooldowns while active. Maintained by spamming Ruzhan commands. With the Dominion jewel (Contempt Suffering in Isolation, approximately 11 divines), the Archon buff has no recovery period [(Kami-Labs)](https://kami-labs.fr/path-of-exile-2/builds-path-of-exile-2/build-magicienne-archon-djinn-blaster-saison-5/). Without it, you rely on buff duration and reduced recovery time.

**Baryanic Leylines jewel radius.** Non-Unique Time-Lost Jewels have 40% increased radius, making jewel socketing more efficient and enabling passive tree configurations that other ascendancies cannot achieve.

## Gear Progression

**Early Game (Acts 1-3):** A scepter with minion damage and Spirit for persistent minions. Standard rare gear with Life/ES and resistances. The Ever-Grasping Ring (cheap unique, 25% chaos damage to minions) is an early pickup -- its chaos self-damage downside is negated by Chaos Inoculation [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2).

**Mid Game (Acts 4-6):** Scepter with +Minion Skills, Spirit, and percent Damage to Allies. A Focus with +Minion Skills for the Instruments of Power setup. High-ES body armour for defense. Amulet with +Spirit and +Minion Skills.

**Late Game (Mapping+):** The Focus becomes your most expensive piece (approximately 6 divines for a well-rolled one with +2 Minion Skills) [(Kami-Labs)](https://kami-labs.fr/path-of-exile-2/builds-path-of-exile-2/build-magicienne-archon-djinn-blaster-saison-5/). Contempt Suffering in Isolation jewel for Dominion activation. Bones of Ullr for minion reservation cost reduction. Prism Guardian for +50 Spirit. Amanamu's Gaze rune in helmet for automatic ailment cleansing on every command skill cast [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3908847). Breach rings for extra minion projectiles.

## Ascendancy Node Breakdown

1. **The Fourth Teaching / Sacred Rituals** -- 40% more Energy Shield Recharge Rate on low ES, reduced recharge delay; converts current ES into Armour for physical mitigation. The defensive backbone that keeps this ascendancy's ES sustain strong even after 0.5 nerfs.

2. **Varashta's Intuition** -- 100% of Elemental Damage is taken from Mana before Life. A Mind Over Matter layer that protects your life pool from elemental burst damage. Requires sufficient mana to absorb hits.

3. **Instruments of Power** -- Equip a Focus while wielding a Staff, at 50% reduced Focus bonuses. The unique build-enabling mechanic that allows dual stat-stacking from both weapon types.

4. **Baryanic Leylines** -- Non-Unique Time-Lost Jewels have 40% increased radius. Efficient jewel socketing that opens up passive tree configurations unavailable to other ascendancies.

5. **Ruzhan, the Blazing Sword** -- Command Ruzhan to hurl his greatsword, spreading hazardous runes. The fire djinn and primary Archon activator due to zero mana cost and zero cooldown.

6. **Navira, the Last Mirage** -- Command Navira to fracture Chilled Ground for high Spell damage and Freeze potential. Also provides on-demand ES recharge restart for survival.

7. **Kelari's Malediction** -- Passively consume corpses in your presence, spawning Corpse Beetle minions. Automatic corpse cleanup and minion generation that feeds on battlefield deaths.

## Common Mistakes & Pitfalls

- **Treating djinn like traditional minions.** Djinn don't tank, don't block doors, and don't have persistent presence. They are essentially cooldown-gated spells that happen to be invulnerable. Playing them like Skeletal Warriors leads to frustration [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3890502/page-2).

- **Going pure djinn without any self-cast skills.** Community feedback strongly suggests that pure-djinn mapping feels terrible due to cooldown gaps. A hybrid approach (djinn plus your own spells) is much smoother [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3890502/page-2).

- **Ignoring the Archon of Undeath path.** If you have access to the endgame content that unlocks this hidden node, it fundamentally changes the ascendancy's feel by removing all djinn cooldowns. It is worth pursuing.

- **Underestimating Spirit requirements.** This build is Spirit-hungry -- every persistent minion costs Spirit, and Instruments of Power demands both a Staff and Focus. Target 196+ Spirit minimum, ideally 349+ for the full setup [(Mobalytics)](https://mobalytics.gg/poe-2/builds/poison-concoction-wilsunboxile).

- **Neglecting the Fourth Teaching for offense.** The ES sustain from Fourth Teaching isn't just defensive -- it enables aggressive play because you can recover quickly between engagements. Don't skip it for offensive nodes.

## Mapping & Endgame Tips

**Mapping:** Clear speed is the ascendancy's acknowledged weakness (rated 3/5 by Dslily) [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2). Use Navira for screen-wide chilled ground explosions and Ruzhan for fire coverage. The Cast on Minion Death plus Ice Nova loop (where your Infernal Legion minions die and trigger Ice Nova automatically) is a creative mapping solution [(Kami-Labs)](https://kami-labs.fr/path-of-exile-2/builds-path-of-exile-2/build-magicienne-archon-djinn-blaster-saison-5/).

**Pinnacle Bosses:** This is the ascendancy's strong suit. The single-target rotation is deep: Elemental Weakness, Frost Bomb for exposure, Pain Offering, Kelari's Brutality twice, Kelari's Deception three times on the same spot (for six stacking hits), then Ruzhan's Trap [(Codex Wiki)](https://exile.codex-wiki.com/builds/one-of-the-best-league-starters-got-massive-buffs-for-poe-2). It is seven buttons deep, which is complex but rewarding.

**Defensive Layers:** Fourth Teaching ES sustain is the primary defense. Varashta's Intuition provides MoM against elemental damage. Navira's Well provides on-demand ES recharge. Ghost Dance and Wind Dancer if Spirit allows. Amanamu's Gaze helmet rune cleanses ailments on every command skill cast, keeping ES recharge unblocked [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3908847).

**Spirit Budget:** Spirit is your most constrained resource. Prioritize defensive Spirit skills first, then minion Spirit skills, then offensive buffs. The transition from Shield to Focus (for Instruments of Power) should wait until you have a Focus worth the swap.

