---
title: "Monk Martial Artist Combo Bell Build Guide"
class: "Monk"
ascendancy: "Martial Artist"
coreSkill: "Hollow Focus / Tempest Bell Combo"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "S"
playstyle: "league-starter"
estCost: "low"
summary: "0.5.0's new Monk ascendancy, and currently rated the strongest of the three by community rankings. Hollow Focus periodically conjures ghost bells that shatter into a shockwave when struck, a mechanic that works with zero gear investment, unlike Invoker's Cast on Critical setup."
pros:
  - "Hollow Focus works from level 1 with no gear requirement, a genuinely free power spike"
  - "Doesn't require the Hollow Palm Technique keystone, so you can use quarterstaves and normal melee weapons instead of going fully unarmed"
  - "The only Monk ascendancy that can embed Runes directly onto the body, scaling further as GGG adds more runes each patch"
cons:
  - "As a newer ascendancy, some specific numbers are still being refined by the community relative to older, more established builds"
  - "Combo-based play (Whirling Slash into Twister, or bell-stacking) requires understanding stage mechanics rather than a single button"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Hollow Focus"
    effect: "Periodically conjures a ghostly bell; when struck, it shatters into a damaging shockwave"
  - order: 2
    name: "Hollow Resonance"
    effect: "Causes additional shockwaves as you attack, compounding with Hollow Focus"
  - order: 3
    name: "Way of the Mountain"
    effect: "Damage reduction and stun resistance scaling, countering Invoker's Meditate defense"
  - order: 4
    name: "Way of the Stonefist"
    effect: "Benefits unarmed combat specifically, for players who do take Hollow Palm Technique"
skillGems:
  mainSkill:
    gem: "Tempest Bell"
    supports: ["Magnified Area", "Sustained Damage"]
  secondarySkill:
    gem: "Whirling Slash"
    supports: ["Staged", "Wind"]
  spiritSkills:
    - gem: "Ghost Dance"
      supports: []
    - gem: "Wind Dancer"
      supports: []
  utilitySkills:
    - gem: "Herald of Ice"
      supports: []
    - gem: "Herald of Thunder"
      supports: []
gearPriority:
  - slot: "Weapon (Quarterstaff)"
    item: "Attack speed, Crit chance"
    note: "+Projectile levels"
    priority: "core"
  - slot: "Amulet"
    item: "Crit chance"
    note: "Combo duration"
    priority: "recommended"
  - slot: "Ring"
    item: "Combo duration"
    note: "Elemental damage"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Attack speed, Crit chance, Life"
  midGame: "Combo-point clusters, Hollow Technique support nodes"
  endGame: "Full bell-stacking or Twister-hybrid setup depending on preference"
levelingGuide:
  act1to3: "Whirling Slash as your first gem, Twister from the Act 1 lost campsite"
  act4to6: "Layer in Frost Bomb and Barrage for boss damage and clear respectively"
  mapping: "Full Hollow Focus bell setup, or hybrid into the Whirling Slash/Twister spear combo, both are viable on this ascendancy"
faqs:
  - q: "Is this new ascendancy worth league-starting?"
    a: "Yes, it's currently ranked as the strongest of the three Monk ascendancies specifically because Hollow Focus doesn't need gear investment to function."
  - q: "Do I have to go unarmed?"
    a: "No, Martial Artist explicitly doesn't require the Hollow Palm Technique keystone, so quarterstaves and normal melee weapons work fine."
dataSources:
  - "RPGStash Martial Artist ascendancy guide"
  - "MMOSO Martial Artist ascendancy guide"
  - "Mobalytics Martial Artist leveling guide"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

Martial Artist is patch 0.5.0's new Monk ascendancy and currently rated the strongest of the three by community rankings. The defining mechanic is Hollow Focus, which periodically conjures ghostly bells that shatter into damaging shockwaves when struck — and crucially, this works from level 1 with zero gear investment. Unlike Invoker's Cast on Critical setup or Acolyte of Chayula's Darkness commitment, Martial Artist's core power is available the moment you allocate the first ascendancy node.

