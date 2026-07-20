---
title: "The Trialmaster Boss Guide"
category: "pinnacle"
recommendedLevel: 80
updatedAt: 2026-07-09
patchVersion: "0.5.4b"
phases:
  - name: "Spear Form"
    trigger: "Fight start / alternates throughout"
    mechanic: "Melee-focused: wide spear swings, an overhead slam that erupts branching sunders in a cone, a ground-channeled explosion, and a spear throw that leaves a slowly expanding physical degen zone where it lands. Also periodically spawns a tethering Heart that slows you if you stay in its radius and stuns plus detonates if you break the tether by moving too far away."
    counter: "Fight near a wall whenever possible, many of his mechanics extend outward or follow you, and a wall limits how much of the arena they can cover. Watch his slam's initial position and direction to predict where sunders will erupt."
  - name: "Caster / Unarmed Form"
    trigger: "Alternates with Spear Form throughout the fight"
    mechanic: "Ranged-focused: throws three elemental orbs (Lightning, Cold, Fire) that explode on impact, plus a fast blood orb that bounces off walls, duplicates, and applies Armour Break on hit."
    counter: "Track projectile trajectories carefully, the blood orb's wall-bounce duplication can catch players who assume it only travels once. Stay mobile rather than standing still to tank hits."
  - name: "Time Stop"
    trigger: "Random, in either form"
    mechanic: "The Trialmaster freezes time, then casts three instances of his form-specific attack (three Blood Orbs in Caster Form, or three Sunders in Spear Form) from different arena positions before unfreezing."
    counter: "Watch exactly where he teleports to during the freeze, that tells you where each attack will originate once time resumes. Staying near a wall going into this phase limits how much of the arena the sunders or orbs can threaten."
commonDeaths:
  - "Getting caught by an unseen Sunder or Blood Orb spawn point during Time Stop by not tracking his teleport positions"
  - "Fighting in the open arena center instead of hugging a wall, letting extending or following mechanics cover far more space"
  - "Breaking a Heart tether by accident while repositioning, triggering the stun and detonate combo at a bad moment"
drops:
  - "A guaranteed Unique item from his specific loot table on every kill, including corrupted-roll items like The Adorned and Mahuxotl's Machination"
  - "A chance at a corrupted Inscribed Ultimatum, letting you sacrifice currency for a doubled reward on a successful follow-up run"
  - "Your final Ascendancy points on your first-ever kill, alongside Soul Cores collected throughout the Trial of Chaos leading up to him"
relatedBuilds:
  - "huntress/spirit-walker"
  - "sorceress/stormweaver"
  - "warrior/titan"
---

## Full Fight Guide

The Trialmaster is the final boss of the Trial of Chaos, PoE2's other Ascendancy trial alongside the Trial of the Sekhemas (whose final boss is Zarokh, the Temporal). Defeating either one for the first time grants your final Ascendancy points (points 7 and 8). The Trialmaster is widely regarded as one of the best-designed bosses in PoE2 — his attacks are slow and readable with clear tells, which is exactly why the players who die to him tend to die to the same one or two moves every time. Understanding those moves is the entire fight.

Lore-wise, the Trialmaster was once Ixchel, a human member of the Order of the Djinn, before becoming Chaos's tireless tormentor of aspirants. Mechanically he is a repeatable pinnacle encounter: the first kill finishes your Ascendancy, and after that he becomes a targeted unique farm and currency source.

### Getting There

You need three Fate fragments, each dropped by a specific boss during the 10th round of a 10-round Trial of Chaos run: **Cowardly Fate** from Uxmal, the Beastlord; **Deadly Fate** from Bahlak, the Sky Seer; and **Victorious Fate** from Chetza, the Feathered Plague. Only the full 10-round version (entered with an area-level 75+ Inscribed Ultimatum) matters here, since it's the only one that reaches round 10. In a 10-round run, rounds 4, 7, and 10 are boss rounds, and the round-10 boss always drops one of the three Fates — but which Fate drops is random.

