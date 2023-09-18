<template>
    <view style="width: 750rpx; background-color: #f8f8f8; overflow: hidden">
        <view class="top-card">
            <text class="title">正念</text>
            <view class="label-card1">
                <text class="label-text1">你共练习了</text>
                <text class="label-text2">{{ user.exercise.daysList.length }}天</text>
            </view>

            <view class="label-card2">
                <text class="label-text1">练习时长</text>
                <text class="label-text2">{{ (user.exercise.secs / 3600).toFixed(2) }}小时</text>
            </view>
        </view>

        <view class="tips-card">
            <swiper
                class="swiper"
                :circular="true"
                :autoplay="true"
                :interval="8000"
                :vertical="true"
                easing-function="easeInCubic"
                :duration="500">
                <swiper-item v-for="(item, index) in tips" :key="index" :item-id="index">
                    <text v-if="item.text">{{ item.text }}</text>
                    <image v-else :src="item.img" mode="aspectFill"></image>
                </swiper-item>
            </swiper>
        </view>
        <Book1View
            class="book"
            :exe-time="todayExeTime"
            :models="booksStore.books"
            @clickSel="clickSel">
        </Book1View>

        <view class="more" @click="onMore">更多练习</view>

        <BookRecommend
            v-if="list.length > 0"
            class="recommend"
            :data="recommend"
            @onClick="onRecommendClick">
        </BookRecommend>
    </view>
</template>

<script lang="ts" setup>
import BookRecommend from '@/components/bookRecommend/bookRecommend.vue'
import { Book, Collection } from '@/defines/book'
import { User, Exercise, ExerciseDay } from '@/defines/user'
import Book1View from '@/components/book/book1.vue'
import { useBooksStore } from '@/stores/book'
import { useZNTipsStore } from '@/stores/tips'
import { ZNTips } from '@/defines/tips'
import { computed, reactive, ref } from 'vue'

// data
const booksStore = useBooksStore()
booksStore.getBooks()

const tipsStore = useZNTipsStore()
tipsStore.setupTips()

const user = User.shared()

const tips = ref<Array<ZNTips>>(tipsStore.tips)

const list = ref<Array<Collection>>([])

const recommend = computed(() => {
    if (list.value) {
        const currentDate: Date = new Date()
        const day = currentDate.getDay()
        return list.value.at(day % list.value.length)
    }
    return null
})
booksStore
    .getList()
    .then((res) => {
        list.value = res
        console.log('list:')

        console.log(list.value)
    })
    .catch((err) => {
        console.log(err)
    })

const todayExeTime = computed(() => {
    const currentDate: Date = new Date()
    const currentDateString: string = currentDate.toISOString().split('T')[0]
    let today = User.shared().exercise.daysList.at(-1)

    if (today && today.date === currentDateString) {
        // 使用 reduce 方法来合并并计算数组中的元素
        const result = today.list.reduce((accumulator, item) => {
            // 在这个回调函数中，accumulator 表示累积的结果，currentValue 表示当前要处理的元素
            // 在这个示例中，我们简单地将累积的结果与当前元素相加
            return accumulator + item.secs
        }, 0) // 初始累加值为 0

        return result
    }
    return 0
})

function clickSel(index: number) {
    console.log(`click at index :${index}`)
    let book = booksStore.books[index]
    booksStore.setBook(book)
    uni.navigateTo({
        url: `/pages/book/book`,
    })
}
function onRecommendClick(x: number, y: number) {
    console.log('onRecommendClick :' + y)
    let book = recommend.value?.list.at(y)
    booksStore.setBook(book)
    let url = `/pages/book/book`
    uni.navigateTo({
        url,
    })
}
function onMore() {
    console.log('onMore')

    let url = `/pages/more/more`
    console.log(url)

    uni.navigateTo({
        url,
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
        font-weight: normal;
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
.more {
    font-size: 25px;
    color: $uni-color-primary;
    font-weight: normal;
    margin: 0px 60rpx 0rpx 60rpx;
    text-decoration: underline;
}
</style>
