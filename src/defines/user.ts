import { Type, plainToClass, Exclude } from 'class-transformer'
import 'reflect-metadata'
import { reactive, computed, ref } from 'vue'
export class User {
    private static _shared: User

    @Type(() => Exercise)
    exercise: Exercise

    constructor() {
        this.exercise = new Exercise()
    }
    static shared(): User {
        if (User._shared) {
            return User._shared
        }
        try {
            const jsonStr = uni.getStorageSync('user')
            if (jsonStr) {
                console.log('load user :' + jsonStr)

                User._shared = reactive(plainToClass(User, JSON.parse(jsonStr)))

                // User._shared.exercise.today()
                // console.log('load completed')
            }
        } catch (e) {
            // error
            console.log('err :' + e)
        }
        if (!User._shared) {
            User._shared = reactive(new User())
        }
        return User._shared
    }
    store() {
        uni.setStorage({
            key: 'user',
            data: JSON.stringify(this),
            success: function () {
                console.log('user stored!')
                console.log('load user :' + JSON.stringify(this))
            },
        })
    }
}

export class Exercise {
    @Type(() => ExerciseDay)
    daysList: ExerciseDay[]

    secs: number

    @Exclude()
    private timer?: number

    constructor() {
        this.daysList = Array<ExerciseDay>()
        this.secs = 0
    }
    today(): ExerciseDay {
        const currentDate: Date = new Date()
        const currentDateString: string = currentDate.toISOString().split('T')[0]
        let today = this.daysList.at(-1)
        if (today && today.date === currentDateString) {
            return today
        }
        today = new ExerciseDay(currentDateString)
        this.daysList.push(today)
        return today
    }

    exe() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.secs += 1
            let item = this.today().list.at(-1)
            if (item) {
                item.secs += 1
                if (item.secs % 60 == 0) {
                    User.shared().store()
                }
            }
        }, 1000)
    }

    stop() {
        clearInterval(this.timer)
        User.shared().store()
    }
}

export class ExerciseDay {
    date: string
    // @Type(() => ExerciseItem)
    list: ExerciseItem[]

    constructor(date: string) {
        this.date = date
        this.list = []
    }
}

export interface ExerciseItem {
    id: string
    name: string
    secs: number
}