Insert all three Fates into the door near the Ascension Shrine to open the Trialmaster's Tower. Importantly, none of the tribulation modifiers you picked during your Trial of Chaos run carry into the fight itself — you walk in at a clean baseline regardless of how you built your run. The fight is completely isolated.

You can also purchase Fates outright on the Currency Exchange for roughly a Divine Orb per set. Many players still farm 10-round Trials because the Fates drop naturally alongside Soul Cores, keys, and other loot worth approximately 0.25–1 Divine per run. Either way, hoard a few sets before your first attempt so a death doesn't cost you a 30-minute farm.

## Phase-by-Phase Breakdown

The Trialmaster cycles between two forms throughout the fight: **Spear Form** (melee-focused, the dangerous one) and **Unarmed/Caster Form** (ranged-focused). The transition is triggered by his Spear Throw attack, which plants the spear in the ground and shifts him to Unarmed Form. When he recalls the mace with "Chaos aid me!", he transitions back to Spear Form.

### Spear Form (Mace Form)

**Sunder ("Be crushed!" / "Fall before me!").** He raises his mace overhead and slams the ground, releasing a red Sunder shockwave that branches outward in a cone. **This is the one-shot.** It is slow and loudly telegraphed, but deals massive Physical damage and is the attack that kills the vast majority of players. Dodge-roll the instant the mace comes down. He often opens the fight with this attack, so pre-roll the moment the arena loads. The key insight: getting hit by the slam's epicenter is far more dangerous than the branching sunders, so if you cannot dodge entirely, at least avoid being directly in front of him at the point of impact.

**Timestop Sunder ("Ultimatum!" / "Entropy!").** The Trialmaster freezes time, teleports to three different positions, and slams 3 times. When time resumes, three delayed Sunders land in sequence. Pre-roll and keep moving — do not stand still when time resumes. Watch where he teleports during the freeze, as that tells you where each Sunder will originate. If you are near a wall, the Sunders have less arena to cover.

**Mace Swipe.** Two quick swings that can turn mid-attack. Roll out to the side; don't expect him to face his starting position. The turn is faster than many players anticipate.

**Bloodburst ("Be obliterated!").** He plants his mace in the ground and channels a large area. The zone explodes with blood when he yanks the mace out — leave the area before the pull. The wind-up is intentionally long, designed to punish greedy players who try to squeeze in one more attack.

**Cyclone ("Rip and tear!").** He spins 6–7 times, drifting toward you and firing shockwaves. Kite at range; the shockwaves are somewhat random, so keep lateral distance rather than trying to outrun them in a straight line.

**Spear Throw ("Chaos aid me!").** He hurls his spear into the ground near you. It creates a slowly expanding Physical degen zone that persists until he transitions back to Spear Form. **Bait this throw near a wall** — a wall-anchored degen zone covers far less of the arena than one planted in the center. This attack also transitions him to Unarmed/Caster Form.

### Unarmed / Caster Form

**Tri-Elemental Mortar.** He throws three projectiles — one Fire, one Cold, one Lightning — that explode on impact. Each hits a small area, so spread them out by moving laterally rather than clustering the impacts around yourself. Cap your elemental resistances and these become manageable chip damage.

**Blood Orb ("Surge of Chaos!").** A large red orb that bounces off walls and **duplicates on wall impact**. This is the attack that catches players who assume the orb only travels once. Track its trajectory carefully, especially after the first wall bounce. It can also apply Armour Break on hit, which makes subsequent hits far more dangerous — if you take an Armour Break, play evasive for a few seconds until it expires.

**Trialmaster's Heart ("Be still!").** He drops a Heart that tethers nearby players. If you enter its radius, you are tethered and slowed. Moving too far away severs the tether for Physical damage plus a **stun**, followed by a detonation. The two options are: (a) destroy the Heart from outside its radius, or (b) stay within the radius and wait for it to expire. Do not blindly sprint out of the tether — the stun plus detonate combo at a bad moment (during overlapping Sunders or Blood Orbs) can kill you outright.

