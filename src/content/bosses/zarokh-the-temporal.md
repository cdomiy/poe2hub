---
title: "Zarokh, the Temporal Boss Guide"
category: "pinnacle"
recommendedLevel: 75
updatedAt: 2026-07-09
patchVersion: "0.5.4b"
phases:
  - name: "Standard Assault"
    trigger: "Fight start"
    mechanic: "Zarokh fires slow-moving projectile orbs and a larger slowing orb, spawns 8 portals that periodically fire more orbs, and periodically teleports to the arena center to spawn time-mines before channeling a rotating lightning cone (Temporal Tendrils) that sweeps counter-clockwise."
    counter: "Almost all of his damage is physical and projectile-based, so armour and body-blocking trivialize most of it. Minions, totems, and ice walls can eat his projectile volleys for you. Stay closer to him for the lightning channel, it's easier to dodge at close range depending on trap placement."
  - name: "Time Stop"
    trigger: "Around 60-75% health"
    mechanic: "Zarokh vanishes and the arena center begins to glow. Walking into it starts a timer and spawns hourglasses around the arena that you must collect before a stacking slow effect freezes you entirely. Failing to collect them all in time is an instant kill."
    counter: "Plan your collection route before you step into the glowing center, loop the outer ring first, then cut through the middle for stragglers. Use one movement skill per gap rather than burning them all early. 30-35% movement speed on boots is close to mandatory for this phase specifically."
commonDeaths:
  - "Losing the Honour bar to chip damage from projectiles and long-duration mechanics rather than dying from a single big hit, this fight is a survival gauntlet, not a burst-damage check"
  - "Failing to collect all hourglasses during Time Stop before the stacking slow locks you in place"
  - "Attempting the 4-floor (highest) Trial of Sekhemas cold, without first running the easier 3-floor version to build up relic slots and Honour Resistance"
drops:
  - "A random Unique Relic on each kill; using one in the Relic Altar for your next run unlocks a harder challenge version with its own exclusive reward"
  - "The Last Flame relic (which sets your Maximum Honour to 1) rewards the highly sought-after Temporalis body armour on a successful completion"
  - "Your final 2 Ascendancy points (7 and 8), completing your fourth ascension, on defeating the full 4-floor version for the first time"
relatedBuilds: []
---

## Full Fight Guide

Zarokh, the Temporal is the final boss of the Trial of the Sekhemas, encountered at the end of its fourth floor. A Djinn Barya of at least Area Level 75 with "Number of Trials: 4" is required to reach this version of the fight, which is also what grants your last two Ascendancy points (points 7 and 8). Unlike most Atlas pinnacle fights, this isn't a race against a health bar so much as a survival gauntlet against your own **Honour** — a separate resource pool based on your Life and Energy Shield that can't be refilled with flasks, only through Artifacts, Boons, and Shrines found during the run. Hitting zero Honour fails the trial outright, so the fight rewards avoiding damage far more than raw tankiness or clear speed.

Thematically, Zarokh is a time-warping construct whose nearly every attack bends time — rewinding the arena, rotating tendrils, and freezing you in place. Mechanically, the critical takeaway is that **all of his damage is physical** and **almost all of it is projectile-based**, which is exactly why the right defensive setup makes him far more manageable than his reputation suggests. High armour is at peak effectiveness, and minions, totems, and ice walls can body-block the vast majority of his attacks. The fight itself is a moveset-recognition test: learn what each tell looks like, body-block what you can, and keep moving.

Before you even reach Zarokh, the real challenge is the run itself. The Trial of the Sekhemas is widely considered harder than the Trial of Chaos because Honour punishes exactly the things that make builds strong elsewhere — glass-cannon clear speed does not help here. You need to not get hit, and when you do get hit, you need to take as little Honour damage as possible. The single biggest lever is Honour Resistance, which caps at 75% and quarters all incoming Honour damage. Going into the 4-floor version without capped Honour Resistance is the number-one reason players fail before they ever see Zarokh. If your build struggles with the Sekhemas, the Trial of Chaos (whose final boss is the Trialmaster) is a fully valid alternative path to the same Ascendancy points.

## Phase-by-Phase Breakdown

### Standard Assault (100% to ~75% HP)

The fight opens with Zarokh cycling through a repertoire of projectile attacks. Understanding each one is the foundation of the entire encounter:

**Boomerangs.** Zarokh throws whirling boomerangs that arc outward and then return to him. Sidestep the arc trajectory and, critically, do not stand in the return path — many players dodge the outgoing throw only to be clipped on the way back.

**Orb Volley.** He fires a volley of slow-moving projectiles. This is the primary attack you body-block with minions, totems, or ice walls. If you lack those tools, strafe laterally rather than backing away, as the orbs track toward your position and kiting backward keeps you in their path longer.