The bell mechanic is deceptively deep. Hollow Focus spawns ethereal bells that are always considered to be in Culling Strike range, always Primed for Stun, and always take Critical Hits. This means every time you strike a bell, you get guaranteed crits, free culling strike damage, and stun buildup — three mechanics that normally require significant investment to achieve consistently. Hollow Resonance then attaches a permanent bell to your back that erupts on every critical strike, creating a compounding damage engine: crit a bell → back-bell shockwave → more damage → more crits [(VULKK)](https://vulkk.com/2026/05/23/path-of-exile-2-martial-artist-monk-ascendancy-explained/) [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide).

Way of the Stonefist converts your equipped gloves into Fists of Stone, upgrading every modifier to a stronger version and adding Evasion Rating and Energy Shield per character level (roughly 270–300 Evasion and 90–100 ES at level 90–100 before affixes). This feeds directly into Hollow Palm scaling while boosting offense through upgraded affixes. The transformation even applies to unique gloves including Facebreaker [(VULKK)](https://vulkk.com/2026/05/23/path-of-exile-2-martial-artist-monk-ascendancy-explained/).

Runic Meridians grants five additional Rune-only sockets across your gear (1 helmet, 2 body armour, 1 glove, 1 boot), which scales further as GGG adds more runes each patch — particularly relevant in the Runes of Aldur league.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order. This build's power comes from hitting the right nodes at the right stage rather than rushing everything at once.

**Act 1 (Levels 1–13):** Pick up your Quarterstaff on the Shores. Grab Entangle from the Primal tree for damage-while-moving. Add Killing Palm for Power Charges and Wing Blast for stun-primer clears. If running Hollow Palm Technique, allocate it with your first 13 passive points — it converts unarmed attacks to behave as if you have a high-quality Quarterstaff, scaling off your gear's Evasion and Energy Shield [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide). Boss combo: fill stun bar to ~70%, Wing Blast for Power Charges, tap Rend for lightning damage buff, drop Falling Thunder.

**Act 2 (Levels 20–34):** Ascend with Hollow Focus Technique. Bells now spawn every ~2.35 seconds. Add Storm Wave for shock application, Siphoning Strike for Power Charges, and Herald of Thunder as your first Spirit skill. Get +2 Power Charges from the passive tree. Hollow Palm Technique unlocks at level 22 if running unarmed.

**Act 3 (Levels 34–40):** Second ascendancy gives Hollow Resonance Technique — every bell hit now triggers a second shockwave from the back-bell. Add Hand of Shaula with Elemental Weakness. Pick up Wind Dancer as a Spirit skill. Passive tree extends toward melee strike range nodes and damage-against-rares nodes.

**Act 4+ (Levels 41+):** Whirling Assault takes over as your core skill. Replace Storm Wave and Siphoning Strike. Core setup: Whirling Assault with Rage + Heavy Swings + Magnified Area, Tempest Bell with Prolonged Duration + Heavy Swings + Magnified Area, Staggering Palm with Multi-Shot + Impact Shockwave [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide). For Quarterstaff users: keep Hollow Palm until you find a staff with 400+ Physical DPS minimum — most Act 4 drops won't qualify.

Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan.

## Key Mechanics & Interactions

**Hollow Focus bell engine.** The core loop: Hollow Focus spawns ethereal bells every ~2.35 seconds. Hits against bells are guaranteed crits. You eat bells with Devour (or Killing Palm) for Power Charges and healing, then fire Falling Thunder or continue attacking. The bell is always in Culling Strike range and always Primed for Stun — three free mechanics per bell interaction [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide).

**Hollow Resonance compounding.** Once allocated, every critical strike triggers a shockwave from the back-bell. Since bell hits are guaranteed crits, this creates a compounding system: strike bell → crit → back-bell shockwave → potential additional crits on nearby enemies → more shockwaves. The internal cooldown is 0.5 seconds base, reducible to ~0.38 seconds with Cooldown Recovery Rate [(WorstGuideEver)](https://worstguidesever.com/poe2-martial-artist-monk-build-guide-0-5/).

**Way of the Mountain defense.** Builds Mountain's Teachings stacks (up to 30) when you immobilize enemies. While active, attacks deal 20% more damage, hits dealing 30% or less of maximum life are reduced by 70%, and stun threshold rises. The stacks need steady immobilisation to maintain — Hollow Focus helps here since bells stun on destruction [(VULKK)](https://vulkk.com/2026/05/23/path-of-exile-2-martial-artist-monk-ascendancy-explained/). Note: specific percentages may differ from live values — treat as approximate until verified in-game.

**Combo and Runic Meridians.** Runic Meridians reduces ES Recharge Delay by 0.2 seconds per Combo expended. Building Combo faster means more frequent Tempest Bell usage and easier ES sustain. The five extra rune sockets provide resistance and attribute coverage, freeing gear affixes for offensive stats [(VULKK)](https://vulkk.com/2026/05/23/path-of-exile-2-martial-artist-monk-ascendancy-explained/).

**Martial Master flexibility.** Skills can build and retain Combo regardless of Weapon Set, and you gain Combo from all Attack Hits. This enables creative setups like carrying a Crossbow with Cluster Grenades for instant combo building, then swapping to melee for Tempest Bell expenditure [(VULKK)](https://vulkk.com/2026/05/23/path-of-exile-2-martial-artist-monk-ascendancy-explained/).

## Gear Progression

**Early Game (Acts 1–3):** Virtually no gear required — Hollow Focus works from level 1 with no investment. If running Hollow Palm, focus on ES/Evasion gear to scale the unarmed damage. A basic quarterstaff with Attack Speed and Crit Chance is sufficient for weapon-based variants.

**Mid Game (Acts 4–6):** Gloves become your most important offensive slot — Way of the Stonefist upgrades all their modifiers. Prioritize +Level of Melee Skills, added Elemental Damage, and Attack Speed on gloves. A body armour with ES/Evasion and Spirit is your defensive cornerstone.

**Late Game (Mapping+):** The quarterstaff is your money slot — aim for 400+ Physical DPS, +Level of Melee Skills, high Crit Chance, and Elemental Damage with Attacks [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide). Facebreaker gloves are a strong option for unarmed builds since Stonefist transforms them. Stack Cooldown Recovery Rate wherever possible to compress Hollow Resonance's internal cooldown. Headhunter on the belt is the common endgame chase item [(WorstGuideEver)](https://worstguidesever.com/poe2-martial-artist-monk-build-guide-0-5/).

## Ascendancy Node Breakdown

1. **Hollow Focus** — Periodically conjures a ghostly bell; when struck, it shatters into a damaging shockwave. Bells are always in Culling Strike range, always Primed for Stun, and always take Critical Hits. The foundation of the entire ascendancy — everything else feeds this mechanic.

2. **Hollow Resonance** — Causes additional shockwaves as you attack, compounding with Hollow Focus. Attaches a permanent bell to your back that erupts on every crit. This is where the build's damage becomes truly obscene — every bell hit triggers a second shockwave.

3. **Way of the Mountain** — Damage reduction and stun resistance scaling through Mountain's Teachings stacks when immobilising enemies. The defensive counterweight to the ascendancy's offensive focus. Particularly strong against packs where immobilise is easy to maintain.

4. **Way of the Stonefist** — Converts gloves to Fists of Stone, upgrading all modifiers and adding per-level Evasion and ES. Enables both unarmed (Hollow Palm + Facebreaker) and weapon-based builds. Skip early if resistances are collapsing — allocate Runic Meridians first instead [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide).

## Common Mistakes & Pitfalls

- **Going unarmed when you have a better quarterstaff.** Martial Artist explicitly doesn't require Hollow Palm Technique. If you find a 400+ PDPS quarterstaff, use it — don't stubbornly stay unarmed just because the ascendancy supports it.

- **Ignoring Cooldown Recovery Rate.** Hollow Resonance's 0.5s base cooldown compresses to 0.38s with CDR. That 0.12-second difference is audible in gameplay and represents a meaningful DPS increase. Stack CDR wherever you can [(WorstGuideEver)](https://worstguidesever.com/poe2-martial-artist-monk-build-guide-0-5/).

- **Allocating Way of the Stonefist too early if resistances are weak.** During the campaign, if your resistances are collapsing, swap Stonefist for Runic Meridians at ascendancy 2. The five extra rune sockets let you cover resistances immediately. Move Stonefist to slot 3 later [(BoostMatch)](https://boostmatch.gg/blog/poe-2/articles/poe2-martial-artist-monk-whirling-assault-build-guide).

- **Underestimating combo management.** The bell-stacking and Whirling Assault/Twister hybrid both require understanding combo stages. This isn't a single-button build — you need to track Power Charges, Tempest Bell availability, and Hollow Focus bell timing.

- **Wasting Spirit on offensive skills before defensive skills.** Ghost Dance and Wind Dancer should be your first Spirit skills. Offensive Spirit skills are luxuries you add after your defensive layer is comfortable.

## Mapping & Endgame Tips

**Mapping:** Hold Whirling Assault, let Hollow Resonance fire on every crit, tap Profane Ritual for Power Charges from corpses, refresh Charged Staff via Killing Palm on a bell between pulls. The build clears multiple screens per pull with minimal input [(WorstGuideEver)](https://worstguidesever.com/poe2-martial-artist-monk-build-guide-0-5/).

**Pinnacle Bosses:** Stack Charged Staff and Staggering Palm buffs before engaging. Drop three Tempest Bells via Ancestral Call simultaneously, cast Staggering Palm to reset buff timer, cast Reaper's Invocation for Power Charges, then hold Whirling Assault into the bells [(WorstGuideEver)](https://worstguidesever.com/poe2-martial-artist-monk-build-guide-0-5/). The boss rotation is more involved than mapping but follows a consistent sequence.

**Defensive Layers:** Way of the Mountain provides damage reduction against small hits when Mountain's Teachings stacks are active. Ghost Dance and Wind Dancer (if Spirit allows) add evasion-based passive defense. The ES recharge from Runic Meridians' combo expenditure creates natural sustain during combat.

**Scaling Path:** The build scales from zero investment (league start) to endgame through gear upgrades rather than fundamental mechanic changes. Your core loop (bells → crits → shockwaves) works identically at level 1 and level 100 — gear just makes the numbers bigger. This makes Martial Artist the most straightforward Monk ascendancy to gear progressively.

