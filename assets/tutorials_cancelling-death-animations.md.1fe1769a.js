import{o as n,c as a,d as s}from"./app.6f1fd51d.js";const t='{"title":"Cancelling Death Animations","description":"","frontmatter":{"layout":"page","title":"Cancelling Death Animations","parent":"Tutorials"},"relativePath":"tutorials/cancelling-death-animations.md","lastUpdated":1622221463826}',o={},p=s('<h1 id="cancelling-death-animations"><a class="header-anchor" href="#cancelling-death-animations" aria-hidden="true">#</a> Cancelling Death Animations</h1><p>Intermediate {: .label .label-yellow }</p><p>Death animation refers to the rotation of the entity as it dies. This is accompanied by a red coloring, and followed shortly after by the disappearance of the entity geometry, and the appearance of the death particles.</p><h1 id="teleporting-the-entity"><a class="header-anchor" href="#teleporting-the-entity" aria-hidden="true">#</a> Teleporting the Entity</h1><p>A fairly common way to remove entities without causing death-effects, is to simply teleport them into the void. This can be done from animation controllers like: <code>/teleport @s ~ ~-1000 ~</code></p><p>Please note that this will remove all death-effects, including sound, particles, loot, and the visual death of the entity.</p><h1 id="transforming-the-entity"><a class="header-anchor" href="#transforming-the-entity" aria-hidden="true">#</a> Transforming the Entity</h1><p>Similar to teleporting the entity is triggering an entity transform on death. Query is_alive and transform the entity to another entity if is_alive == false. The new entity can have the despawn component with no filter, causing the entity to immediately despawn on creation.</p><p>Plesea note that this will remove all death-effects, including sound, particles, loot, and the visual death of the entity.</p><h1 id="cancelling-the-animation"><a class="header-anchor" href="#cancelling-the-animation" aria-hidden="true">#</a> Cancelling the Animation</h1><p>We can also cancel the rotational value of the entity, allowing the entity to die more conventionally (particles, red-coloring, loot) without the 90 degree spin. This could be useful for things like furniture, where the tipping over effect of entity-death is not desirable.</p><p>If you need more information about triggering animations from entity death, <a href="/tutorials/death-effects.html">see this document on death effects</a>.</p><p>Rotation needs to be applied to a bone parent to all other bones, with a pivot at [0,0,0], and the animation should only start when <code>!query.is_alive</code>.</p><p>Animation:</p><div class="language-json"><pre><code><span class="token property">&quot;rotation&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Math.min(Math.sqrt(Math.max(0, query.anim_time * 20 - 0.5) / 20 * 1.6), 1) * -90&quot;</span> <span class="token punctuation">]</span>\n</code></pre></div><p>Animation Controller: (query.all_animations_finished is only needed for respawning entities, like players)</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;controller.animation.player.cancel_death_animaton&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token property">&quot;cancel_animation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive&quot;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;cancel_animation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          \t<span class="token string">&quot;my.animation&quot;</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive &amp;&amp; query.all_animations_finished&quot;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h1 id="changing-damage-color-overlay"><a class="header-anchor" href="#changing-damage-color-overlay" aria-hidden="true">#</a> Changing Damage Color Overlay</h1><p>You can also cancel the death animation of any entity by removing their damage color overlay.</p><p>Before starting you must have the basics of render controller so check out the <a href="/concepts/render-controller.html">tutorial</a> of render controller.</p><p>To remove the damage overlay color of any entity you want when it gets damage we will use <code>is_hurt_color</code> and to remove damage overlay color when an entity gets damage due to lava and fire we will use <code>on_fire _color</code>. First you need to make the rgba values to 0 Here&#39;s the example on removing the damage and fire overlay color.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;controller.render.sample&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Texture.default&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;is_hurt_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;on_fire_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>The code above will remove the red damage overlay color.</p><p>You can also change the damage color overlay to different colors just by putting different values in rgba.You can check out different websites to get the rgba values of all colors. Here&#39;s another example in which the damage color overlay becomes pink.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;render_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;controller.render.kbg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Geometry.default&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material.default&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Texture.default&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n             <span class="token property">&quot;is_hurt_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.4&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.5&quot;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;on_fire_color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;r&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;g&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.4&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.5&quot;</span>\n          <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre></div><h1 id="using-damage-sensor-to-trigger-instant-despawn-and-one-item-drop"><a class="header-anchor" href="#using-damage-sensor-to-trigger-instant-despawn-and-one-item-drop" aria-hidden="true">#</a> Using Damage Sensor to Trigger Instant Despawn and One Item Drop</h1><p>You can use the damage_sensor component to trigger an event upon fatal damage; this event adds a special despawning component group containing the spawn_entity and instant_despawn components. Spawn_entity with 0 wait time will drop an item just before the entity is despawned. For simple entities like furniture, which only need one item, this is very convenient.</p><p>Please note that you will have to find another work to drop multiple loot or for entities with inventory. You should also ensure that the despawn component group is not added when the entity is spawned using the entity_spawned event.</p><p>Heres an example file in the BP</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.14.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;min_engine_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example:entity&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;beluga:despawn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;minecraft:spawn_entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;max_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;min_wait_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;spawn_item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;egg&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;single_use&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;minecraft:instant_despawn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;minecraft:type_family&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;family&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;cart&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;inanimate&quot;</span> <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;minecraft:collision_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;minecraft:health&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">8</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;minecraft:physics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;minecraft:pushable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;is_pushable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;is_pushable_by_piston&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_damage&quot;</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fatal&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;beluga:despawn&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;beluga:despawn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;beluga:despawn&quot;</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',30);o.render=function(s,t,o,e,r,c){return n(),a("div",null,[p])};export default o;export{t as __pageData};
