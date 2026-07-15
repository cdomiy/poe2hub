---
title: "Mercenary Tactician Pin & Banner Build Guide"
class: "Mercenary"
ascendancy: "Tactician"
coreSkill: "Ballista / Pin Grenade"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "league-starter"
estCost: "low"
summary: "A crowd-control-focused ascendancy that pins enemies in place (disabling their actions) while banners buff nearby allies. Currently the most commonly recommended Ascendancy for the popular Grenade/Ballista Mercenary leveling archetype."
pros:
  - "Pin mechanics disable enemy actions entirely, functioning as strong crowd control rather than just a damage debuff"
  - "Banners provide meaningful party value, up to 25% of your main-hand weapon damage granted to allies as added attack damage"
  - "The most commonly recommended Ascendancy for the well-tested Grenade Ballista leveling archetype"
cons:
  - "Solo value is more about control (pin + armour break synergy) than raw damage compared to Gemling Legionnaire"
  - "Banner placement and pin timing require some battlefield awareness to use optimally"
nodesVerified: false
ascendancyNodes:
  - order: 1
    name: "(unconfirmed node name) — Enhanced Pin"
    effect: "Confirmed mechanic direction: a far more powerful version of Pin that can nearly permanently lock down monsters and bosses — exact node name not independently verified"
  - order: 2
    name: "(unconfirmed node name) — Extra Persistent Buff slots"
    effect: "Confirmed mechanic direction: fits twice as many Persistent Buff skills as other ascendancies — exact node name not independently verified"
  - order: 3
    name: "Supporting Fires"
    effect: "A confirmed named skill granting a large-area damaging effect, useful for convenient campaign leveling"
skillGems:
  mainSkill:
    gem: "Explosive Grenade"
    supports: ["Grenade Speed", "Controlled Destruction", "Physical Damage"]
  secondarySkill:
    gem: "Artillery Ballista"
    supports: ["Magnified Area"]
  spiritSkills:
    - gem: "War Banner"
      supports: []
  utilitySkills:
    - gem: "Flash Grenade"
      supports: []
    - gem: "Oil Grenade"
      supports: []
gearPriority:
  - slot: "Crossbow"
    item: "Pin effect, Damage"
    note: "Reload speed"
    priority: "core"
  - slot: "Amulet"
    item: "Persistent buff effect"
    note: "Banner count"
    priority: "recommended"
  - slot: "Belt"
    item: "Banner duration"
    note: "Flask charges"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Grenade/Crossbow damage, Life, Dexterity/Strength mix"
  midGame: "Pin-effect and Banner-effect clusters"
  endGame: "Full pin-and-banner setup, strong in both solo and group content"
levelingGuide:
  act1to3: "Flash and Oil Grenades to engage safely, per the standard Grenade Mercenary leveling path"
  act4to6: "Add War Banner and pin-focused grenades as they become available"
  mapping: "Full Ballista/Pin Grenade setup, very budget-friendly to gear"
faqs:
  - q: "Is Tactician the best Mercenary starter?"
    a: "It's the most commonly recommended ascendancy for the well-tested Grenade Ballista leveling path specifically, though Witchhunter and Gemling Legionnaire are both solid alternatives."
  - q: "Is this good in groups?"
    a: "Yes, the banner buffs make it genuinely valuable in party content, more so than the other two Mercenary ascendancies."
dataSources:
  - "Maxroll.gg Grenade Mercenary leveling guide (Witchhunter/Tactician/Gemling comparison)"
  - "Game8 Mercenary ascendancies guide"
  - "Maxroll.gg PoE 2 Class Overview"
  - "VULKK.com All Classes and Ascendancies Explained"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

Tactician is the Mercenary's crowd-control-focused ascendancy, specializing in pinning enemies in place (disabling their actions entirely) while banners buff nearby allies. The Pin mechanic is not just a slow or a debuff -- it is a hard disable that prevents enemies from acting, functioning as some of the strongest crowd control in the game. When combined with the 40% more immobilisation bonus from Tactician's nodes, you can double-dip on making mobs stand still using both Pin and Freeze simultaneously [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265).

This is currently the most commonly recommended Ascendancy for the popular Grenade/Ballista Mercenary leveling archetype. The synergy is natural: grenades are projectiles, and Tactician's Pin applies to all projectile damage. Every grenade you throw has a chance to pin targets, creating a defensive layer that scales with your offense. The more damage you deal, the more enemies are locked down, and the safer you are. Coolguys' "Immobilization Grenades" build explicitly describes this as "making our DPS a defensive layer" [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265).

Banners provide meaningful party value -- up to 25% of your main-hand weapon damage granted to allies as added attack damage. This makes Tactician genuinely valuable in group content, more so than the other two Mercenary ascendancies. Lazy Exile's Ballista Banner Tactician build uses War Banner, Defiance Banner, and Dread Banner with a dual-curse setup for comfortable totem gameplay [(Lazy Exile: Ballista Banner Tactician)](https://upcreid.github.io/games/poe2/builds/ballista-banner-tactician/).

