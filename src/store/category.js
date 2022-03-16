import { defineStore } from "pinia"

export const useCategory = defineStore('category', {
    state: () => ({
        list: []
    }),
    persist: true
})