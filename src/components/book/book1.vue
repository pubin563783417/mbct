<template>
    <view class="content">
        <text class="title" :style="{ color: props.exeTime / 60 >= 40 ? '#2979ff' : '#a0cfff' }">{{
            props.exeTime > 0 ? `今天已练习${(props.exeTime / 60).toFixed(1)}分钟` : '今天未练习'
        }}</text>
        <view class="layout-content">
            <view
                v-for="(item, index) in [...props.models]"
                :key="index"
                @click="clickCellSel(index)"
                class="item-content">
                <!-- <view class="img" style="background-color: #a0cfff"></view> -->
                <image class="img" :src="item.icon" mode="aspectFill"></image>
                <view class="text">{{ item.title }}</view>
                <view class="text" style="margin-bottom: 10px">{{ item.duration }}</view>
            </view>
            <!-- <view class="add">
                <view>
                    <text>+</text>
                </view>
            </view> -->
        </view>
    </view>
</template>
<script lang="ts">
export default {
    name: 'Book1View',
}
</script>
<script lang="ts" setup>
import { Book } from '@/defines/book'
const props = defineProps<{
    models: Array<Book>
    exeTime: number
}>()

const emit = defineEmits<{
    clickSel: [index: number]
}>()
function clickCellSel(index: number) {
    console.log('clickCellSel:' + index)
    emit('clickSel', index)
}
</script>

<style lang="scss" scoped>
$item-inside-margin: 20rpx;
$item-space: 40rpx;
$layout-width: 750rpx - 120rpx;
$item-width: ($layout-width - $item-space) / 2;
$img-width: $item-width - ($item-inside-margin * 2);

.content {
    width: 100%;
}
.title {
    font-size: 22px;
    font-weight: normal;
    display: block;
}
.layout-content {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.item-content {
    width: $item-width;
    height: 400rpx;
    margin-bottom: $item-space;
    border-radius: $uni-border-radius-base;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
}
.add {
    width: $item-width;
    height: 400rpx;
    margin-bottom: $item-space;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    view {
        width: 200rpx;
        height: 200rpx;
        color: $uni-color-primary;
        border: 1px solid #a0cfff;
        border-radius: $uni-border-radius-base;
        font-weight: bolder;
        font-size: 30px;
        text-align: center;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
    }
}
.img {
    // padding-top: 10px;
    border-radius: $uni-border-radius-base;
    width: $img-width;
    height: $img-width;
    margin: $item-inside-margin;
    margin-bottom: 5px;
}

.text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px 10px 0px 10px;
    height: 40rpx;
    color: $uni-text-color;
    font-size: 15px;
    font-weight: bold;
}
</style>
