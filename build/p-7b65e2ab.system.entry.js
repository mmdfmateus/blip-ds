System.register(["./p-050fe179.system.js"],(function(e){"use strict";var t,o,s;return{setters:[function(e){t=e.r;o=e.c;s=e.h}],execute:function(){var n='@charset "UTF-8";.select-option.sc-bds-select-option{width:100%;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:#ffffff;padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none}.select-option--selected.sc-bds-select-option .select-option__container--value.sc-bds-select-option{color:#2cc3d5}.select-option--disabled.sc-bds-select-option .select-option__container--value.sc-bds-select-option,.select-option--disabled.sc-bds-select-option .select-option__container--bulk.sc-bds-select-option{cursor:not-allowed;color:#b9cbd3}.select-option--disabled.sc-bds-select-option .select-option__container--value.sc-bds-select-option:hover,.select-option--disabled.sc-bds-select-option .select-option__container--bulk.sc-bds-select-option:hover{background-color:#ffffff}.select-option.sc-bds-select-option-s>bds-icon,.select-option .sc-bds-select-option-s>bds-icon{margin-right:10px}.select-option__container.sc-bds-select-option{color:#56616e;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.select-option__container--bulk.sc-bds-select-option{color:#8ca0b3}.select-option__container.sc-bds-select-option:hover>.select-option__container--value.sc-bds-select-option,.select-option__container.sc-bds-select-option:hover>.select-option__container--bulk.sc-bds-select-option{background-color:#f5f8f9;color:#2cc3d5}.select-option__container.sc-bds-select-option:active>.select-option__container--value.sc-bds-select-option,.select-option__container.sc-bds-select-option:active>.select-option__container--bulk.sc-bds-select-option{color:#2cc3d5}.select-option.sc-bds-select-option:hover{background-color:#f5f8f9}.select-option.sc-bds-select-option:focus{background-color:#e9f7f8;color:#2cc3d5}.select-option--selected.sc-bds-select-option{background-color:#e9f7f8}.select-option--invisible.sc-bds-select-option{display:none}';var i=e("bds_select_option",function(){function e(e){var s=this;t(this,e);this.optionSelected=o(this,"optionSelected",7);this.selected=false;this.disabled=false;this.invisible=false;this.danger=false;this.bulkOption="";this.slotAlign="center";this.onClickSelectOption=function(){if(!s.disabled){s.optionSelected.emit({value:s.value})}};this.attachOptionKeyboardListeners=function(e){var t=e.target;switch(e.key){case"Enter":s.onClickSelectOption();break;case"ArrowDown":if(t.parentElement.nextElementSibling){e.preventDefault();e.stopPropagation();t.parentElement.nextElementSibling.firstElementChild.focus()}break;case"ArrowUp":e.preventDefault();e.stopPropagation();if(t.parentElement.previousElementSibling){t.parentElement.previousElementSibling.firstElementChild.focus()}}}}e.prototype.render=function(){return s("div",{id:"bds-select-option-"+this.value,tabindex:"0",onKeyDown:this.attachOptionKeyboardListeners,onClick:this.onClickSelectOption,"data-value":this.value,class:{"select-option":true,"select-option--selected":this.selected,"select-option--disabled":this.disabled,"select-option--invisible":this.invisible}},s("div",{style:{alignSelf:this.slotAlign}},s("slot",{name:"input-left"})),s("div",{class:"select-option__container"},s("bds-typo",{class:"select-option__container--value",variant:"fs-14"},s("bds-typo",{class:"select-option__container--value",variant:"fs-16",bold:"semi-bold"},this.titleText),s("slot",null)),s("bds-typo",{class:"select-option__container--bulk",variant:"fs-10"},this.bulkOption)))};return e}());i.style=n}}}));