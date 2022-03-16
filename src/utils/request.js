import axios from 'axios'
import { useUserStore } from '../store'
import router from '../router'


export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const instance = axios.create({
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use(
    config => {
        const { info } = useUserStore()
        if (info.token) {
            config.headers.Authorization = `Bearer ${ info.token }`
        }

        return config
    },
    err => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    res => res.data,
    err => {
        if (err.response && err.response.status === 401) {
            const { setUser } = useUserStore()
            setUser({})
            
            // encodeURIComponent 把当前路由地址作为URI组件进行编码，防止解析地址出错
            const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
            router.push('/login?redirectUrl=' + fullPath)
        }

        return Promise.reject(err)
    }
)

export default (orl, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}