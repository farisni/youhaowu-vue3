import http from "@/utils/http.js";

export default {
  getTopCategory(id) {
    return http.get('/category',{params:{id}})
  },
}
