System.register(["./p-050fe179.system.js"],(function(e){"use strict";var t,i,s,n,r;return{setters:[function(e){t=e.r;i=e.c;s=e.h;n=e.H;r=e.g}],execute:function(){var a='@charset "UTF-8";:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;cursor:default;white-space:nowrap;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host(.chip){border-radius:8px;padding:3px 8px}:host(.chip--primary){background:#daf2f4;color:#2cc3d5}:host(.chip--click.chip--primary:hover){background:#ade7ee;color:#2498a8}:host(.chip--default){background:#e7eef1;color:#8ca0b3}:host(.chip--danger){background:#ffd6d7;color:#ff5a60}:host(.chip--standard){height:24px;font-size:0.75rem}:host(.chip--tall){height:32px;font-size:0.875rem}.chip__delete{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:6px;cursor:pointer}.chip__icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-right:4px}';var l=e("bds_chip",function(){function e(e){t(this,e);this.bdsDelete=i(this,"bdsDelete",7);this.size="standard";this.variant="default";this.danger=false;this.clickable=false;this.deletable=false;this.disabled=false}e.prototype.handleClickDelete=function(e){if(!this.deletable||this.disabled)return;e.preventDefault();this.bdsDelete.emit({id:this.element.id})};e.prototype.getClickClass=function(){return this.clickable?{"chip--click":true}:{}};e.prototype.getSizeClass=function(){return this.size==="standard"?{"chip--standard":true}:{"chip--tall":true}};e.prototype.getStateClass=function(){if(this.disabled){return{"chip--default":true}}if(this.danger){return{"chip--danger":true}}if(this.variant==="primary"){return{"chip--primary":true}}return{"chip--default":true}};e.prototype.render=function(){return s(n,{class:Object.assign(Object.assign(Object.assign({chip:true},this.getClickClass()),this.getStateClass()),this.getSizeClass())},this.icon&&s("div",{class:"chip__icon"},s("bds-icon",{size:"x-small",name:this.icon})),s("slot",null),this.deletable&&s("div",{class:"chip__delete",onClick:this.handleClickDelete.bind(this)},s("bds-icon",{size:"x-small",theme:"solid",name:"error"})))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());l.style=a}}}));