import { defineStore } from "pinia"
import { topCategory } from "../api/constans"
import { getAllCategoty } from "../api/categoty"

export const useCategoryStore = defineStore('category', {
    state: () => ({
        list: topCategory.map(item => ({ name: item }))
    }),
    actions: {
        async getList() {
            const { result } = await getAllCategoty()
            this.list = result
        },
        show(item) {
            const category = this.list.find(category => category.id === item.id)
            category.open = true
        },
        hide(item) {
            const category = this.list.find(category => category.id === item.id)
            category.open = false          
        }
    },
    persist: true
})