(self.webpackChunkdocker_compose=self.webpackChunkdocker_compose||[]).push([[509],{422:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>o});const o={key:"v-8daa1a0e",path:"/",title:"Manage Docker-Compose via Node.js",lang:"en-US",frontmatter:{title:"Manage Docker-Compose via Node.js",lang:"en-US",home:!1},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"Example",slug:"example",children:[]},{level:3,title:"Options",slug:"options",children:[]}]},{level:2,title:"Running the tests",slug:"running-the-tests",children:[]},{level:2,title:"Want to help?",slug:"want-to-help",children:[{level:3,title:"Discussions",slug:"discussions",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],filePathRelative:"README.md",git:{updatedTime:1642332444e3,contributors:[]}}},320:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>j});var o=e(252);const a=(0,o.Wm)("h1",{id:"manage-docker-compose-via-node-js"},[(0,o.Wm)("a",{class:"header-anchor",href:"#manage-docker-compose-via-node-js"},"#"),(0,o.Uk)(" Manage Docker-Compose via Node.js")],-1),t=(0,o.Wm)("code",null,"docker-compose",-1),c=(0,o.Uk)(" is a small library that allows you to run "),i={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},p=(0,o.Uk)("docker-compose"),l=(0,o.Uk)(" (which is still required) via Node.js. This is useful to bootstrap test environments."),r=(0,o.uE)('<h2 id="installation"><a class="header-anchor" href="#installation">#</a> Installation</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --save-dev docker-compose\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h2><p><code>docker-compose</code> current supports these commands:</p><ul><li><code>buildAll(options)</code> - Build or rebuild services</li><li><code>buildMany(services, options)</code> - Build or rebuild services</li><li><code>buildOne(service, options)</code> - Build or rebuild service</li><li><code>config(options)</code> - Validates configuration files and returns configuration yaml</li><li><code>configServices(options)</code> - Returns list of services defined in configuration files</li><li><code>configVolumes(options)</code> - Returns list of volumes defined in configuration files</li><li><code>down(options)</code> - Stops containers and removes containers, networks, volumes, and images created by <code>up</code></li><li><code>exec(container, command, options)</code> - Exec <code>command</code> inside <code>container</code> - uses <code>-T</code> to properly handle stdin &amp; stdout</li><li><code>kill(options)</code> - Force stop service containers</li><li><code>logs(services, options)</code> - Show logs of service(s) - use <code>options.follow</code> <code>true|false</code> to turn on <code>--follow</code> flag</li><li><code>pauseOne(service, options)</code> - Pause the specified service</li><li><code>port(service, containerPort, options)</code> - Returns the public port of the given service and internal port.</li><li><code>ps(options)</code> - Lists containers information</li><li><code>pullAll(options)</code> - Pull all service images</li><li><code>pullMany(services, options)</code> - Pull service images specified</li><li><code>pullOne(service, options)</code> - Pull a service image</li><li><code>restartAll(options)</code> - Restart all services</li><li><code>restartMany(services, options)</code> - Restart services</li><li><code>restartOne(service, options)</code> - Restart service</li><li><code>rm(options, services)</code> - Remove stopped service containers - always uses the <code>-f</code> flag due to non interactive mode - <code>services</code> can optionally be used to select the containers to remove</li><li><code>run(service, command, options)</code> - Run a one-off <code>command</code> on a service - uses <code>-T</code> to properly handle stdin &amp; stdout</li><li><code>stop(options)</code> - Stop running containers without removing them</li><li><code>stopOne(service, options)</code> - Stops one container without removing it</li><li><code>stopMany(options,services)</code> - Stops containers without removing them</li><li><code>unpauseOne(service, options)</code> - Resume the specified service</li><li><code>upAll(options)</code> - Builds, (re)creates, starts, and attaches to containers for all services - always uses the <code>-d</code> flag due to non interactive mode</li><li><code>upMany(services, options)</code> - Builds, (re)creates, starts, and attaches to containers for the services specified in <code>services</code> - always uses the <code>-d</code> flag due to non interactive mode</li><li><code>upOne(service, options)</code> - Builds, (re)creates, starts, and attaches to containers for a service specified in <code>service</code> - always uses the <code>-d</code> flag due to non interactive mode</li><li><code>version(options)</code> - Show <code>docker-compose</code> version strings</li></ul><p>All commands return a <code>Promise({object})</code> with stdout and stderr strings and an exit code:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  out<span class="token operator">:</span> <span class="token string">&#39;stdout contents&#39;</span><span class="token punctuation">,</span>\n  err<span class="token operator">:</span> <span class="token string">&#39;stderr contents&#39;</span><span class="token punctuation">,</span>\n  exitCode<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// !== 0 in case of an error</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Although the return type is a <code>Promise</code>, it is still possible to get the process progres before the <code>Promise</code> resolves, by passing a callback function to the optional <code>callback</code> parameter.</p><h3 id="example"><a class="header-anchor" href="#example">#</a> Example</h3><p>To start service containers based on the <code>docker-compose.yml</code> file in your current directory, just call <code>compose.up</code> like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>compose<span class="token punctuation">.</span><span class="token function">upAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cwd<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span> log<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;something went wrong:&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>To get process progres</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>compose<span class="token punctuation">.</span><span class="token function">upAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n   cwd<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>chunk<span class="token operator">:</span> Buffer<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n     <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;job in progres: &#39;</span><span class="token punctuation">,</span> chunk<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;job done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    err <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;something went wrong:&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>To execute command inside a running container</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>compose<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;npm install&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cwd<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="options"><a class="header-anchor" href="#options">#</a> Options</h3><p><code>docker-compose</code> accepts these params:</p><ul><li><code>cwd {string}</code>: mandatory folder path to the <code>docker-compose.yml</code></li><li><code>executablePath {string}</code>: optional path to docker-compose executable in case it&#39;s not located in $PATH <code>/path/to/docker-compose</code></li><li><code>config {(string|string[])}</code>: custom and/or multiple yml files can be specified (relative to <code>cwd</code>)</li><li><code>configAsString {string}</code>: configuration can be provided as is, instead of relying on a file. In case <code>configAsString</code> is provided <code>config</code> will be ignored.</li><li><code>[log] {boolean}</code>: optional setting to enable console logging (output of <code>docker-compose</code> <code>stdout</code>/<code>stderr</code> output)</li><li><code>[composeOptions] string[]|Array&lt;string|string[]</code>: pass optional compose options like <code>&quot;--verbose&quot;</code> or <code>[[&quot;--verbose&quot;], [&quot;--log-level&quot;, &quot;DEBUG&quot;]]</code> or <code>[&quot;--verbose&quot;, [&quot;--loglevel&quot;, &quot;DEBUG&quot;]]</code> for <em>all</em> commands.</li><li><code>[callback] (chunk: Buffer, sourceStream?: &#39;stdout&#39; | &#39;stderr&#39;) =&gt; void</code>: optional callback function, that provides infromation about the process while it is still runing.</li><li><code>[commandOptions] string[]|Array&lt;string|string[]</code>: pass optional command options like <code>&quot;--build&quot;</code> or <code>[[&quot;--build&quot;], [&quot;--timeout&quot;, &quot;5&quot;]]</code> or <code>[&quot;--build&quot;, [&quot;--timeout&quot;, &quot;5&quot;]]</code> for the <code>up</code> command. Viable <code>commandOptions</code> depend on the command (<code>up</code>, <code>down</code> etc.) itself</li></ul><h2 id="running-the-tests"><a class="header-anchor" href="#running-the-tests">#</a> Running the tests</h2><p>While <code>docker-compose</code> runs on Node.js 6+, running the tests requires you to use Node.js 8 as they make use of <code>async/await</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn test\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="want-to-help"><a class="header-anchor" href="#want-to-help">#</a> Want to help?</h2><p>This project is just getting off the ground and could use some help with cleaning things up and refactoring.</p><p>If you want to contribute - we&#39;d love it! Just open an issue to work against so you get full credit for your fork. You can open the issue first so we can discuss and you can work your fork as we go along.</p><p>If you see a bug, please be so kind as to show how it&#39;s failing, and we&#39;ll do our best to get it fixed quickly.</p>',25),u=(0,o.Uk)("Before sending a PR, please "),d={href:"https://github.com/PDMLab/docker-compose/issues/new",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("create an issue"),k=(0,o.Uk)(" to introduce your idea and have a reference for your PR."),g=(0,o.Uk)("We're using "),h={href:"https://www.conventionalcommits.org",target:"_blank",rel:"noopener noreferrer"},f=(0,o.Uk)("conventional commits"),b=(0,o.Uk)(", so please use it for your commits as well."),v=(0,o.Wm)("p",null,[(0,o.Uk)("Also please add tests and make sure to run "),(0,o.Wm)("code",null,"yarn lint"),(0,o.Uk)(".")],-1),w=(0,o.Wm)("h3",{id:"discussions"},[(0,o.Wm)("a",{class:"header-anchor",href:"#discussions"},"#"),(0,o.Uk)(" Discussions")],-1),y=(0,o.Uk)("If you want to discuss an "),R=(0,o.Wm)("code",null,"docker-compose",-1),T=(0,o.Uk)(" issue or PR in more detail, feel free to "),O={href:"https://github.com/PDMLab/docker-compose/discussions",target:"_blank",rel:"noopener noreferrer"},A=(0,o.Uk)("start a discussion"),E=(0,o.Uk)("."),I=(0,o.Wm)("h2",{id:"license"},[(0,o.Wm)("a",{class:"header-anchor",href:"#license"},"#"),(0,o.Uk)(" License")],-1),W=(0,o.Wm)("p",null,"MIT License",-1),S=(0,o.Wm)("p",null,"Copyright (c) 2017 - 2021 PDMLab",-1),N=(0,o.Wm)("p",null,'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',-1),U=(0,o.Wm)("p",null,"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",-1),q=(0,o.Wm)("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',-1),j={render:function(n,s){const e=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[a,(0,o.Wm)("p",null,[t,c,(0,o.Wm)("a",i,[p,(0,o.Wm)(e)]),l]),r,(0,o.Wm)("p",null,[u,(0,o.Wm)("a",d,[m,(0,o.Wm)(e)]),k]),(0,o.Wm)("p",null,[g,(0,o.Wm)("a",h,[f,(0,o.Wm)(e)]),b]),v,w,(0,o.Wm)("p",null,[y,R,T,(0,o.Wm)("a",O,[A,(0,o.Wm)(e)]),E]),I,W,S,N,U,q],64)}}}}]);