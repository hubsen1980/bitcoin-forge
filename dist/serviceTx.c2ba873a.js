!function(t){function e(e){for(var n,a,i=e[0],p=e[1],s=e[2],l=0,c=[];l<i.length;l++)a=i[l],o[a]&&c.push(o[a][0]),o[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);for(f&&f(e);c.length;)c.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,i=1;i<r.length;i++){var p=r[i];0!==o[p]&&(n=!1)}n&&(u.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={3:0},u=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var f=p;u.push([166,0]),r()}({166:function(t,e,r){var n=r(31),o=n.networks.bitcoin;e.setTestnet=function(t){o=t?n.networks.testnet:n.networks.bitcoin},e.createTx=function(t,e){console.log("Start forging TX.");var r=new n.TransactionBuilder(o);r.setVersion(1),console.log("Add the inputs.");var u=[];t.forEach(function(t){if(!Object.prototype.hasOwnProperty.call(t,"txhash"))throw new Error("The Tx hash for the input was not found.");if(!Object.prototype.hasOwnProperty.call(t,"index"))throw new Error("The Tx output index for the input was not found.");if(!Object.prototype.hasOwnProperty.call(t,"privateKey"))throw new Error("The Tx output privateKey for the input was not found.");r.addInput(t.txhash,t.index);var e=n.ECPair.fromWIF(t.privateKey,o);u.push(e)}),console.log("Add the outputs."),e.forEach(function(t){if(!Object.prototype.hasOwnProperty.call(t,"address"))throw new Error("The address for the output was not found.");if(!Object.prototype.hasOwnProperty.call(t,"amount"))throw new Error("The amount for the output was not found.");r.addOutput(t.address,t.amount)}),console.log("Sign the inputs.");for(var a=0;a<u.length;a+=1){var i=u[a],p=!1;if(Object.prototype.hasOwnProperty.call(t[a],"amount")&&(p=!0),p){var s=n.payments.p2wpkh({pubkey:i.publicKey,network:o}),f=n.payments.p2sh({redeem:s,network:o});r.sign(a,i,f.redeem.output,null,t[a].amount)}else r.sign(a,i)}return console.log("Build TX."),r.build()}},32:function(t,e){},33:function(t,e){},38:function(t,e){},39:function(t,e){}});