The trade-off is that Tactician's solo value is more about control than raw damage. Gemling Legionnaire can exceed gem limits for higher theoretical DPS, and Witchhunter has stronger burst and defensive options. Tactician's strength is in making content safe and controlled rather than exploding it instantly. Banner placement and pin timing require some battlefield awareness to use optimally.

## Putting It Together

**Acts 1-3 (Grenade Foundation):** Start with Flash Grenades and Oil Grenades to engage safely -- throw first and run in second, following the standard Grenade Mercenary leveling path. Gas Grenade + Herald of Ash for detonating gas clouds carries early damage through fire conversion [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build). Prioritize Grenade and Crossbow damage, Life, and Dexterity/Strength mix on the passive tree. Your Pin mechanic starts providing crowd-control value from the moment you allocate your first Tactician node.

**Acts 4-6 (Pin and Banner Integration):** Add War Banner and pin-focused grenades as they become available. The Mortar Cannon meta-skill becomes available during Act 4, transforming linked grenades into Ballista Totem attacks -- this is the core transition for the popular Ballista Tactician variant. Mortar Cannons fire independently of you, have better cooldown recovery for grenades, and you can summon up to 4 of them [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build). Begin pathing toward Pin-effect and Banner-effect clusters on the passive tree.

**Mapping and Beyond (Full Pin-and-Banner Setup):** The complete build runs Mortar Cannon with Explosive Grenade (or Cluster Grenade) supported by Urgent Totems, Payload, and Elemental Armament. Place totems ahead while mapping and let them pin and kill enemies. For Coolguys' immobilization variant, Blueflame Bracers convert fire to cold for simultaneous Pin + Freeze, and Shankgonne boots replace dodge roll with Black Powder Blitz for immediate grenade detonation [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265). Very budget-friendly to gear -- this is one of the cheapest Mercenary builds to reach red maps.

## Key Mechanics and Interactions

**Pin Mechanic and Hard Disable:** Pin is not a slow -- it is a full action disable. Pinned enemies cannot attack, cast, or move. Tactician's projectile damage applies Pin buildup, and once the threshold is reached, the enemy is locked in place. The 40% more immobilisation bonus from Right Where We Want Them means both Pin and Freeze build faster, creating double crowd control that is extremely effective against packs and meaningful against bosses [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265).

