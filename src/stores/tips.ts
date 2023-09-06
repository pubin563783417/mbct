import { ZNTips } from '@/defines/tips'
// stores/counter.js
import { defineStore } from 'pinia'

export const useZNTipsStore = defineStore('tips', {
    state: () => {
        return { tips: Array<ZNTips>() }
    },
    actions: {
        setupTips() {
            this.tips = [
                {
                    text: '七个态度:\n接纳，初心，放下，不争/无为，信任，耐心，非评价',
                    id: '121456',
                },
                { text: '活在当下\n如其所是', id: '121456' },
                { text: '接纳自己\n做真实的自己', id: '121456' },
                { text: '爱自己\n别人自然爱你', id: '121456' },
                { text: '顺其自然\n为所当为', id: '121456' },
                { text: '想法不等于真实', id: '121456' },
                { text: '控制自己能控制的\n放过不能控制的', id: '121456' },
            ]
        },
    },
})
