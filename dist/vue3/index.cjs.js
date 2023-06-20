'use strict';

var vue = require('vue');

var script = {
    name: 'HfexList',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        finished: {
            type: Boolean,
            default: false
        },
        finishedText: {
            type: String,
            default: '没有更多了'
        },
        loadingText: {
            type: String,
            default: '加载中...'
        },
        error: {
            type: Boolean,
            default: false
        },
        errorText: {
            type: String,
            default: '加载失败...'
        },
        immediateCheck: {
            type: Boolean,
            default: true
        },
        pullupTipsBg: {
            type: String,
            default: '#f4f5f7'
        },
        showPullupTips: {
            type: Boolean,
            default: true
        }
    },
    emits: ['update:modelValue', 'load'],
    data() {
        return {
            intersectionObserver: {}
        };
    },
    mounted() {
        this.initBscroll();
        if (this.immediateCheck) {
            this.$emit('load');
        }
    },
    unmounted() {
        this.intersectionObserver.disconnect();
    },
    methods: {
        async initBscroll() {
            const observe = this.$refs.observe;
            if (!observe) {
                return;
            }
            this.intersectionObserver = new IntersectionObserver(entries => {
                if (entries[0].intersectionRatio > 0 || entries[0].isIntersecting) {
                    this.pullingUpHandler();
                }
            });
            this.intersectionObserver.observe(observe);
        },
        pullingUpHandler() {
            if (this.modelValue || this.finished) {
                return;
            }
            this.$emit('update:modelValue', true);
            this.$emit('load');
        }
    }
};

const _hoisted_1 = { class: "m-pullup" };
const _hoisted_2 = { class: "pullup-list" };
const _hoisted_3 = {
  key: 0,
  class: "after-trigger"
};
const _hoisted_4 = {
  key: 0,
  class: "pullup-txt"
};
const _hoisted_5 = {
  key: 0,
  class: "after-trigger"
};
const _hoisted_6 = { class: "pullup-txt" };
const _hoisted_7 = {
  key: 1,
  class: "after-trigger"
};
const _hoisted_8 = { class: "pullup-txt" };
const _hoisted_9 = {
  ref: "observe",
  class: "m-obsever"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    vue.createElementVNode("div", {
      class: "pullup-tips",
      style: vue.normalizeStyle({background: $props.pullupTipsBg})
    }, [
      ($props.finished)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
            ($props.showPullupTips)
              ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, vue.toDisplayString($props.finishedText), 1 /* TEXT */))
              : vue.createCommentVNode("v-if", true)
          ]))
        : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            ($props.error)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, [
                  vue.createElementVNode("span", _hoisted_6, vue.toDisplayString($props.errorText), 1 /* TEXT */)
                ]))
              : vue.createCommentVNode("v-if", true),
            (!$props.error && $props.modelValue)
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                  vue.createElementVNode("span", _hoisted_8, vue.toDisplayString($props.loadingText), 1 /* TEXT */)
                ]))
              : vue.createCommentVNode("v-if", true)
          ], 64 /* STABLE_FRAGMENT */)),
      vue.createElementVNode("div", _hoisted_9, null, 512 /* NEED_PATCH */)
    ], 4 /* STYLE */)
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".m-pullup[data-v-21fec300] {\n  height: 100%;\n}\n.m-pullup .pullup-tips[data-v-21fec300] {\n  padding: 20px 20px 0;\n  background: #f4f5f7;\n  color: #999;\n  text-align: center;\n}\n.m-pullup .pullup-tips .m-obsever[data-v-21fec300] {\n  width: 100%;\n  height: 20px;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-21fec300";
script.__file = "src/vue/index.vue";

script.install = (Vue) => {
    console.log(Vue);
    Vue.component(script.name, script);
};

module.exports = script;
