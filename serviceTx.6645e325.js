!function(t){function e(e){for(var r,a,i=e[0],p=e[1],s=e[2],f=0,l=[];f<i.length;f++)a=i[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);for(c&&c(e);l.length;)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var p=n[i];0!==o[p]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={3:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=p;u.push([19,0]),n()}({16:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u});var r="P2SH-P2WPKH",o="P2WPKH",u=["P2PKH","P2SH",r,"P2SH-P2WSH",o,"P2WSH"]},19:function(t,e,n){"use strict";n.r(e);var r=n(16),o=n(31),u=o.networks.bitcoin,a={setTestnet:function(t){u=t?o.networks.testnet:o.networks.bitcoin},decodeTx:function(t){return o.Transaction.fromHex(t)},createTx:function(t,e){console.log("Start forging TX.");var n=new o.TransactionBuilder(u);n.setVersion(1),console.log("Add the inputs."),t.forEach(function(t){if(!Object.prototype.hasOwnProperty.call(t,"prevTxHash"))throw new Error("The Tx hash for the input was not found.");if(!Object.prototype.hasOwnProperty.call(t,"prevTxIndex"))throw new Error("The previous Tx output index for the input was not found.");if(!Object.prototype.hasOwnProperty.call(t,"privateKey"))throw new Error("The previous Tx output privateKey for the input was not found.");n.addInput(t.prevTxHash,t.prevTxIndex)}),console.log("Add the outputs."),e.forEach(function(t){if(!Object.prototype.hasOwnProperty.call(t,"address"))throw new Error("The address for the output was not found.");if(!Object.prototype.hasOwnProperty.call(t,"amount"))throw new Error("The amount for the output was not found.");n.addOutput(t.address,t.amount)}),console.log("Sign the inputs.");for(var a=0;a<t.length;a+=1){var i=t[a],p=o.ECPair.fromWIF(i.privateKey,u),s=void 0,c=void 0;switch(i.type){case r.a:s=o.payments.p2wpkh({pubkey:p.publicKey,network:u}),c=o.payments.p2sh({redeem:s,network:u}),n.sign(a,p,c.redeem.output,null,i.amount);break;case r.b:s=o.payments.p2wpkh({pubkey:p.publicKey,network:u}),n.sign(a,p,s.redeem.output,null,i.amount);break;default:n.sign(a,p)}}return console.log("Build TX."),n.build()}};e.default=a},36:function(t,e){},37:function(t,e){},42:function(t,e){},43:function(t,e){}});