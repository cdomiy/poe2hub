---
title: "Huntress Amazon Bleed / Crit Spear Build Guide"
class: "Huntress"
ascendancy: "Amazon"
coreSkill: "Rake (Bleed) / Twister Hybrid"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "A"
playstyle: "league-starter"
estCost: "low"
summary: "The straightforward, gear-agnostic Huntress path. Exploit enemy weaknesses for movement and skill speed, convert excess Accuracy into Critical Strike Chance, and leech life off elemental attacks. Currently the recommended leveling ascendancy for the class."
pros:
  - "Rated the recommended leveling Ascendancy for Huntress specifically, strong out of the gate with no complex setup"
  - "Converts spare Accuracy into Crit Chance, making rare-item shopping simpler than crit-dependent builds"
  - "Can also run the Twister core if you'd rather hybridize into the class's signature spear combo"
cons:
  - "Spirit Walker outperforms it specifically for Twister scaling, since Amazon's nodes weren't designed around that skill"
  - "Purely offensive ascendancy, you'll need to source your defensive layer from gear and passive tree rather than ascendancy nodes"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Predatory Instinct"
    effect: "The first Ascendancy pick for a Bleed-focused Huntress; reveals weaknesses and grants 50% more damage against enemies with an Open Weakness, no gear requirement"
  - order: 2
    name: "Elemental Surge"
    effect: "Grants a skill that creates a high-damage elemental explosion when a projectile attack reaches the end of its flight, consuming stored Infusion"
  - order: 3
    name: "Surging Avatar"
    effect: "Grants 2 Cold, Fire, and Lightning Surges each time you consume a Charge, instead of just Lightning Surges"
  - order: 4
    name: "Stalking Panther"
    effect: "Increases the effectiveness of Helmet, Gloves, and Boots"
  - order: 5
    name: "Mystic Harvest"
    effect: "Enables Elemental Leech, converting a portion of elemental damage dealt into life recovery"
skillGems:
  mainSkill:
    gem: "Rake"
    supports: ["Bleed", "Melee Physical", "Impact"]
  secondarySkill:
    gem: "Herald of Blood"
    supports: ["Blind II"]
  spiritSkills:
    - gem: "Wind Dancer"
      supports: ["Maim", "Blind II"]
  utilitySkills:
    - gem: "Disengage"
      supports: ["Holy Descent"]
    - gem: "Thunderous Leap"
      supports: []
gearPriority:
  - slot: "Weapon (Spear)"
    item: "Physical damage, Attack speed"
    note: "Bleed magnitude"
    priority: "core"
  - slot: "Boots"
    item: "Movement speed, Life"
    note: "Resistances"
    priority: "recommended"
  - slot: "Amulet"
    item: "Crit chance"
    note: "Charge stack-cap"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Bleed and Physical damage clusters, Life"
  midGame: "Critical Strike and Penetrate nodes"
  endGame: "Full crit-conversion setup or hybridize into Twister for a mapping-speed variant"
levelingGuide:
  act1to3: "Rake for Bleed application, Disengage and Thunderous Leap for mobility"
  act4to6: "Add Herald of Blood for Bleed-triggered explosions and Wind Dancer for defense"
  mapping: "Full Bleed/Crit setup, or transition into the Twister combo if you prefer that playstyle"
faqs:
  - q: "How do I cover this build's defense?"
    a: "Amazon leans offensive by design, plan evasion or armour mods from gear and the passive tree rather than expecting the ascendancy to cover it."
  - q: "Amazon or Spirit Walker?"
    a: "Amazon is the more beginner-friendly, gear-agnostic leveling pick; Spirit Walker specifically out-scales it for the Twister endgame variant."
dataSources:
  - "Maxroll.gg Spear Huntress leveling guide"
  - "Boostmatch Huntress best-build guide"
  - "Game8 Huntress ascendancies guide"
  - "VULKK.com Amazon Huntress ascendancy breakdown"
  - "PoE2Wiki Fextralife Amazon page"
  - "Maxroll.gg PoE 2 Ascendancy Overview"
relatedBosses:
  - "kabala-constrictor-queen"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

Amazon is the Huntress's straightforward, gear-agnostic ascendancy -- the one you pick when you want strong performance without a complicated setup. Its nodes were designed around the class's core identity: exploiting enemy weaknesses, converting excess Accuracy into Critical Strike Chance, and leeching life off elemental attacks. The result is an ascendancy that naturally scales as you gear up, since every point of Accuracy beyond what you need to hit enemies converts directly into offensive power.

