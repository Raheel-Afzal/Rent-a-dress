import Repository from "./Repository";
export default {
  login(email, password) {
    return Repository.get(`/login?email=${email}&pass=${password}`);
  },
  getAllDresses() {
    return Repository.get('showdresses')
  },
  getDressById(dressId) {
    return Repository.get(`getSingleDressByid?dressId=${dressId}`)
  },
  bookDress(payload) {
    return Repository.post(`saverent`, payload)
  },
  showRequestToRenter(id) {
    return Repository.get(`/showtorenter?oid=${id}`)
  },
  showRequestToOwner(id) {
    return Repository.get(`/showtoowner?uid=${id}`)
  },
  getdressDetails() {
    return Repository.get(`/getdressname`)
  },
  addDress(payload) {
    return Repository.post(`/uploadMultipleDressImage`, payload)
  },
  responseToRentRequest(uid, oid, did, status) {
    return Repository.post(`savestatuss?uid=${uid}&oid=${oid}&did=${did}&s=${status}`)
  }
};