**Timestop Projectiles ("Ultimatum!").** In Caster Form, the Time Stop mechanic fires three Blood Orbs from different positions. Pre-position in open space and watch where he teleports during the freeze. The same wall-hugging principle applies: near a wall, the Blood Orbs' wall-bounce duplication has less room to threaten you.

**Mace Recall ("Chaos aid me!").** He recalls the spear, ending the degen zone pulse and shifting back to Spear Form. Re-center yourself immediately and prepare for the Sunder — he will often open with it upon transitioning back.

## Preparation & Gear Checklist

**Cap elemental resistances at 75%.** His Tri-Elemental Mortar and elemental tells melt under-capped characters fast. Despite the "Chaos" branding, his big hits are **Physical** (the Sunder) and **elemental** (the Mortar) — cap your elemental resists and build EHP rather than over-investing in Chaos Resistance specifically for this fight.

**Carry a real Life/ES buffer.** Players clear him comfortably at roughly **2k+ Life and 2–3k Energy Shield** (or around 5,000 combined Life, ES, and Mana if running Mind Over Matter). The goal is to survive a clipped Sunder, not to facetank it. The recommended benchmark of 5,000 combined is not a hard requirement, but it gives you enough buffer to take a hit from his hardest mechanic and keep fighting rather than dying outright.

**Movement speed and a dodge layer.** A reliable dodge-roll and approximately 30%+ movement speed turn the Sunder from lethal to trivial. Prioritize movement speed on boots and consider a dedicated movement skill.

**Hug the walls.** This is the single most important positional principle in the fight. Many of the Trialmaster's mechanics extend outward from their origin point or follow the player. Fighting near the arena edge ensures these mechanics cover less of your available dodge space. Mobalytics and multiple community guides strongly recommend this as the core strategy.

**Hoard extra Fate sets.** Before your first attempt, collect at least 2–3 sets of all three Fates. A single death to the opening Sunder can cost you a 30-minute farm if you don't have backup sets ready.

## Common Mistakes

**1. Getting one-shot by the opening Sunder.** This is by far the most common death. The Sunder is slow and loudly telegraphed, but it often lands during a frame stutter or input-lag spike at fight start. Pre-roll the moment the arena loads and keep your cursor on open ground. If you are getting one-shot before you can react, it is almost always the opening Sunder — not a bug, not lag, just insufficient preparation for the first hit.

**2. Fighting in the open arena center.** Hugging the wall is the single most important positional principle. In the center, Sunders branch in all directions, the Spear Throw's degen zone covers most of the floor, and Blood Orbs have the entire arena to bounce and duplicate. Near a wall, all of these threats are confined to less space, giving you more room to dodge.

**3. Breaking the Heart tether at the wrong time.** The Heart tether's stun-and-detonate combo is dangerous on its own, but it becomes lethal when combined with other mechanics. If you break the tether during an overlapping Sunder or Blood Orb pattern, the stun locks you in place and the subsequent detonation can kill. Destroy the Heart from outside its radius, or stay within it until the arena is clear.

**4. Underestimating Blood Orb wall-bounce duplication.** The Blood Orb does not simply travel once and disappear — it bounces off walls and **duplicates on each bounce**. Players who assume the orb is done after its first pass get caught by the returning duplicates. Track the orb's trajectory through at least two bounces.

## Loot Table & Rewards

Every Trialmaster kill **guarantees one Unique item** from his specific loot table. His rewards only appear after you are ejected from the arena — they stack on top of your cumulative Trial rewards. The guaranteed-unique pool includes:

**The Adorned (Crimson Jewel).** A build-defining chase item that provides (0–100)% increased Effect of Jewel Socket Passive Skills containing Corrupted Magic Jewels. At high rolls, this effectively doubles the power of every Corrupted Magic Jewel in your passive tree. It is always corrupted and cannot be modified further. One of the most valuable unique items in the entire game.

