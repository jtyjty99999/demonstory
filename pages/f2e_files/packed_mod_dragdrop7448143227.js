$(function(){var a={opacity:0.6,handle:".hd h2",placeholder:"sort_helper",connectWith:".drop-area",items:".sort",scroll:true,tolerance:"pointer",start:function(c,b){b.placeholder.height(b.helper.height()-4);b.placeholder.css("margin-bottom",b.helper.css("margin-bottom"))},change:function(d,c){var f=c.placeholder,b=c.item[0];if($(b).hasClass("vonly")&&this!==b.parentNode){f.html("此模块只能垂直拖动")}else{f.html("")}},stop:function(g,f){var c=f.item[0],i=c.id.toLowerCase(),b=c.parentNode,h=$(b).hasClass("aside")?"r":"l",d=[];r_mods=[];if(this!==b){if($(c).hasClass("vonly")){$(this).sortable("cancel")}else{$.getJSON("/j/widget/"+i.split("-").join("/")+"/?pos="+h,function(e){$(c).replaceWith(e.html)})}}$(".main .sort").each(function(){var e=$(this).find("#extra")[0];d.push(e?this.id+e.value:this.id)});$(".aside .sort").each(function(){var e=$(this).find("#extra")[0];r_mods.push(e?this.id+e.value:this.id)});$.post(mine_page_url,{mods:d.join(","),r_mods:r_mods.join(","),ck:get_cookie("ck")})}};$(function(){$(".main").addClass("drop-area").sortable(a);if($(".aside").length){$(".aside").addClass("drop-area").sortable(a)}})});