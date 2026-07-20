---
title: "Ranger Pathfinder Poison Concoction Build Guide"
class: "Ranger"
ascendancy: "Pathfinder"
coreSkill: "Poison Concoction / Ice Shot"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "B"
playstyle: "endgame"
estCost: "medium"
summary: "A damage-over-time specialist that throws concoctions to stack poison from range. Took a real hit in recent balance changes to poison scaling specifically, so treat it as a solid transition build rather than the strongest possible league starter right now."
pros:
  - "Poison DoT is efficient against high-health bosses since it doesn't need repeated direct hits"
  - "Throwing concoctions keeps you at a safe distance, unlike melee-adjacent damage-over-time builds"
cons:
  - "Recent patches specifically nerfed poison Pathfinder's scaling, check current patch notes before committing currency"
  - "Damage-over-time playstyle means clear speed lags behind direct-hit builds like Deadeye's Twister"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Path Seeker"
    effect: "Lets you choose one of three paths to start allocating passives from another class's starting point on the tree"
  - order: 2
    name: "Running Assault"
    effect: "Reduces the movement penalty from using skills while moving, and prevents Heavy Stun while sprinting"
  - order: 3
    name: "Relentless Pursuit"
    effect: "Grants invulnerability to being Slowed while sprinting"
  - order: 4
    name: "Overwhelming Toxicity"
    effect: "Doubles the maximum number of Poison stacks an enemy can have, the signature node for poison-stacking builds"
  - order: 5
    name: "Traveller's Wisdom"
    effect: "Grants attribute passive nodes extra options for damage, defense, or cost efficiency instead of just more passive points"
skillGems:
  mainSkill:
    gem: "Poison Concoction"
    supports: ["Concentrated Poison", "Sustained Damage"]
  secondarySkill:
    gem: "Ice Shot"
    supports: ["Cold Penetration", "Precision"]
  spiritSkills:
    - gem: "Toxic Growth"
      supports: []
  utilitySkills:
    - gem: "Dash"
      supports: []
    - gem: "Flame Wall"
      supports: []
gearPriority:
  - slot: "Weapon"
    item: "Poison damage dagger/wand"
    note: "Damage over time multiplier"
    priority: "core"
  - slot: "Amulet"
    item: "Poison stack-cap bonus"
    note: "Chaos damage %"
    priority: "recommended"
  - slot: "Ring"
    item: "Concoction charge bonus"
    note: "Duration"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Poison damage, Life, Chaos damage nodes"
  midGame: "Duration and stack-cap nodes"
  endGame: "Damage-over-time multiplier clusters, defensive layer of choice"
levelingGuide:
  act1to3: "Ice Shot for single-target and clear while concoctions come online"
  act4to6: "Transition toward Poison Concoction as your primary damage source"
  mapping: "Full poison stacking setup, watch current patch notes for scaling adjustments"
faqs:
  - q: "Is this still good after the poison nerfs?"
    a: "It's a step down from its peak but still functional, best treated as a mid-investment transition build rather than a top-tier league starter right now."
  - q: "Deadeye or Pathfinder?"
    a: "Deadeye's Twister is the stronger, more forgiving league-start pick currently; Pathfinder suits players who specifically want a damage-over-time playstyle."
dataSources:
  - "aoeah.com 0.5 Tier List (poison Pathfinder nerf notes)"
  - "PoE2Wiki Fextralife Pathfinder page"
  - "Game8 Pathfinder ascendancy overview"
relatedBosses:
  - "atziri-the-red-queen"
relatedMechanics:
  - "expedition"
  - "temple-of-atziri"
---

## Why This Ascendancy

Pathfinder is a damage-over-time specialist that throws concoctions to stack poison from range. The ascendancy's identity revolves around flask interaction, poison stacking, and a unique freedom of movement -- Running Assault and Relentless Pursuit make you immune to movement penalties and slows while sprinting, which is a genuinely powerful defensive mechanic that no other Ranger ascendancy provides.