The community consensus rates Amazon as the recommended leveling ascendancy for Huntress specifically [(Maxroll.gg Spear Huntress)](https://maxroll.gg). The key insight is that **Predatory Instinct** provides 50% more damage against enemies with an Open Weakness -- a condition you create simply by attacking -- with zero gear requirement. This means Amazon is strong out of the gate from level 1, unlike Spirit Walker which needs its stance nodes allocated to come online, or Ritualist which needs jewelry investment to exceed baseline.

Amazon also supports two distinct playstyles within the same ascendancy. The bleed-focused Rake build exploits Predatory Instinct's weakness mechanic for sustained melee damage, while the ranged Ice Shot or Lightning Spear build uses **Penetrate** (excess Accuracy to Crit Chance) and **Mystic Harvest** (elemental leech) for a completely different combat loop. KaidGames2's Ice Shot Amazon in 0.5 is framed as one of the most fun and highest-damage bow setups available this league [(Exile Codex-Wiki: Ice Shot Amazon)](https://exile.codex-wiki.com/builds/infinite-dps-ice-shot-amazon-build-in-0-5-poe-2-huntress). Hussar's CI Lightning Arrow Amazon pushes into deep endgame with 300+ Divine investment [(PoE Forum: Hussar Amazon)](https://www.pathofexile.com/forum/view-thread/3875994).

The trade-off is that Amazon is purely offensive. None of its ascendancy nodes provide defensive value -- you must source your survivability entirely from gear and the passive tree. Spirit Walker outperforms Amazon specifically for Twister scaling, since Amazon's nodes were not designed around that skill. But for a first Huntress character that works on minimal gear and scales naturally with investment, Amazon is the clear community-recommended pick.

## Putting It Together

**Acts 1-3 (Offensive Foundation):** Start with Rake for bleed application if going melee, or your chosen spear/bow skill if going ranged. Disengage and Thunderous Leap provide mobility from level 1. Prioritize Bleed and Physical damage clusters, plus Life, on the passive tree. For the ranged variant, focus on Catalysis, Maiming Strike, and Falcon Dive as your early notable picks [(Mobalytics: Lightning Spear Amazon)](https://mobalytics.gg/poe-2/profile/e419faaf-bedd-4a1d-8f46-c3111d8e6909/builds/7d01c1cc-a076-4763-b8ba-c4fffa03ec7e). Your defenses at this stage are evasion and dodge-rolling -- Amazon gives you nothing passive.

**Acts 4-6 (Build Differentiation):** Add Herald of Blood for bleed-triggered explosions (melee variant) or Herald of Ice for shatter chains (ranged variant). Wind Dancer comes online as a significant evasion buff. Allocate your second ascendancy points -- Penetrate for the accuracy-into-crit conversion is the core power spike for ranged builds. For the Ice Shot variant, begin working toward the multi-step boss rotation [(Exile Codex-Wiki: Ice Shot Amazon)](https://exile.codex-wiki.com/builds/infinite-dps-ice-shot-amazon-build-in-0-5-poe-2-huntress).

**Mapping and Beyond (Full Build):** The complete build depends on your chosen variant. Bleed Amazon runs full Rake + Herald of Blood + Wind Dancer with Maim and Blind supports. Ice Shot Amazon runs Ice Shot + Herald of Ice + Snipe with the multi-step boss rotation. Lightning Spear Amazon runs Lightning Spear for clear and Storm Lance for single target. All variants target 75% elemental resistances and sufficient evasion (25k+ before considering Acrobatics keystone) [(Mobalytics: Lightning Spear Amazon)](https://mobalytics.gg/poe-2/profile/e419faaf-bedd-4a1d-8f46-c3111d8e6909/builds/7d01c1cc-a076-4763-b8ba-c4fffa03ec7e).

## Key Mechanics and Interactions

**Predatory Instinct and Open Weakness:** The first ascendancy pick reveals weaknesses on enemies you attack. Once a weakness is Open, you deal 50% more damage against that target. This is not conditional on gear -- it works from the moment you allocate the node. For bleed builds, the interaction is particularly strong because Rake applies bleed rapidly, keeping weaknesses open on multiple targets simultaneously.

**Penetrate and Accuracy-to-Crit Conversion:** Excess Accuracy Rating beyond what is needed to hit enemies converts into Critical Strike Chance. This is Amazon's core scaling mechanism for ranged builds. The more Accuracy you stack (on gear, tree, and from Precision aura), the more free crit chance you receive. This means rare-item shopping is simpler than crit-dependent builds -- you are looking for Accuracy mods that serve double duty [(Maxroll.gg Spear Huntress)](https://maxroll.gg).

**Elemental Surge and Infusion Consumption:** Creates a high-damage elemental explosion when a projectile attack reaches the end of its flight, consuming stored Infusion. This is most relevant for ranged Amazon builds that generate Infusion through combat. The explosion damage scales with your elemental damage investment and is effective for pack clear.

**Mystic Harvest and Elemental Leech:** Converts a portion of elemental damage dealt into life recovery. For energy-shield-based Amazon builds (like Hussar's CI variant), this becomes ES leech through Essentia Sanguis, providing a powerful sustain layer [(PoE Forum: Hussar Amazon)](https://www.pathofexile.com/forum/view-thread/3875994). The key is that this only works on elemental damage -- pure physical builds get no benefit.

**Stalking Panther and Gear Effectiveness:** Increases the effectiveness of Helmet, Gloves, and Boots. This is a subtle but meaningful scaling node that amplifies the mods on three gear slots simultaneously. For evasion-based builds with high-quality evasion gear, the amplification is substantial.

## Gear Progression

**Early Game (Acts 1-3):** Your spear (or bow) is the single most important item. For melee, prioritize physical damage and attack speed. For ranged, look for a high DPS base with accuracy and flat elemental damage. Upgrade your weapon at least once per act. Boots with movement speed are your next priority. Resistances should be maintained at 30%+ for Fire and Lightning during the campaign. No specific uniques are required.

**Mid Game (Acts 4-Interlude):** For ranged builds, accuracy becomes increasingly important as it converts to crit via Penetrate. Seek accuracy rolls on rings and amulet. For the Ice Shot variant, a bow with high physical base, accuracy, crit chance, and flat cold damage is the target. Gloves with +projectile skills and attack speed are valuable. Body armour should provide evasion and life. Start building toward sufficient Spirit for Herald and Wind Dancer reservations.

**Late Game (Mapping+):** The Ice Shot Amazon wants a Kadira's Gambit quiver for mapping screen coverage, or a Visceral Quiver for pinnacle bossing. Gloves that immobilize enemies at 50% buildup make boss freezes far faster. For the CI Lightning Arrow variant, an Abyssal-crafted amulet with +3 Projectile Skills and ES scaling is the chase item [(PoE Forum: Hussar Amazon)](https://www.pathofexile.com/forum/view-thread/3875994). Headhunter is a strong but optional mapping luxury. For the bleed variant, flat physical and bleed magnitude on every slot is the priority.

## Ascendancy Node Breakdown

**Predatory Instinct (Pick 1):** The first pick for any Amazon build. 50% more damage against enemies with Open Weakness is enormous for a first ascendancy node. Take it immediately -- it carries your early damage.

**Penetrate (Pick 2-3):** Converts excess Accuracy into Crit Chance. This is where ranged Amazon builds get their crit scaling. Take it second or third alongside the Critical Strike node. It compounds with investment rather than plateauing.

**Elemental Infusion (Pick 3-4):** Grants Elemental Infusion when consuming frenzy charges, providing Blind and Exposure. Becomes important in T15+ maps. Take it after your core offensive nodes are allocated.

**Stalking Panther (Pick 4-5):** Amplifies Helmet, Gloves, and Boots effectiveness. The value scales with gear quality. Take it once you have strong pieces in those slots, not before.

**Mystic Harvest (Pick 5+):** Elemental leech for life or ES recovery. Essential for sustain in prolonged fights. Take it once your damage is high enough that leech provides meaningful recovery per hit.

## Common Mistakes and Pitfalls

**Expecting Amazon to provide defense.** Amazon is purely offensive by design. Every defensive layer must come from gear and passive tree -- evasion, armour, life, dodge, or ES. Planning your defenses separately from your ascendancy is mandatory, not optional.

**Over-stacking Accuracy without Penetrate allocated.** Accuracy only converts to crit through the Penetrate node. Stacking massive accuracy before taking Penetrate wastes gear budget. Allocate Penetrate first, then invest in accuracy.

**Ignoring the boss rotation for Ice Shot variant.** Ice Shot Amazon's boss damage comes from a deliberate setup: Thunderstorm for shock, Freezing Mark, Freezing Salvo, Barrage, then Snipe. Trying to just spam Ice Shot at bosses will feel terrible [(Exile Codex-Wiki: Ice Shot Amazon)](https://exile.codex-wiki.com/builds/infinite-dps-ice-shot-amazon-build-in-0-5-poe-2-huntress).

**Taking Acrobatics too early.** The Acrobatics keystone is powerful but reduces your total evasion. Do not take it until you reach 25k evasion -- before that, the evasion reduction makes you squishier [(Mobalytics: Lightning Spear Amazon)](https://mobalytics.gg/poe-2/profile/e419faaf-bedd-4a1d-8f46-c3111d8e6909/builds/7d01c1cc-a076-4763-b8ba-c4fffa03ec7e).

## Mapping and Endgame Tips

**Clear Speed:** Ranged Amazon builds are among the fastest mappers in the game. Ice Shot + Herald of Ice creates chain shatter explosions that clear screens with minimal button presses. Lightning Spear Amazon clears maps with effectively one button. Melee bleed Amazon is slower but more tanky in sustained combat.

**Boss Performance:** The Ice Shot Amazon has massive single-target burst through its multi-step rotation. Lightning Spear Amazon uses Storm Lance for bossing. Bleed Amazon relies on Herald of Blood explosions from bleed kills. All variants are viable for pinnacle bosses with appropriate investment.

**Defensive Strategy:** Since Amazon provides no ascendancy defense, your survival depends on: (1) high evasion chance to avoid hits entirely, (2) deflection for additional mitigation, (3) leech (Mystic Harvest) for sustain, and (4) mobility skills to reposition out of danger. The Ice Shot variant adds freeze as a crowd-control defensive layer.

**Content to Watch Out For:** Freeze-immune map mods significantly reduce Ice Shot Amazon's defensive layer and clear speed. High-ailment-threshold bosses require the full setup rotation rather than relying on natural freeze. Simulacrum waves with dense, fast-moving packs can overwhelm evasion-based defense.
