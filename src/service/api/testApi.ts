import http from '@/service/https'
// export default {
//   /**
//    * @description 实时段子
//    * @param {string} type - 指定查询类型，可选参数(all/video/image/gif/text)
//    * @param {string} page - 页码(传0或者不传会随机推荐)
//    * @param {string} count - 每页返回数量
//    * @return {HttpResponse} result
//    */
//   getJoke(url: any, params: any) {
//     return http.post(url, params)
//   },
// }
export const pushTxT = (url: any, params: any) => {
  return http.post(url, params)
}
export const getUser = (url: any, params: any) => {
  return http.get(url, params)
}
// ts无法使用export default
// export default {
//   getUser(url: any, params: any) {
//     return http.get(url, params)
//   },
//   pushTxT(url: any, params: any) {
//     return http.post(url, params)
//   },
// }

// export class testApi {
//   // 模块二
//   /**
//    * @description 测试api
//    * @return {HttpResponse} result
//    */
//   static async getUser(url: any, params: any) {
//     return http.get(url, params)
//   }
//   static async pushTxT(url: any, params: any) {
//     return http.post(url, params)
//   }
// }
