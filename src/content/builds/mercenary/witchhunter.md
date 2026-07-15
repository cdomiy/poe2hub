---
title: "Mercenary Witchhunter Grenade / Crossbow Build Guide"
class: "Mercenary"
ascendancy: "Witchhunter"
coreSkill: "Cluster Grenade / Explosive Crossbow"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "all-rounder"
estCost: "low"
summary: "Specializes in burst damage and elemental damage mitigation via a defensive Sorcery Ward, making it an excellent boss-hunting pick. Frequently rated the strongest of the three Mercenary ascendancies for its versatility."
pros:
  - "Pitiless Killer grants Culling Strike on all damage, speeding up clears and shining in party play"
  - "Judge, Jury, and Executioner's Decimating Strike takes a large chunk of boss health immediately on a full-life hit"
  - "The Sorcery Ward defensive package (Obsessive Rituals + Ceremonial Ablution) provides strong mitigation against Elemental, Physical, and Chaos damage from Hits"
cons:
  - "The Sorcery Ward defensive package comes with an Armour/Evasion penalty, you're trading one defense layer for another, not stacking both"
  - "If your Sorcery Ward bubble pops, you need a recovery plan (typically Flash Grenades) rather than raw tankiness"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Zealous Inquisition"
    effect: "Causes enemies to explode in a massive area, a strong first pick for grenade/AoE builds"
  - order: 2
    name: "Pitiless Killer"
    effect: "Grants Culling Strike to all damage dealt, further scaled by the Cull the Hordes passive tree node"
  - order: 3
    name: "Judge, Jury, and Executioner"
    effect: "Grants Decimating Strike, dealing a large random chunk of a full-life target's health"
  - order: 4
    name: "Witchbane"
    effect: "Lengthens pinnacle boss cooldowns, making them easier to manage"
  - order: 5
    name: "Obsessive Rituals + Ceremonial Ablution"
    effect: "Trades Armour/Evasion for a Sorcery Ward barrier against Elemental, Physical, and Chaos damage from Hits"
skillGems:
  mainSkill:
    gem: "Explosive Grenade"
    supports: ["Grenade Speed", "Controlled Destruction"]
  secondarySkill:
    gem: "Cluster Grenade"
    supports: ["Physical Damage", "Magnified Area"]
  spiritSkills:
    - gem: "Determination"
      supports: []
  utilitySkills:
    - gem: "Flash Grenade"
      supports: []
    - gem: "Oil Grenade"
      supports: []
gearPriority:
  - slot: "Crossbow"
    item: "Raw damage, % increased Physical"
    note: "Reload speed"
    priority: "core"
  - slot: "Gloves"
    item: "Damage, Attack speed"
    note: "Elemental resistance"
    priority: "recommended"
  - slot: "Ring"
    item: "Damage"
    note: "Sorcery Ward effectiveness"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Grenade damage, Life, Dexterity/Strength mix"
  midGame: "Cull the Hordes and Sorcery Ward clusters"
  endGame: "Full burst-and-mitigation setup with Decimating Strike optimization for bosses"
levelingGuide:
  act1to3: "Flash and Oil Grenades to engage safely, throw first and run in second"
  act4to6: "Add Cluster Grenade for pack clearing and start building toward the Sorcery Ward defensive package"
  mapping: "Full grenade setup with either the offensive Pitiless Killer route or defensive Sorcery Ward route depending on content"
faqs:
  - q: "Why is Witchhunter rated so highly for Mercenary?"
    a: "It offers a well-rounded mix of burst damage, party utility through Culling Strike, and a genuinely strong defensive option, few weaknesses relative to the other two Mercenary ascendancies."
  - q: "Do I need the Sorcery Ward package?"
    a: "Not mandatory, but it's one of the strongest defensive options in the Mercenary kit if you're willing to accept the Armour/Evasion tradeoff."
dataSources:
  - "Maxroll.gg Grenade Mercenary leveling guide"
  - "VULKK.com Witchhunter ascendancy breakdown"
  - "Game8 Mercenary ascendancies guide"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

Witchhunter is the Mercenary's burst-damage and elemental-mitigation ascendancy, frequently rated as the strongest of the three Mercenary ascendancies for its versatility. It offers a well-rounded mix of offensive burst (Pitiless Killer, Decimating Strike), party utility (Culling Strike), and a genuinely strong defensive option (Sorcery Ward) -- few weaknesses relative to the other two options [(VULKK.com: Witchhunter Breakdown)](https://vulkk.com).