**Temporal Portals.** Zarokh spawns **8 portals** around the arena that periodically fire additional slow orbs. Reposition so the portals are at your back, creating a gap where no orbs converge. Treat the portals as persistent terrain — they fire on a timer, so learn the rhythm and reposition between volleys.

**Temporal Orb.** A single slow-rolling sphere that projects a heavy slow effect and detonates after a long delay. Step laterally to break line of sight, then rotate around Zarokh so the orb trails behind you. If you are boxed in, you can dodge-roll through the orb and immediately disengage to avoid the explosion.

**Temporal Tendrils (~75% HP).** Zarokh teleports to the arena center, drops time-mines (small freeze traps) across the floor, and begins channeling a rotating lightning cone that sweeps **counter-clockwise**. The closer you are to him, the less ground the cone covers per degree of rotation — orbiting just behind the sweep at close range is the safest approach. Watch your feet for the freeze traps, as getting locked down during the sweep is devastating. At close range, a single well-timed dodge-roll across the beam line can carry you through; at long range, you may need multiple rolls and the mines become far harder to avoid.

### Time Stop / Sands of Time (~60% HP and ~30% HP)

This is the mechanic that ends more runs than anything else. When the arena tint shifts and Zarokh declares "The sands of time wait for no one…", he vanishes and a glowing circle appears at the center of the arena. Walking into it starts a countdown timer and spawns **hourglasses** around the arena that you must collect before a stacking slow effect freezes you entirely. Failing to collect them all in time is an instant kill — a full wipe regardless of your Honour or Life.

The critical strategy is route planning. **Before** you step into the glowing center, visually scan where the hourglasses spawned and plan a tight collection loop: sweep the outer ring first, then cut through the middle for any stragglers. Use **one movement skill per gap** (Blink, Leap Slam, Shield Charge) rather than burning them all early — a single panic dash saved for the last hourglass is worth more than two used on the first two. Do **not** dodge-roll during this phase: while slowed, the roll animation itself is slowed and covers less distance than simply walking. Use WASD movement or click-to-move only. Movement speed of 30–35% on boots is close to mandatory here specifically.

### Late-Phase Overlap (Below ~40% HP)

As Zarokh's health drops further, his mechanics begin to overlap. Temporal Mines now spawn periodically even outside the Tendrils phase, projectile density increases, and the Temporal Rift mechanic ("Creates a clock that winds backwards before teleporting the player to the oldest mirage and exploding the rift") adds another layer of positioning awareness. Position your mirages safely when you see the clock — expect to be yanked backward and have the area detonate.

Shifting Pylons also begin rotating erratically, dealing physical damage. Treat them as moving walls and never allow yourself to get pinched between two. During this execute phase, reset to a "safe corner" between mechanic rotations, wait for a beat, then commit burst damage. If visibility collapses from overlapping effects, reposition first — living through the overlap is how you win.

## Preparation & Gear Checklist

**Honour Resistance at 75%** — This is non-negotiable for the 4-floor version. At 75% Honour Resistance, a 100-damage hit costs only 25 Honour. Build it up by running the 3-floor (Level 60+) version first to craft and upgrade your relics at the Relic Altar before each attempt.

**Movement Speed 30–35% on boots** — Movement speed is the master stat for the Sands of Time phase and for dodging projectile density throughout the fight. Stack movement-speed relics and pick up the Hare's Foot Boon (+40% movement speed) when offered.

**High Armour** — Since all of Zarokh's damage is physical, armour is at peak effectiveness here. Even modest armour investment dramatically reduces the Honour cost of each hit.

**Body-blocking tools** — Minions, totems, and ice walls eat Zarokh's projectiles. Even a single Skeletal minion or a totem dramatically reduces incoming Honour damage. If your build has access to any of these, use them.

**Relic priorities** — Prioritize relic mods in this order: Honour Resistance, Maximum Honour, Movement Speed, increased damage to Bosses, and increased Honour recovery. Standard (non-unique) relics are permanent items that you can use across runs; modify them with orbs to roll better affixes. Unique Relics are powerful consumables destroyed on use.

**Run the 3-floor version first** — Before attempting the 4-Trial version, farm the easier 3-floor (Level 60+) version to build up relic slots and Honour Resistance. Walking in cold is how most attempts die on floor 2 or 3, before you even reach Zarokh.

## Common Mistakes

**1. Losing Honour to chip damage rather than a single big hit.** This fight is a survival gauntlet, not a burst-damage check. The most common failure mode is not a dramatic one-shot but the gradual erosion of your Honour bar from dozens of small projectile hits and long-duration ground effects. Every stray orb you tank, every trap you stumble through, adds up. Treat every hit as unacceptable, not just the big ones.

**2. Failing the Sands of Time hourglass collection.** This is the hardest mechanical check in the fight. The stacking slow is punishing, and the instant-kill penalty for running out of time leaves no room for error. The two most common sub-mistakes are: (a) not planning your route before stepping into the center, leading to wasted time backtracking, and (b) dodge-rolling while slowed, which covers less distance than walking due to the animation slowdown.

