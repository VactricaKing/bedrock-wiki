import{o as a,c as n,d as s}from"./app.6f1fd51d.js";const t='{"title":"Disabling Particles","description":"","frontmatter":{"layout":"page","title":"Disabling Particles","parent":"Tutorials"},"relativePath":"tutorials/disabling-particles.md","lastUpdated":1622221463826}',p={},o=s('<h1 id="disabling-particles"><a class="header-anchor" href="#disabling-particles" aria-hidden="true">#</a> Disabling Particles</h1><p>Beginner {: .label .label-green }</p><p>In the event that you want to disable a particle, it is recommended to do so from the particle file itself as opposed to simply making the particle texture transparent in <code>particles.png</code>. Additionally, disabling a particle might offer a slight performance boost compared to making it transparent, as transparent particles are still emitted (but not visible).</p><p>The basic idea of disabling a particle from emitting is as follows:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;particle_effect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:some_vanilla_particle&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;basic_render_parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;particles_alpha&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/particle/particles&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;minecraft:emitter_lifetime_expression&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;activation_expression&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;expiration_expression&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;minecraft:emitter_rate_manual&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;max_particles&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',5);p.render=function(s,t,p,e,r,i){return a(),n("div",null,[o])};export default p;export{t as __pageData};
