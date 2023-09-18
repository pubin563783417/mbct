<template>
    <view class="box">
        <view class="add" :style="{ color: control[0] ? '#a0cfff' : '#2979ff' }" @click="onClick(0)"
            ><text>+</text></view
        >
    </view>
</template>

<script lang="ts">
export default {
    name: 'BookUserBar',
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { PropType } from 'vue'

// 使用defineProps定义属性并指定类型
const props = defineProps({
    control: {
        type: Object as PropType<[number, boolean]>,
    },
})
watch(
    () => props.control,
    (newProps) => {
        if (newProps) {
            control.value[newProps[0]] = newProps[1]
        }
    }
)
const control = ref<{ [key: number]: boolean }>({ 0: (props.control ? props.control[1] : false) })

const emit = defineEmits<{
    onClick: [index: number, isSelected: boolean]
}>()

function onClick(index: number) {
    emit('onClick', index, control.value[index])
}
</script>

<style scoped>
.box {
    display: flex;
    justify-items: center;
    flex-direction: column;
    width: 140rpx;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px 0 0 10px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.add {
    margin: 20px auto 20px auto;
    width: 80rpx;
    height: 80rpx;
    font-weight: normal;
    font-size: 35px;
    text-align: center;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
</style>