**3. Attempting the 4-floor version without preparation.** Going in without capped Honour Resistance, without movement speed, and without running the 3-floor version first to farm relic slots. The run leading up to Zarokh is the real boss — if your Honour is already depleted by floor 3, the fight itself becomes nearly impossible regardless of your build.

**4. Ignoring the Temporal Rift teleport-back.** When Zarokh creates the clock and your mirages appear, many players continue fighting and are caught off-guard when they are yanked back to the oldest mirage position and the area explodes. Always be aware of where your mirages are placed and prepare to dodge after the teleport.

## Loot Table & Rewards

Zarokh always drops **one of six Unique Relics** on each kill. Each Unique Relic, when placed in the Relic Altar for a subsequent run, imposes a challenge condition and rewards a specific exclusive Unique item upon successful completion:

| Unique Relic | Challenge Condition | Reward Unique |
|---|---|---|
| The Burden of Leadership (Tapestry Relic) | Rooms are unknown on the Trial Map | Sekhema's Resolve (Ring) |
| The Changing Seasons (Seal Relic) | Cannot restore Honour | Sandstorm Visage (Chain Tiara, Helmet) |
| The Desperate Alliance (Vase Relic) | Zarokh deals 100% more Damage and takes 75% less Damage | Against the Darkness (Time-Lost Diamond, Jewel) |
| The Last Flame (Incense Relic) | Maximum Honour is 1; Damage taken cannot be Absorbed | **Temporalis** (Silk Robe, Body Armour) |
| The Peacemaker's Draught (Amphora Relic) | Armour, Evasion, and Energy Shield are zero | 1 additional Djinn Barya |
| The Remembered Tales (Coffer Relic) | (standard challenge) | Blessed Bonds (Linen Wraps, Gloves) |

**Temporalis** is the most sought-after reward — a Silk Robe that provides +(100–150) Energy Shield, +(10–20)% all Elemental Resistances, (5–30)% of Damage taken Recouped as Life, (5–30)% Recouped as Mana, and **(-2 to -1) seconds to Skill Cooldowns**. The Last Flame challenge that unlocks it sets your Maximum Honour to just 1, making it the hardest challenge run in the Sekhemas, but the reward is one of the most powerful body armours in the game. Against the Darkness is the other major chase item, a Time-Lost Diamond jewel with two random modifiers and a large radius.

Unique Relics are **consumed** on use — they are destroyed the instant you activate the trial with them. Standard (non-unique) relics are permanent and can be reused across all attempts.

Beyond the relics, Zarokh also drops Grand Spectrum jewels (Ruby, Emerald, Sapphire) and three unique rings (Eshtera's Path, Safrin's Resolve, Zaida's Longevity), each of which socket only a specific jewel type and scale resistances based on your equipped gear modifiers.

**Ascendancy reward:** Defeating Zarokh on the 4-Trial version for the first time grants your final 2 Ascendancy points (points 7 and 8), completing your fourth ascension.

## Tips for Specific Builds

**Melee / Close-Range Builds.** Melee actually has an advantage against Zarokh's Temporal Tendrils — the closer you are to him during the rotating lightning cone, the less distance you need to travel to stay ahead of the sweep. The trade-off is increased exposure to the freeze traps on the ground, so stay mobile between swings and don't tunnel on DPS. Body-blocking with minions is especially effective for melee since you are already in close proximity and the minions intercept the projectile volleys aimed at you.

**Ranged / Casting Builds.** Ranged builds excel at avoiding chip damage by maintaining distance, but struggle during the Temporal Tendrils phase because the cone covers more ground at the arena's edges. During Tendrils, close the gap temporarily — orbit close to Zarokh, then retreat to range once the phase ends. Ice Wall is an exceptional tool for ranged builds, creating a physical barrier that absorbs entire projectile volleys while you cast freely.

**Minion Builds.** Minions are arguably the strongest archetype for this fight because they body-block Zarokh's projectile-heavy kit passively. Skeletal warriors, SRS, or even a single totem dramatically reduces the Honour drain from chip damage. The main risk is the Sands of Time phase — minions don't collect hourglasses for you, so you still need the movement speed and route planning. Prioritize Honour Resistance and movement speed on your relics over minion damage, since the fight is a survival test rather than a DPS race.

**Low-Mobility Builds.** If your build lacks a reliable movement skill, the Sands of Time phase is the hardest gate in the fight. Consider socketing a dedicated movement skill (Blink, Leap Slam, Shield Charge) even if it is not part of your core build. The Temporal Orb's slow effect compounds the problem — avoid the orb at all costs, as being slowed during any phase dramatically increases the Honour you lose. If mobility is truly a dealbreaker, the Trial of Chaos path (Trialmaster) may be a more viable route to your final Ascendancy points.
