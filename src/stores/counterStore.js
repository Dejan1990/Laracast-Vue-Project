import {reactive} from 'vue'

export let counter = reactive({
    //state
    count: 0,
    message: '',
    
    // actions
    increment() {
        if (this.count >= 10) {
            this.message = 'It can be more than 10'
            return;
        }

        this.count++
    }
})