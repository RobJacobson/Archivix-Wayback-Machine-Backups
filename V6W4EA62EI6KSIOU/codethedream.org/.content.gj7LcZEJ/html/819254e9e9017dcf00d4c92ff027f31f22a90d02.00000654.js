gform.addFilter("gform_datepicker_options_pre_init",function(e,t,r,i){var o=window.gf_legacy_multi;if(!o)return e;if(!o[t]||"1"!==o[t])return e;var d=window.jQuery,s=0<d("#preview_form_container").length,n="rtl"===window.getComputedStyle(i[0],null).getPropertyValue("direction");return Object.assign(e,{showOtherMonths:!1,beforeShow:function(e,t){return t.dpDiv[0].classList.remove("gform-theme-datepicker"),t.dpDiv[0].classList.add("gform-legacy-datepicker"),n&&s&&(e=d(e).closest(".gfield"),e=d(document).outerWidth()-(e.offset().left+e.outerWidth()),t.dpDiv[0].style.right=e+"px"),s&&t.dpDiv[0].classList.add("gform-preview-datepicker"),!this.suppressDatePicker}})},-10);