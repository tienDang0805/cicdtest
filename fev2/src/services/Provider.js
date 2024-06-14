import HttpService from "./Gateway"

//API get list products
export const GetListProvider = async () => {
  return HttpService.get(`provider`)
}

export const GetProviderById = async (id) => {
  return HttpService.get(`provider/${id}`)
}

export const UpdateProviderById = async (id, data) => {
  return HttpService.put(`provider/${id}`,{
    TENNCC: data.TENNCC,
    DIACHI: data.DIACHI,
    EMAIL: data.EMAIL,
    SDT: data.SDT,

  })
}

export const DeleteProviderById = async (id) => {
  return HttpService.delete(`provider/${id}`)
}

export const CreateProvider = async (data) => {
  return HttpService.post(`provider`,{
    MANCC: data.MANCC,
    TENNCC: data.TENNCC,
    DIACHI: data.DIACHI,
    EMAIL: data.EMAIL,
    SDT: data.SDT,

  })
}





