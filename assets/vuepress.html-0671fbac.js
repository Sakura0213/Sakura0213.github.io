import{_ as s,o as n,c as a,e as t}from"./app-4aa1bffa.js";const p={},e=t(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuepress</h1><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-Blog
<span class="token builtin class-name">cd</span> vuepress-Blog
<span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress
<span class="token function">mkdir</span> docs 
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
<span class="token function">yarn</span> vuepress dev docs
</code></pre></div><p>修改 docs/README.md 文件（否则乱码）</p><p>修改 package.json（之后使用 yarn dev）</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span> 
  <span class="token punctuation">}</span>
  <span class="token comment">//使用17+版本的nodejs时为</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress dev docs&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vuepress build docs&quot;</span> 
  <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre></div><p>.vuepress/config.js</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  title: <span class="token string">&#39;猫星的博客&#39;</span>,
  description: <span class="token string">&#39;个人网站&#39;</span>,
  themeConfig: <span class="token punctuation">{</span>
        nav: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text: <span class="token string">&#39;首页&#39;</span>, link: <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span> 
                text: <span class="token string">&#39;猫星的博客&#39;</span>, 
                items: <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> text: <span class="token string">&#39;Github&#39;</span>, link: <span class="token string">&#39;https://github.com/sakura0213&#39;</span> <span class="token punctuation">}</span>,
                    <span class="token punctuation">{</span> text: <span class="token string">&#39;B站&#39;</span>, link: <span class="token string">&#39;https://space.bilibili.com/35023269&#39;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
        sidebar: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                title: <span class="token string">&#39;首页&#39;</span>,
                path: <span class="token string">&#39;/&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
</code></pre></div><p>deploy.bat脚本</p><p>（call npm run build 相当于把npm run build当成一个脚本执行，就算这个脚本结束了，也只是结束了一个call，不会结束call所在的脚本）</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>call <span class="token function">npm</span> run build
<span class="token builtin class-name">cd</span> docs/.vuepress/dist
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:Sakura0213/Sakura0213.github.io.git master
</code></pre></div>`,10),o=[e];function c(l,u){return n(),a("div",null,o)}const r=s(p,[["render",c],["__file","vuepress.html.vue"]]);export{r as default};
