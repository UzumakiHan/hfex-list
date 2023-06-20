<template>
    <div class="m-pullup">
        <div class="pullup-list">
            <slot />
        </div>
        <div
            class="pullup-tips"
            :style="{background: pullupTipsBg}"
        >
            <div
                v-if="finished"
                class="after-trigger"
            >
                <span
                    v-if="showPullupTips"
                    class="pullup-txt"
                >{{ finishedText }}</span>
            </div>
            <template v-else>
                <div
                    v-if="error"
                    class="after-trigger"
                >
                    <span class="pullup-txt">{{ errorText }}</span>
                </div>
                <div
                    v-if="!error && modelValue"
                    class="after-trigger"
                >
                    <span class="pullup-txt">{{ loadingText }}</span>
                </div>
            </template>
            <div
                ref="observe"
                class="m-obsever"
            />
        </div>
    </div>
</template>

<script>
export default {
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
</script>

<style lang="scss" scoped>
.m-pullup {
    height: 100%;
    .pullup-tips {
        padding: 20px 20px 0;
        background: #f4f5f7;
        color: #999;
        text-align: center;
        .m-obsever {
            width: 100%;
            height: 20px;
        }
    }
}
</style>
