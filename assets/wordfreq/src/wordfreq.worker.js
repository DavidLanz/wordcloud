/*! wordcloud-app  2014-08-22 */
"use strict";!function(a){var b=function(){var a={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},b={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""};return function(c){var d,e,f,g,h;return c.length<3?c:(f=c.substr(0,1),"y"==f&&(c=f.toUpperCase()+c.substr(1)),g=/^(.+?)(ss|i)es$/,e=/^(.+?)([^s])s$/,g.test(c)?c=c.replace(g,"$1$2"):e.test(c)&&(c=c.replace(e,"$1$2")),g=/^(.+?)eed$/,e=/^(.+?)(ed|ing)$/,g.test(c)?(e=g.exec(c),g=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,g.test(e[1])&&(g=/.$/,c=c.replace(g,""))):e.test(c)&&(e=e.exec(c),d=e[1],e=/^([^aeiou][^aeiouy]*)?[aeiouy]/,e.test(d)&&(c=d,e=/(at|bl|iz)$/,h=/([^aeiouylsz])\1$/,d=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,e.test(c)?c+="e":h.test(c)?(g=/.$/,c=c.replace(g,"")):d.test(c)&&(c+="e"))),g=/^(.+?)y$/,g.test(c)&&(e=g.exec(c),d=e[1],g=/^([^aeiou][^aeiouy]*)?[aeiouy]/,g.test(d)&&(c=d+"i")),g=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,g.test(c)&&(e=g.exec(c),d=e[1],e=e[2],g=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,g.test(d)&&(c=d+a[e])),g=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,g.test(c)&&(e=g.exec(c),d=e[1],e=e[2],g=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,g.test(d)&&(c=d+b[e])),g=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,e=/^(.+?)(s|t)(ion)$/,g.test(c)?(e=g.exec(c),d=e[1],g=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,g.test(d)&&(c=d)):e.test(c)&&(e=e.exec(c),d=e[1]+e[2],e=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,e.test(d)&&(c=d)),g=/^(.+?)e$/,g.test(c)&&(e=g.exec(c),d=e[1],g=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,e=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/,h=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,(g.test(d)||e.test(d)&&!h.test(d))&&(c=d)),g=/ll$/,e=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,g.test(c)&&e.test(c)&&(g=/.$/,c=c.replace(g,"")),"y"==f&&(c=f.toLowerCase()+c.substr(1)),c)}}(),c=function(a){var c=[],d=Object.create(null);a=a||{},a.languages=a.languages||["chinese","english"],a.stopWordSets=a.stopWordSets||["cjk","english1","english2"],Array.isArray(a.stopWords)||(a.stopWords=[]),a.stopWordSets.forEach(function(b){switch(b){case"cjk":a.stopWords=a.stopWords.concat(["を","です","する","の","れら"]);break;case"english1":a.stopWords=a.stopWords.concat(["i","a","about","an","and","are","as","at","be","been","by","com","for","from","how","in","is","it","not","of","on","or","that","the","this","to","was","what","when","where","which","who","will","with","www","the"]);break;case"english2":a.stopWords=a.stopWords.concat(["we","us","our","ours","they","them","their","he","him","his","she","her","hers","it","its","you","yours","your","has","have","would","could","should","shall","can","may","if","then","else","but","there","these","those"])}}),"boolean"!=typeof a.filterSubstring&&(a.filterSubstring=!0),a.maxiumPhraseLength=a.maxiumPhraseLength||8,a.minimumCount=a.minimumCount||2;var e=function f(a,b){if(!a.length)return[];var c=[],d=Math.min(a.length,b);do c.push(a.substr(0,d));while(--d);return a.length>1&&(c=c.concat(f(a.substr(1),b))),c};return{process:function(f){if("string"!=typeof f)throw"You need to supply text for processing.";if(-1!==a.languages.indexOf("english")){var g=Object.create(null),h=f.split(/[^A-Za-zéÉ'’_\-0-9@\.]+/),i=a.stopWords;h.forEach(function(a){if(a=a.replace(/\.+/g,".").replace(/(.{3,})\.$/g,"$1").replace(/n[\'’]t\b/gi,"").replace(/[\'’](s|ll|d|ve)?\b/gi,""),a&&!(a.length<2)&&!/^[0-9\.@\-]+$/.test(a)&&-1===i.indexOf(a.toLowerCase())){var c=b(a).toLowerCase();c in g||(g[c]={count:0,word:a}),g[c].count++,a.length<g[c].word.length&&(g[c].word=a),a.length===g[c].word.length&&a!==g[c].word&&(g[c].word=a.toLowerCase())}});for(var j in g){var k=g[j].word;k in d?d[k]+=g[j].count:d[k]=g[j].count}g=void 0}if(-1!==a.languages.indexOf("chinese")){var l=/[^\u4E00-\u9FFF\u3400-\u4DBF]+/g;f=f.replace(l,"\n"),a.stopWords.forEach(function(a){/^[\u4E00-\u9FFF\u3400-\u4DBF]+$/.test(a)&&(f=f.replace(new RegExp(a,"g"),"$1\n"))});var m=f.split(/\n+/),n=Object.create(null);if(m.forEach(function(b){if(!(b.length<=1)){var c=e(b,a.maxiumPhraseLength);c.forEach(function(a){a.length<=1||(a in n||(n[a]=0),n[a]++)})}}),a.filterSubstring)for(var k in n){var o=e(k,a.maxiumPhraseLength);o.forEach(function(a){k!==a&&a in n&&n[a]===n[k]&&delete n[a]})}for(var k in n)k in d||(d[k]=0),d[k]+=n[k];n=void 0}c=[];for(var k in d)d[k]<a.minimumCount||c.push([k,d[k]]);return c=c.sort(function(a,b){if(a[1]>b[1])return-1;if(a[1]<b[1])return 1;if(a[0]===b[0])return 0;var c=[a[0],b[0]].sort();return c[0]!==a[0]?1:-1})},empty:function(){return c=[],d=Object.create(null),!0},getList:function(){return c},getLength:function(){return c.length},getVolume:function(){var a=0;return c.forEach(function(b){a+=b[0].length*Math.pow(b[1],2)}),a},stop:function(){}}};if(c.isSupported=!!(Array.prototype.push&&Array.prototype.indexOf&&Array.prototype.forEach&&Array.isArray&&Object.create),"function"==typeof define&&define.amd)define("wordfreqsync",[],function(){return c});else if("object"==typeof module&&a===module.exports)module.exports=c,require.main===module&&console.error("Error: WordFreqSync is not meant to be executed directly.");else if(a.WordFreqSync=c,"self"in a&&!("window"in a&&window===a)&&!self.onmessage&&self.postMessage&&self.importScripts){var d;self.onmessage=function(b){var e=b.data,f=e.method,g=e.params;if("init"===f)return d=c.apply(a,g),void self.postMessage(!0);if(!d)throw"You must init to create an instance first";if(!f||!d[f])throw"No such method";var h=d[f].apply(d,g);self.postMessage(h)}}}(this);