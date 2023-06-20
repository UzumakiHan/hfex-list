"use strict";var e={name:"HfexList",props:{modelValue:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},finishedText:{type:String,default:"没有更多了"},loadingText:{type:String,default:"加载中..."},error:{type:Boolean,default:!1},errorText:{type:String,default:"加载失败..."},immediateCheck:{type:Boolean,default:!0},pullupTipsBg:{type:String,default:"#f4f5f7"},showPullupTips:{type:Boolean,default:!0}},emits:["update:modelValue","load"],data:()=>({intersectionObserver:{}}),mounted(){this.initBscroll(),this.immediateCheck&&this.$emit("load")},unmounted(){this.intersectionObserver.disconnect()},methods:{async initBscroll(){const e=this.$refs.observe;e&&(this.intersectionObserver=new IntersectionObserver((e=>{(e[0].intersectionRatio>0||e[0].isIntersecting)&&this.pullingUpHandler()})),this.intersectionObserver.observe(e))},pullingUpHandler(){this.modelValue||this.finished||(this.$emit("update:modelValue",!0),this.$emit("load"))}}};function n(e,n,t,s,i,l,r,a,o,p){"boolean"!=typeof r&&(o=a,a=r,r=!1);const d="function"==typeof t?t.options:t;let u;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),s&&(d._scopeId=s),l?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},d._ssrRegister=u):n&&(u=r?function(e){n.call(this,p(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,a(e))}),u)if(d.functional){const e=d.render;d.render=function(n,t){return u.call(t),e(n,t)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,u):[u]}return t}const t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,n)=>function(e,n){const s=t?n.media||"default":e,r=l[s]||(l[s]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(t),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,n=document.createTextNode(t),s=r.element.childNodes;s[e]&&r.element.removeChild(s[e]),s.length?r.element.insertBefore(n,s[e]):r.element.appendChild(n)}}}(e,n)}let i;const l={};const r=e;var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"m-pullup"},[t("div",{staticClass:"pullup-list"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"pullup-tips",style:{background:e.pullupTipsBg}},[e.finished?t("div",{staticClass:"after-trigger"},[e.showPullupTips?t("span",{staticClass:"pullup-txt"},[e._v(e._s(e.finishedText))]):e._e()]):[e.error?t("div",{staticClass:"after-trigger"},[t("span",{staticClass:"pullup-txt"},[e._v(e._s(e.errorText))])]):e._e(),e._v(" "),!e.error&&e.modelValue?t("div",{staticClass:"after-trigger"},[t("span",{staticClass:"pullup-txt"},[e._v(e._s(e.loadingText))])]):e._e()],e._v(" "),t("div",{ref:"observe",staticClass:"m-obsever"})],2)])};a._withStripped=!0;const o=n({render:a,staticRenderFns:[]},(function(e){e&&e("data-v-4f8b1629_0",{source:".m-pullup[data-v-4f8b1629] {\n  height: 100%;\n}\n.m-pullup .pullup-tips[data-v-4f8b1629] {\n  padding: 20px 20px 0;\n  background: #f4f5f7;\n  color: #999;\n  text-align: center;\n}\n.m-pullup .pullup-tips .m-obsever[data-v-4f8b1629] {\n  width: 100%;\n  height: 20px;\n}\n\n/*# sourceMappingURL=index.vue.map */",map:{version:3,sources:["/home/runner/work/hfex-list/hfex-list/src/vue/index.vue","index.vue"],names:[],mappings:"AAyHA;EACA,YAAA;ACxHA;ADyHA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;ACvHA;ADwHA;EACA,WAAA;EACA,YAAA;ACtHA;;AAEA,oCAAoC",file:"index.vue",sourcesContent:['<template>\n    <div class="m-pullup">\n        <div class="pullup-list">\n            <slot />\n        </div>\n        <div\n            class="pullup-tips"\n            :style="{background: pullupTipsBg}"\n        >\n            <div\n                v-if="finished"\n                class="after-trigger"\n            >\n                <span\n                    v-if="showPullupTips"\n                    class="pullup-txt"\n                >{{ finishedText }}</span>\n            </div>\n            <template v-else>\n                <div\n                    v-if="error"\n                    class="after-trigger"\n                >\n                    <span class="pullup-txt">{{ errorText }}</span>\n                </div>\n                <div\n                    v-if="!error && modelValue"\n                    class="after-trigger"\n                >\n                    <span class="pullup-txt">{{ loadingText }}</span>\n                </div>\n            </template>\n            <div\n                ref="observe"\n                class="m-obsever"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: \'HfexList\',\n    props: {\n        modelValue: {\n            type: Boolean,\n            default: false\n        },\n        finished: {\n            type: Boolean,\n            default: false\n        },\n        finishedText: {\n            type: String,\n            default: \'没有更多了\'\n        },\n        loadingText: {\n            type: String,\n            default: \'加载中...\'\n        },\n        error: {\n            type: Boolean,\n            default: false\n        },\n        errorText: {\n            type: String,\n            default: \'加载失败...\'\n        },\n        immediateCheck: {\n            type: Boolean,\n            default: true\n        },\n        pullupTipsBg: {\n            type: String,\n            default: \'#f4f5f7\'\n        },\n        showPullupTips: {\n            type: Boolean,\n            default: true\n        }\n    },\n    emits: [\'update:modelValue\', \'load\'],\n    data() {\n        return {\n            intersectionObserver: {}\n        };\n    },\n    mounted() {\n        this.initBscroll();\n        if (this.immediateCheck) {\n            this.$emit(\'load\');\n        }\n    },\n    unmounted() {\n        this.intersectionObserver.disconnect();\n    },\n    methods: {\n        async initBscroll() {\n            const observe = this.$refs.observe;\n            if (!observe) {\n                return;\n            }\n            this.intersectionObserver = new IntersectionObserver(entries => {\n                if (entries[0].intersectionRatio > 0 || entries[0].isIntersecting) {\n                    this.pullingUpHandler();\n                }\n            });\n            this.intersectionObserver.observe(observe);\n        },\n        pullingUpHandler() {\n            if (this.modelValue || this.finished) {\n                return;\n            }\n            this.$emit(\'update:modelValue\', true);\n            this.$emit(\'load\');\n        }\n    }\n};\n<\/script>\n\n<style lang="scss" scoped>\n.m-pullup {\n    height: 100%;\n    .pullup-tips {\n        padding: 20px 20px 0;\n        background: #f4f5f7;\n        color: #999;\n        text-align: center;\n        .m-obsever {\n            width: 100%;\n            height: 20px;\n        }\n    }\n}\n</style>\n',".m-pullup {\n  height: 100%;\n}\n.m-pullup .pullup-tips {\n  padding: 20px 20px 0;\n  background: #f4f5f7;\n  color: #999;\n  text-align: center;\n}\n.m-pullup .pullup-tips .m-obsever {\n  width: 100%;\n  height: 20px;\n}\n\n/*# sourceMappingURL=index.vue.map */"]},media:void 0})}),r,"data-v-4f8b1629",false,undefined,!1,s,void 0,void 0);o.install=e=>{console.log(e),e.component(o.name,o)},module.exports=o;
