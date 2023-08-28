<template>
    <uni-grid
        style="width: 750rpx"
        @change="clickCellSel"
        :column="2"
        :square="false"
        :highlight="false"
        :showBorder="false">
        <uni-grid-item v-for="(model, index) in props.models" :key="index" :index="index">
            <view class="wrap">
                <view class="content">
                    <image class="img" :src="model.icon" mode="aspectFill"></image>
                    <view class="text">{{ model.title }}</view>
                    <view class="text">{{ model.duration }}</view>
                </view>
            </view>
        </uni-grid-item>
    </uni-grid>
</template>
<script lang="ts">
export default {
    name: 'Book1View',
}
</script>
<script lang="ts" setup>
import { Book } from '@/models/book'
const props = defineProps<{
    models: [Book]
}>()
const emit = defineEmits<{
    clickSel: [e: any]
}>()
function clickCellSel(e: any) {
    emit('clickSel', e)
}
</script>

<style lang="scss">
$itemWidth1: (750/2) * 1rpx;
$itemMargin: 40rpx;
$itemWidth2: ($itemWidth1 - $itemMargin * 2);
$itemHeight2: $itemWidth1 * 1.28;
$imgmMargin: 10rpx;
$imgWidth: $itemWidth2 - $imgmMargin * 2;

.wrap {
    display: flex;
    height: $itemHeight2;
}

.content {
    flex: 1;
    display: block;
    margin: $itemMargin;
    border-radius: 10px;
    background-color: white;
}

.img {
    margin: $imgmMargin;
    border-radius: 5px;
    width: $imgWidth;
    height: $imgWidth;
}

.text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: $imgmMargin $imgmMargin 0;
    margin-top: 0px;
    height: 50rpx;
    width: $imgWidth;
    color: $uni-text-color;
    font-size: 15px;
    font-weight: bold;
}
</style>
