---
title: "Witch Lich Curse & Unholy Might Build Guide"
class: "Witch"
ascendancy: "Lich"
coreSkill: "Lightning Warp / Curse Stacking"
patchVersion: "0.5.4b"
updatedAt: 2026-07-09
tier: "S"
playstyle: "endgame"
estCost: "high"
summary: "A dual-identity ascendancy, Unholy Might grants extra Chaos damage to you and nearby allies at a mana cost, while Rupture the Soul turns cursed kills into chaos explosions. Currently one of the strongest endgame Witch options for players willing to invest."
pros:
  - "Unholy Might grants 30% of all damage as extra Chaos, shared with nearby allies, for strong solo and group value"
  - "Rupture the Soul makes clearing feel alive, a chance for cursed enemies killed near you to explode for Chaos damage, chaining through packs"
  - "One of the highest-scaling endgame Witch options currently, particularly for curse-focused variants"
cons:
  - "High investment required to realize its full power, not a budget-friendly league starter"
  - "Curse rotation and stacking rules need real understanding, not just button-mashing"
nodesVerified: true
ascendancyNodes:
  - order: 1
    name: "Unholy Might"
    effect: "Grants 30% of all damage as extra Chaos damage to you and nearby allies, at a Mana cost"
  - order: 2
    name: "Rupture the Soul"
    effect: "33% chance to explode cursed enemies you or allies kill for a quarter of their maximum life as Chaos damage"
skillGems:
  mainSkill:
    gem: "Lightning Warp"
    supports: ["Chaos Penetration", "Controlled Destruction"]
  secondarySkill:
    gem: "Bonestorm"
    supports: ["Spell Totem"]
  spiritSkills:
    - gem: "Clarity"
      supports: []
  utilitySkills:
    - gem: "Frost Bomb"
      supports: []
gearPriority:
  - slot: "Weapon"
    item: "Chaos damage, Cast speed"
    note: "Curse effect"
    priority: "core"
  - slot: "Amulet"
    item: "Curse effect, Chaos damage"
    note: "Mana"
    priority: "recommended"
  - slot: "Ring"
    item: "Undead/minion synergy"
    note: "Chaos resistance"
    priority: "luxury"
passiveTreePriority:
  earlyGame: "Chaos damage, Life/ES, Curse effect nodes"
  midGame: "Mana-efficiency clusters to support Unholy Might's cost"
  endGame: "Full curse-stacking setup with Rupture the Soul for chain-clearing"
levelingGuide:
  act1to3: "Bonestorm via Spell Totem for safe ranged damage while leveling"
  act4to6: "Layer in curse skills and begin building toward Unholy Might's mana efficiency"
  mapping: "Full curse-stacking endgame setup, expect a high investment curve before it fully comes online"
faqs:
  - q: "Lich or Blood Mage?"
    a: "Lich leans curse/chaos debuffs with clear synergy for group play via Unholy Might; Blood Mage converts life into spell resource for a higher solo crit ceiling but more survival risk."
  - q: "Is this a good league starter?"
    a: "Not really, the high investment requirement makes it a better transition target once you have currency, rather than a day-one pick."
dataSources:
  - "ChaosBoost.com New Huntress Class Ascendancies article (Lich comparison section)"
  - "aoeah.com 0.5 builds meta overview"
  - "VULKK.com All Classes and Ascendancies Explained"
  - "Maxroll.gg PoE 2 Class Overview"
relatedMechanics:
  - "runes-of-aldur"
---

## Why This Ascendancy

A dual-identity ascendancy, Unholy Might grants extra Chaos damage to you and nearby allies at a mana cost, while Rupture the Soul turns cursed kills into chaos explosions. Currently one of the strongest endgame Witch options for players willing to invest.