**Mahuxotl's Machination (Shield).** A shield with (333–666)% increased Armour and Energy Shield that grants Raise Shield and boosts the effect of socketed Soul Cores by 100%. It also features the Everlasting Sacrifice mechanic and 2 hidden Rune Sockets. A cornerstone item for Soul Core-focused builds.

**Glimpse of Chaos (Vaal Mask, Helmet).** Can be modified while Corrupted. Provides +(50–150) to maximum Life, +(50–150) to maximum Mana, and randomized Fire/Cold/Lightning Resistance modifiers ranging from -30% to +30%. Chaos Resistance is zero. A high-variance crafting base that can yield incredible results or complete duds.

**Zerphi's Genesis (Belt).** Grants (20–30)% increased Stun Threshold, +(10–30) Strength, (1–3) Charm Slots, prevents Corrupted Blood, and causes 50% of Charm charges used to be gained by Life Flasks. A powerful belt for Charm-based sustain builds.

**Hateforge (Gloves).** Provides (50–80)% increased Armour, Gain (1–3) random Charges on reaching Maximum Rage, Lose all Rage on reaching Maximum Rage, and (-10–10) to Maximum Rage. Enables explosive Rage-cycling builds.

On top of the guaranteed unique, the Trialmaster has a chance to drop **corrupted Inscribed Ultimatums** — a harder, higher-reward version of the Trial of Chaos where you sacrifice a specified amount of currency and receive double that amount upon successful completion. The Prefix specifies the currency to sacrifice (up to 3 Divine Orbs, an Orb of Annulment, an Orb of Chance, etc.), while the Suffix adds a challenging modifier (reduced Defense by up to 75%, lowered Maximum Elemental Resistances by up to 30%, etc.).

The Trial of Chaos run leading up to the Trialmaster also yields **Soul Cores** — exclusive currency items that you socket into gear in place of runes, providing powerful bonuses from the Trial of Chaos bosses.

**Ascendancy reward:** Defeating the Trialmaster for the first time grants your final Ascendancy points (points 7 and 8), completing your fourth ascension via the Trial of Chaos path.

## Tips for Specific Builds

**Melee / Close-Range Builds.** The wall-hugging strategy is especially important for you because the Sunder's epicenter is most dangerous at close range. When you see the mace raise, dodge-roll immediately — do not try to squeeze in one more hit. The Bloodburst channel is your best DPS window in Spear Form, as the wind-up is long and the boss is stationary. In Unarmed Form, be careful about Blood Orb wall-bounces since you are naturally closer to the walls where the bounces occur.

**Ranged / Casting Builds.** Your natural distance gives you more time to react to the Sunder's telegraph, but the Timestop Sunder and Timestop Projectiles can still catch you if you are not tracking his teleport positions. Maintain a medium distance — not so far that Sunders branch across the entire arena, but far enough that you can see tells clearly. The Tri-Elemental Mortar is your primary chip-damage threat; capped elemental resistances make it manageable.

**Minion / Totem Builds.** Minions and totems do not body-block the Sunder — it goes through them. However, they can distract the Blood Orbs and absorb some Tri-Elemental Mortar hits. The Heart tether is less threatening for minion builds since you can have your minions attack the Heart from outside its radius. Be aware that during Time Stop, your minions may continue attacking while you are trying to reposition, potentially pulling the boss in unpredictable directions.

**High-Mobility / Dodge Builds.** This fight is your playground. The Trialmaster's attacks are all dodgeable with proper timing, and your mobility makes wall-hugging and orb collection second nature. The primary risk is overconfidence — the Sunder one-shots regardless of your dodge skill if you mistime the roll. Treat every attack with respect, even if you can dodge most of them. The Adorned jewel is a natural chase item for builds that invest heavily in Corrupted Magic Jewels.