**Pin + Freeze Double-Dip:** When running a fire-to-cold conversion setup (via Blueflame Bracers), all your grenade damage can both Pin (from Tactician's projectile Pin) and Freeze (from cold damage). Because Pin and Freeze often build at different speeds, you get staggered crowd control -- when one expires, the other is still active. This makes it very difficult for enemies to ever act.

**Banner Buffs and Party Scaling:** Banners provide added attack damage to allies (up to 25% of your main-hand weapon damage). In solo play, this buffs your own totems and Mirage Archer. In party play, every ally in radius benefits. War Banner provides damage and attack speed, Defiance Banner provides defense, and Dread Banner provides fear. Multiple banners can be active simultaneously with sufficient Spirit [(Lazy Exile: Ballista Banner Tactician)](https://upcreid.github.io/games/poe2/builds/ballista-banner-tactician/).

**Mortar Cannon and Ballista Conversion:** Mortar Cannon is a meta-skill that transforms linked grenades into Ballista Totem attacks. Ballistas fire independently with increased cooldown recovery rate, at the cost of less damage and attack speed. You can place up to 4 Ballistas. The key advantage is hands-free grenade delivery -- you place totems and reposition while they pin and kill [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build).

**Black Powder Blitz and Instant Detonation:** Shankgonne Covered Sabatons replace your dodge roll with Black Powder Blitz, a rocket-jump skill that immediately detonates all unexploded grenades around you. This eliminates the biggest drawback of grenade builds (waiting for fuse timers) and creates a fluid "throw then flip" playstyle where you never wait for explosions [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265).

**A Solid Plan and Spirit Retention:** This ascendancy node helps retain Spirit, enabling more banner and herald reservations. Combined with Spirit on gear, it allows comfortable multi-banner setups without gear-checking Spirit on every slot.

## Gear Progression

**Early Game (Acts 1-3):** A crossbow with high physical damage is your core weapon -- Explosive Grenade converts physical to fire. Look for reload speed as a quality-of-life stat. Standard defensive gear with life, resistances, and armour/evasion. No specific uniques required at this stage. Generic mortar and grenade setups carry you easily through early maps even without real defensive gear, because Pin and Freeze provide crowd-control safety [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265).

**Mid Game (Acts 4-Interlude):** Begin seeking a strong Siege Crossbow with high physical damage, +1 to Ballista (best-in-slot prefix), +6 level to attack skills, and attack speed. For the immobilization variant, acquire Blueflame Bracers (fire-to-cold conversion) and Shankgonne Covered Sabatons (Black Powder Blitz). Constricting Command helmet reduces the enemies-needed-for-Surrounded threshold. Spirit on sceptre becomes important for fitting multiple banner reservations [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build).

**Late Game (Mapping+):** The crossbow can be deterministically crafted using 0.3 essence and Desecration crafting methods [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265). Chase items include Constricting Command (helmet), Doedre's Damning (additional curse for dual-curse setup), and optionally Valako's Vice for fire-to-lightning conversion if running a Herald of Thunder variant. Armour/evasion gear with life, resistances, and armour-applies-to-elemental-damage is the defensive target. The build is specifically noted as easy to gear -- Coolguys describes it as "deterministically craftable" crossbow with only two necessary affordable uniques.

## Ascendancy Node Breakdown

**Suppressing Fire (Pick 1):** A large-area damaging effect useful for convenient campaign leveling. This is the strongest first pick for clearing speed during the acts. The damaging zone provides both offense and area denial, synergizing with grenade playstyle [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build).

**Right Where We Want Them (Pick 2):** 40% more immobilisation for both Pin and Freeze. This is the core crowd-control amplification node. Take it second -- the 40% more multiplier on immobilisation buildup speed means enemies reach Pin and Freeze thresholds dramatically faster. This is what enables the double-dip crowd control that makes Tactician feel safe.

**Polish That Gear (Pick 3):** Provides deflection based on armour. This defensive node converts your armour investment into deflection chance, adding another defensive layer. Particularly valuable when combined with Iron Reflexes (converting evasion to armour) for a pure armour + deflection setup [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build).

**A Solid Plan (Pick 4):** Retains Spirit, making it easier to maintain multiple banner reservations. Take this when you're running War Banner + Defiance Banner + Dread Banner simultaneously and feeling Spirit pressure. If you have sufficient Spirit from gear, this node is lower priority.

## Common Mistakes and Pitfalls

**Standing still while grenades cook.** The biggest mistake new Tactician players make is waiting for grenade fuse timers. With Black Powder Blitz (Shankgonne boots), you should be flipping over grenades to detonate them instantly. Without Shankgonne, position grenades in the enemy's path so they walk into explosions. Never stand still watching fuses.

**Ignoring Pin as a defensive layer.** Pin is not just a CC bonus -- it is your primary defense. Enemies that are pinned cannot damage you. The more aggressively you push damage (which increases Pin buildup), the safer you are. Playing too cautiously actually reduces your survivability because enemies stay unpinned longer.

**Placing banners out of combat range.** Banners have a radius. Dropping a War Banner behind you while fighting ahead wastes its buff. Place banners in the combat zone where you and your totems benefit. In party play, coordinate banner placement to cover the group [(Lazy Exile: Ballista Banner Tactician)](https://upcreid.github.io/games/poe2/builds/ballista-banner-tactician/).

**Not using Mortar Cannon for grenade delivery.** Throwing grenades manually is slow and clunky. Mortar Cannon automates grenade delivery through Ballistas with better cooldown recovery. The transition to Mortar Cannon is a major power spike -- do not delay it past Act 4 [(Odealo: Mortar Cannon Tactician)](https://static.odealo.com/articles/mortar-cannon-tactician-poe2-build).

**Forgetting that Pin has reduced effect on bosses.** Pin works on bosses but with reduced effectiveness (faster Pin decay). Do not expect bosses to be permanently locked down. Use Pin as a window for burst damage, not as a permanent disable.

## Mapping and Endgame Tips

**Mapping Playstyle:** Drop Mortar Cannons ahead of you and keep moving. Enemies get pinned and killed by totems while you advance. The "drop and run" playstyle is comfortable and safe. With the immobilization variant, throw Explosive Grenades then Black Powder Blitz over them -- mobs die, get pinned, get frozen, or both, all while you flip to the next pack [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265).

**Boss Fights:** For bosses, drop all 4 Ballistas, place War Banner, and maintain positioning. If running the immobilization variant, stack grenades near the boss spawn before the fight begins, then detonate with Black Powder Blitz for an immediate burst. Flash Grenades provide additional crowd control during dangerous phases. The Pin mechanic creates windows where the boss cannot act -- use these for safe damage windows.

**Ritual and Arena Content:** Tactician excels in stationary content where totems and banners can be pre-placed. Ritual encounters are a sweet spot because enemies come to your prepared zone. Banner buffs are most efficient when you're standing in their radius for an extended fight [(Lazy Exile: Ballista Banner Tactician)](https://upcreid.github.io/games/poe2/builds/ballista-banner-tactician/).

**Party Play:** Tactician is the best Mercenary ascendancy for group content. Banner buffs stack with ally auras, and Pin provides crowd control that benefits the entire party. In a group, you are a force multiplier rather than a primary DPS -- and that role is extremely valuable.

**Content to Watch Out For:** Pin-immune map mods (rare but possible) remove your primary defensive layer. Content with very high ailment thresholds reduces Pin effectiveness. The build is life-based and can struggle to reach 3k+ life when using unique gloves and boots that lack life rolls [(PoE Forum: Coolguys Tactician)](https://www.pathofexile.com/forum/view-thread/3851265). Mana recovery can suffer in long boss fights -- a mana-on-kill jewel is highly recommended.
