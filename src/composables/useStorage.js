import { ref, watch } from 'vue'

export function useStorage(key, val = null) {
    let storedVal = read()

    if (storedVal) {
        val = ref(storedVal)
    } else {
        val = ref(val)
        write()
    }
    
    watch(val, write, { deep: true })  //deep: true -> to keep track for any of those properties changing; not just listen for if the object is completely owerwritten, check to see if any of the properties in the object changes; this can have a performance penalty if you're dealing with gigantic object

    function read() {
        return JSON.parse(localStorage.getItem(key))
    }

    function write() {
        if (val.value === '' || val.value === null) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(val.value))
        }
    }

    return val
} 