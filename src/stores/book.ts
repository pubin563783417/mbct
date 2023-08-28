import { Book } from '@/defines/book'
// stores/counter.js
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books', {
    state: () => {
        return { tempBooks: Array<Book>() }
    },
    actions: {
        setupTemp() {
            this.tempBooks = getBookListTemp()
        },
    },
})

function getBookListTemp(): Array<Book> {
    return [
        {
            id: 'bl0000',
            title: '精华-正念呼吸',
            duration: '10分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/jz.aac',
            icon: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/imgs/jingzuo.webp',
            desc: `正念呼吸是正念冥想中的核心练习之一，它帮助我们专注于呼吸这个当下的感觉，从而增强觉知、减轻压力，并培养心灵的平静。以下是正念呼吸的核心要点：

选定舒适姿势： 找一个安静、舒适的地方，坐下或躺下均可。姿势要自然，允许身体放松。

放松： 开始时，可以闭上眼睛，慢慢让身体放松下来，专注于呼吸。

觉察呼吸： 将注意力集中在呼吸上。觉察呼吸的感觉，不刻意改变呼吸的节奏，只是觉知它的自然流动。

集中注意力： 当注意力飘忽或分散时，用呼吸来带回。每当发现自己的思绪漫游，不要自责，只需轻轻地将注意力回到呼吸上。

觉知呼吸的细节： 可以觉知呼吸的细节，如气流进出鼻孔的感觉、胸腔的起伏、腹部的扩张和收缩。感受呼吸的每一个瞬间。

包容一切： 在练习过程中，可能会有杂念、情绪、感觉涌现。不要拒绝它们，也不要刻意去追随它们，只是包容它们的存在，继续专注于呼吸。

不评价： 不要评价呼吸好坏、深浅、快慢，不要有期待。只是觉知呼吸的实际状态，接受它的自然。

持续练习： 正念呼吸是一个持续练习的过程。每天花一点时间，坚持练习，可以帮助你逐渐培养正念的习惯，带来内在的宁静和平和。

正念呼吸是增强觉知、降低压力、提高集中力的有效工具。通过持续的练习，你可以逐渐提高对呼吸的觉察能力，并在日常生活中更好地应用正念。`,
            author: '官方出品',
        },
        {
            id: 'bl0001',
            title: '精华-身体扫描',
            duration: '30分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/sm.aac',
            icon: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/imgs/shentishaomiao.jpg',
            desc: `正念练习中的身体扫描是一种深入关注身体各部位的正念练习，它可以帮助我们更加连接身体和注意力，促进放松、减压和增强自我意识。身体扫描的核心在于专注地感知和觉察身体的各个部分，以及觉察在这个过程中出现的感觉、感受和想法。以下是身体扫描练习的核心要点：

舒适姿势： 找一个安静舒适的地方，可以坐下或躺下。姿势要自然、舒适，以便在练习过程中不易分散注意力。

慢慢开始： 开始时可以闭上眼睛，慢慢带入正念练习。通过深呼吸，让自己放松下来，专注于身体的感觉和呼吸。

逐部位扫描： 从头部开始，逐步扫描身体各个部位，注意每个部位的感觉，不刻意改变，只是觉察。可以先注意头部、面部、颈部，然后逐步移动到肩部、胸部、背部、腹部、手臂、手、臀部、腿、脚等。每个部位停留片刻，用注意力感知。

觉察感觉： 在扫描每个部位时，觉察那个部位的感觉、温度、压力、轻重等。如果有疼痛或不适的感觉，不要抵抗，只需观察、接受它的存在，不评价也不判断。

呼吸连接： 身体扫描过程中，可以时常将注意力回到呼吸上。每当注意力飘忽或分散，用呼吸来带回，再继续扫描下一个部位。

不强求： 正念练习中不要强求特定的体验，也不要对自己有期待。无论是感到放松、安宁，还是感到不适，都是正常的。

持续练习： 身体扫描是一个不断培养的过程。持续练习可以增强对身体的觉察，帮助我们更好地与自己的身体相连，减轻压力，促进心理和生理的平衡。

通过持续的身体扫描练习，我们可以提高正念和觉知的能力，使我们更加意识到自己的身体和心理状态，以及如何更好地照顾自己的身心健康。
`,
            author: '官方出品',
        },
        {
            id: 'bl0002',
            title: '身体扫描40分钟',
            duration: '40分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-stsm.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `在进行“身体扫描”练习时，请找一个没有任何干扰、可以舒适躺下的地方。身体扫描的目的是尽自己所能，按一定的顺序在身体不同部位移动注意力时，对自己体验到的身体感觉加以觉察，从而更好地与自己的身体建立联结。
`,
            author: '官方出品',
        },
        {
            id: 'bl0003',
            title: '10分钟正念静坐',
            duration: '10分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-10jz.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `在进行此练习时，请以舒适的坐姿坐下，可以坐在椅子或冥想凳上，背部挺直而不僵硬，姿势要舒适。可以闭上眼睛，也可以降低视线，双眼轻轻张开。正念静坐的目的是为了让你在每个时刻都能够对自身体验有所意识，每次当你留意到心智游离时，只需要以呼吸为锚，温和地与当下时刻进行联结，随着呼吸聚焦于下腹部的感觉变化。`,
            author: '官方出品',
        },
        {
            id: 'bl0004',
            title: '正念运动',
            duration: '40分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-znyd.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `正念运动包括一系列温和的伸展运动。请找到合适的时间、地点练习，以便不被打扰，可以躺在地板的垫子或毯子上练习。记得要照顾好自己的身体，如果你有什么背部问题或其他健康困扰，请首先聆听指导语，不做练习，然后认真思考一下自己是否应该做全部的或部分的练习动作。你可以自行跳过那些目前无法完成的难度大的练习动作，只需要跟着指导语想象做练习即可。
			本练习的目的是帮助你觉察自己的身体，按照它们的本来面貌接受它们，而不是健身或是挑战自己的伸展极限。`,
            author: '官方出品',
        },
        {
            id: 'bl0005',
            title: '20分钟正念静坐',
            duration: '20分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-20jz.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `本练习是10分钟正念静坐的延伸版，在进行此练习时，请以舒适的坐姿坐下，可以坐在椅子或冥想凳上，背部挺直而不僵硬，姿势要舒适。如果感觉舒适，可以闭上眼睛，或者降低视线，双眼轻轻张开。正念静坐的目的是为了让你在每个时刻都能够对自身体验有所意识，每次当你留意到你的心智游离时，只需要以呼吸为锚，温和地与当下时刻进行联结，随着呼吸聚焦于下腹部的感觉变化。`,
            author: '官方出品',
        },
        {
            id: 'bl0006',
            title: '3分钟呼吸空间——常规式',
            duration: '4分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-hxkj.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `在进行此练习时，请先有意识地调整身体的姿势，背部挺直但不僵硬，双肩放松，如果可以的话，请闭上眼睛。3分钟呼吸空间练习可以让我们走出自动导航模式，重新与当下时刻联结。`,
            author: '官方出品',
        },
        {
            id: 'bl0007',
            title: '40分钟正念静坐',
            duration: '40分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-40jz.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `在正念静坐练习开始时，请先花点时间，舒适、放松地坐好，背部挺直而不僵硬，双手放松地放在大腿上或膝盖上。如果是坐在椅子上，请将双脚平放在地上，轻闭双眼或将目光温和地落在身体前下方的地面上。
			正念静坐的目的是让我们觉察自己的心智、身体和整个世界中出现的一切，即“无拣择觉察”，看看我们是否可以安住于觉察本身，自然而然地留意一刻接一刻产生的现象，如呼吸、身体感觉、声音、想法或情绪感受。`,
            author: '官方出品',
        },
        {
            id: 'bl0008',
            title: '正念行走',
            duration: '17分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/bz-znxz.mp4',
            icon: 'https://mmbiz.qpic.cn/mmbiz_jpg/L3LEiaDunWKYRrLO2rxpibFX7clPIrAaqcBT4Wb8Of9iaOk9e04micicFIKDTkqWoB6PGNdibFTQuXApPVrLvjSzfiboQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
            desc: `在开始练习之前，请找到一个可以来回走动的空间，大概有5-10步的距离，在这里练习正念行走时，能够不被他人打扰。如果你愿意，可以脱掉鞋子和袜子，这样可以直接感受到地板。
			本练习的目的是让自己在行走时保持对身体运动的觉知，放下所有对身体知觉的想法和情绪感受。`,
            author: '官方出品',
        },
    ]
}
