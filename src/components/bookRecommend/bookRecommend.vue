<template>
    <view class="content">
        <view class="img-content">
            <image class="img" mode="aspectFit" :src="props.data?.icon"> </image>
            <view class="text-box" :style="{ height: textOpenState ? '300rpx' : '150rpx' }">
                <u-read-more
                    ref="uReadMore"
                    :shadowStyle="{ backgroundImage: 'none' }"
                    showHeight="54"
                    :toggle="true"
                    @open="onTextOpen"
                    @close="onTextClose">
                    <rich-text :nodes="`${props.data?.name}<br/>${props.data?.desc}`"></rich-text>
                </u-read-more>
            </view>

            <!-- <text class="label">{{ props.data?.desc }}</text> -->
        </view>

        <scroll-view
            scroll-y="true"
            class="layout-content"
            :style="{ height: `${130 * Math.min(props.data?.list.length ?? 0, 5)}rpx` }">
            <view
                v-for="(item, index) in props.data?.list"
                :key="index"
                @click="onClick(index)"
                class="item">
                <!-- <view class="img" style="background-color: #a0cfff"></view> -->
                <image class="head" mode="aspectFill" :src="item.icon"></image>
                <view style="margin-left=20rpx;max-width: 500rpx">
                    <view class="lb1">{{ item.title }}</view>
                    <view class="lb2">{{ item.desc }}</view>
                </view>
            </view>
        </scroll-view>
        <!-- <view class="add"><text>+</text></view> -->
    </view>
</template>

<script lang="ts">
export default {
    name: 'BookRecommend',
}
</script>

<script setup lang="ts">
import { Collection } from '@/defines/book'
import { onMounted, reactive, ref } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
    data: {
        type: Object as PropType<Collection>,
    },
    myIndex: {
        type: Number,
        default: 0,
    },
})
const emit = defineEmits<{
    (event: 'onClick', x: number, y: number): void
}>()

const textOpenState = ref(false)
function onClick(index: number) {
    emit('onClick', props.myIndex, index)
}
function onTextOpen() {
    textOpenState.value = true
}
function onTextClose() {
    textOpenState.value = false
}
</script>

<style lang="scss">
.content {
    position: relative;
    width: 100%;
    border-radius: $uni-border-radius-base;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    overflow: hidden;
}
.img-content {
    width: 100%;
    height: 600rpx;
    position: relative;
}
.img {
    left: 0;
    top: 0;
    width: 100%;
    height: 600rpx;
    z-index: 0;
    position: absolute;
    background-color: white;
}
.text-box {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150rpx;
    position: absolute;
    z-index: 1;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    rich-text {
        color: white;
        font-size: 14px;
    }
    // background-color: aqua;
}

.label {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 100rpx;
    color: white;
    font-size: 14px;
    z-index: 1;
    overflow: hidden;
}
.layout-content {
    margin-top: 20rpx;
    margin-bottom: 40rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
}
.item {
    width: 100%;
    height: 100rpx;
    display: flex;
    flex-direction: row;
    margin-top: 30rpx;
    .head {
        background-color: rgb(221, 215, 215);
        margin-left: 10px;
        border-radius: 2px;
        height: 100rpx;
        width: 100rpx;
    }

    .lb1 {
        display: block;
        margin-left: 20rpx;
        color: $uni-color-primary;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .lb2 {
        display: block;
        margin-top: 5px;
        margin-left: 20rpx;
        color: $uni-color-primary;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
.add {
    background-color: rgba(0, 0, 0, 0.15);
    position: absolute;
    right: 0px;
    top: 0px;
    width: 150rpx;
    height: 100rpx;
    color: $uni-color-primary;
    font-weight: normal;
    font-size: 30px;
    text-align: center;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
</style>
