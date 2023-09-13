<template>
    <view class="content">
        <view class="img-content">
            <image class="img" mode="aspectFill" :src="props.data?.icon"> </image>
            <text class="label">{{ props.data?.desc }}</text>
        </view>

        <view class="layout-content">
            <view
                v-for="(item, index) in props.data?.list.slice(0, 5)"
                :key="index"
                @click="onClick(index)"
                class="item">
                <!-- <view class="img" style="background-color: #a0cfff"></view> -->
                <image class="head" mode="aspectFill"></image>
                <view style="margin-left=20rpx;max-width: 400rpx">
                    <view class="lb1">{{ item.title }}</view>
                    <view class="lb2">{{ item.desc }}</view>
                </view>
                <view class="add"><text>+</text></view>
            </view>
        </view>
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
})

onMounted(() => {
    console.log('data:')

    console.log(props.data)
})
function onClick(index: Number) {}
</script>

<style lang="scss">
.content {
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
    background-color: rgb(221, 215, 215);
}
.img {
    left: 0;
    top: 0;
    width: 100%;
    height: 500rpx;
    position: absolute;
    background-color: rgb(221, 215, 215);
}
.label {
    position: absolute;
    left: 10px;
    bottom: 10px;
    height: 100rpx;
    color: $uni-color-primary;
    font-size: 18px;
    z-index: 1;
    background-color: aqua;
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
    .add {
        width: 100rpx;
        height: 100rpx;
        color: $uni-color-primary;
        font-weight: bolder;
        font-size: 30px;
        text-align: center;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
    }
}
</style>
