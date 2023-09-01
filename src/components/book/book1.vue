<template>
    <view class="content">
        <text class="title" style="color: #a0cfff">今天未练习</text>
        <view class="layout-content">
            <view
                v-for="(item, index) in props.models"
                :key="index"
                @click="clickCellSel(index)"
                class="item-content">
                <!-- <view class="img" style="background-color: #a0cfff"></view> -->
                <image class="img" :src="item.icon" mode="aspectFill"></image>
                <view class="text">{{ item.title }}</view>
                <view class="text" style="margin-bottom: 10px">{{ item.duration }}</view>
            </view>
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
}>()
console.log('models:')
console.log(props.models)

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
    margin-bottom: $item-space;
    border-radius: $uni-border-radius-base;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
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