However, this build took a real hit in recent balance changes to poison scaling specifically. Community tier lists for 0.5 rate Pathfinder as a step down from its peak, and the aoeah.com tier list explicitly calls out the poison Pathfinder nerfs [(aoeah.com)](https://aoeah.com). Treat this ascendancy as a solid transition build rather than the strongest possible league starter right now. If you specifically want a damage-over-time playstyle and enjoy flask management, Pathfinder delivers a unique experience -- just don't expect it to match Deadeye's Twister in raw clear speed.

The ascendancy's signature node, Overwhelming Toxicity, doubles the maximum number of Poison stacks an enemy can have. This is the theoretical damage ceiling multiplier for poison builds -- if you can stack poison fast enough, double the stack cap means double the sustained damage. In practice, reaching the poison application rate to saturate this doubled cap requires significant investment, which is why the build is gear-dependent in its current state.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order. This build's power comes from hitting the right nodes at the right stage rather than rushing everything at once.

**Act 1-3 (Levels 1-33):** Ice Shot for single-target and clear while concoctions come online. Poisonous Concoction doesn't become available until around level 25-30, so you need a functional damage source before the transition. Focus passive points on Poison damage, Life, and Chaos damage nodes. Your early quest rewards should prioritize Charm Charges Gained and Stun Threshold.

**Act 4-6 (Levels 34-55):** Transition toward Poison Concoction as your primary damage source. Allocate Path Seeker and Running Assault from the ascendancy -- the movement freedom is immediately noticeable and improves survivability substantially. Start building flask sustain (Reduced Flask Charges Used, Flask Charges Gained) because Concoction skills consume flask charges on use.

**Mapping (Levels 56+):** Full poison stacking setup. Watch current patch notes carefully for scaling adjustments -- poison Pathfinder has been directly nerfed in recent patches and the numbers may have shifted since this guide was written. Overwhelming Toxicity should be allocated once your poison application rate can reasonably approach the doubled cap. If you can't saturate the cap, the node provides less value than investment in raw poison damage.

Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan.

## Key Mechanics & Interactions

**Poison Concoction flask interaction.** Poisonous Concoction consumes Mana Flask charges when used. This creates a unique resource management loop: your damage output is literally gated by your flask capacity. Stacking Reduced Flask Charges Used, Flask Charges Gained, and flask recovery rate is not optional -- it's the engine that makes the build function. A good belt with flask modifiers is arguably more important than your weapon [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3669582).

**Poison as sustained damage.** Poison DoT is efficient against high-health bosses since it doesn't need repeated direct hits -- you apply stacks, and the damage ticks down while you reposition or refresh. The trade-off is clear speed: poison builds naturally lag behind direct-hit builds like Deadeye's Twister because the damage is delayed rather than instant.

**Overwhelming Toxicity double stack cap.** The signature node doubles the maximum poison stacks on an enemy. The theoretical value is enormous (double stacks equals double sustained DPS), but only if you can apply poison fast enough to reach the cap. If your application rate is low, the doubled cap goes unused and the node underperforms relative to raw damage investment.

**Running Assault and Relentless Pursuit.** These two nodes together make you immune to movement penalties and all slow effects (including Temporal Chains and Chilled Ground) while sprinting [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3657241). This is a genuinely unique defensive mechanic -- many dangerous map mods and boss mechanics rely on slowing you, and Pathfinder simply ignores them.

**Widowhail plus Quiver scaling.** For the Poison Concoction variant, Widowhail bow with a high-rolled quiver is the standard weapon setup. Widowhail amplifies all quiver bonuses, and a +2 Projectile Skills quiver dramatically increases Concoction level and damage [(Mobalytics)](https://mobalytics.gg/poe-2/builds/poison-concoction-wilsunboxile). The Quiver slot becomes your most important offensive piece.

## Gear Progression

**Early Game (Acts 1-3):** A rare bow or crossbow with physical damage. Rings and gloves with flat damage and Life. Standard Life/Resistances on remaining slots. No specific uniques required -- the build is designed to work with rare gear [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3657241).

**Mid Game (Acts 4-6):** Widowhail bow (ideally 270-300% increased bonuses from quiver) with a well-rolled Visceral Quiver (+2 Projectile Skills, Crit, Attack Speed) [(Mobalytics)](https://mobalytics.gg/poe-2/builds/poison-concoction-wilsunboxile). Belt with Reduced Flask Charges Used and Flask Charges Gained. Mana Flask with instant recovery for emergency sustain.

**Late Game (Mapping+):** Hand of Wisdom and Action gloves for attack speed and movement speed [(Mobalytics)](https://mobalytics.gg/poe-2/builds/poison-concoction-wilsunboxile). High-ES helmet for energy shield pool. Chaos Inoculation (CI) transition once you have enough ES gear -- CI makes you immune to chaos damage, which synergizes with a build that's already investing in chaos/poison nodes. Snakebite gloves double poison stacks as an alternative. Amulet with +Spirit and +Gem Levels to fund persistent buff skills.

## Ascendancy Node Breakdown

1. **Path Seeker** -- Lets you choose one of three paths to start allocating passives from another class's starting point on the tree. Enables cross-class passive access, which can provide nodes that synergize with poison/DoT scaling that aren't available from the Ranger starting area.

2. **Running Assault** -- Reduces movement penalty from using skills while moving, and prevents Heavy Stun while sprinting. The mobility enabler that makes Pathfinder feel smooth -- you can attack and move simultaneously without penalty.

3. **Relentless Pursuit** -- Grants invulnerability to being Slowed while sprinting. Stacks with Running Assault for total movement freedom. Immunity to Temporal Chains and Chilled Ground is uniquely powerful.

4. **Overwhelming Toxicity** -- Doubles the maximum number of Poison stacks an enemy can have. The theoretical DPS doubler for poison-stacking builds. Allocate when your application rate can approach the doubled cap.

5. **Traveller's Wisdom** -- Grants attribute passive nodes extra options for damage, defense, or cost efficiency. Flexible scaling that adapts to your current needs -- more damage when you're tanky enough, more defense when you're dying, more efficiency when mana is tight.

## Common Mistakes & Pitfalls

- **Expecting league-start power equal to Deadeye.** Pathfinder is currently a step below Deadeye's Twister in raw power. If you want the strongest Ranger league start, play Deadeye. Pathfinder is for players who specifically want the DoT playstyle and movement freedom.

- **Neglecting flask sustain.** Poisonous Concoction literally costs flask charges to use. If you don't invest in flask charge generation and recovery, you will run out of damage mid-pack. Belt and flask investment is mandatory, not optional.

- **Taking Overwhelming Toxicity before you can saturate it.** Double stack cap only matters if you apply poison fast enough to reach it. If your application rate is low, the node does nothing -- invest in application speed first, then take the doubled cap.

- **Ignoring the poison nerfs.** Recent patches directly targeted poison Pathfinder scaling. Read the current patch notes before committing significant currency to this build [(aoeah.com)](https://aoeah.com).

- **Rushing Chaos Inoculation.** CI removes your life pool entirely in exchange for chaos immunity. If you don't have enough Energy Shield gear to survive without life, CI will kill you. Wait until your ES pool is comfortable.

## Mapping & Endgame Tips

**Mapping:** Pathfinder's mapping speed is slower than direct-hit builds by nature -- poison takes time to tick. However, the movement freedom from Running Assault plus Relentless Pursuit means you're almost never slowed down by map mods or enemy effects, which partially compensates. Use Vine Arrow plus Poison Concoction for spreading poison to nearby enemies [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3669582).

**Pinnacle Bosses:** Poison DoT excels against stationary high-health targets -- you apply stacks, then focus on surviving while the damage ticks down. Plague Bearer is a strong addition for boss fights, storing poison damage and releasing it as Physical Nova [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3669582). Gas Arrow plus Toxic Growth is the standard boss rotation for the Poisonburst Arrow variant [(Mobalytics)](https://mobalytics.gg/poe-2/builds/poison-concoction-wilsunboxile).

**Defensive Layers:** Movement immunity (slow/stun protection) is your primary defense. Ghost Dance plus Wind Dancer for evasion-based passive defense. Grim Feast for overshield generation. Energy Shield as your main pool, especially after CI transition. The 0.5 ES nerfs affect Pathfinder but are partially offset by flask-based life recovery if you haven't transitioned to CI yet.

**Flask Management:** Your damage depends on flasks. Use instant-recovery Mana Flasks, stack Flask Charges Gained on belt, and consider Alchemist's Boon Spirit skill for flask sustain [(PoE Forums)](https://www.pathofexile.com/forum/view-thread/3669582). Flask Siphon enemies are your hardest counter -- they drain flask charges directly.

