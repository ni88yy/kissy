/*
Copyright 2010, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
(function(e,l,t){var u={mix:function(i,k,o,p){if(!k||!i)return i;if(o===t)o=true;var c,a,d;if(p&&(d=p.length))for(c=0;c<d;c++){a=p[c];if(a in k)if(o||!(a in i))i[a]=k[a]}else for(a in k)if(o||!(a in i))i[a]=k[a];return i}},q=e&&e[l]||{},r=0;e=q.__HOST||(q.__HOST=e||{});l=e[l]=u.mix(q,u,false);l.mix(l,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.1.7dev",merge:function(){var i={},k,o=arguments.length;for(k=0;k<o;k++)l.mix(i,arguments[k]);return i},augment:function(){var i=
arguments,k=i.length-2,o=i[0],p=i[k],c=i[k+1],a=1;if(!l.isArray(c)){p=c;c=t;k++}if(!l.isBoolean(p)){p=t;k++}for(;a<k;a++)l.mix(o.prototype,i[a].prototype||i[a],p,c);return o},extend:function(i,k,o,p){if(!k||!i)return i;var c=Object.create?function(f,h){return Object.create(f,{constructor:{value:h}})}:function(f,h){function b(){}b.prototype=f;var g=new b;g.constructor=h;return g},a=k.prototype,d;i.prototype=d=c(a,i);i.superclass=c(a,k);o&&l.mix(d,o);p&&l.mix(i,p);return i},__init:function(){this.Config=
this.Config||{};this.Env=this.Env||{};this.Config.debug="@DEBUG@"},namespace:function(){var i=arguments,k=i.length,o=null,p,c,a,d=i[k-1]===true&&k--;for(p=0;p<k;p++){a=(""+i[p]).split(".");o=d?e:this;for(c=e[a[0]]===o?1:0;c<a.length;++c)o=o[a[c]]=o[a[c]]||{}}return o},app:function(i,k){var o=l.isString(i),p=o?e[i]||{}:i,c=0,a=l.__APP_INIT_METHODS.length;for(l.mix(p,this,true,l.__APP_MEMBERS);c<a;c++)l[l.__APP_INIT_METHODS[c]].call(p);l.mix(p,l.isFunction(k)?k():k);o&&(e[i]=p);return p},log:function(i,
k,o){if(l.Config.debug){if(o)i=o+": "+i;if(e.console!==t&&console.log)console[k&&console[k]?k:"log"](i)}},error:function(i){if(l.Config.debug)throw i;},guid:function(i){return(i||"")+r++}});l.__init();return l})(this,"KISSY");
(function(e,l){var t=e.__HOST,u=Object.prototype.toString,q=Array.prototype.indexOf,r=Array.prototype.lastIndexOf,i=Array.prototype.filter,k=String.prototype.trim,o=/^\s+|\s+$/g,p={};e.mix(e,{type:function(c){return c==null?String(c):p[u.call(c)]||"object"},isNull:function(c){return c===null},isUndefined:function(c){return c===l},isEmptyObject:function(c){for(var a in c)return false;return true},isPlainObject:function(c){return c&&u.call(c)==="[object Object]"&&"isPrototypeOf"in c},clone:function(c){var a=
c,d,f;if(c&&((d=e.isArray(c))||e.isPlainObject(c))){a=d?[]:{};for(f in c)if(c.hasOwnProperty(f))a[f]=e.clone(c[f])}return a},trim:k?function(c){return c==l?"":k.call(c)}:function(c){return c==l?"":c.toString().replace(o,"")},substitute:function(c,a,d){if(!e.isString(c)||!e.isPlainObject(a))return c;return c.replace(d||/\\?\{([^{}]+)\}/g,function(f,h){if(f.charAt(0)==="\\")return f.slice(1);return a[h]!==l?a[h]:""})},each:function(c,a,d){var f,h=0,b=c.length,g=b===l||e.type(c)==="function";d=d||t;
if(g)for(f in c){if(a.call(d,c[f],f,c)===false)break}else for(f=c[0];h<b&&a.call(d,f,h,c)!==false;f=c[++h]);return c},indexOf:q?function(c,a){return q.call(a,c)}:function(c,a){for(var d=0,f=a.length;d<f;++d)if(a[d]===c)return d;return-1},lastIndexOf:r?function(c,a){return r.call(a,c)}:function(c,a){for(var d=a.length-1;d>=0;d--)if(a[d]===c)break;return d},unique:function(c,a){a&&c.reverse();for(var d=c.slice(),f=0,h,b;f<d.length;){for(b=d[f];(h=e.lastIndexOf(b,d))!==f;)d.splice(h,1);f+=1}a&&d.reverse();
return d},inArray:function(c,a){return e.indexOf(c,a)>-1},filter:i?function(c,a,d){return i.call(c,a,d)}:function(c,a,d){var f=[];e.each(c,function(h,b,g){a.call(d,h,b,g)&&f.push(h)});return f},now:function(){return(new Date).getTime()}});e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(c,a){p["[object "+c+"]"]=a=c.toLowerCase();e["is"+c]=function(d){return e.type(d)==a}})})(KISSY);
(function(e,l){function t(b){var g=typeof b;return b===null||g!=="object"&&g!=="function"}function u(b){return Array.prototype.slice.call(b)}var q=e.__HOST,r=q.document,i=r.documentElement,k=encodeURIComponent("[]"),o=false,p=[],c=false,a=/^#?([\w-]+)$/,d=/^(\w+)\[\]$/,f=/\S/;e.mix(e,{isWindow:function(b){return e.type(b)==="object"&&"setInterval"in b},makeArray:function(b){if(b===null||b===l)return[];if(e.isArray(b))return b;if(typeof b.length!=="number"||e.isString(b)||e.isFunction(b))return[b];
return u(b)},param:function(b,g){if(!e.isPlainObject(b))return"";g=g||"&";var j=[],n,m;for(n in b){m=b[n];n=encodeURIComponent(n);if(t(m))j.push(n,"=",encodeURIComponent(m+""),g);else if(e.isArray(m)&&m.length)for(var s=0,v=m.length;s<v;++s)t(m[s])&&j.push(n,k+"=",encodeURIComponent(m[s]+""),g)}j.pop();return j.join("")},unparam:function(b,g){if(typeof b!=="string"||(b=e.trim(b)).length===0)return{};for(var j={},n=b.split(g||"&"),m,s,v,w,x=0,y=n.length;x<y;++x){m=n[x].split("=");s=decodeURIComponent(m[0]);
try{v=decodeURIComponent(m[1]||"")}catch(z){v=m[1]||""}if((w=s.match(d))&&w[1]){j[w[1]]=j[w[1]]||[];j[w[1]].push(v)}else j[s]=v}return j},globalEval:function(b){if(b&&f.test(b)){var g=r.getElementsByTagName("head")[0]||i,j=r.createElement("script");j.text=b;g.insertBefore(j,g.firstChild);g.removeChild(j)}},later:function(b,g,j,n,m){g=g||0;n=n||{};var s=b,v=e.makeArray(m),w;if(e.isString(b))s=n[b];s||e.error("method undefined");b=function(){s.apply(n,v)};w=j?setInterval(b,g):setTimeout(b,g);return{id:w,
interval:j,cancel:function(){this.interval?clearInterval(w):clearTimeout(w)}}},ready:function(b){c||this._bindReady();o?b.call(q,this):p.push(b);return this},_bindReady:function(){var b=this,g=r.documentElement.doScroll,j=g?"onreadystatechange":"DOMContentLoaded",n=function(){b._fireReady()};c=true;if(r.readyState==="complete")return n();if(r.addEventListener){var m=function(){r.removeEventListener(j,m,false);n()};r.addEventListener(j,m,false);q.addEventListener("load",n,false)}else{var s=function(){if(r.readyState===
"complete"){r.detachEvent(j,s);n()}};r.attachEvent(j,s);q.attachEvent("onload",n);var v=false;try{v=q.frameElement==null}catch(w){}if(g&&v){var x=function(){try{g("left");n()}catch(y){setTimeout(x,1)}};x()}}},_fireReady:function(){if(!o){o=true;if(p){for(var b,g=0;b=p[g++];)b.call(q,this);p=null}}},available:function(b,g){if((b=(b+"").match(a)[1])&&e.isFunction(g))var j=1,n=e.later(function(){if(r.getElementById(b)&&(g()||1)||++j>500)n.cancel()},40,true)}});try{u(i.childNodes)}catch(h){u=function(b){for(var g=
[],j=b.length-1;j>=0;j--)g[j]=b[j];return g}}if(location&&(location.search||"").indexOf("ks-debug")!==-1)e.Config.debug=true})(KISSY);
(function(e,l){var t=e.__HOST.document,u=t.getElementsByTagName("head")[0]||t.documentElement,q=2,r=3,i=4,k=e.mix,o=t.createElement("script").readyState?function(a,d){var f=a.onreadystatechange;a.onreadystatechange=function(){var h=a.readyState;if(h==="loaded"||h==="complete"){a.onreadystatechange=null;f&&f();d.call(this)}}}:function(a,d){a.addEventListener("load",d,false)},p=/\.css(?:\?|$)/i,c;c={add:function(a,d,f){var h=this.Env.mods,b;if(e.isString(a)&&!f&&e.isPlainObject(d)){b={};b[a]=d;a=b}if(e.isPlainObject(a)){e.each(a,
function(g,j){g.name=j;h[j]&&k(g,h[j],false)});k(h,a)}else{f=f||{};b=h[a]||{};a=f.host||b.host||a;b=h[a]||{};k(b,{name:a,status:q});if(!b.fns)b.fns=[];d&&b.fns.push(d);d=b.requires;k(h[a]=b,f);h[a].requires=d;b.attach!==false&&this.__isAttached(b.requires)&&this.__attachMod(b)}return this},use:function(a,d,f){a=a.replace(/\s+/g,"").split(",");f=f||{};var h=this,b=h.Env.mods,g=(f||0).global,j,n=a.length,m,s,v;g&&h.__mixMods(g);if(h.__isAttached(a))d&&d(h);else{for(j=0;j<n&&(m=b[a[j]]);j++)if(m.status!==
i){if(f.order&&j>0){if(!m.requires)m.requires=[];m._requires=m.requires.concat();s=a[j-1];if(!e.inArray(s,m.requires)&&!e.inArray(m.name,b[s].requires||[]))m.requires.push(s)}h.__attach(m,function(){if(m._requires){m.requires=m._requires;delete m._requires}if(!v&&h.__isAttached(a)){v=true;d&&d(h)}},g)}return h}},__attach:function(a,d,f){function h(){if(b.__isAttached(a.requires||[])){a.status===q&&b.__attachMod(a);a.status===i&&d()}}for(var b=this,g=a.requires||[],j=0,n=g.length;j<n;j++)b.__attach(b.Env.mods[g[j]],
h,f);b.__buildPath(a);b.__load(a,h,f)},__mixMods:function(a){var d=this.Env.mods,f=a.Env.mods,h;for(h in f)this.__mixMod(d,f,h,a)},__mixMod:function(a,d,f,h){var b=a[f]||{},g=b.status;e.mix(b,e.clone(d[f]));if(g)b.status=g;h&&this.__buildPath(b,h.Config.base);a[f]=b},__attachMod:function(a){var d=this;if(a.fns){e.each(a.fns,function(f){f&&f(d)});a.fns=l}a.status=i},__isAttached:function(a){for(var d=this.Env.mods,f,h=(a=e.makeArray(a)).length-1;h>=0&&(f=d[a[h]]);h--)if(f.status!==i)return false;return true},
__load:function(a,d,f){function h(){j[g]=q;if(a.status!==r){f&&b.__mixMod(b.Env.mods,f.Env.mods,a.name,f);if(a.status!==i)a.status=q;d()}}var b=this,g=a.fullpath,j=e.Env._loadQueue,n=j[g];a.status=a.status||0;if(a.status<1&&n)a.status=n.nodeName?1:q;if(e.isString(a.cssfullpath)){b.getScript(a.cssfullpath);a.cssfullpath=q}if(a.status<1&&g){a.status=1;n=b.getScript(g,{success:function(){KISSY.log(a.name+" is loaded.","info");h()},error:function(){a.status=r;j[g]=q},charset:a.charset});p.test(g)||(j[g]=
n)}else a.status===1?o(n,h):d()},__buildPath:function(a,d){function f(b,g){if(!a[g]&&a[b])a[g]=(d||h.base)+a[b];if(a[g]&&h.debug)a[g]=a[g].replace(/-min/g,"")}var h=this.Config;f("path","fullpath");a.cssfullpath!==q&&f("csspath","cssfullpath")},getScript:function(a,d,f){var h=p.test(a),b=t.createElement(h?"link":"script"),g=d,j,n,m;if(e.isPlainObject(g)){d=g.success;j=g.error;n=g.timeout;f=g.charset}if(h){b.href=a;b.rel="stylesheet"}else{b.src=a;b.async=true}if(f)b.charset=f;if(h)e.isFunction(d)&&
d.call(b);else o(b,function(){if(m){m.cancel();m=l}e.isFunction(d)&&d.call(b);u&&b.parentNode&&u.removeChild(b)});if(e.isFunction(j))m=e.later(function(){m=l;j()},(n||this.Config.timeout)*1E3);u.insertBefore(b,u.firstChild);return b}};k(e,c);e.__initLoader=function(){var a=t.getElementsByTagName("script");a=a[a.length-1].src.replace(/^(.*)(seed|kissy).*$/i,"$1");this.Env.mods={};this.Env._loadQueue={};this.Config.base=a;this.Config.timeout=10};e.__initLoader();e.each(c,function(a,d){e.__APP_MEMBERS.push(d)});
e.__APP_INIT_METHODS.push("__initLoader")})(KISSY);(function(e){var l={core:{path:"packages/core-min.js",charset:"utf-8"}};e.each(["sizzle","dd","datalazyload","flash","switchable","suggest","calendar","uibase","overlay","imagezoom"],function(t){l[t]={path:t+"/"+t+"-pkg-min.js",requires:["core"],charset:"utf-8"}});l.calendar.csspath="calendar/default-min.css";l.overlay.requires=["uibase"];e.add(l)})(KISSY);