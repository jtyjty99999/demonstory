(function(e){var b,c=function(g){var h={j:74,k:75,g:71,n:78,"}":221,"{":219,">":39,"<":37,"1":49,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,space:32,capslock:20};return h[g.toLowerCase()]},f=function(h){var g="";if(h.shift||h.shiftKey){g="shift_"+g}if(h.meta||h.metaKey){g="meta_"+g}if(h.ctrl||h.ctrlKey){g="ctrl_"+g}if(h.alt||h.altKey){g="alt_"+g}return g},a=function(j){var l={},h,i=[],g=[],k;if(!j.keys){return}if(e.isArray(j.keys)){e(j.keys).each(function(){var m=arguments[1];if(!/\d+/.test(m)){m=c(m)}i.push(m)});h=i.join("_")}else{if(!/\d+/.test(j.keys)){j.keys=c(j.keys)}h=j.keys}h=f(j)+h;l[h]={};l[h].method=j.handler||function(){};return l},d={};e.extend({hotKeys:function(g){if(e.isArray(g)){e(g).each(function(){e.extend(d,a(arguments[1]))})}else{e.extend(d,a(g))}e(document).keydown(function(l){if(/input|textarea/.test(l.target.tagName.toLowerCase())){if(l.keyCode===27){l.target.blur()}if((l.ctrlKey||l.metaKey)&&l.keyCode===13&&l.target.tagName.toLowerCase()==="textarea"){e(l.target).closest("form").submit()}return}var i=e(this),j=i.data("custom-hotkeys"),m=[],k,h=true;if(!j){j=[]}j.push(l.keyCode);while(j.length){k=d[f(l)+j.join("_")];if(k){m=[];if(b){window.clearInterval(b)}b=window.setInterval(function(){k.method(l)},200);k.method(l);break}m.push(j.shift())}i.data("custom-hotkeys",m)}).keyup(function(h){if(b){window.clearInterval(b)}})}})})(jQuery);