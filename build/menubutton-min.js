/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("menubutton/menubutton",function(i,e,f,d,g){var h=e.create(d,{hideMenu:function(){this.get("view").get("el");this.get("menu").hide();this.get("view").set("collapsed",true)},showMenu:function(){var b=this.get("view"),a=b.get("el"),c=this.get("menu");if(!c.get("visible")){c.set("align",{node:a,points:["bl","tl"]});c.show();a.attr("aria-haspopup",c.get("view").get("el").attr("id"));b.set("collapsed",false)}},bindUI:function(){var b=this,a=this.get("menu");a.on("afterActiveItemChange",function(c){b.set("activeItem",
c.newVal)});a.on("click",function(c){b.fire("click",{target:c.target})})},_handleKeydown:function(b){var a=this.get("menu");if(a&&a.get("visible"))if(a._handleKeydown(b)===false)return false;if(b.keyCode==27){b.preventDefault();this.hideMenu()}else if(b.keyCode==38||b.keyCode==40)if(!a.get("visible")){b.preventDefault();this.showMenu()}},_handleBlur:function(){var b=h.superclass._handleBlur.call(this);if(b===false)return b;this.hideMenu()},_handleClick:function(b){var a=d.superclass._handleClick.call(this);
if(a===false)return a;a=this.get("menu");if(b.type=="click")a.get("visible")?this.hideMenu():this.showMenu();else if(b.type=="keydown")if(b.keyCode==13)a.get("visible")&&a._handleClick(b);else b.keyCode==32&&this.showMenu()}},{ATTRS:{activeItem:{view:true},menu:{}}});h.DefaultRender=g;return h},{requires:["uibase","node","button","./menubuttonrender"]});
KISSY.add("menubutton/menubuttonrender",function(i,e,f){return e.create(f.Render,{renderUI:function(){var d=this.get("el");d.one("div").one("div").html(i.substitute('<div class="{prefixCls}inline-block {prefixCls}menu-button-caption"></div><div class="{prefixCls}inline-block {prefixCls}menu-button-dropdown">&nbsp;</div>',{prefixCls:this.get("prefixCls")}));d.attr("aria-haspopup",true)},_uiSetContent:function(d){d!=undefined&&this.get("el").one("."+this.get("prefixCls")+"menu-button-caption").html(d)},
_uiSetCollapsed:function(d){var g=this.get("el"),h=this.get("prefixCls")+"menu-button";if(d){g.removeClass(h+"menu-button-open");g.attr("aria-expanded",false)}else{g.addClass(h+"menu-button-open");g.attr("aria-expanded",true)}},_uiSetActiveItem:function(d){this.get("el").attr("aria-activedescendant",d&&d.get("view").get("el").attr("id")||"")}},{ATTRS:{activeItem:{},collapsed:{value:true}}})},{requires:["uibase","button"]});
KISSY.add("menubutton/option",function(i,e,f){return e.create(f,{},{ATTRS:{selectable:{value:true}}})},{requires:["uibase","menu/menuitem"]});
KISSY.add("menubutton/select",function(i,e,f,d,g,h){var b=f.create(d,{bindUI:function(){this.on("click",this.handleMenuClick,this);this.get("menu").on("show",this._handleMenuShow,this)},_handleMenuShow:function(){this.get("menu").set("highlightedItem",this.get("selectedItem")||this.get("menu").getChildAt(0))},updateCaption_:function(){var a=this.get("selectedItem");this.set("content",a?a.get("content"):this.get("defaultCaption"))},handleMenuClick:function(a){this.set("selectedItem",a.target);this.hideMenu()},
_uiSetSelectedItem:function(a,c){c&&c.prevVal&&c.prevVal.set("selected",false);this.set("value",a&&a.get("value"));this.updateCaption_()},_uiSetDefaultCaption:function(){this.updateCaption_()},_uiSetValue:function(a){for(var c=this.get("menu").get("children"),j=0;j<c.length;j++){var l=c[j];if(l.get("value")==a){this.set("selectedItem",l);return}}this.set("selectedItem",null)}},{ATTRS:{selectedItem:{},selectedIndex:{setter:function(a){this.set("selectedItem",this.get("menu").getChildAt(a))},getter:function(){return i.indexOf(this.get("selectedItem"),
this.get("menu").get("children"))}},defaultCaption:{}}});b.decorate=function(a,c){a=i.one(a);var j=new g({prefixCls:c.prefixCls}),l,m=a.val();a.all("option").each(function(k){if(m==k.val())l=k.text();j.addChild(new h({content:k.text(),prefixCls:c.prefixCls,value:k.val()}))});var n=new b({content:l,menu:j,defaultCaption:c.defaultCaption,prefixCls:c.prefixCls,autoRender:true});n.get("el").insertBefore(a);var o;if(o=a.attr("name")){var p=(new e("<input type='hidden' name='"+o+"' value='"+m+"'>")).insertBefore(a);
j.on("click",function(k){p.val(k.target.get("value"))})}a.remove();return n};return b},{requires:["node","uibase","./menubutton","menu/menu","./option"]});KISSY.add("menubutton",function(i,e,f,d){e.Render=f;e.Select=d;return e},{requires:["menubutton/menubutton","menubutton/menubuttonrender","menubutton/select"]});