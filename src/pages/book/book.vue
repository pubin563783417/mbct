<template>
    <view class="content">
        <view class="img-box">
            <view class="label">
                <text class="lb-text">时长: {{ book?.duration }}</text>
            </view>
            <image class="img" mode="aspectFill" :src="book?.icon"></image>
        </view>
        <view class="text-content">
            <text class="text-title">{{ book?.title }}</text>
            <text class="text-auther">{{ book?.author }}</text>
            <text class="text-desc">{{ book?.desc }}</text>
        </view>

        <PlayBtn
            class="btn"
            @onClick="onClick"
            @onChange="onChange"
            :audioDuration="audioDuration"
            :slider="audioDuration == 0 ? 0 : (audioTime / audioDuration) * 100"
            :isPlaying="isPlaying"
            :newState="newState">
        </PlayBtn>

        <BookUserBar class="user-bar" :control="userBarControl" @onClick="onUserBarClick" />
    </view>
</template>

<script lang="ts" setup>
import { User, Exercise, ExerciseDay, ExerciseItem } from '@/defines/user'
import { Book } from '@/defines/book'
import PlayBtn from '@/components/playBtn/playBtn.vue'
import { onHide, onLoad, onUnload } from '@dcloudio/uni-app'
import { onUnmounted, ref, watch } from 'vue'
import { useBooksStore, BookType } from '@/stores/book'
import BookUserBar from '@/components/userBar/userBar.vue'

const booksStore = useBooksStore()
let book = ref<BookType>(booksStore.book)
var innerAudioContext: UniNamespace.BackgroundAudioManager

const audioDuration = ref(0)
const audioTime = ref(0)
const isPlaying = ref(false)
const slider = ref(0)
const newState = ref(true)
const userBarControl = ref<[number, boolean]>([0, booksStore.bookIsAdd(book.value)])

// onLoad((options: any) => {
//     // 在目标页面中
//     let id: string = options.id
//     console.log(`id is ${id}`)
//     let books = booksStore.tempBooks
//     book.value = books.filter((b: any) => b.id == id)[0]
//     console.log('icon' + book.value.icon)
// })
onUnload(() => {
    console.log('onUnload')
    if (innerAudioContext) {
        innerAudioContext.stop()
        User.shared().exercise.stop()
        // innerAudioContext.destroy()
    }
    if (isPlaying.value) {
        // 保持屏幕常亮
        // uni.setKeepScreenOn({
        //     keepScreenOn: false,
        //     success: () => {
        //         console.log('setKeepScreenOn to false')
        //     },
        // })
    }
})

watch(isPlaying, (_isPlaying, _) => {
    const isLight = isPlaying.value ? true : false
    // 保持屏幕常亮
    // uni.setKeepScreenOn({
    //     keepScreenOn: isLight,
    // })
    console.log(`screen light change :${isLight}`)
})

function play() {
    console.log('play')
    if (!book.value?.url) {
        // uni.tip
        return
    }
    if (innerAudioContext) {
        innerAudioContext.play()
    } else {
        let item: ExerciseItem = { id: book.value.id, name: book.value.title, secs: 0 }
        let today = User.shared().exercise.today()
        today.list.push(item)

        // 播放
        newState.value = false
        innerAudioContext = uni.getBackgroundAudioManager()
        innerAudioContext.src = book.value.url
        innerAudioContext.title = book.value.title
        innerAudioContext.singer = book.value.author
        innerAudioContext.coverImgUrl = book.value.icon
        // innerAudioContext.autoplay = true

        innerAudioContext.onTimeUpdate(() => {
            audioTime.value = innerAudioContext.currentTime
            audioDuration.value = innerAudioContext.duration
        })
        innerAudioContext.onCanplay(() => {
            console.log(`onCanplay duration :${innerAudioContext.duration}`)
            audioDuration.value = innerAudioContext.duration
        })

        innerAudioContext.onPlay(() => {
            console.log('开始播放')
            // btnTitle.value = "Playing"
            isPlaying.value = true
            User.shared().exercise.exe()
        })
        innerAudioContext.onError((res) => {
            console.log('onError')
            console.log(res.errMsg)
            console.log(res.errCode)
            uni.showToast({
                title: res.errMsg,
                icon: 'none',
            })
            isPlaying.value = false
        })
        innerAudioContext.onEnded(() => {
            console.log('onEnded')
            isPlaying.value = false
            uni.showToast({
                title: '播放完毕',
                icon: 'none',
            })
            isPlaying.value = false
            User.shared().exercise.stop()
        })
        innerAudioContext.onStop(() => {
            console.log('onStop')
            isPlaying.value = false
            User.shared().exercise.stop()
        })
        innerAudioContext.onPause(() => {
            console.log('onPause')
            isPlaying.value = false
            User.shared().exercise.stop()
        })
    }
}
function pause() {
    console.log('pause')
    if (innerAudioContext) {
        innerAudioContext.pause()
    }
}

function onChange(_slider: number) {
    console.log('onChange:' + _slider)
    audioTime.value = (_slider / 100) * audioDuration.value
    innerAudioContext.seek(audioTime.value)
}
function onClick(_isPlaying: boolean) {
    console.log('onClick:' + _isPlaying)
    if (_isPlaying) {
        play()
        isPlaying.value = true
    } else {
        pause()
        isPlaying.value = false
    }
}

function onUserBarClick(index: number, isSelected: boolean) {
    console.log('onUserBarClick : ' + index + ',' + isSelected)
    if (isSelected) {
        // 已经选中 ,撤销
        if (book.value) {
            booksStore.removeBook(book.value)
            userBarControl.value = [index, !isSelected]
        }
    } else {
        // 没选中 ，添加
        if (book.value) {
            booksStore.addBook(book.value)
            userBarControl.value = [index, !isSelected]
        }
    }
}
</script>

<style lang="scss">
.content {
    background-color: $uni-bg-color-grey;
    width: 750rpx;
    padding-top: 20px;
    // margin-top: 100px;
}

.img-box {
    border-radius: $uni-border-radius-base;
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.2);
    margin: 0px $uni-spacing-row-lg;
    height: (750 * 0.72) * 1rpx;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
}

.img {
    flex: 1;
    width: 100%;
    background-color: $uni-bg-color-grey;
}

.label {
    height: 100rpx;
    background-color: $uni-color-primary;
    align-items: center;
    display: flex;
}

.lb-text {
    margin-left: 40rpx;

    font-weight: normal;
    font-size: 20px;
    color: white;
}

.text-content {
    margin: $uni-spacing-col-lg $uni-spacing-row-lg 0;
    padding-bottom: 290rpx;
}

.text-title {
    font-family: 'Arial';
    display: block;
    font-weight: 450;
    font-size: 40px;
    color: $uni-color-title;
}

.text-auther {
    margin-top: $uni-spacing-col-base;
    display: block;
    font-weight: normal;
    font-size: 20px;
    color: $uni-color-primary;
}

.text-desc {
    font-family: 'Helvetica Neue';
    margin-top: $uni-spacing-col-base;
    display: block;
    font-weight: normal;
    font-size: 22px;
    color: $uni-color-paragraph;
}

.btn {
    position: fixed;
    bottom: 70rpx;
    left: $uni-spacing-row-lg;
}
.user-bar {
    position: fixed;
    top: 500rpx;
    right: 0;
}
</style>
