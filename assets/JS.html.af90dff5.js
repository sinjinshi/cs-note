import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c as i,a as n,b as e,F as o,d as s,e as c}from"./app.b7ed1dca.js";const r={},u=n("h1",{id:"js-\u5165\u95E8\u7B14\u8BB0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#js-\u5165\u95E8\u7B14\u8BB0","aria-hidden":"true"},"#"),s(" JS \u5165\u95E8\u7B14\u8BB0")],-1),d={href:"https://wangdoc.com/javascript/basic/introduction.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u962E\u4E00\u5CF0JS\u5165\u95E8"),v={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"},k=s("\u962E\u4E00\u5CF0ES6\u5165\u95E8"),b={href:"https://zh.javascript.info/",target:"_blank",rel:"noopener noreferrer"},g=s("\u73B0\u4EE3js\u6559\u7A0B"),h=c(`<h2 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u8BED\u6CD5</h2><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><p>8\u79CD\u57FA\u7840\u53D8\u91CF undefined, null, boolean, string, symbol, bigint, number, and object</p><p>Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.</p><p>NaN -&gt; not a number</p><p>case sensitive</p><p>let const: all uppercase letters,with words separated by an underscore</p><p>floats \u683C\u5F0F\u5728\u64CD\u4F5C\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u88AB\u56DB\u820D\u4E94\u5165\u5BFC\u81F4\u6570\u636E\u4E0D\u51C6\u786E</p><p>\u5728 HTML \u6807\u7B7E\u4E2D\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u53CC\u5F15\u53F7\uFF0CJS \u4E2D\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u5355\u5F15\u53F7\u3002</p><p>\u6700\u4F73\u5B9E\u8DF5\uFF1Ascript \u4F7F\u7528\u5185\u5D4C\u5F0F\uFF0C\u5E76\u5728body\u6807\u7B7E\u5185\u6700\u540E\u4F4D\u7F6E\u4F7F\u7528\uFF0C\u786E\u4FDD\u6240\u6709\u5143\u7D20\u90FD\u52A0\u8F7D\u5B8C\u6210\uFF0C\u9632\u6B62 JS \u65E0\u6CD5\u627E\u5230\u5BF9\u8C61\u5BFC\u81F4\u9519\u8BEF</p><p>console.log</p><p>console.warn</p><p>console.error</p><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h2><p>\u53D8\u91CF\u540D\u79F0</p><ul><li>\u53EA\u80FD\u7531\u5B57\u6BCD(A-Z\u3001a-z)\u3001\u6570\u5B57(0-9)\u3001\u4E0B\u5212\u7EBF(_)\u3001\u7F8E\u5143\u7B26( $ )\u7EC4\u6210,\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934</li><li>\u9A7C\u5CF0\u5F0F</li><li>\u53D8\u91CF\u540D\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7255\u4E2A\u5B57\u7B26</li><li>\u4E0D\u80FD\u4F7F\u7528\u5173\u952E\u5B57 \u548C \u4FDD\u7559\u5B57</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if\u3001else\u3001switch\u3001break\u3001case\u3001default\u3001for\u3001in\u3001do\u3001while\u3001

var\u3001let\u3001const\u3001void\u3001function\u3001continue\u3001return\u3001

try\u3001catch\u3001finally\u3001throw\u3001debugger\u3001

this\u3001typeof\u3001instanceof\u3001delete\u3001with\u3001

export\u3001new\u3001class\u3001extends\u3001super\u3001with\u3001yield\u3001import\u3001static\u3001

true\u3001false\u3001null\u3001undefined\u3001NaN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
enum\u3001await

abstract\u3001boolean\u3001byte\u3001char\u3001double\u3001final\u3001float\u3001goto\u3001int\u3001long\u3001native\u3001short\u3001synchronized\u3001transient\u3001volatile\u3001

arguments eval Infinity

# \u4EE5\u4E0B\u5173\u952E\u5B57\u53EA\u5728\u4E25\u683C\u6A21\u5F0F\u4E2D\u88AB\u5F53\u6210\u4FDD\u7559\u5B57\uFF0C\u5728ES6\u4E2D\u662F\u5C5E\u4E8E\u5173\u952E\u5B57
implements\u3001interface\u3001package\u3001private\u3001protected\u3001public

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF1A\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF08\u503C\u7C7B\u578B\uFF09\uFF1AString \u5B57\u7B26\u4E32\u3001Number \u6570\u503C\u3001BigInt \u5927\u578B\u6570\u503C\u3001Boolean \u5E03\u5C14\u503C\u3001Null \u7A7A\u503C\u3001Undefined \u672A\u5B9A\u4E49\u3001Symbol\u3002</p><p>\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF08\u5F15\u7528\u7C7B\u578B\uFF09\uFF1AObject \u5BF9\u8C61\u3002</p><p>\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u6700\u5927\u7684\u533A\u522B\uFF1A</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A\u53C2\u6570\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u4F20\u6570\u503C\u3002</p><p>\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF1A\u53C2\u6570\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u4F20\u5730\u5740\u3002</p><p>\uFF1AJS \u4E2D\uFF0C\u6240\u6709\u7684\u53D8\u91CF\u90FD\u662F\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u4E2D\u7684\u3002</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A</p><p>\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u503C\uFF0C\u76F4\u63A5\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u4E2D\u3002\u503C\u4E0E\u503C\u4E4B\u95F4\u662F\u72EC\u7ACB\u5B58\u5728\uFF0C\u4FEE\u6539\u4E00\u4E2A\u53D8\u91CF\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u7684\u53D8\u91CF\u3002</p><p>\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF1A</p><p>\u5BF9\u8C61\u662F\u4FDD\u5B58\u5230\u5806\u5185\u5B58\u4E2D\u7684\u3002\u6BCF\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u5728\u5806\u5185\u5B58\u4E2D\u5F00\u8F9F\u51FA\u4E00\u4E2A\u65B0\u7684\u7A7A\u95F4\uFF1B\u800C\u53D8\u91CF\u4FDD\u5B58\u4E86\u5BF9\u8C61\u7684\u5185\u5B58\u5730\u5740\uFF08\u5BF9\u8C61\u7684\u5F15\u7528\uFF09\uFF0C\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u5F53\u4E2D\u3002\u5982\u679C\u4E24\u4E2A\u53D8\u91CF\u4FDD\u5B58\u4E86\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5F53\u4E00\u4E2A\u901A\u8FC7\u4E00\u4E2A\u53D8\u91CF\u4FEE\u6539\u5C5E\u6027\u65F6\uFF0C\u53E6\u4E00\u4E2A\u4E5F\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p><p>\u5728\u5B57\u7B26\u4E32\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\\\u4F5C\u4E3A\u8F6C\u4E49\u5B57\u7B26\uFF0C\u5F53\u8868\u793A\u4E00\u4E9B\u7279\u6B8A\u7B26\u53F7\u65F6\u53EF\u4EE5\u4F7F\u7528\\\u8FDB\u884C\u8F6C\u4E49\u3002</p><p>\u6A21\u677F\u5B57\u7B26\u4E32</p><p>\u5E03\u5C14\u578B\u548C\u6570\u5B57\u578B\u76F8\u52A0\u65F6\uFF0C\u7ED3\u679C\u4E3A\u6570\u5B57\uFF0C true \u6309 1 \u6765\u7B97 \uFF0Cfalse \u6309 0 \u6765\u7B97\u3002</p><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h3><pre><code>console.log(0.1 + 0.2 ===  0.30000000000000007); //true
</code></pre><p>\u4F7F\u7528\u53CC\u7CBE\u5EA6\u4FDD\u5B58\uFF0C64\u4F4D</p><p>\u53D8\u91CF\u5927\u4E8E\u6216\u5C0F\u4E8E \u8FD9\u4E2A\u8303\u56F4\u8FD4\u56DE</p><p>\u65E0\u7A77\u5927\uFF08\u6B63\u65E0\u7A77\uFF09\uFF1AInfinity</p><p>\u65E0\u7A77\u5C0F\uFF08\u8D1F\u65E0\u7A77\uFF09\uFF1A-Infinity</p><p>\u6CE8\u610F typeof Infinity \u8FD4\u56DE\u7ED3\u679C\u662F number</p><p>\u53EF\u4EE5\u8003\u8651 \u5F15\u7528\u5F00\u6E90\u5E93 decimal.js \u8FDB\u884C\u6570\u5B66\u8BA1\u7B97</p><hr><p>NaN Not a Number</p><p>typeof NaN\u7684\u8FD4\u56DE\u7ED3\u679C\u662F number\u3002</p><p>Undefined \u548C\u4EFB\u4F55\u6570\u503C\u8BA1\u7B97\u7684\u7ED3\u679C\u4E3A NaN\u3002NaN \u4E0E\u4EFB\u4F55\u503C\u90FD\u4E0D\u76F8\u7B49\uFF0C\u5305\u62EC NaN \u672C\u8EAB\u3002</p><p>-\u3001*\u3001/\u3001%\u8FD9\u51E0\u4E2A\u7B26\u53F7\u4F1A\u81EA\u52A8\u8FDB\u884C\u9690\u5F0F\u8F6C\u6362 \u6210\u6570\u5B66\u8BA1\u7B97\uFF0C + \u4F18\u5148\u5145\u5F53 \u5B57\u7B26\u4E32\u7684 \u8FDE\u5B57\u7B26</p><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> Null</h3><p>\u7A7A\u5BF9\u8C61 null \u867D\u7136\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4F46null \u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A object\uFF0C\u53EA\u4E0D\u8FC7\u5730\u5740\u4E3A\u7A7A\uFF08\u7A7A\u6307\u9488\uFF09</p><p>\u9700\u8981\u4E0E undefined \u505A\u533A\u5206</p><p>null == undefined //true</p><p>null === undefined \u7684\u7ED3\u679C\u662F false</p><p>10 + null \u7ED3\u679C\u4E3A 10\u3002</p><p>10 + undefined \u7ED3\u679C\u4E3A NaN\u3002</p><p>\u4EFB\u4F55\u503C\u548C null \u8FD0\u7B97\uFF0Cnull \u53EF\u770B\u505A 0 \u8FD0\u7B97\u3002</p><p>\u4EFB\u4F55\u6570\u636E\u7C7B\u578B\u548C undefined \u8FD0\u7B97\u90FD\u662F NaN\u3002</p><h3 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined" aria-hidden="true">#</a> undefined</h3><ol><li>\u53D8\u91CF\u5DF2\u58F0\u660E\uFF0C\u4F46\u662F\u672A\u8D4B\u503C</li><li>\u53D8\u91CF\u672A\u58F0\u660E</li><li>\u51FD\u6570\u65E0\u8FD4\u56DE</li><li>\u8C03\u7528\u51FD\u6570\u672A\u4F20\u53C2 <ol><li>\u4E3A\u5F62\u53C2\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u53EF\u4EE5\u907F\u514D</li></ol></li></ol><h2 id="\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B\u8F6C\u6362</h2><p>typeof</p><p>instanceof</p><p>\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362 toString()</p><p>null \u548C undefined \u6CA1\u6709 toString\uFF08\uFF09\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>

<span class="token comment">//\u5BF9\u4E8ENumber\u8C03\u7528toString()\u65F6\u53EF\u4EE5\u5728\u65B9\u6CD5\u4E2D\u4F20\u9012\u4E00\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570</span>
<span class="token comment">//\u6B64\u65F6\u5B83\u5C06\u4F1A\u628A\u6570\u5B57\u8F6C\u6362\u4E3A\u6307\u5B9A\u7684\u8FDB\u5236,\u5982\u679C\u4E0D\u6307\u5B9A\u5219\u9ED8\u8BA4\u8F6C\u6362\u4E3A10\u8FDB\u5236</span>
a <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11111111</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String()</p><p>\u672C\u8D28\u4E0A\u8C03\u7528 toString() \u4F46\u662F \u4F1A\u5C06 null \u76F4\u63A5\u8F6C\u6362\u4E3A &quot;null&quot;\u3002\u5C06 undefined \u76F4\u63A5\u8F6C\u6362\u4E3A &quot;undefined&quot;\u3002</p><p>Number()</p><p>\u60C5\u51B5\u4E00\uFF1A\u5B57\u7B26\u4E32 --&gt; \u6570\u5B57</p><p>\uFF081\uFF09\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u662F\u7EAF\u6570\u5B57\uFF0C\u5219\u76F4\u63A5\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u5B57\u3002</p><p>\uFF082\uFF09\u5982\u679C\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u7A7A\u4E32\u6216\u8005\u662F\u4E00\u4E2A\u5168\u662F\u7A7A\u683C\u7684\u5B57\u7B26\u4E32\uFF0C\u5219\u8F6C\u6362\u4E3A 0\u3002</p><p>\uFF083\uFF09\u53EA\u8981\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u4E86\u5176\u4ED6\u975E\u6570\u5B57\u7684\u5185\u5BB9\uFF08\u5C0F\u6570\u70B9\u6309\u6570\u5B57\u6765\u7B97\uFF09\uFF0C\u5219\u8F6C\u6362\u4E3A NaN\u3002\u600E\u4E48\u7406\u89E3\u8FD9\u91CC\u7684 NaN \u5462\uFF1F\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\uFF0C\u4F7F\u7528 Number() \u51FD\u6570\u4E4B\u540E\uFF0C\u5982\u679C\u65E0\u6CD5\u8F6C\u6362\u4E3A\u6570\u5B57\uFF0C\u5C31\u4F1A\u8F6C\u6362\u4E3A NaN\u3002</p><p>\u60C5\u51B5\u4E8C\uFF1A\u5E03\u5C14 --&gt; \u6570\u5B57</p><p>\uFF081\uFF09true \u8F6C\u6210 1</p><p>\uFF082\uFF09false \u8F6C\u6210 0</p><p>\u60C5\u51B5\u4E09\uFF1Anull --&gt; \u6570\u5B57\uFF0C\u7ED3\u679C\u4E3A\uFF1A0</p><p>\u60C5\u51B5\u56DB\uFF1Aundefined --&gt; \u6570\u5B57\uFF0C\u7ED3\u679C\u4E3A\uFF1ANaN</p><p>parseInt(string)</p><p>parseInt()\uFF1A\u5C06\u4F20\u5165\u7684\u6570\u636E\u5148\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u518D\u5904\u7406\uFF0C\u4ECE\u5DE6\u81F3\u53F3\u63D0\u53D6\u6570\u503C, \u4E00\u65E6\u9047\u5230\u975E\u6570\u503C\u5C31\u7ACB\u5373\u505C\u6B62\uFF1B\u505C\u6B62\u65F6\u5982\u4F55\u8FD8\u6CA1\u6709\u63D0\u53D6\u5230\u6570\u503C, \u90A3\u4E48\u5C31\u8FD4\u56DENaN\u3002</p><p>\u60C5\u51B5\u4E00\uFF1A\u5B57\u7B26\u4E32 --&gt; \u6570\u5B57</p><p>\uFF081\uFF09\u53EA\u4FDD\u7559\u5B57\u7B26\u4E32\u6700\u5F00\u5934\u7684\u6570\u5B57\uFF0C\u540E\u9762\u7684\u5176\u4ED6\u5185\u5BB9\u81EA\u52A8\u6D88\u5931\u3002</p><p>\uFF082\uFF09\u5982\u679C\u5B57\u7B26\u4E32\u4E0D\u662F\u4EE5\u6570\u5B57\u5F00\u5934\uFF0C\u5219\u8F6C\u6362\u4E3A NaN\u3002</p><p>\uFF083\uFF09\u5982\u679C\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u7A7A\u4E32\u6216\u8005\u662F\u4E00\u4E2A\u5168\u662F\u7A7A\u683C\u7684\u5B57\u7B26\u4E32\uFF0C\u8F6C\u6362\u65F6\u4F1A\u62A5\u9519\u3002</p><p>\u60C5\u51B5\u4E8C\uFF1ABoolean --&gt; \u6570\u5B57\uFF0C\u7ED3\u679C\u4E3A\uFF1ANaN</p><p>\u60C5\u51B5\u4E09\uFF1ANull --&gt; \u6570\u5B57\uFF0C\u7ED3\u679C\u4E3A\uFF1ANaN</p><p>\u60C5\u51B5\u56DB\uFF1AUndefined --&gt; \u6570\u5B57\uFF0C\u7ED3\u679C\u4E3A\uFF1ANaN</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;110&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06 a \u5F53\u4F5C 16 \u8FDB\u5236\u5904\u7406\uFF0Cnum = 110\uFF0816\uFF09= 272\uFF0810\uFF09</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06 a \u5F53\u6210 \u4E8C\u8FDB\u5236 \u6765\u770B\u5F85\uFF0C\u8F6C\u6362\u6210 \u5341\u8FDB\u5236 \u7684 num\uFF0C\u7531\u4E8E 5 \u4E0D\u662F \u4E8C\u8FDB\u5236\u6570\uFF0C\u8F6C\u6362\u5931\u8D25\uFF0C \u7ED3\u679C NaN</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>parseFloat(string)</p><p>\u6027\u8D28\u548C parseInt\uFF08\uFF09\u4E00\u81F4\uFF0C\u9700\u8981\u6CE8\u610F\u53EA\u8BC6\u522B\u7B2C\u4E00\u4E2A\u5C0F\u6570\u70B9\uFF0C\u7B2C\u4E8C\u4E2A\u5C0F\u6570\u70B9\u81EA\u52A8\u6D88\u5931</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;123.456.789px&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A123.456</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Boolean()</li></ol><p>\uFF09\u60C5\u51B5\u4E00\uFF1A\u6570\u5B57 --&gt; \u5E03\u5C14\u3002 0 \u548C NaN\u662F false\uFF0C\u5176\u4F59\u7684\u90FD\u662F true\u3002\u6BD4\u5982 Boolean(NaN)\u7684\u7ED3\u679C\u662F false\u3002</p><p>\uFF082\uFF09\u60C5\u51B5\u4E8C\uFF1A\u5B57\u7B26\u4E32 ---&gt; \u5E03\u5C14\u3002\u7A7A\u4E32\u662Ffalse\uFF0C\u5176\u4F59\u7684\u90FD\u662F true\u3002\u5168\u662F\u7A7A\u683C\u7684\u5B57\u7B26\u4E32\uFF0C\u8F6C\u6362\u7ED3\u679C\u4E5F\u662F true\u3002\u5B57\u7B26\u4E32&#39;0&#39;\u7684\u8F6C\u6362\u7ED3\u679C\u4E5F\u662F true\u3002</p><p>\uFF083\uFF09\u60C5\u51B5\u4E09\uFF1Anull \u548C undefined \u90FD\u4F1A\u8F6C\u6362\u4E3A false\u3002</p><p>\uFF084\uFF09\u60C5\u51B5\u56DB\uFF1A\u5F15\u7528\u6570\u636E\u7C7B\u578B\u4F1A\u8F6C\u6362\u4E3A true\u3002\u6CE8\u610F\uFF0C\u7A7A\u6570\u7EC4[]\u548C\u7A7A\u5BF9\u8C61{}\uFF0C\u8F6C\u6362\u7ED3\u679C\u4E5F\u662F true\uFF0C\u8FD9\u4E00\u70B9\uFF0C\u5F88\u591A\u4EBA\u90FD\u4E0D\u77E5\u9053\u3002</p><h1 id="\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</h1><p>isNaN ()</p><p>\u81EA\u589E/\u81EA\u51CF\u8FD0\u7B97\u7B26\uFF1A++\u3001\u2014-</p><p>\u6B63\u53F7/\u8D1F\u53F7\uFF1A+a\u3001-a</p><p>\u52A0\u53F7\uFF1A+</p><p>\u8FD0\u7B97\u7B26\uFF1A-\u3001*\u3001/</p><p>#\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\uFF08\u7279\u6B8A\uFF09 \u903B\u8F91\u8FD0\u7B97\u7B26\uFF1A&amp;&amp;\u3001||\u3001! \u3002\u975E\u5E03\u5C14\u503C\u8FDB\u884C\u4E0E\u6216\u8FD0\u7B97\u65F6\uFF0C\u4F1A\u5148\u5C06\u5176\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\uFF0C\u7136\u540E\u518D\u8FD0\u7B97\u3002&amp;&amp;\u3001||\u7684\u8FD0\u7B97\u7ED3\u679C\u662F\u539F\u503C\uFF0C!\u7684\u8FD0\u7B97\u7ED3\u679C\u4E3A\u5E03\u5C14\u503C\u3002\u3002</p><p>\u5173\u7CFB\u8FD0\u7B97\u7B26\uFF1A&lt;\u3001&gt; &lt;= &gt;=\u7B49\u3002\u5173\u7CFB\u8FD0\u7B97\u7B26\uFF0C\u5F97\u5230\u7684\u8FD0\u7B97\u7ED3\u679C\u90FD\u662F\u5E03\u5C14\u503C\uFF1A\u8981\u4E48\u662F true\uFF0C\u8981\u4E48\u662F false\u3002\u5177\u4F53\u53EF\u4EE5\u770B\u4E0B\u4E00\u7BC7\u6587\u7AE0\u300A\u8FD0\u7B97\u7B26\u300B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B57\u7B26\u4E32\u8FD0\u7B97</span>

result1 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5B57\u7B26\u4E32\uFF1A33</span>

result2 <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// \u5B57\u7B26\u4E32\uFF1A123</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Boolean + \u6570\u5B57 = \u6570\u5B57 Boolean \u578B\u548C\u6570\u5B57\u578B\u76F8\u52A0\u65F6\uFF0C true \u6309 1 \u6765\u7B97 \uFF0Cfalse \u6309 0 \u6765\u7B97\u3002\u8FD9\u91CC\u5176\u5B9E\u662F\u5148\u8C03 Number() \u51FD\u6570\uFF0C\u5C06 Boolean \u7C7B\u578B\u8F6C\u4E3A Number \u7C7B\u578B\uFF0C\u7136\u540E\u518D\u548C \u6570\u5B57\u76F8\u52A0\u3002</p><p>null + \u6570\u5B57 = \u6570\u5B57 \u7B49\u4EF7\u4E8E\uFF1A0 + \u6570\u5B57</p><p>undefined + \u6570\u5B57 = NaN \u8BA1\u7B97\u7ED3\u679C\uFF1ANaN</p><p>\u4EFB\u4F55\u503C\u548C NaN \u505A\u8FD0\u7B97\u7684\u7ED3\u679C\u90FD\u662F NaN\u3002</p><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><p>\u7B97\u6570\u8FD0\u7B97\u7B26</p><p><code>+ - * / %</code></p><p>\u53D6\u6A21\u8FD0\u7B97</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
\u4F59\u6570 <span class="token operator">=</span> m <span class="token operator">%</span> n\uFF1B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>n &lt; 0\uFF0C\u5148\u628A n \u53D6\u7EDD\u5BF9\u503C\u540E\uFF0C\u518D\u8BA1\u7B97\u3002\u7B49\u4EF7\u4E8E m % (-n)</p><p>n = 0, \u7ED3\u679C NaN</p><p>\u53D6\u4F59\u8FD0\u7B97\u7ED3\u679C\u7684\u6B63\u8D1F\u6027\uFF0C\u53D6\u51B3\u4E8E m\uFF0C\u800C\u4E0D\u662F n\u3002\u6BD4\u5982\uFF1A10 % -3\u7684\u8FD0\u7B97\u7ED3\u679C\u662F 1\u3002-10 % 3\u7684\u8FD0\u7B97\u7ED3\u679C\u662F-1</p><p>\u4E0D\u8981\u76F4\u63A5\u5224\u65AD\u4E24\u4E2A\u6D6E\u70B9\u6570\u662F\u5426\u76F8\u7B49\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u8BA1\u7B97\u65F6\u9700\u8981\u6CE8\u610F\u7CBE\u5EA6\u95EE\u9898,\u6D6E\u70B9\u6570\u503C\u7684\u6700\u9AD8\u7CBE\u5EA6\u662F 17 \u4F4D\u5C0F\u6570\uFF0C\u4F46\u5728\u8FDB\u884C\u7B97\u672F\u8BA1\u7B97\u65F6\uFF0C\u4F1A\u4E22\u5931\u7CBE\u5EA6\uFF0C\u5BFC\u81F4\u8BA1\u7B97\u4E0D\u591F\u51C6\u786E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B97\u6570\u8FD0\u7B97\u7B26\u7684\u8FD0\u7B97\u89C4\u5219 \uFF081\uFF09\u5148\u7B97\u4E58\u9664\u3001\u540E\u7B97\u52A0\u51CF\u3002</p><p>\uFF082\uFF09\u5C0F\u62EC\u53F7( )\uFF1A\u80FD\u591F\u5F71\u54CD\u8BA1\u7B97\u987A\u5E8F\uFF0C\u4E14\u53EF\u4EE5\u5D4C\u5957\u3002\u6CA1\u6709\u4E2D\u62EC\u53F7\u3001\u6CA1\u6709\u5927\u62EC\u53F7\uFF0C\u53EA\u6709\u5C0F\u62EC\u53F7\u3002</p><p>\uFF083\uFF09\u767E\u5206\u53F7\uFF1A\u53D6\u4F59\u3002\u53EA\u5173\u5FC3\u4F59\u6570\u3002</p><p>\u81EA\u589E/\u81EA\u51CF\u8FD0\u7B97\u7B26</p><p>a++/++a \u4E4B\u540E\uFF0Ca\u7684\u503C\u4E00\u5B9A\u4F1A\u53D8\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u5143\u8FD0\u7B97\u7B26</p><p>typeof()</p><p>/+</p><p>/-</p><p>\u903B\u8F91\u8FD0\u7B97\u7B26</p><p>&amp;&amp; || !</p><p>\u4E0E\u8FD0\u7B97 \u8FD4\u56DE\u7684\u7ED3\u679C \u4E3A\uFF0C\u903B\u8F91\u5224\u65AD\u8FD0\u884C\u5230\u54EA\u91CC\uFF0C\u5C31\u8FD4\u56DE\u54EA\u91CC\u7684\u503C</p><p>\u7B2C\u4E00\u4E2A\u503C\u4E3A false\uFF0C\u505C\u6B62\u8BA1\u7B97\uFF0C\u5E76\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u503C \u7684 \u539F\u503C</p><p>\u7B2C\u4E00\u4E2A\u503C\u4E3A true\uFF0C \u7EE7\u7EED\u8BA1\u7B97\u7B2C\u4E8C\u4E2A\u503C\uFF0C\u5E76\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u503C\u7684\u539F\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//123</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&amp;&amp; \u4E0E || \u5C5E\u4E8E\u77ED\u8DEF\u8FD0\u7B97\uFF0C\u5F53\u7B2C\u4E00\u9879\u503C\u4E0D\u6EE1\u8DB3\u671F\u671B\u65F6\uFF0C\u4E0D\u4F1A\u7EE7\u7EED\u5224\u65AD\u540E\u7EED\u7684\u9879\uFF0C\u662F\u4E00\u79CD\u5F88\u597D\u7684\u300C\u5BB9\u9519\u3001\u5BB9\u707E\u3001\u964D\u7EA7\u300D\u65B9\u6848\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u7528\u4E8E\u63D0\u9AD8\u6027\u80FD\u8868\u73B0\uFF08\u5C06\u5E38\u89C1\u7684\u5224\u65AD\u653E\u5230\u7B2C\u4E00\u9879\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5224\u65AD\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>resultCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> result <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>imgUrl <span class="token operator">||</span> <span class="token string">&#39;http://img.smyhvae.com/20160401_01.jpg&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8D4B\u503C\u8FD0\u7B97\u7B26</p><p><code>= , += , -= , *= , /= , %= </code></p><p>\u6BD4\u8F83\u8FD0\u7B97\u7B26</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;	\u5927\u4E8E\u53F7
&lt;	\u5C0F\u4E8E\u53F7
&gt;= 	\u5927\u4E8E\u6216\u7B49\u4E8E
&lt;=  \u5C0F\u4E8E\u6216\u7B49\u4E8E
== 	\u7B49\u4E8E
=== \u5168\u7B49\u4E8E
!=	\u4E0D\u7B49\u4E8E
!== \u4E0D\u5168\u7B49\u4E8E

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u975E\u6570\u503C\u7684\u6BD4\u8F83 \uFF081\uFF09\u5BF9\u4E8E\u975E\u6570\u503C\u8FDB\u884C\u6BD4\u8F83\u65F6\uFF0C\u4F1A\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u5B57\u7136\u540E\u518D\u6BD4\u8F83\u3002 \uFF082\uFF09\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83\uFF1A</p><ol><li>\u4E0D\u4F1A\u8FDB\u884C\u6570\u503C\u8F6C\u6362\uFF0C\u6BD4\u8F83\u5B57\u7B26\u4E32\u6BCF\u4E00\u4F4D\u7684 Unicode \u7F16\u7801</li><li>\u4E00\u4F4D\u4E00\u4F4D\u8FDB\u884C\u6BD4\u8F83\u8FDB\u884C\u6BD4\u8F83\uFF0C &quot;5&quot; &gt; &quot;123&quot;</li></ol><p>\u4EFB\u4F55\u503C\u548C NaN \u505A\u4EFB\u4F55\u6BD4\u8F83\u90FD\u662F false\u3002</p><p>==</p><p>==\u8FD9\u4E2A\u7B26\u53F7\u5E76\u4E0D\u4E25\u8C28\uFF0C\u4F1A\u505A\u9690\u5F0F\u8F6C\u6362\uFF0C\u5C06\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8F6C\u4E3A\u76F8\u540C\u7C7B\u578B\u8FDB\u884C\u6BD4\u8F83\uFF08\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u90FD\u662F\u8F6C\u6362\u4E3A\u6570\u5B57\uFF09</p><p>undefined \u884D\u751F\u81EA null\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A\u503C\u505A\u76F8\u7B49\u5224\u65AD\u65F6\uFF0C\u4F1A\u8FD4\u56DE true\u3002</p><p>NaN \u4E0D\u548C\u4EFB\u4F55\u503C\u76F8\u7B49\uFF0C\u5305\u62EC\u4ED6\u672C\u8EAB\u3002\u53EF\u4EE5\u4F7F\u7528 <code>isNaN()</code> \u8FDB\u884C\u5224\u65AD</p><p>===\u5168\u7B49\u7B26\u53F7</p><p>\u5168\u7B49\u5728\u6BD4\u8F83\u65F6\uFF0C\u4E0D\u4F1A\u505A\u7C7B\u578B\u8F6C\u6362</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;6&#39;</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E09\u5143\u8FD0\u7B97\u7B26\uFF08\u6761\u4EF6\u8FD0\u7B97\u7B26\uFF09</p><p>\u6761\u4EF6\u8868\u8FBE\u5F0F ? \u8BED\u53E51 : \u8BED\u53E52;</p><p>\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7 \u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u5982\u4E0B\uFF1A\uFF08\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF09</p><p>.\u3001[]\u3001new</p><p>()</p><p>++\u3001--</p><p>!\u3001~\u3001+\uFF08\u5355\u76EE\uFF09\u3001-\uFF08\u5355\u76EE\uFF09\u3001typeof\u3001void\u3001delete</p><p>*\u3001/\u3001%</p><p>+\uFF08\u53CC\u76EE\uFF09\u3001-\uFF08\u53CC\u76EE\uFF09</p><p>&lt;&lt;\u3001&gt;&gt;\u3001&gt;&gt;&gt;</p><p>\u5173\u7CFB\u8FD0\u7B97\u7B26\uFF1A&lt;\u3001&lt;=\u3001&gt;\u3001&gt;=</p><p>==\u3001!==\u3001===\u3001!==</p><p>&amp;</p><p>^</p><p>|</p><p>&amp;&amp;</p><p>||</p><p>?:</p><p>=\u3001+=\u3001-=\u3001*=\u3001/=\u3001%=\u3001&lt;&lt;=\u3001&gt;&gt;=\u3001&gt;&gt;&gt;=\u3001&amp;=\u3001^=\u3001|=</p><p>,</p><p>\u6CE8\u610F\uFF1A\u903B\u8F91\u4E0E &amp;&amp; \u6BD4\u903B\u8F91\u6216 || \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002</p><p>\u5907\u6CE8\uFF1A\u4F60\u5728\u5B9E\u9645\u5199\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4E0D\u6E05\u695A\u54EA\u4E2A\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u53EF\u4EE5\u628A\u62EC\u53F7\u7528\u4E0A\u3002</p>`,168);function f(N,j){const a=t("ExternalLinkIcon");return l(),i(o,null,[u,n("p",null,[n("a",d,[m,e(a)]),n("a",v,[k,e(a)])]),n("p",null,[n("a",b,[g,e(a)])]),h],64)}var y=p(r,[["render",f],["__file","JS.html.vue"]]);export{y as default};