The Lich is the Witch's specialist in **Chaos Damage, Curses, and Energy Shield manipulation**. The ascendancy's power is anchored by two build-defining nodes: **Necromantic Conduit** (which grants Unholy Might — 30% of all damage as extra Chaos — to you and nearby allies at a cost of 5% Maximum Mana per second) and **Rupture the Soul** (33% chance for cursed enemies to explode for 25% of their Maximum Life as Chaos Damage when killed by you or allies in your Presence). Together, these create an ascendancy that excels in both solo and group play. [(VULKK.com Lich Explained)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

The 0.5 patch's nerfs to ES recharge rates affected Lich more than other Witch ascendancies, as Lich relies heavily on Energy Shield as both a defensive layer and a resource (via Eldritch Empowerment). The patch halved ES recharge rate and faster-start nodes, and removed Quick Response entirely. However, the ascendancy's core damage mechanics — Unholy Might and Rupture the Soul — were untouched, keeping it in the S-tier conversation for endgame builds that can afford the investment. [(aoeah.com 0.5 Tier List)](https://www.aoeah.com/news/4539--poe-2-05-tier-list--best-class--league-starter-builds-return-of-the-ancients)

The ascendancy also provides **Crystalline Phylactery**, a unique keystone that lets you socket one non-Unique Basic Jewel with 100% increased effect — but with a punishing drawback: 50% more Mana Cost if you have no Energy Shield. This creates a high-skill, high-reward optimization puzzle that separates experienced Lich players from newcomers.

## Putting It Together

Follow the passive tree priority and leveling guide sections above in order, most of this build's power comes from hitting the right nodes at the right stage rather than rushing everything at once. Cross-check the ascendancy node names against the in-game tree before following this as a precise, click-by-click plan, especially for anything marked as not yet individually verified above.

**Act 1–3 (Campaign Start):** Use Essence Drain + Contagion as your primary leveling setup. This combination provides some of the most beginner-friendly pack clear in the game — apply Essence Drain to a target, then Contagion spreads the DoT to nearby enemies when the initial target dies. Bonestorm via Spell Totem handles bosses. Focus on basic damage nodes like Entropy, Potent Incantation, and Spiral into Mania on the passive tree. [(Mobalytics Ronarray Lich Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**Act 4–6 (Mid-Campaign):** Layer in curse skills (Despair) and begin building toward Unholy Might's mana efficiency. Complete Ascendancy trials — take Soulless Form as your first Ascendancy node for the mana regeneration it provides (6% of Maximum Life per second as Mana regeneration, replacing your inherent mana regeneration). Add Dark Effigy totems for the Withered debuff application. [(Mobalytics Ronarray Lich Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**Early Maps (White/Yellow):** Take Eternal Life as your second Ascendancy node to improve tankiness and synergize with Atziri's Disdain and Heavy Buffer. Then take Eldritch Empowerment for the 30% more spell damage (at the cost of 5% Maximum Energy Shield per non-channeling spell). Target getting your ES recharge delay down to 1 second and recharge rate up to 1,000+. Essence Infusion + Quick Response (or its 0.5 equivalent) are key passives. [(Mobalytics Ronarray Lich Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**Late Maps/Endgame:** Full curse-stacking setup. Crystalline Phylactery should be used when you have a good Jewel with lots of ES and Spell damage — otherwise, swap to Rupture the Soul for significantly improved map clear. The Essence Drain + Contagion → Sigil of Power → Dark Effigy → Despair rotation handles all content. [(Mobalytics Ronarray Lich Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

## Key Mechanics & Interactions

**Necromantic Conduit — Unholy Might:** Unholy Might grants 30% of all damage as extra Chaos damage. This applies to you AND allies in your Presence, making it exceptional for both solo and group play. The cost is 5% of Maximum Mana per second, which creates a constant mana drain. The buff is active while you are NOT on Low Mana (above 35% Maximum Mana), so if your mana drains too fast, you lose the buff entirely. This is why Soulless Form (6% of Maximum Life as mana regeneration per second) is typically taken as the first Ascendancy node. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/) [(poe2dictionary Lich)](https://poe2dictionary.com/ascendancy-class/lich/)

**Rupture the Soul — Chain Clearing:** Cursed enemies you kill have a 33% chance to explode for 25% of their Maximum Life as Chaos Damage. This creates chain reactions in dense maps: kill a cursed enemy → it explodes → the explosion kills nearby enemies → those enemies may also be cursed and explode. With enough curse coverage (especially via Blasphemy), you can walk through packs and watch them chain-explode. Combining a high-range Blasphemy Curse like Despair with anything that passively deals damage creates effortless pack-to-pack clearing. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

**Blackened Heart — Scaling Unholy Might:** Blackened Heart increases the Magnitude of Unholy Might by 4% per 100 Maximum Mana. This is a multiplicative effect: Unholy Might Buff = 30 × (1 + 0.04 × (Maximum Mana / 100)). For Intelligence builds with around 1,000 Mana at endgame, this adds 1.2% per 100 Mana — effectively increasing the base 30% by an additional 40%, for a total of approximately 42% of all damage as extra Chaos. The Eldritch Battery + Everlasting Gaze combo is particularly potent here, converting base Energy Shield to Mana while still retaining ES through Everlasting Gaze. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/) [(ethugamer Lich Guide)](https://ethugamer.com/path-of-exile-2/path-of-exile-2-lich-ascendancy-explained-curse-synergy-energy-shield-build-ideas/)

**Price of Power — Power Charge Consumption:** Spells consume a Power Charge to deal 40% more Damage. As of 0.3.0, this no longer specifies "Non-Channeling Spells," meaning channeled skills like Incinerate, Flameblast, Bonestorm, and Ember Fusilade can now benefit. Bonestorm paired with Pin from Bushwhacker Unique Boots or Bone Cage enables easy Power Charge generation through Combat Frenzy + Resonance. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

**Eldritch Empowerment — ES as Fuel:** Sacrifice 5% of Maximum Energy Shield for 30% more spell damage. Spending ES does not interrupt Recharge. As of 0.3.0, this also works with channeled spells. The key is ensuring you are never on Full Energy Shield (which would cause recharge delay to reset), so you need a way to consistently spend ES. Pairing with Shavronne's Satchel allows Life Flasks to apply to ES, providing recovery without Life restoration. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

**Incessant Cacophony — Infinite Curse Duration:** Your Curses have infinite Duration, but you can apply one fewer Curse. This is powerful with Rupture the Soul — infinite duration means you never need to recast curses on enemies, and you can invest in Area instead of Duration for larger curse coverage. The downside is that Fated End and Impending Doom lose half their effects (no extra duration from Fated End, no increased curse effect from Impending Doom), but the instant-curse trigger from Impending Doom still works. [(poe2dictionary)](https://poe2dictionary.com/ascendancy-class/lich/)

## Gear Progression

**Early Game (Acts 1–3):** No specific unique required. Prioritize Chaos Damage, Spell Damage, and +1 to Witch Skills on wands and sceptres. Energy Shield with life regeneration or flat life on helmets and body armour. Chaos Resistance and Life Regeneration on rings and amulets. A mana flask with "Removes 15% of Mana from Life" provides excellent mana sustain for the Essence Drain + Contagion rotation. [(Mobalytics Ronarray Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**Mid Game (Acts 4–6):** Begin seeking gear with + to Chaos Spell Skills and Cast Speed. A +5 wand with Chaos damage, +3 amulet, +2 focus, and +1 from Assandra's Rune / Dark Entries / Chaos Mastery can push Despair and Essence Drain to level 33 — a significant damage target. [(PoE Forum Chaos Warrior)](https://es.pathofexile.com/forum/view-thread/3766200/page/1)

**Late Game (Mapping+):** The **Oaksworn** shield provides 50% increased Life Regeneration rate, which fuels Zealot's Oath ES recovery. **Prisoner's Manacles** gloves provide valuable utility at the cost of losing freeze capability. For the Phylactery jewel, look for Sapphires with % increased maximum Energy Shield, Life/Mana recovery on kill, and Chaos/Spell damage. **Atziri's Disdain** and **Heavy Buffer** synergize with Eternal Life for tankiness. [(PoE Forum Chaos Warrior)](https://es.pathofexile.com/forum/view-thread/3766200/page/1)

For the Liminal Coil variant, the **Liminal Coil** wand provides the Coiling Bolts skill and enables ignoring the Curse limit while adding 30% extra Chaos and Physical per curse — but disables Curse Effect. This creates a unique playstyle where you stack as many curses as possible for raw damage rather than debuff value. [(Odealo Liminal Coil Build)](https://static.odealo.com/articles/liminal-coil-blood-mage-poe-2-build)

## Ascendancy Node Breakdown

1. **Soulless Form** — 10% of damage taken bypasses ES; no inherent mana regeneration; regenerate Mana equal to 6% of Maximum Life per second. This is typically the first node taken because it provides the mana regeneration needed to sustain Unholy Might's constant drain. The 10% ES bypass is a manageable trade-off. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

2. **Eternal Life** — Defensive node that improves tankiness and synergizes with Atziri's Disdain and Heavy Buffer. Take this second for survival in early maps. [(Mobalytics Ronarray Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

3. **Eldritch Empowerment** — 30% more spell damage for 5% Maximum ES per non-channeling spell; spending ES does not interrupt Recharge. As of 0.3.0, works with channeled spells too. Take this third for the massive damage boost. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

4. **Crystalline Phylactery** — Socket one non-Unique Basic Jewel with 100% increased effect; 50% more Mana Cost if you have no Energy Shield. Take this when you have a strong Jewel. If you don't have one yet, take Rupture the Soul instead for map clear. [(ethugamer)](https://ethugamer.com/path-of-exile-2/path-of-exile-2-lich-ascendancy-explained-curse-synergy-energy-shield-build-ideas/)

5. **Necromantic Conduit** — Unholy Might (30% of all damage as extra Chaos) while not on Low Mana; lose 5% Maximum Mana per second. The core damage node. Must be paired with mana sustain (Soulless Form, gear, flasks) to keep mana above the 35% threshold. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

6. **Rupture the Soul** — 33% chance for cursed enemies to explode for 25% of their Maximum Life as Chaos. The clear-speed multiplier. Essential for mapping, especially combined with Incessant Cacophony for infinite curse duration. [(poe2dictionary)](https://poe2dictionary.com/ascendancy-class/lich/)

7. **Incessant Cacophony** — Infinite curse duration; one fewer Curse. The trade-off is clear: you lose a curse slot but never need to recast. Best taken when your curse setup is finalized and you can afford to drop one curse.

8. **Price of Power** — Spells consume a Power Charge for 40% more damage. Strong with Power Charge generation builds. Works with channeled spells as of 0.3.0. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

**Recommended allocation order (ED+Contagion):** Soulless Form → Eternal Life → Eldritch Empowerment → Crystalline Phylactery (or Rupture the Soul if no good Jewel). This prioritizes mana sustain, then survival, then damage.

## Common Mistakes & Pitfalls

- **Taking Necromantic Conduit without mana sustain.** The 5% Maximum Mana per second drain will push you into Low Mana within seconds, deactivating Unholy Might entirely. You need Soulless Form, mana flasks, or significant mana regeneration investment before this node provides consistent value.

- **Building Lich as a league starter.** The ascendancy requires significant investment in ES gear, curse effect gear, and mana sustain before it comes online. It is a better transition target once you have currency from a cheaper league starter. Use Essence Drain + Contagion on a different Ascendancy (or a basic Witch) for your initial campaign run.

- **Ignoring the ES recharge nerfs in 0.5.** The 0.5 patch halved ES recharge rate and removed Quick Response. Lich builds that relied on fast ES recharge for sustain must adapt — invest in alternative recovery methods like Zealot's Oath + Life Regeneration, Convalescence, or Shavronne's Satchel for flask-based ES recovery. [(aoeah.com)](https://www.aoeah.com/news/4539--poe-2-05-tier-list--best-class--league-starter-builds-return-of-the-ancients)

- **Forgetting that Rupture the Soul explosions chain.** The 33% explosion chance applies to each cursed enemy individually. When one enemy explodes and kills nearby cursed enemies, those enemies also have a 33% chance to explode. In dense maps, this can create massive chain reactions — but you need enough curse coverage for the chain to propagate. Blasphemy-curse builds are the most reliable way to maintain this coverage.

- **Taking Incessant Cacophony without adjusting curse setup.** Infinite duration is powerful, but losing a curse slot is a real cost. If your build relies on applying 3+ curses, Incessant Cacophony may hurt more than it helps. Evaluate whether the convenience of infinite duration outweighs the lost curse slot.

## Mapping & Endgame Tips

**Map Clearing (ED+Contagion Lich):** The rotation is straightforward: Contagion → Essence Drain → watch packs melt. For tankier rares and mechanics (Abyss, Ritual), place Dark Effigy ×2 → Despair → ED + Contagion → repeat when effects expire. The mana flask with "Removes 15% of Mana from Life" provides excellent sustain during mapping. Convalescence regenerates ES for additional survivability. [(Mobalytics Ronarray Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**Map Clearing (Rupture the Soul Variant):** Use a high-range Blasphemy Curse (Despair is ideal) and walk through packs. Cursed enemies explode on death, creating chain reactions. For maximum clear speed, combine with Incessant Cacophony so curses never expire, allowing you to focus entirely on movement and occasional damage casts. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)

**Bossing:** Sigil of Power → Dark Effigy ×2 → Despair → ED + Contagion → repeat. The beauty of this rotation is that you can run around while bosses lose health from the DoT — the uptime is very high. For pinnacle bosses, ensure you have Withered debuff stacked (from Withering Presence or Dark Effigy) for maximum damage. [(Mobalytics Ronarray Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**ES Management Post-0.5:** With ES recharge nerfed, prioritize alternative recovery: Zealot's Oath converts Life Regeneration to ES Regeneration, Convalescence provides active ES recovery, and Shavronne's Satchel allows Life Flasks to heal ES. Getting ES recharge delay to 1 second and recharge rate to 1,000+ remains a target but requires more passive tree investment than before. [(Mobalytics Ronarray Guide)](https://mobalytics.gg/poe-2/builds/ronarray-minion-lich)

**Group Play:** Unholy Might applies to allies in your Presence, making Lich an exceptional group supporter. In party play, your 30% extra Chaos damage buff applies to everyone nearby, while your curses debuff enemies for the entire group. This dual contribution — offensive buff + defensive debuff — makes Lich one of the most valued Witch ascendancies in coordinated groups. [(VULKK.com)](https://vulkk.com/2025/03/29/path-of-exile-2-lich-witch-ascendancy-explained/)
