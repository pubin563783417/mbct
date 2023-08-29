<template>
    <view
        class="content"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd">
        <view class="background"></view>
        <view
            ref="sliderView"
            class="slider"
            :style="{
                width: `${sliderWidth0_100}%`,
            }"></view>
        <view class="cover" v-show="props.newState"></view>
        <view class="textView">
            <text class="title">{{ props.isPlaying ? '暂停' : '播放' }}</text>
            <text class="time">{{
                secondsToTime(props.audioDuration * (sliderWidth0_100 / 100)) +
                '/' +
                secondsToTime(props.audioDuration)
            }}</text>
        </view>
    </view>
</template>

<script lang="ts">
export default {
    name: 'PlayBtn',
}
</script>

<script lang="ts" setup>
import { computed, ref, watch, watchEffect, getCurrentInstance, onMounted } from 'vue'
import type { PropType } from 'vue'
import { SliderObjc } from '@/defines/ui'

// interface Props {
//     isPlaying: boolean
//     timeStr: string
//     slider: Object as SliderObjc
//     newState: boolean
// }

// 使用defineProps定义属性并指定类型
const props = defineProps({
    isPlaying: {
        type: Boolean,
        default: false,
    },
    timeStr: {
        type: String,
    },

    newState: {
        type: Boolean,
        default: true,
    },
    slider: {
        // type: Object as PropType<SliderObjc>,
        // default: () => ({ value: 0 } as SliderObjc),
        type: Number,
        default: 0,
    },
    audioDuration: {
        type: Number,
        default: 0,
    },
})

watch(
    () => props.slider,
    (newProps) => {
        if (!isScrolling.value) {
            sliderWidth0_100.value = newProps
        }
    }
)

const emit = defineEmits<{
    (event: 'onClick', isPlaying: boolean): void
    (event: 'onChange', slider: number): void
}>()

// const x = ref<number>(0);
// const y = ref<number>(0);
var isScrolling = ref(false)
var x = 0
var startX = 0
var sliderWidthPx = 0
var isPlaying = false
// slider最大值
var sliderWidthMaxPx = 0
// 0 - 100
var sliderWidth0_100 = ref(props.slider)
/// 当前宽度px
var getSliderWidthPx = computed<number>(() => {
    return (sliderWidthMaxPx * sliderWidth0_100.value) / 100
})
console.log('slider newProps :' + props.slider)
onMounted(() => {
    let _this = getCurrentInstance()
    let view = uni.createSelectorQuery().in(_this).select('.background')
    view.boundingClientRect((data) => {
        if (!Array.isArray(data)) {
            sliderWidthMaxPx = data.width ?? 0
            console.log('sliderWidthMaxPx  :' + sliderWidthMaxPx)
        }
    }).exec()
})

function onTouchStart(event: any) {
    console.log('touch start')

    const touch = event.touches[0]
    x = touch.pageX
    startX = x

    if (!props.isPlaying) {
        return
    }
    // 当前的slidr px
    sliderWidthPx = getSliderWidthPx.value
    //   sliderWidthMaxPx = sliderBackground.value.clientWidth;
    isScrolling.value = true

    console.log('sliderWidthPx : ' + sliderWidthPx)
    console.log('sliderWidthMaxPx : ' + sliderWidthMaxPx)
}
function onTouchMove(event: any) {
    // console.log('touch move')

    const touch = event.touches[0]
    const spaceX = touch.pageX - x
    x = touch.pageX

    if (!isScrolling) {
        return
    }
    // 当前的slidr px
    sliderWidthPx += spaceX
    sliderWidthPx = sliderWidthPx > sliderWidthMaxPx ? sliderWidthMaxPx : sliderWidthPx
    sliderWidthPx = sliderWidthPx < 0 ? 0 : sliderWidthPx
    // console.log('spaceX :' + spaceX)

    // console.log('sliderWidthPx : ' + sliderWidthPx)
    sliderWidth0_100.value = (sliderWidthPx / sliderWidthMaxPx) * 100

    console.log('sliderWidth0_100:' + sliderWidth0_100.value)
}
function onTouchEnd(event: any) {
    console.log('touch end')

    const touch = event.touches[0]
    if (x - startX == 0) {
        // 没有移动 属于是点击事件
        onClick()
    } else {
        if (!isScrolling) {
            return
        }
        emit('onChange', sliderWidth0_100.value)
    }
    isScrolling.value = false
}

function onClick() {
    console.log('onClick')

    emit('onClick', !props.isPlaying)
}

function secondsToTime(seconds: number): string {
    var seconds = Math.floor(seconds)
    var minutes = Math.floor(seconds / 60)
    var remainingSeconds = seconds % 60
    return (
        (minutes < 10 ? '0' : '') +
        minutes +
        ':' +
        (remainingSeconds < 10 ? '0' : '') +
        remainingSeconds
    )
}
</script>

<style lang="scss">
.content {
    border-radius: 12px;
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.2);
    height: 170rpx;
    width: 690rpx;
    overflow: hidden;
    display: flex;
    position: relative;
}

.background {
    background-color: #94bcff;
    z-index: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
.slider {
    background-color: $uni-color-primary;

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 0%;
    height: 100%;
}
.cover {
    background-color: $uni-color-primary;

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    width: 100%;
    height: 100%;
}
.textView {
    color: rgba(1, 1, 1, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    .title {
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
    }
    .time {
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        position: absolute;
        right: 20px;
        bottom: 10px;
    }
}
</style>
