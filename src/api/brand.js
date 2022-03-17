import request from "../utils/request"

export const getBrand = () => {
    return request('/home/brand', 'get')
}