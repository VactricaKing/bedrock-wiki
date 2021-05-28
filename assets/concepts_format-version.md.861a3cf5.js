import{o as n,c as s,d as a}from"./app.6f1fd51d.js";const t='{"title":"Format Versions","description":"","frontmatter":{"layout":"page","title":"Format Versions","parent":"Concepts"},"relativePath":"concepts/format-version.md","lastUpdated":1622221463662}',o={},e=a('<h1 id="format-versions"><a class="header-anchor" href="#format-versions" aria-hidden="true">#</a> Format Versions</h1><p>Most Addon files contain a <code>format_version</code> field, often in the description. Here is an example:</p><p>{% include filepath.html path=&quot;BP/entities/dragon.json&quot; %}</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:dragon&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Format versions exist so that Mojang can add new functionality into the Addon system without breaking old addons. In the example above, the format version is <code>1.13.0</code>. This means that the entity will be processed using the <code>1.13.0</code> entity mechanics.</p><p>When you pick a format version to use, you are tying that file <em>to</em> a specific version. You cannot use new components or functionality</p>',6);o.render=function(a,t,o,p,r,i){return n(),s("div",null,[e])};export default o;export{t as __pageData};
