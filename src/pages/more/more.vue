<template>
    <view style="width: 750rpx; display: inline-block; background-color: #f8f8f8">
        <BookRecommend
            v-for="(item, index) in list"
            :key="index"
            class="recommend"
            :data="item"
            :myIndex="index"
            @onClick="onRecommendClick">
        </BookRecommend>
    </view>
</template>

<script setup lang="ts">
import BookRecommend from '@/components/bookRecommend/bookRecommend.vue'
import { Collection } from '@/defines/book'
import { useBooksStore } from '@/stores/book'
// import { uni } from '@dcloudio/uni-h5'
import { ref } from 'vue'

const list = ref<Array<Collection>>([])

// 在页面显示时设置导航栏标题
uni.setNavigationBarTitle({
    title: '更多练习',
})

const bookStore = useBooksStore()
bookStore
    .getList()
    .then((res) => {
        list.value = res
        console.log('list:')
        console.log(list.value)
    })
    .catch((err) => {
        console.log(err)
    })

function onRecommendClick(x: number, y: number) {
    console.log('onRecommendClick :' + x + ',' + y)
    let book = list.value.at(x)?.list.at(y)
    bookStore.setBook(book)

    uni.navigateTo({
        url: `/pages/book/book`,
    })
}
</script>

<style lang="scss" scoped>
.recommend {
    padding-bottom: 55px;
    margin: 60rpx;
    width: (750 - 60 * 2) * 1rpx;
    display: block;
}
</style>
