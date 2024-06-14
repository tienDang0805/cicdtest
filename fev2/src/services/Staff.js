import HttpService from "./Gateway"

//API get list products
export const GetListStaff = async () => {
  return HttpService.get(`staffs`)
}

export const GetStaffById = async (id) => {
  return HttpService.get(`staffs/${id}`)
}

// export const LoginStaff = async (payload) => {
//   return HttpService.post(`staffs/login`, payload)
// }


export const GetNVGH = async () => {
  return HttpService.get(`staffs/nvgh`)
}