---
title: "Jamanra, the Abomination Boss Guide (Act 2 Final Boss)"
category: "campaign"
recommendedLevel: 30
updatedAt: 2026-07-09
patchVersion: "0.5.4b"
phases:
  - name: "Phase 1 (The Dreadnought)"
    trigger: "Fight start, in the confined Dreadnought arena"
    mechanic: "Lightning-focused melee and ranged attacks: a quick lightning melee strike, thrown spears that explode on landing, roaming electrified posts connected by an arcing beam, and a 15-second channeled Sandstorm that acts as a wipe mechanic if you're caught in the open."
    counter: "Circle behind Jamanra to bait the safer melee strike rather than his more dangerous ranged options. During the Sandstorm, immediately break off and stand behind Sekhema Asala's shield, her protection extends surprisingly far across the arena, so there's real room to reposition rather than panicking."
  - name: "Phase 2 (Desert Arena)"
    trigger: "Around 65% health"
    mechanic: "Jamanra becomes briefly untargetable and destroys the original arena, moving the fight to a larger desert setting without Asala's support. New tools include roaming tornadoes, static electric fences, projectile-firing gates, and a telegraphed overhead sword slam that hits hard if not dodged at the last second."
    counter: "Your flask charges refill at the start of this phase, use that reset wisely rather than burning it immediately. Keep the tornado in your peripheral vision at all times since losing track of it is one of the more common causes of death here, and treat the individual stray projectiles as background noise compared to the sword slam."
  - name: "Late Phase 2 (Below ~20% Health)"
    trigger: "Around 20% health"
    mechanic: "A movement-restricting ability that heavily limits safe positioning, reported as rarely used more than twice per fight."
    counter: "Save flask charges specifically for this stretch, ideally entering it with at least 3-5 uses remaining, since this is where attack density peaks."
commonDeaths:
  - "Standing in the open during the Sandstorm instead of repositioning behind Asala's shield"
  - "Losing track of the roaming tornado in Phase 2 while focused on other projectiles"
  - "Getting caught by the telegraphed overhead sword slam late in the fight with flasks already depleted"
drops:
  - "Standard Act 2 completion rewards and story progression, defeating him unlocks Act 3"
relatedBuilds: []
---
## Full Fight Guide

Jamanra, the Abomination is the final boss of Act 2, found at the end of the Dreadnought Vanguard after fighting through the Dreadnought itself. He deals primarily Lightning and Physical damage and is notably weak to Cold, working some cold damage into your build (even temporarily) measurably speeds up the fight.

This is widely considered a significant early difficulty wall for players progressing through the campaign for the first time, his health pool and stun threshold are noticeably higher than other Act 2 bosses, and the fight rewards patience and positioning over raw damage racing.

### Preparation

Cap your Lightning resistance before attempting this fight, the Sisters of Garukhan altar at the Spires of Deshar (also in Act 2) grants a permanent +10% Lightning Resistance bonus and is worth picking up beforehand. Bring flasks with charge-generation modifiers, this is a long fight, and running dry on recovery mid-encounter is a common cause of otherwise-avoidable deaths.

## Phase-by-Phase Breakdown

### Phase 1 — The Dreadnought (100–65% Health)

The fight takes place on the Dreadnought, a confined arena aboard a massive desert caravan. Sekhema Asala fights alongside you in this phase, and her shield is your primary survival tool during the Sandstorm mechanic.

According to poe2db data, Jamanra has 717% increased Life (approximately 4,897 Life at Level 32 in the base encounter, scaling much higher on Cruel difficulty), a 200% damage multiplier, and resistances of 30% Physical, -30% Fire, and 30% Lightning. His critical strike chance is 5% with a +30% critical damage bonus, and his attack range spans 6–18 units at a 1.5-second attack speed. His weakness to Cold is confirmed by the data—Cold damage deals significantly more effective damage than Fire or Lightning.

#### Key Mechanics in Phase 1

**Lightning Melee Strike**: A quick frontal lightning attack that deals moderate damage. This is actually the safer attack to bait—circle behind Jamanra to force this instead of his ranged options, which are harder to dodge.

**Thrown Spears**: Jamanra hurls spears that explode on landing for mixed Physical and Lightning damage. When you see spears appear on either side of his shoulders and his arm thrusts forward, dodge roll at the moment the spear begins to move. Dodging too early means you will be hit by a follow-up spear during your recovery. This attack is significantly harder to avoid at range, which is why melee positioning is often safer.