The offensive package is exceptional. **Pitiless Killer** grants Culling Strike on all damage, instantly killing enemies below 10% life. This speeds up clears and shines in party play where culling high-life rares and bosses is valuable. **Judge, Jury, and Executioner** grants Decimating Strike, taking a large random chunk of a full-life target's health immediately on hit -- this is one of the strongest single-hit effects in the game for opening burst on bosses. **Zealous Inquisition** causes enemies to explode in a massive area, providing screen-wide clear that chains with Herald effects [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician).

The defensive package is equally notable. **Obsessive Rituals + Ceremonial Ablution** trades Armour and Evasion for a Sorcery Ward barrier that protects against Elemental, Physical, and Chaos damage from hits. Once active, the Sorcery Ward provides an absorption bubble of over 4,000 points that regenerates when you avoid hits -- this is comparable to a large Energy Shield pool that covers all damage types [(GamingCy: Permafrost Witchhunter)](https://wp-admin.gamingcy.com/poe-2-best-mercenary-builds). The trade-off is real (you lose Armour and Evasion to gain the Ward), but for builds that avoid hits through freeze or range, the Ward is strictly better than the armour it replaces.

The ascendancy also supports a unique leveling strategy: Pohx recommends leveling as Tactician (for Supporting Fire's screen-clear power) and then respeccing to Witchhunter once Sorcery Ward becomes available in maps [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician). This lets you leverage Tactician's superior campaign speed while still arriving at the Witchhunter endgame configuration.

## Putting It Together

**Acts 1-3 (Leveling as Tactician, then Respec):** The community-recommended path is to level as Tactician for Supporting Fire's screen-clear power, then respec to Witchhunter once you reach maps and can allocate Sorcery Ward. Pohx notes that "Supporting Fire is a crazy node that will delete screens of monsters" during the campaign [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician). Start with Permafrost Bolts (available from level 1) to freeze packs, then Fragmentation Rounds to shatter. Prioritize Grenade damage, Life, and Dexterity/Strength mix on the passive tree.

**Acts 4-6 (Transition to Witchhunter):** Add Cluster Grenade for pack clearing and begin building toward the Sorcery Ward defensive package. If staying Witchhunter from the start, allocate Zealous Inquisition first for the explosion clear, then Pitiless Killer for Culling Strike. The respeccing cost is the main downside of the Tactician-leveling strategy -- plan for it by saving gold during the campaign.

**Mapping and Beyond (Full Witchhunter Setup):** The complete build runs either the offensive Pitiless Killer route (maximizing clear speed and cull value) or the defensive Sorcery Ward route (trading armour/evasion for the all-damage-type barrier), depending on content difficulty. The Permafrost Bolts variant freezes enemies with Permafrost Bolts, then shatters with Fragmentation Rounds explosions. For bosses, apply Freezing Mark, fire Permafrost Bolts until Freeze, then detonate with Fragmentation Rounds [(GamingCy: Permafrost Witchhunter)](https://wp-admin.gamingcy.com/poe-2-best-mercenary-builds). Shard Scavenger triggers on Fragmentation Rounds kills, granting several seconds of reload-free firing.

## Key Mechanics and Interactions

**Zealous Inquisition and Chain Explosions:** Enemies killed by your damage explode in a massive area. This is the clear-speed engine of Witchhunter builds. When combined with Herald of Ice (shatter explosions) or Herald of Ash (ignite proliferation), you get double explosion layers that chain through entire screens. The Permafrost Bolts + Herald of Ice + Zealous Inquisition combo creates cascading chain reactions that eliminate packs in a single shot [(Kami-Labs: KaidGames Permafrost Witchhunter)](https://kami-labs.fr/en/path-of-exile-2/build-mercenary-permafrost-bolts-witchhunter-season-4-en/).

**Pitiless Killer and Culling Strike:** All your damage deals Culling Strike, instantly killing enemies below 10% life. This is deceptively powerful -- it effectively gives you 10% more damage against everything, because any hit that would leave an enemy at 9% life instead kills them outright. In party play, culling rares and bosses that other players have damaged is extremely valuable. The Cull the Hordes passive tree node further scales this effect.

**Decimating Strike and Boss Opening Burst:** Judge, Jury, and Executioner grants Decimating Strike, which takes a large random percentage of a full-life target's health on hit. This is only usable once per target (they need to be at full life), but it provides massive opening burst against bosses. The exact percentage is random but consistently large -- community reports suggest 20-30% of maximum life [(VULKK.com: Witchhunter Breakdown)](https://vulkk.com).

**Sorcery Ward and Damage Absorption:** Obsessive Rituals + Ceremonial Ablution trades Armour/Evasion for a regenerating barrier that protects against all damage types. The Ward value scales with your Armour and Evasion (before the penalty), so investing in those stats still matters. Once the Ward is active, it provides a bubble that absorbs hits from any source. If the bubble pops, you need a recovery plan -- typically Flash Grenades for crowd control while it regenerates. The build feels squishy before Sorcery Ward is allocated but becomes remarkably tanky once it is active [(GamingCy: Permafrost Witchhunter)](https://wp-admin.gamingcy.com/poe-2-best-mercenary-builds).

**Witchbane and Boss Cooldown Extension:** Lengthens pinnacle boss cooldowns, making their dangerous abilities less frequent. This is a niche but valuable node for pinnacle boss encounters where specific cooldown abilities are the main threat.

**Permafrost Bolts and Freeze Chain:** The core skill of the most popular Witchhunter variant. Permafrost Bolts fire a shotgun spread of cold projectiles that freeze enemies rapidly. Once frozen, Fragmentation Rounds detonates them for massive burst + Herald of Ice chain explosions. The freeze also serves as a defensive layer -- frozen enemies cannot act. At close range, more projectiles hit a single target (shotgun effect), making Close Combat support very valuable [(Kami-Labs: KaidGames Permafrost Witchhunter)](https://kami-labs.fr/en/path-of-exile-2/build-mercenary-permafrost-bolts-witchhunter-season-4-en/).

## Gear Progression

**Early Game (Acts 1-3):** A high physical or cold damage crossbow is the priority. At around level 20, the Dyad Crossbow base becomes available -- it adds an additional shot to Fragmentation Rounds and Permafrost Bolts, making gameplay much smoother. Later, look for Twin Crossbow and Gemini Crossbow bases for the same additional-bolt benefit [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician). Standard defensive gear with life and resistances. Evasion bases preferred once transitioning to Sorcery Ward.

**Mid Game (Acts 4-Interlude):** The crossbow should have high physical damage (for conversion to cold), attack speed, +projectile skill levels, and ideally an additional bolt. Gloves and boots with evasion, life, and added damage. Rings with flat cold/physical damage, life, and resistances. Amulet with +projectile skill levels and Spirit. Begin transitioning armour bases to evasion for Sorcery Ward scaling.

**Late Game (Mapping+):** A Gemini Crossbow with high physical damage, attack speed, +projectile skill levels, and additional bolt is the ideal weapon. Evasion-based body armour is critical for Sorcery Ward value -- it contributes massively to total evasion. Heatshiver, Saint's Aqua, and Heris are solid optional uniques depending on budget [(Kami-Labs: KaidGames Permafrost Witchhunter)](https://kami-labs.fr/en/path-of-exile-2/build-mercenary-permafrost-bolts-witchhunter-season-4-en/). Ryslatha's Coil provides 40% more max hit for physical attacks but with a damage variance trade-off. For the grenade variant, a Bombard Crossbow (extra grenade projectile) is a major upgrade. Iron Reflexes can convert evasion to armour if you want an armour-based defense instead of Sorcery Ward.

## Ascendancy Node Breakdown

**Zealous Inquisition (Pick 1):** Causes enemies to explode in a massive area on kill. The strongest first pick for clear speed. The explosions chain with Herald effects for screen-wide clear. Take this first whether leveling as Witchhunter or after respeccing from Tactician [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician).

**Pitiless Killer (Pick 2):** Grants Culling Strike to all damage. This is both a clear-speed boost (enemies die 10% sooner) and a party-play tool (cull damaged rares and bosses). Take it second for the consistent value it provides in all content. Scales with Cull the Hordes passive tree node.

**Judge, Jury, and Executioner (Pick 3):** Grants Decimating Strike on full-life targets. Provides massive opening burst against bosses. Take this third when you're engaging with boss content where the first-hit chunk matters. Less valuable in mapping where enemies are rarely at full life when you hit them.

**Witchbane (Pick 4):** Lengthens pinnacle boss cooldowns. Niche but valuable for specific pinnacle encounters. Take this last, and only if you're actively pushing pinnacle content where boss cooldown management matters.

**Obsessive Rituals + Ceremonial Ablution (Pick variable):** The Sorcery Ward package. Trades Armour/Evasion for a barrier against all damage types. Allocate both nodes together -- Obsessive Rituals unlocks the Ward, and Ceremonial Ablution extends it to Physical and Chaos damage. The ideal timing is when you have sufficient Evasion on gear to make the Ward value meaningful (4000+ bubble) [(GamingCy: Permafrost Witchhunter)](https://wp-admin.gamingcy.com/poe-2-best-mercenary-builds). Pohx recommends taking No Mercy first, then respeccing it into Sorcery Ward once gear supports the swap [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician).

## Common Mistakes and Pitfalls

**Taking Sorcery Ward before you have evasion gear.** The Ward value scales with your Armour and Evasion. Allocating Sorcery Ward with low evasion gives you a tiny bubble while losing the armour/evasion you had. Wait until your evasion gear makes the Ward value exceed what you're trading away. Pohx recommends the swap at red-map gear levels [(Mobalytics: Pohx Permafrost Witchhunter)](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician).

**Not having a Ward recovery plan.** If your Sorcery Ward bubble pops, you are suddenly without any defense until it regenerates. You need a plan for this window -- typically Flash Grenades for crowd control, or simply dodging away until regeneration completes. Standing in damage with a popped Ward is how you die.

**Ignoring the Armour/Evasion trade-off.** Sorcery Ward replaces your Armour and Evasion, not supplements it. Do not build for Armour and Evasion expecting to also have Sorcery Ward on top. The optimization is to invest in Evasion (which scales the Ward) while accepting that you no longer benefit from Evasion's avoidance -- the Ward is your avoidance.

**Playing too far from enemies with Permafrost Bolts.** Permafrost Bolts has a shotgun spread -- more projectiles hit at close range. Playing at maximum range reduces your damage significantly. Close Combat support is recommended precisely because the build wants to be in mid-close range [(Kami-Labs: KaidGames Permafrost Witchhunter)](https://kami-labs.fr/en/path-of-exile-2/build-mercenary-permafrost-bolts-witchhunter-season-4-en/).

**Forgetting Decimating Strike only works on full-life targets.** This is a one-time burst per enemy. Do not expect it to proc repeatedly. Use it as an opener on bosses, then rely on your standard rotation for sustained damage.

## Mapping and Endgame Tips

**Mapping Playstyle:** The Permafrost Bolts Witchhunter is nearly one-button in maps. Fire Permafrost Bolts into packs, and the freeze + shatter + Herald of Ice + Zealous Inquisition chain kills everything. Most packs die behind you while you move toward the next group [(Kami-Labs: KaidGames Permafrost Witchhunter)](https://kami-labs.fr/en/path-of-exile-2/build-mercenary-permafrost-bolts-witchhunter-season-4-en/). Against resistant rares, switch to Fragmentation Rounds to detonate the freeze, then Shard Scavenger triggers for reload-free Permafrost Bolts chaining.

**Boss Fights:** Apply Freezing Mark, fire Permafrost Bolts until Freeze, then detonate with Fragmentation Rounds for massive burst. During Shard Scavenger windows, chain Permafrost Bolts without reload interruption. Decimating Strike provides a large chunk on the first hit. If running Sorcery Ward, the bubble absorbs boss hits while you execute the rotation.

**Defensive Layers:** The build has three defensive layers: (1) Freeze crowd control (frozen enemies cannot act), (2) Evasion/Deflection for hit avoidance (or Sorcery Ward for damage absorption), and (3) Herald leech for sustain. The combination makes the build feel much tankier than its life pool suggests. Before Sorcery Ward, rely on freeze as your primary defense.

**Content to Watch Out For:** Freeze-immune enemies are your worst nightmare -- they bypass your primary defensive layer. Maps with "cannot be frozen" mods or "reduced freeze duration" significantly increase danger. Simulacrum waves with dense, fast-moving, high-ailment-threshold enemies can overwhelm the freeze + Ward combination. Always carry a freeze-immunity flask for emergency use. The build is also life-based, so Chaos damage bypass is a concern until you cap Chaos resistance [(GamingCy: Permafrost Witchhunter)](https://wp-admin.gamingcy.com/poe-2-best-mercenary-builds).
