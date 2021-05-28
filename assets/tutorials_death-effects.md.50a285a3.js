import{o as n,c as a,d as s}from"./app.6f1fd51d.js";const t='{"title":"Death Effects","description":"","frontmatter":{"layout":"page","title":"Death Effects","parent":"Tutorials"},"headers":[{"level":2,"title":"Using query.is_alive","slug":"using-query-is-alive"},{"level":2,"title":"Use on player entities","slug":"use-on-player-entities"},{"level":2,"title":"Wait, but how do Animation Controllers work?","slug":"wait-but-how-do-animation-controllers-work"}],"relativePath":"tutorials/death-effects.md","lastUpdated":1622221463826}',o={},e=s('<h1 id="death-effects"><a class="header-anchor" href="#death-effects" aria-hidden="true">#</a> Death Effects</h1><p>Intermediate {: .label .label-yellow }</p><p>I define <code>Death Effects</code> as &quot;Doing something when an Entity dies&quot;. There are a few wrong ways to achieve this that should be avoided, including:</p><ul><li>Detecting death in the entity file, adding a component, and <em>then</em> trying to detect that component in the animation controller. This is wrong because the entity will be removed from the world before the animation controller has a chance to run.</li><li>Detecting the entity death from an outside source, such as a ticking command block. This method isn&#39;t <em>strictly</em> wrong, and in some circumstances, it may even be preferred. However it is costly and easy to break.</li></ul><h2 id="using-query-is-alive"><a class="header-anchor" href="#using-query-is-alive" aria-hidden="true">#</a> Using query.is_alive</h2><p>The best way to create death effects is by using the <code>is_alive</code> query.</p><p>Simply create an animation controller with a transition based on <code>is_alive</code>. The final <code>on_entry</code> will run before the entity is removed from the world, allowing you to run your commands.</p><p>Here is a sample animation controller:</p><p>{% include filepath.html path=&quot;BP/animation_controllers/death.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span>\n                            <span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token string">&quot;/say I am dead!&quot;</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="use-on-player-entities"><a class="header-anchor" href="#use-on-player-entities" aria-hidden="true">#</a> Use on player entities</h2><p>In the case of player entities, an additional transition must be added to the second animation state in order to ensure the state resets between deaths:</p><p>{% include filepath.html path=&quot;BP/animation_controllers/death.json&quot;%}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span>\n                            <span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;dead&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token string">&quot;/say I am dead!&quot;</span>\n                    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span>\n                            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive&quot;</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="wait-but-how-do-animation-controllers-work"><a class="header-anchor" href="#wait-but-how-do-animation-controllers-work" aria-hidden="true">#</a> Wait, but how do Animation Controllers work?</h2><p><a href="https://wiki.bedrock.dev/concepts/animation-controllers" target="_blank" rel="noopener noreferrer">Learn about ACs here!</a></p>',16);o.render=function(s,t,o,p,r,i){return n(),a("div",null,[e])};export default o;export{t as __pageData};