**Roaming Electrified Posts (Lightning Arc)**: Jamanra creates two electrified posts connected by an arcing lightning beam. These have three formations:
- **Explosion formation**: Posts hover high and then detonate. Be on the opposite side of the arena.
- **Roaming formation**: Posts drift slowly around the arena. Dodge through the arc or stay outside the beam.
- **Chasing formation** (appears after ~80% health): Posts actively track you. Dodge in sharp, triangular patterns to throw off their tracking, since they lock onto your last position. Save flask charges for this formation, as some damage is hard to avoid entirely.

**Sandstorm (15-Second Channel)**: This is the wipe mechanic. Jamanra channels a sandstorm that covers the entire arena, dealing escalating damage over 15 seconds. The damage starts as chip damage (~30 per second through typical defenses) but escalates to deadly damage (~500 per second) as the storm establishes. **Sekhema Asala creates a shield that is the only safe zone.** Look for Asala—she is always in the top-left or bottom-left area of the arena (or close to those spots). Stand approximately one meter behind her. The safe zone is both narrower and longer than it looks.

During the Sandstorm, Jamanra summons weak minions called King's Attendants that have negligible melee attacks. The real danger is that Jamanra can corpse-explode these minions for chip Lightning damage that can inflict Shock—being Shocked while standing in the Sandstorm's outer edge is a lethal combination. Kill the minions or use a close-range skill that does not require targeting to clear them.

After the Sandstorm ends, Jamanra takes several seconds to recover. This is your safest damage window.

### Phase 2 — Desert Arena (65–20% Health)

When Jamanra reaches approximately 65% health, he destroys the Dreadnought, sending both of you into the desert. Asala is knocked unconscious and cannot help you. Your flask charges refill at the start of this phase—use this reset strategically.

The arena is larger but more chaotic. New mechanics appear:

**Tornadoes**: Jamanra summons a slow-moving tornado that deals significant damage over time and slows you. It is not hard to dodge individually, but losing track of it while focused on other attacks is one of the most common causes of death in Phase 2. Keep it in your peripheral vision at all times. You can dodge through it if necessary—it hurts but will not shred you instantly.

**Static Electric Fences**: Jamanra creates two electrically charged posts that last for 10 seconds. An arc of lightning connects them. Sometimes these posts chase the player aggressively; sometimes they drift in slow, sweeping circles around Jamanra. Being caught between the posts deals damage over time that escalates quickly. If the posts are chasing you, you are likely to take hundreds of damage even while dodging—do not try to DPS through this. Move away and wait.

**Overhead Sword Slam**: This is the big-hitting melee attack in Phase 2. Jamanra has voice cues for this ability. If you hear **"FORGE OF HATE,"** **"TAKE OUR HATE,"** or **"OUR GIFT TO YOU,"** he has already started the backswing and will perform the slam within approximately 0.75 seconds of the final word. The most common mistake is dodging too early—Jamanra locks in his targeting direction late. Maintain a set distance and walk in a circular pattern around him. If you dodge roll, do it a quarter to a third of a second later than feels natural. This attack deals significant damage and can rarely crit for lethal damage.

**Axe Arc Sweep**: Easily confused with the Overhead Sword Slam from Jamanra's windup, but the response is different—reposition behind Jamanra immediately rather than trying to time a last-second dodge. This attack is usually unleashed without vocalization and is very hard to dodge, but it can be endured with flask support.

**Ten Thousand Spears** (below ~35% health): A dodge-or-die attack with generous timing. After a three-second delay, approximately seven spears rain from the sky targeting where you were standing about two seconds into the cast. The spears take about one second to fall, and getting hit by all seven deals deadly damage. Jamanra has two voice lines for this: **"We will blot out the sun"** or **"Ten thousand spears."** Simply walk away from your current position when you hear either cue.

### Late Phase 2 (Below ~20% Health)

A movement-restricting ability heavily limits safe positioning. This ability is reported to rarely be used more than twice per fight, but when it appears, it compresses your available space at the worst possible time. Save at least 3–5 flask charges specifically for this stretch—attack density peaks here, and running dry on recovery is what kills most players who otherwise played the fight well.

