import{o as e,c as n,a,b as t}from"./app.6f1fd51d.js";const l='{"title":"Shaders","description":"","frontmatter":{"layout":"page","title":"Shaders","parent":"Concepts"},"headers":[{"level":2,"title":"Disclaimer","slug":"disclaimer"},{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Materials","slug":"materials"},{"level":3,"title":"Common material definition fields","slug":"common-material-definition-fields"},{"level":2,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"Shader doesn’t change","slug":"shader-doesn’t-change"},{"level":3,"title":"Compilation error","slug":"compilation-error"},{"level":3,"title":"Couldn’t find constant buffer named: $Globals","slug":"couldn’t-find-constant-buffer-named-globals"},{"level":2,"title":"Tips and tricks","slug":"tips-and-tricks"},{"level":3,"title":"Passing variables to shader","slug":"passing-variables-to-shader"},{"level":3,"title":"Using time in shader","slug":"using-time-in-shader"},{"level":3,"title":"Camera direction towards the entity","slug":"camera-direction-towards-the-entity"},{"level":3,"title":"Debugging values","slug":"debugging-values"}],"relativePath":"concepts/shaders.md","lastUpdated":1622221463662}',s={},r=a("h1",{id:"shaders"},[a("a",{class:"header-anchor",href:"#shaders","aria-hidden":"true"},"#"),t(" Shaders")],-1),o=a("h2",{id:"disclaimer"},[a("a",{class:"header-anchor",href:"#disclaimer","aria-hidden":"true"},"#"),t(" Disclaimer")],-1),i=a("p",null,"The way to create shaders described in this page is not working on consoles (PS4, Xbox, Switch) and in new rendering engine (renderdragon, which is in the newest Windows version beta).",-1),d=a("h2",{id:"overview"},[a("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),u=a("p",null,[t("Shaders are divided into 2 folders: glsl and hlsl. For shaders to work on every device, you need to code shaders in both languages. For testing on Windows, hlsl is enough. When rewriting shaders from one language to another, there are few things to change, like HLSL "),a("code",null,"float3"),t(" is "),a("code",null,"vec3"),t(" in GLSL. "),a("a",{href:"https://anteru.net/blog/2016/mapping-between-HLSL-and-GLSL/",target:"_blank",rel:"noopener noreferrer"},"Mapping between those languages can be found here")],-1),c=a("h2",{id:"materials"},[a("a",{class:"header-anchor",href:"#materials","aria-hidden":"true"},"#"),t(" Materials")],-1),p=a("p",null,[t("Vertex, fragment and sometimes geometry shaders are combined with some options as materials and are required for custom shaders. To create new material, you need to create file, which matches the name of .material file in vanilla resource pack. For example: "),a("code",null,"materials/particles.material"),t(". Materials support inheritance by adding parent material after colon. For example: "),a("code",null,"entity_alpha:entity_base")],-1),h=a("h3",{id:"common-material-definition-fields"},[a("a",{class:"header-anchor",href:"#common-material-definition-fields","aria-hidden":"true"},"#"),t(" Common material definition fields")],-1),g=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,[a("strong",null,"Field name")]),a("th",null,[a("strong",null,"Description")]),a("th",null,[a("strong",null,"Example value")]),a("th",null,[a("strong",null,"Notes")])])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"vertexShader")]),a("td",null,"Path to the shader relative to hlsl/glsl folder"),a("td"),a("td",null,[t("For HLSL shader, "),a("code",null,".hlsl"),t(" suffix is added.")])]),a("tr",null,[a("td",null,[a("code",null,"fragmentShader")]),a("td",null,"Path to the shader relative to hlsl/glsl folder"),a("td"),a("td",null,[t("For HLSL shader, "),a("code",null,".hlsl"),t(" suffix is added.")])]),a("tr",null,[a("td",null,[a("code",null,"vertexFields")]),a("td",null,"An array of fields passed to vertex shader"),a("td"),a("td",null,"It's better to copy this field from vanilla material.")]),a("tr",null,[a("td",null,[a("code",null,"variants")]),a("td",null,"An array of objects, which define variants of the material"),a("td"),a("td",null,"It's better to copy this field from vanilla material.")]),a("tr",null,[a("td",null,[a("code",null,"+defines")]),a("td",null,[t("An array of "),a("code",null,"#define"),t(" directives to add to the shader source")]),a("td"),a("td",null,"Useful for reusing shader, but changing some minor setting.")]),a("tr",null,[a("td",null,[a("code",null,"+states")]),a("td",null,"An array of states to enable"),a("td",null,[a("code",null,'["Blending", "DisableAlphaWrite", "DisableDepthWrite"]')]),a("td",null,[t("For OpenGL implementation, this is equivalent to "),a("a",{href:"https://www.khronos.org/registry/OpenGL-Refpages/gl2.1/xhtml/glEnable.xml",target:"_blank",rel:"noopener noreferrer"},"glEnable"),t(" call.")])]),a("tr",null,[a("td",null,[a("code",null,"-defines")]),a("td",null,[t("An array of "),a("code",null,"#defines"),t(" directives to remove from inherited "),a("code",null,"+defines")]),a("td"),a("td")]),a("tr",null,[a("td",null,[a("code",null,"+samplerStates")]),a("td",null,"An array of objects, defining how texture at certain index is treated"),a("td",null,[a("code",null,'{ "samplerIndex": 0, "textureFilter": "Point" }')]),a("td",null,[a("code",null,"textureFilter"),t(" specifies how to sample the texture and "),a("code",null,"textureWrap"),t(" specifies the behavior, when accessing outside of the texture dimensions.")])]),a("tr",null,[a("td",null,[a("code",null,"msaaSupport")]),a("td",null,"Multisample anti-aliasing support"),a("td",null,[a("code",null,"Both")]),a("td")]),a("tr",null,[a("td",null,[a("code",null,"blendSrc")]),a("td",null,"Specifies how the color source blending factors are computed"),a("td",null,[a("code",null,"One")]),a("td",null,[t("For OpenGL implementation, this is equivalent to "),a("a",{href:"https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml",target:"_blank",rel:"noopener noreferrer"},"glBlendFunc"),t(" call.")])]),a("tr",null,[a("td",null,[a("code",null,"blendDst")]),a("td",null,"Specifies how the color destination blending factors are computed"),a("td",null,[a("code",null,"One")]),a("td",null,[t("For OpenGL implementation, this is equivalent to "),a("a",{href:"https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBlendFunc.xhtml",target:"_blank",rel:"noopener noreferrer"},"glBlendFunc"),t(" call.")])])])],-1),m=a("p",null,"Example:",-1),f=a("div",{class:"language-json"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token property"},'"materials"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token property"},'"version"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"1.0.0"'),a("span",{class:"token punctuation"},","),t("\n    "),a("span",{class:"token property"},'"particle_debug"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token property"},'"vertexShader"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"shaders/particle_generic.vertex"'),a("span",{class:"token punctuation"},","),t("\n      "),a("span",{class:"token property"},'"fragmentShader"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"shaders/particle_debug.fragment"'),a("span",{class:"token punctuation"},","),t("\n\n      "),a("span",{class:"token property"},'"vertexFields"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),t("\n        "),a("span",{class:"token punctuation"},"{"),t(),a("span",{class:"token property"},'"field"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"Position"'),t(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n        "),a("span",{class:"token punctuation"},"{"),t(),a("span",{class:"token property"},'"field"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"Color"'),t(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n        "),a("span",{class:"token punctuation"},"{"),t(),a("span",{class:"token property"},'"field"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"UV0"'),t(),a("span",{class:"token punctuation"},"}"),t("\n      "),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t("\n\n      "),a("span",{class:"token property"},'"+samplerStates"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),t("\n        "),a("span",{class:"token punctuation"},"{"),t("\n          "),a("span",{class:"token property"},'"samplerIndex"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t("\n          "),a("span",{class:"token property"},'"textureFilter"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"Point"'),t("\n        "),a("span",{class:"token punctuation"},"}"),t("\n      "),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t("\n\n      "),a("span",{class:"token property"},'"msaaSupport"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},'"Both"'),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),b=a("p",null,[t("For all the details about material file and possible field values, check "),a("a",{href:"https://github.com/stirante/bedrock-shader-schema/blob/master/materials.schema.json",target:"_blank",rel:"noopener noreferrer"},"material file json schema"),t(".")],-1),k=a("h2",{id:"troubleshooting"},[a("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),t(" Troubleshooting")],-1),v=a("h3",{id:"shader-doesn’t-change"},[a("a",{class:"header-anchor",href:"#shader-doesn’t-change","aria-hidden":"true"},"#"),t(" Shader doesn’t change")],-1),y=a("p",null,"Every time there is a change in the shader, you need to completely restart Minecraft to recompile the shader.",-1),w=a("h3",{id:"compilation-error"},[a("a",{class:"header-anchor",href:"#compilation-error","aria-hidden":"true"},"#"),t(" Compilation error")],-1),x=a("p",null,[t("When there is a shader compilation error, usually there is a line number specified, where the error occurred. You need to check few lines above the one specified in error, because before compilation, Minecraft adds "),a("code",null,"#define"),t(" directives")],-1),S=a("h3",{id:"couldn’t-find-constant-buffer-named-globals"},[a("a",{class:"header-anchor",href:"#couldn’t-find-constant-buffer-named-globals","aria-hidden":"true"},"#"),t(" Couldn’t find constant buffer named: $Globals")],-1),F=a("p",null,[t("I couldn’t accurately find the actual cause of this error, but it seems to be somehow connected to global variables. Removing them (initializing them in "),a("code",null,"main"),t(" function or changing them to "),a("code",null,"#define"),t(" directives) seems to fix the problem.")],-1),L=a("h2",{id:"tips-and-tricks"},[a("a",{class:"header-anchor",href:"#tips-and-tricks","aria-hidden":"true"},"#"),t(" Tips and tricks")],-1),I=a("h3",{id:"passing-variables-to-shader"},[a("a",{class:"header-anchor",href:"#passing-variables-to-shader","aria-hidden":"true"},"#"),t(" Passing variables to shader")],-1),_=a("p",null,[t("You can pass variables to the shader from a particle, or an entity by changing entity color. Input color is clamped to "),a("code",null,"<0.0, 1.0>"),t(". To pass bigger values, you need to divide by max value (or at least by some big number).")],-1),P=a("h3",{id:"using-time-in-shader"},[a("a",{class:"header-anchor",href:"#using-time-in-shader","aria-hidden":"true"},"#"),t(" Using time in shader")],-1),O=a("p",null,[a("code",null,"TIME"),t(" variable is number of seconds as "),a("code",null,"float"),t(" and is global for all shaders. For time based on particle lifetime, you need to pass this:")],-1),D=a("div",{class:"language-json"},[a("pre",null,[a("code",null,[a("span",{class:"token property"},'"minecraft:particle_appearance_tinting"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token property"},'"color"'),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},'"variable.particle_age/variable.particle_lifetime"'),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},"]"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),T=a("p",null,[t("Then in shader, use "),a("code",null,"PSInput.color.r"),t(" as time, where "),a("code",null,"0.0"),t(" is particle birth and "),a("code",null,"1.0"),t(" is particle death.")],-1),C=a("h3",{id:"camera-direction-towards-the-entity"},[a("a",{class:"header-anchor",href:"#camera-direction-towards-the-entity","aria-hidden":"true"},"#"),t(" Camera direction towards the entity")],-1),G=a("p",null,"For entity shaders, you can make the shader dependent on camera direction towards the entity.",-1),A=a("ul",null,[a("li",null,[t("Add to "),a("code",null,"PS_Input"),t(" in vertex and fragment shader new field")])],-1),M=a("div",{class:"language-"},[a("pre",null,[a("code",null,"float3 viewDir: POSITION;\n")])],-1),B=a("ul",null,[a("li",null,"After that, add to vertex shader this line")],-1),W=a("div",{class:"language-"},[a("pre",null,[a("code",null,"PSInput.viewDir = normalize((mul(WORLD, mul(BONES[VSInput.boneId], float4(VSInput.position, 1)))).xyz);\n")])],-1),j=a("ul",null,[a("li",null,[t("In fragment shader use "),a("code",null,"PSInput.viewDir"),t(" to make changes depending on camera rotation")])],-1),E=a("h3",{id:"debugging-values"},[a("a",{class:"header-anchor",href:"#debugging-values","aria-hidden":"true"},"#"),t(" Debugging values")],-1),R=a("p",null,"The easiest way to debug a value is to turn it into color and render it like this",-1),U=a("div",{class:"language-"},[a("pre",null,[a("code",null,"PSOutput.color = float4(PSInput.uv, 0., 1.);\n")])],-1),q=a("p",null,[t("This should create a red-green gradient, showing that the values of "),a("code",null,"uv"),t(" are between "),a("code",null,"<0, 0>"),t(" and "),a("code",null,"<1, 1>"),t(".")],-1),z=a("p",null,[t("For more advanced debugging, you can use the debug shader I wrote "),a("a",{href:"http://mew.cx/drawtext/drawtext.html",target:"_blank",rel:"noopener noreferrer"},"based on this shader"),t(". Right now this shader will display values of the color passed to the shader. To display another value, change line 70 in hlsl shader to")],-1),H=a("div",{class:"language-"},[a("pre",null,[a("code",null,"int ascii = getFloatCharacter( cellIndex, <float4 vector here> );\n")])],-1),V=a("p",null,"GLSL version of debug shader may crash Minecraft, use only for debugging.",-1),N=a("p",null,[a("a",{href:"http://files.stirante.com/debugShader.zip",target:"_blank",rel:"noopener noreferrer"},"Download debug shader")],-1),Y=a("p",null,[a("img",{src:"/bedrock-wiki-vite/assets/images/knowledge/shaders/debugShader.gif",alt:""})],-1);s.render=function(a,t,l,s,$,X){return e(),n("div",null,[r,o,i,d,u,c,p,h,g,m,f,b,k,v,y,w,x,S,F,L,I,_,P,O,D,T,C,G,A,M,B,W,j,E,R,U,q,z,H,V,N,Y])};export default s;export{l as __pageData};
