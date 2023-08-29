<template>
    <view style="display: flex; flex-direction: column; width: 750rpx; background-color: #f8f8f8">
        <text class="title">正念练习</text>
        <view style="flex: 1">
            <Book1View :models="books" @clickSel="clickSel"></Book1View>
        </view>
    </view>
</template>

<script lang="ts" setup>
import Book1View from '@/components/book/book1.vue'
import { useBooksStore } from '@/stores/book'

const booksStore = useBooksStore()
booksStore.setupTemp()

const books = booksStore.tempBooks

function clickSel(e: any) {
    let { index } = e.detail
    console.log(`click at index :${index}`)
    let book = books[index]

    uni.navigateTo({
        url: `/pages/book/book?id=${book.id}`,
    })
}
</script>

<style lang="scss">
.title {
    height: 80px;
    font-size: 40px;
    color: black;
    text-align: center;
    font-weight: 70px;
    // margin: calc(var(--status-bar-height) + 50px) 0 20px 0;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
