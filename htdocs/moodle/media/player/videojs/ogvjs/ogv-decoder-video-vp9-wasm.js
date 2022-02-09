
var OGVDecoderVideoVP9W = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(OGVDecoderVideoVP9W) {
  OGVDecoderVideoVP9W = OGVDecoderVideoVP9W || {};


var a;a||(a=typeof OGVDecoderVideoVP9W !== 'undefined' ? OGVDecoderVideoVP9W : {});var aa,n;a.ready=new Promise(function(b,c){aa=b;n=c});var ba=a,p={},q;for(q in a)a.hasOwnProperty(q)&&(p[q]=a[q]);var ca="object"===typeof window,w="function"===typeof importScripts,x="",da,y,z,C,F;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)x=w?require("path").dirname(x)+"/":__dirname+"/",da=function(b,c){C||(C=require("fs"));F||(F=require("path"));b=F.normalize(b);return C.readFileSync(b,c?null:"utf8")},z=function(b){b=da(b,!0);b.buffer||(b=new Uint8Array(b));b.buffer||G("Assertion failed: undefined");return b},y=function(b,c,e){C||(C=require("fs"));F||(F=require("path"));b=F.normalize(b);C.readFile(b,function(d,f){d?e(d):c(f.buffer)})},
1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("unhandledRejection",G),a.inspect=function(){return"[Emscripten Module object]"};else if(ca||w)w?x=self.location.href:"undefined"!==typeof document&&document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),0!==x.indexOf("blob:")?x=x.substr(0,x.lastIndexOf("/")+1):x="",da=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},w&&(z=function(b){var c=
new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),y=function(b,c,e){var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};a.print||console.log.bind(console);var H=a.printErr||console.warn.bind(console);for(q in p)p.hasOwnProperty(q)&&(a[q]=p[q]);p=null;var ja=0,I;a.wasmBinary&&(I=a.wasmBinary);
var noExitRuntime=a.noExitRuntime||!0;"object"!==typeof WebAssembly&&G("no native wasm support detected");var J,ka=!1,la,ma;function na(){var b=J.buffer;la=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=new Int32Array(b);a.HEAPU8=ma=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var K,oa=[],pa=[],qa=[];function ra(){var b=a.preRun.shift();oa.unshift(b)}var L=0,sa=null,M=null;
a.preloadedImages={};a.preloadedAudios={};function G(b){if(a.onAbort)a.onAbort(b);H(b);ka=!0;b=new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");n(b);throw b;}function ta(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="ogv-decoder-video-vp9-wasm.wasm";if(!ta()){var ua=N;N=a.locateFile?a.locateFile(ua,x):x+ua}
function va(){var b=N;try{if(b==N&&I)return new Uint8Array(I);if(z)return z(b);throw"both async and sync fetching of the wasm failed";}catch(c){G(c)}}
function wa(){if(!I&&(ca||w)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+N+"'";return b.arrayBuffer()}).catch(function(){return va()});if(y)return new Promise(function(b,c){y(N,function(e){b(new Uint8Array(e))},c)})}return Promise.resolve().then(function(){return va()})}
function xa(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var e=c.D;"number"===typeof e?void 0===c.B?K.get(e)():K.get(e)(c.B):e(void 0===c.B?null:c.B)}}}
var Sa={m:function(){throw"longjmp";},k:function(b,c,e){ma.copyWithin(b,c,c+e)},l:function(b){var c=ma.length;b>>>=0;if(2147483648<b)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,b+100663296);d=Math.max(b,d);0<d%65536&&(d+=65536-d%65536);a:{try{J.grow(Math.min(2147483648,d)-la.byteLength+65535>>>16);na();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},a:function(){return ja},d:Ja,f:Ka,i:La,g:Ma,e:Na,c:Oa,j:Pa,h:Qa,n:function(b,c,e,d,f,g,h,k,r,u,v,O,T,U,ea,fa){function ha(D,
t,A,ia,ya,za,Ta,Ua,V){if(Ra){var l=new Float64Array(D.buffer);t=new Float64Array(Aa,t,A*ia>>3);l.set(t)}else D.set(new Uint8Array(Aa,t,A*ia));var B;for(t=B=0;t<za;t++,B+=A)for(l=0;l<A;l++)D[B+l]=V;for(;t<za+Ua;t++,B+=A){for(l=0;l<ya;l++)D[B+l]=V;for(l=ya+Ta;l<A;l++)D[B+l]=V}for(;t<ia;t++,B+=A)for(l=0;l<A;l++)D[B+l]=V;return D}var Aa=J.buffer,m=a.videoFormat,Ba=(T&-2)*r/h,Ca=(U&-2)*u/k,Da=v*r/h,Ea=O*u/k;v===m.cropWidth&&O===m.cropHeight&&(ea=m.displayWidth,fa=m.displayHeight);for(var Fa=a.recycledFrames,
E,Ga=k*c,Ha=u*d,Ia=u*g;0<Fa.length;){var P=Fa.shift();m=P.format;if(m.width===h&&m.height===k&&m.chromaWidth===r&&m.chromaHeight===u&&m.cropLeft===T&&m.cropTop===U&&m.cropWidth===v&&m.cropHeight===O&&m.displayWidth===ea&&m.displayHeight===fa&&P.y.bytes.length===Ga&&P.u.bytes.length===Ha&&P.v.bytes.length===Ia){E=P;break}}E||(E={format:{width:h,height:k,chromaWidth:r,chromaHeight:u,cropLeft:T,cropTop:U,cropWidth:v,cropHeight:O,displayWidth:ea,displayHeight:fa},y:{bytes:new Uint8Array(Ga),stride:c},
u:{bytes:new Uint8Array(Ha),stride:d},v:{bytes:new Uint8Array(Ia),stride:g}});ha(E.y.bytes,b,c,k,T,U,v,O,0);ha(E.u.bytes,e,d,u,Ba,Ca,Da,Ea,128);ha(E.v.bytes,f,g,u,Ba,Ca,Da,Ea,128);a.frameBuffer=E},b:function(b){ja=b}};
(function(){function b(f){a.asm=f.exports;J=a.asm.o;na();K=a.asm.v;pa.unshift(a.asm.p);L--;a.monitorRunDependencies&&a.monitorRunDependencies(L);0==L&&(null!==sa&&(clearInterval(sa),sa=null),M&&(f=M,M=null,f()))}function c(f){b(f.instance)}function e(f){return wa().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){H("failed to asynchronously prepare wasm: "+g);G(g)})}var d={a:Sa};L++;a.monitorRunDependencies&&a.monitorRunDependencies(L);if(a.instantiateWasm)try{return a.instantiateWasm(d,
b)}catch(f){return H("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return I||"function"!==typeof WebAssembly.instantiateStreaming||ta()||N.startsWith("file://")||"function"!==typeof fetch?e(c):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(c,function(g){H("wasm streaming compile failed: "+g);H("falling back to ArrayBuffer instantiation");return e(c)})})})().catch(n);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.p).apply(null,arguments)};a._ogv_video_decoder_init=function(){return(a._ogv_video_decoder_init=a.asm.q).apply(null,arguments)};a._ogv_video_decoder_async=function(){return(a._ogv_video_decoder_async=a.asm.r).apply(null,arguments)};a._ogv_video_decoder_destroy=function(){return(a._ogv_video_decoder_destroy=a.asm.s).apply(null,arguments)};
a._ogv_video_decoder_process_header=function(){return(a._ogv_video_decoder_process_header=a.asm.t).apply(null,arguments)};a._ogv_video_decoder_process_frame=function(){return(a._ogv_video_decoder_process_frame=a.asm.u).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.w).apply(null,arguments)};a._free=function(){return(a._free=a.asm.x).apply(null,arguments)};
var Q=a.stackSave=function(){return(Q=a.stackSave=a.asm.y).apply(null,arguments)},R=a.stackRestore=function(){return(R=a.stackRestore=a.asm.z).apply(null,arguments)},S=a._setThrew=function(){return(S=a._setThrew=a.asm.A).apply(null,arguments)};function La(b,c,e,d,f){var g=Q();try{return K.get(b)(c,e,d,f)}catch(h){R(g);if(h!==h+0&&"longjmp"!==h)throw h;S(1,0)}}function Oa(b,c,e,d,f){var g=Q();try{K.get(b)(c,e,d,f)}catch(h){R(g);if(h!==h+0&&"longjmp"!==h)throw h;S(1,0)}}
function Qa(b,c,e,d,f,g,h,k,r){var u=Q();try{K.get(b)(c,e,d,f,g,h,k,r)}catch(v){R(u);if(v!==v+0&&"longjmp"!==v)throw v;S(1,0)}}function Ma(b,c,e,d,f,g){var h=Q();try{return K.get(b)(c,e,d,f,g)}catch(k){R(h);if(k!==k+0&&"longjmp"!==k)throw k;S(1,0)}}function Ka(b,c,e,d){var f=Q();try{return K.get(b)(c,e,d)}catch(g){R(f);if(g!==g+0&&"longjmp"!==g)throw g;S(1,0)}}function Pa(b,c,e,d,f,g,h){var k=Q();try{K.get(b)(c,e,d,f,g,h)}catch(r){R(k);if(r!==r+0&&"longjmp"!==r)throw r;S(1,0)}}
function Ja(b,c,e){var d=Q();try{return K.get(b)(c,e)}catch(f){R(d);if(f!==f+0&&"longjmp"!==f)throw f;S(1,0)}}function Na(b,c){var e=Q();try{K.get(b)(c)}catch(d){R(e);if(d!==d+0&&"longjmp"!==d)throw d;S(1,0)}}var W;M=function Va(){W||Wa();W||(M=Va)};
function Wa(){function b(){if(!W&&(W=!0,a.calledRun=!0,!ka)){xa(pa);aa(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();qa.unshift(c)}xa(qa)}}if(!(0<L)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ra();xa(oa);0<L||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=Wa;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();Wa();var X,Xa,Y;"undefined"===typeof performance||"undefined"===typeof performance.now?Y=Date.now:Y=performance.now.bind(performance);function Z(b){var c=Y();b=b();a.cpuTime+=Y()-c;return b}a.loadedMetadata=!!ba.videoFormat;a.videoFormat=ba.videoFormat||null;a.frameBuffer=null;a.cpuTime=0;Object.defineProperty(a,"processing",{get:function(){return!1}});
a.init=function(b){Z(function(){a._ogv_video_decoder_init()});b()};a.processHeader=function(b,c){var e=Z(function(){var d=b.byteLength;X&&Xa>=d||(X&&a._free(X),Xa=d,X=a._malloc(Xa));var f=X;(new Uint8Array(J.buffer,f,d)).set(new Uint8Array(b));return a._ogv_video_decoder_process_header(f,d)});c(e)};a.C=[];
a.processFrame=function(b,c){function e(k){a._free(g);c(k)}var d=a._ogv_video_decoder_async(),f=b.byteLength,g=a._malloc(f);d&&a.C.push(e);var h=Z(function(){(new Uint8Array(J.buffer,g,f)).set(new Uint8Array(b));return a._ogv_video_decoder_process_frame(g,f)});d||e(h)};a.close=function(){};a.sync=function(){a._ogv_video_decoder_async()&&(a.C.push(function(){}),Z(function(){a._ogv_video_decoder_process_frame(0,0)}))};a.recycledFrames=[];
a.recycleFrame=function(b){var c=a.recycledFrames;c.push(b);16<c.length&&c.shift()};var Ra="object"===typeof navigator&&navigator.userAgent.match(/Trident/);


  return OGVDecoderVideoVP9W.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoVP9W;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDecoderVideoVP9W; });
else if (typeof exports === 'object')
  exports["OGVDecoderVideoVP9W"] = OGVDecoderVideoVP9W;
