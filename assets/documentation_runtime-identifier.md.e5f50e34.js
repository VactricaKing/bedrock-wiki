import{o as e,c as t,d as i}from"./app.6f1fd51d.js";const a='{"title":"Runtime Identifiers","description":"","frontmatter":{"layout":"page","title":"Runtime Identifiers","parent":"Documentation"},"headers":[{"level":2,"title":"minecraft:shulker","slug":"minecraft-shulker"},{"level":2,"title":"minecraft:ender_crystal","slug":"minecraft-ender-crystal"},{"level":2,"title":"minecraft:parrot","slug":"minecraft-parrot"},{"level":2,"title":"minecraft:armor_stand","slug":"minecraft-armor-stand"},{"level":2,"title":"minecraft:iron_golem","slug":"minecraft-iron-golem"},{"level":2,"title":"minecraft:arrow","slug":"minecraft-arrow"},{"level":2,"title":"minecraft:thrown_trident","slug":"minecraft-thrown-trident"},{"level":2,"title":"minecraft:piglin","slug":"minecraft-piglin"},{"level":2,"title":"minecraft:spider","slug":"minecraft-spider"},{"level":2,"title":"minecraft:minecart","slug":"minecraft-minecart"},{"level":2,"title":"minecraft:boat","slug":"minecraft-boat"},{"level":2,"title":"minecraft:sheep","slug":"minecraft-sheep"},{"level":2,"title":"minecraft:panda","slug":"minecraft-panda"},{"level":2,"title":"minecraft:witherskulldangerous","slug":"minecraft-wither-skull-dangerous"},{"level":2,"title":"minecraft:zombie","slug":"minecraft-zombie"},{"level":2,"title":"minecraft:skeleton","slug":"minecraft-skeleton"}],"relativePath":"documentation/runtime-identifier.md","lastUpdated":1622221463670}',n={},r=i('<h1 id="runtime-identifiers"><a class="header-anchor" href="#runtime-identifiers" aria-hidden="true">#</a> Runtime Identifiers</h1><p><code>runtime_identifier</code> is an optional parameter that sits inside the description of the entity&#39;s behavior file, and is used to imitate a vanilla entity&#39;s hard-coded elements. It accepts Vanilla Minecraft identifiers, like <code>minecraft:shulker</code>.</p><div class="language-json"><pre><code><span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assassin:my_box&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;runtime_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:shulker&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>It&#39;s important to remember that <code>runtime_identifier</code> will only parse the hard-coded properties of an entity. This means that using a 100% datadriven mob as the Runtime Identifier will not add any new properties to your entity. Additionally, some entity runtimes may overwrite properties found in datadriven components even if they are added in the components section, such as the collision box size for the shulker entity.</p><h1 id="known-runtime-identifier-effects"><a class="header-anchor" href="#known-runtime-identifier-effects" aria-hidden="true">#</a> Known runtime-identifier effects:</h1><hr><h2 id="minecraft-shulker"><a class="header-anchor" href="#minecraft-shulker" aria-hidden="true">#</a> minecraft:shulker</h2><p>Perfect for imitating a block, as long as the player is in Adventure Mode.</p><ul><li>A solid collision box of 1x1x1.</li><li>The entity will stick to the center of the block it&#39;s spawned in.</li><li>If the block it&#39;s attached to is removed, the entity will teleport to another unobstructed location nearby.</li><li>If the entity is spawned on a non-full block (e.g. bed, slab, etc...), it will teleport to another unobstructed location nearby.</li><li>The solid collision box&#39;s width and height cannot be changed.</li></ul><hr><h2 id="minecraft-ender-crystal"><a class="header-anchor" href="#minecraft-ender-crystal" aria-hidden="true">#</a> minecraft:ender_crystal</h2><ul><li>The entity will stick to the center of the block it&#39;s spawned in.</li><li>Unless teleported, the entity will always maintain its positions.</li><li>Can be placed on any surface</li><li>Will always be pushable through by other entities.</li><li>Cannot be configured to receive damage.</li><li>Cannot change the direction it faces.</li></ul><hr><h2 id="minecraft-parrot"><a class="header-anchor" href="#minecraft-parrot" aria-hidden="true">#</a> minecraft:parrot</h2><ul><li>makes the wing flap animation able to work.</li><li>makes the mob fall slowly.</li><li>makes it dance to music discs.</li></ul><hr><h2 id="minecraft-armor-stand"><a class="header-anchor" href="#minecraft-armor-stand" aria-hidden="true">#</a> minecraft:armor_stand</h2><ul><li>Disables entity shadows</li><li>Punching the entity will cause it to instantly despawn</li><li>Equipment placeable on/removable from entity</li></ul><hr><h2 id="minecraft-iron-golem"><a class="header-anchor" href="#minecraft-iron-golem" aria-hidden="true">#</a> minecraft:iron_golem</h2><ul><li>Allows launching attack (attacks deal increased knockback with a vertical amplification)</li><li>Speeds up arm and leg animation (can be fixed manually, ~1/4 speed)</li><li>May interact poorly with village/villager logic.</li></ul><hr><h2 id="minecraft-arrow"><a class="header-anchor" href="#minecraft-arrow" aria-hidden="true">#</a> minecraft:arrow</h2><ul><li>Disables death animation, sound, and particles</li><li>Makes entity&#39;s shadow small, but it doesn&#39;t make it disappear</li><li>Cannot be interacted with</li><li>If spawned through an egg or /summon command, gives the player an arrow when the player comes into contact with the entity, then removes itself</li></ul><hr><h2 id="minecraft-thrown-trident"><a class="header-anchor" href="#minecraft-thrown-trident" aria-hidden="true">#</a> minecraft:thrown_trident</h2><ul><li>Disables death animation, sound, and particles</li><li>Makes entity&#39;s shadow small, but it doesn&#39;t make it disappear</li><li>Cannot be interacted with</li></ul><p>--</p><h2 id="minecraft-piglin"><a class="header-anchor" href="#minecraft-piglin" aria-hidden="true">#</a> minecraft:piglin</h2><ul><li>Allows <code>minecraft:celebrate_hunt</code> to function (which activates query.is_celebrating)</li></ul><hr><h2 id="minecraft-spider"><a class="header-anchor" href="#minecraft-spider" aria-hidden="true">#</a> minecraft:spider</h2><ul><li>Allows cobwebs to not slow down entity</li></ul><hr><h2 id="minecraft-minecart"><a class="header-anchor" href="#minecraft-minecart" aria-hidden="true">#</a> minecraft:minecart</h2><ul><li>Disables entity shadow</li><li>Makes the entity drop a minecart on death</li><li>Prevents the entity from rotating</li></ul><hr><h2 id="minecraft-boat"><a class="header-anchor" href="#minecraft-boat" aria-hidden="true">#</a> minecraft:boat</h2><ul><li>Adds the pocket boat UI when ridden</li><li>Prevents the entity from rotating</li></ul><hr><h2 id="minecraft-sheep"><a class="header-anchor" href="#minecraft-sheep" aria-hidden="true">#</a> minecraft:sheep</h2><ul><li>Allows <code>query.is_grazing</code> to function with the <code>behavior.eat_block</code> component</li></ul><hr><h2 id="minecraft-panda"><a class="header-anchor" href="#minecraft-panda" aria-hidden="true">#</a> minecraft:panda</h2><ul><li>Allows <code>query.is_grazing</code> and <code>query.sit_mount</code> to function with the <code>minecraft:behavior.random_sitting</code> component</li></ul><hr><h2 id="minecraft-wither-skull-dangerous"><a class="header-anchor" href="#minecraft-wither-skull-dangerous" aria-hidden="true">#</a> minecraft:wither_skull_dangerous</h2><ul><li>Makes the entity drop a wither rose on death</li><li>Any entity killed by the entity will have a wither rose placed where it dies. Strangely, zombies seem to drop the wither rose instead of having it placed at the spot they die at.</li><li>Makes the entity constantly generate particles(the identifier of the particles it generates is <code>minecraft:basic_smoke_particle</code>)</li><li>Makes the entity unaffected by gravity(this seems to cause entities with <code>minecraft:projectile</code> to move in a straight line)</li><li>Prevents the entity from taking damage</li><li>only works for entities with no ai goals(so it&#39;s only useful for dummy entities and projectiles)</li></ul><hr><h2 id="minecraft-zombie"><a class="header-anchor" href="#minecraft-zombie" aria-hidden="true">#</a> minecraft:zombie</h2><ul><li>Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect</li><li>Makes the entity receive increased damage from weapons with Smite enchantment</li></ul><hr><h2 id="minecraft-skeleton"><a class="header-anchor" href="#minecraft-skeleton" aria-hidden="true">#</a> minecraft:skeleton</h2><ul><li>Makes the entity receive damage from Healing effect, heal from Instant Damage effect and become immune to Regeneration and Poison effect</li><li>Makes the entity receive increased damage from weapons with Smite enchantment</li></ul>',54);n.render=function(i,a,n,l,s,o){return e(),t("div",null,[r])};export default n;export{a as __pageData};
