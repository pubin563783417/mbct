import { Book, Collection } from '@/defines/book'
// stores/counter.js
import { defineStore } from 'pinia'

let kBooks = 'books'

export const useBooksStore = defineStore('books', {
    state: () => {
        return { books: Array<Book>(), list: Array<Collection>() }
    },
    actions: {
        getBooks(): Array<Book> {
            let books = uni.getStorageSync(kBooks)
            if (!books) {
                books = getInitBooks()
                this.setBooks(books)
            }
            return books
        },

        setBooks(books: Array<Book>) {
            uni.setStorage({
                key: kBooks,
                data: books,
            })
        },
        async getList(): Promise<Array<Collection>> {
            // return res as Array<Collection>
            // let promise = new Promise<Array<Collection>>()
            return new Promise<Array<Collection>>((reslove, reject) => {
                uni.request({
                    url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/data/list.json', //仅为示例，并非真实接口地址。
                    success: (res) => {
                        if (res.statusCode == 200) {
                            // console.log(res)

                            reslove(res.data as Array<Collection>)
                        } else {
                            reject(res.errMsg ?? '' + res.statusCode)
                        }
                    },
                    fail: (res) => {
                        reject(res.errMsg)
                    },
                })
            })
        },
    },
})

function getInitBooks(): Array<Book> {
    return [
        {
            id: 'bl0000',
            title: '精华-正念呼吸',
            duration: '10分钟',
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/jx-hx.mp3',
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
            url: 'https://public-1-1309961435.cos.ap-chengdu.myqcloud.com/mbct/audios/jx-stsm.mp3',
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
    ]
}
