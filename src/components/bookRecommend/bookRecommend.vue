<template>
    <view class="content">
        <image class="img" mode="aspectFill">
            <text class="label">这是一个最好的练习</text>
        </image>
        <view class="layout-content">
            <view v-for="(item, index) in list" :key="index" @click="onClick(index)" class="item">
                <!-- <view class="img" style="background-color: #a0cfff"></view> -->
                <image class="head" mode="aspectFill"></image>
                <view class="lb1">123</view>
                <view class="lb2">4444</view>
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
import { reactive, ref } from 'vue'
const state = reactive({})
const list = ref([1, 2, 3])
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
.img {
    width: 100%;
    height: 500rpx;
    position: relative;
    background-color: rgb(221, 215, 215);
}
.label {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: $uni-color-primary;
    font-size: 18px;
}
.layout-content {
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
    .head {
        background-color: rgb(221, 215, 215);
        margin: 2px;
        border-radius: 2px;
        height: calc(100rpx - 4px);
        width: calc(100rpx - 4px);
    }
    .lb1 {
        margin-top: 2px;
        color: $uni-color-primary;
        font-size: 14px;
    }
    .lb2 {
        display: inline-block;
        margin-top: 2px;
        color: $uni-color-primary;
        font-size: 12px;
    }
}
</style>