## Preparation & Gear Checklist

- **Lightning Resistance capped**: This is the single most important preparation. The +10% permanent bonus from the Sisters of Garukhan altar at the Spires of Deshar is essentially mandatory. A Topaz Ring and Lightning Resistance charms provide additional coverage.
- **Cold Damage**: Jamanra is weak to Cold (confirmed by poe2db: -30% Fire Resistance, 30% Lightning Resistance, and weak to Cold). Even a temporary Cold skill or Cold damage added to attacks measurably speeds up the fight.
- **Level 30+**: Most guides recommend Level 32–36. Being under-leveled makes his high stun threshold even harder to overcome.
- **650+ Life**: A commonly cited minimum for surviving his burst damage windows.
- **Flasks with charge generation**: The fight is long (often 3–6 minutes depending on gear). Flasks that passively generate charges prevent you from running dry.
- **Anti-Shock capability**: Shock from Lightning attacks amplifies all subsequent damage. A flask or charm that removes Shock helps during the Electric Fence and corpse-explosion sequences.

## Common Mistakes

1. **Standing in the open during the Sandstorm**: Asala's shield is the only safe zone. Failing to locate her quickly enough is the most common Phase 1 death. She is always near the top-left or bottom-left of the arena.
2. **Dodging too early on the Overhead Sword Slam**: Jamanra locks in his targeting direction late. If you dodge on the voice cue, you will dodge into the slam. Wait a quarter to a third of a second longer than feels natural.
3. **Losing track of the tornado in Phase 2**: The tornado is slow but deals significant damage over time. In the chaos of electric fences and spear barrages, it is easy to forget about the tornado until it is on top of you.
4. **Burning flask charges on Electric Fence damage**: The Electric Fence is not a DPS window—it is a repositioning window. Trying to attack through the fence drains flask charges without meaningful damage output. Move away, wait for it to expire, then re-engage.
5. **Ignoring King's Attendant corpses in Phase 1**: Jamanra corpse-explodes these minions for Lightning damage that can Shock you. Clear the corpses or kill the minions before they accumulate.

## Loot Table & Rewards

Jamanra, the Abomination drops standard Act 2 completion rewards. According to poe2db data, he has a +14,700% item rarity modifier and a guaranteed rare item drop, meaning the loot quality is high for Act 2. Players have reported finding items not normally available until Act 3, including the **Cultist Bow** (unverified—reported by multiple community guides but not confirmed in poe2db drop tables).

Defeating Jamanra completes The Trail of Corruption quest and unlocks Act 3 progression. This is the primary reward—story advancement rather than specific unique drops.

## Tips for Specific Builds

### Melee / Close-Range Builds
Counterintuitively, staying close to Jamanra is often safer than fighting at range. His most dangerous attacks—the thrown spears and the spear barrage—are ranged abilities that are harder to dodge at distance. By staying in melee range, you bait the safer lightning melee strike and can react more easily to the Overhead Sword Slam. During the Sandstorm, break off immediately and find Asala—do not try to squeeze in one more attack.

**Monk**: Tempest Bell or Storm Wave provide burst damage and mobility. Use Cold skills to exploit Jamanra's weakness.

### Ranged / Projectile Builds
You have an easier time during the Sandstorm (you can attack while repositioning behind Asala) and the Electric Fence sequences (maintain distance and fire). However, the thrown spears are specifically designed to punish ranged positioning—dodge at the moment of release, not on the windup animation. Skills that deal Cold damage (like Frost Bolt or Ice Shot) are ideal for exploiting Jamanra's weakness from range.

**Mercenary**: Focus on single-target DPS. Crossbow skills with Cold or Physical damage work well. Prioritize dodge-rolling the Sword Slam.

### Spellcaster / Caster Builds
Cold spells are the optimal choice—Freezing Pulse, Ice Nova, or any Cold AoE skill exploits Jamanra's weakness and can Freeze him, creating additional damage windows. Lightning spells are less effective due to his 30% Lightning Resistance, but still usable. Fire spells can work given his -30% Fire Resistance (meaning he takes extra Fire damage), though most guides emphasize Cold for the added utility of Freeze.

**Witch/Sorceress**: Use minions as bait during the Sandstorm while you stand behind Asala. Bonestorm provides safe ranged damage. Cold spells for the Freeze utility are ideal.
