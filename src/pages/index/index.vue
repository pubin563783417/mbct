<template>
    <view style="width: 750rpx; background-color: #f8f8f8">
        <view class="top-card">
            <text class="title">正念</text>
            <view class="label-card1">
                <text class="label-text1">你共练习了</text>
                <text class="label-text2">120天</text>
            </view>

            <view class="label-card2">
                <text class="label-text1">总天数</text>
                <text class="label-text2">120</text>
            </view>
        </view>

        <view class="tips-card">
            <swiper
                class="swiper"
                :circular="true"
                :autoplay="true"
                :interval="5000"
                :vertical="true"
                easing-function="easeInCubic"
                :duration="500">
                <swiper-item v-for="(item, index) in tips" :key="index" :item-id="index">
                    <text v-if="item.text">{{ item.text }}</text>
                    <image v-else :src="item.img" mode="aspectFill"></image>
                </swiper-item>
            </swiper>
        </view>
        <Book1View class="book" :models="books" @clickSel="clickSel"></Book1View>
        <BookRecommend class="recommend"></BookRecommend>
    </view>
</template>

<script lang="ts" setup>
import { BookRecommend } from '@/components/bookRecommend/bookRecommend.vue'
import { Book } from '@/defines/book'
import Book1View from '@/components/book/book1.vue'
import { useBooksStore } from '@/stores/book'
import { ZNTips } from '@/defines/tips'
import { ref } from 'vue'
const booksStore = useBooksStore()
booksStore.setupTemp()

const books: Array<Book> = booksStore.tempBooks

const tips = ref<Array<ZNTips>>([
    { text: '你的昨天不在\n你这里\n！在别人那里', id: '121456' },
    { text: 'DONE  Build complete. Watching for changes...', id: '121456' },
    {
        img: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/imgs/jingzuo.webp',
        id: '121456',
    },
])

function clickSel(index: number) {
    console.log(`click at index :${index}`)
    let book = books[index]
    uni.navigateTo({
        url: `/pages/book/book?id=${book.id}`,
    })
}
</script>

<style lang="scss" scoped>
.top-card {
    // border-radius: $uni-border-radius-lg;
    // box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.2);
    // background-color: white;
    margin: 100rpx 0 0 60rpx;
    // margin: 0;
}
.label-card1 {
    display: inline-block;
    margin: 20px 0px 0px 0px;
}
.label-card2 {
    margin: 20px 0px 0px 100rpx;
    display: inline-block;
}
.label-text1 {
    font-size: 15px;
    color: $uni-text-color-grey;
    text-align: center;
    font-weight: 15px;
    // margin: calc(var(--status-bar-height) + 50px) 0 20px 0;
}
.label-text2 {
    font-size: 20px;
    color: $uni-color-primary;
    font-weight: 25px;

    // margin: calc(var(--status-bar-height) + 50px) 0 20px 0;
}
.title {
    font-size: 27px;
    color: $uni-text-color;
    font-weight: 30px;
    display: block;
    // margin: calc(var(--status-bar-height) + 50px) 0 20px 0;
}

.tips-card {
    border-radius: $uni-border-radius-base;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: white;
    overflow: hidden;
    margin: 40rpx 60rpx 0 60rpx;
    height: 100px;
    swiper {
        width: 100%;
        height: 100%;
    }
    text {
        display: inline-block;
        font-size: 20px;
        color: $uni-text-color;
        font-weight: bolder;
        margin: 10px 10px 10px 10px;
    }
    image {
        width: 100%;
        height: 100%;
    }
    // margin: 0;
}
.book {
    margin: 60rpx;
    width: (750 - 60 * 2) * 1rpx;
    display: block;
}
.recommend {
    padding-bottom: 55px;
    margin: 60rpx;
    width: (750 - 60 * 2) * 1rpx;
    display: block;
}
</style>
