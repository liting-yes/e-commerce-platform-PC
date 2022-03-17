import request from '../utils/request'

export const getAllCategoty = () => {
    return request('/home/category/head', 'get')
}