import{o as n,c as a,e as s,a as e,b as o,d as t}from"./app.6f1fd51d.js";const p='{"title":"Skin Packs","description":"","frontmatter":{"layout":"guide","title":"Skin Packs","parent":"Beginners Guide","nav_order":13,"badge":13,"badge_color":"guide","badge_justification":"left"},"headers":[{"level":2,"title":"Skin pack Manifest","slug":"skin-pack-manifest"},{"level":2,"title":"skins.json","slug":"skins-json"},{"level":2,"title":"texts/en_US.lang","slug":"texts-en-us-lang"},{"level":2,"title":"What you learned","slug":"what-you-learned"}],"relativePath":"guide/custom-skin-packs.md","lastUpdated":1622221463670}',i={},c=e("hr",null,null,-1),l=e("h1",{id:"skin-packs"},[e("a",{class:"header-anchor",href:"#skin-packs","aria-hidden":"true"},"#"),o(" Skin Packs")],-1),r=t('<p>Many people wrongly assume that skin packs are only available for creation to Marketplace Partners. No! It&#39;s a very easy process, which can easily be fully automated by python. But that&#39;s not it: let&#39;s learn the syntax as usual:</p><ul><li>The folder for creating skin packs is <code>com.mojang/skin_packs/SkinpackName</code>. For some unknown reason, <code>com.mojang/development_skin_packs</code> doesn&#39;t seem to function correctly, so you&#39;ll have to reload Minecraft every time between testing. You will not need a <code>pack_icon</code>, but you will need a <code>manifest.json</code> and a <code>skins.json</code>, as well as a <code>.lang</code> file in the <code>texts</code> folder.</li></ul><p><em>Note: On Android, the com.mojang folder is located in <code>Phone&gt;games&gt;com.mojang</code></em></p><h2 id="skin-pack-manifest"><a class="header-anchor" href="#skin-pack-manifest" aria-hidden="true">#</a> Skin pack Manifest</h2><p><code>//skin_packs/TutorialSkinPack/manifest.json</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tutorial Skin Pack&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a2bd7cb4-ac3b-4e03-a337-8d6ca1c3a0df&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token number">0</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;skin_pack&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7bc272b7-b338-40c3-9003-421582127bd0&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token number">1</span><span class="token punctuation">,</span>\n                <span class="token number">0</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li><code>format_version</code> can be 1 in this scenario, as v2 didn&#39;t change much for skin packs.</li><li><code>name</code> is self explanatory. however, it isn&#39;t of gret importance.</li><li><code>uuid</code> and <code>version</code> are already familiar to us. Both UUIDs in the manifest need to be different. You can generate them via a generator linked in Links and Contact. As a reminder, you CANNOT use the same UUID TWICE.</li><li><code>type</code> in <code>modules</code> needs to be set to <code>skin_pack</code>, of course.</li></ul><h2 id="skins-json"><a class="header-anchor" href="#skins-json" aria-hidden="true">#</a> skins.json</h2><p>is used to define the skin texture files. Most of the options are, however, hard-coded/unchangeable. The skin <code>.png</code> or other image files are located in the same folder as <code>manifest.json</code> and <code>skins.json</code>, which is <code>skin_packs/TutorialSkinpack</code> in this scenario. My example skin files are named <code>Niika.png</code> and <code>Senn_skin.png</code> <s>guess where I took the names from</s>.</p><p><code>//skin_packs//TutorialSkinPack/skins.json</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;skinpacks/skins.json&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;skins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;localization_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NIIKA&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.humanoid.custom&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Niika.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;free&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;localization_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SENN&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geometry.humanoid.custom&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Senn_skin.png&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;free&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;serialize_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TutorialSkinPack&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;localization_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TutorialSkinPack&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>The <code>geometry</code> object must be the same as on the example code in every object. Mojang revoked the ability to add custom geometries via skin packs, because the feature was abused.</li><li><code>skins</code> array is where the object for every skin of yours are in. The skins will be displayed in the same order in minecraft as they are defined here.</li></ul><p>In this example, I defined two skins. it is possible to define any number.</p><ul><li><code>localization_name</code> is going to be used in the .lang file. Think of it as the skins identifier.</li><li><code>texture</code> is the name of the image file, located int eh main skin pack folder.</li><li><code>type</code> is only accessible to marketplace partners, so leave it as <code>free</code></li><li><code>serialize_name</code> is for marketplace.</li><li><code>localization_name</code> is the packs identifier, to be called in <code>.lang</code>.</li></ul><h2 id="texts-en-us-lang"><a class="header-anchor" href="#texts-en-us-lang" aria-hidden="true">#</a> texts/en_US.lang</h2><p>Finally, we&#39;ll define the names of the skin pack and every skin in the <code>.lang</code> file in <code>skin_packs/Skinpackname/texts/en_US.lang</code>. Of course &quot;en_US&quot; can be replaced with any language.</p><div class="language-"><pre><code>skinpack.TutorialSkinPack=guide.bedrock.dev Tutorial skin pack\n\nskin.TutorialSkinPack.NIIKA=Niika\nskin.TutorialSkinPack.SENN=SENN\n</code></pre></div><p>The first line defines the pack&#39;s name itself. It&#39;s done in this format:</p><p><code>skinpack.pack localization_name=ActualCustomName</code></p><p>The other lines define the skins&#39; names:</p><p><code>skin.skin localization_name=ActualSkinName</code></p><p>Done! Now, when you open Character Creator, you&#39;ll see your skins available to be chosen! These skins aren&#39;t affected by the &quot;custom skins switching in multiplayer&quot; v1.14 bug.</p><p>Exporting the pack is easy: simply zip everything in the SkinpackName folder and change the <code>.zip</code> extension to <code>.mcpack</code>.</p><p><em>Note: Skin packs can be instantly generated from a folder with skins with <a href="https://kaifireborn.itch.io/addon-json-generator" target="_blank" rel="noopener noreferrer">AJG</a>.</em></p><hr><hr><h2 id="what-you-learned"><a class="header-anchor" href="#what-you-learned" aria-hidden="true">#</a> What you learned</h2><ul><li>Creating a custom Skin Pack and exporting it</li><li>Defining skin and skinpack names in <code>.lang</code></li></ul>',28);i.render=function(e,o,t,p,i,u){return n(),a("div",null,[c,l,s(" - [Skin pack Manifest](#Skin pack Manifest)\n- [skins.json](#skins.json)\n- [texts/en_US.lang](#texts/en_US.lang)\n- [What you learned](#What you learned:) "),r])};export default i;export{p as __pageData};
