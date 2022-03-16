import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        info: {
            id: '',
            avatar: '',
            nickname: '',
            account: '',
            mobile: '',
            token: ''
        }
    }),
    actions: {
        setUser(newInfo) {
            this.info = newInfo
        }
    },
    persist: true
})