import HttpService from "./Gateway"

//API get list products
export const GetListBrand = async () => {
  return HttpService.get(`trademarks`)
}

export const GetBrandById = async (id) => {
  return HttpService.get(`trademarks/${id}`)
}



export const UpdateBrandById = async (id, data) => {
  return HttpService.put(`trademarks/${id}`,{
    TENTH: data.TENTH,
    
  })
}

export const DeleteBrandById = async (id) => {
  return HttpService.delete(`trademarks/${id}`)
}

export const CreateBrand = async (data) => {
  return HttpService.post(`trademarks`,{
    MATH: data.MATH,
    TENTH: data.TENTH,
  })
}
