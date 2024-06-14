import HttpService from "./Gateway"

//API get list products
export const GetListPromo = async () => {
  return HttpService.get(`promotion`)
}

export const GetPromoById = async (id) => {
  return HttpService.get(`promotion/${id}`)
}

export const GetCurPromo = async () => {
  return HttpService.get(`promotion/curPromo/cur`)

}




export const UpdatePromoById = async (id, data) => {
  return HttpService.patch(`promotion/${id}`,{
    MAKM: data.MAKM,
    TENKM: data.TENKM,
    NGAYBATDAU: data.NGAYBATDAU,
    NGAYKETTHUC: data.NGAYKETTHUC,
    LIDO: data.LIDO,
    MANV: data.MANV,

  })
}

export const DeletePromoById = async (id) => {
  return HttpService.delete(`promotion/${id}`)
}

export const CreatePromo = async (data) => {
  return HttpService.post(`promotion`,{
    MAKM: data.MAKM,
    TENKM: data.TENKM,
    NGAYBATDAU: data.NGAYBATDAU,
    NGAYKETTHUC: data.NGAYKETTHUC,
    LIDO: data.LIDO,
    MANV: data.MANV,

  })
}




///////


export const GetListCtPromo = async () => {
  return HttpService.get(`ct-promotion`)
}

export const GetCtPromoById = async (MAKM, MADONG) => {
  return HttpService.get(`ct-promotion/one`, MAKM, MADONG)
}

export const UpdateCtPromoById = async (id, data) => {
  return HttpService.put(`ct-promotion/${id}`,{
    MAKM: data.MAKM,
    MADONG: data.MADONG,
    PHANTRAMGIAM: data.PHANTRAMGIAM,
    

  })
}

export const DeleteCtPromoById = async (MAKM, MADONG) => {
  console.log('delete ctpromo')
  return HttpService.delete(`ct-promotion?MAKM=${MAKM}&MADONG=${MADONG}`)
}

export const CreateCtPromo = async (data) => {
  return HttpService.post(`ct-promotion`,{
    MAKM: data.MAKM,
    MADONG: data.MADONG,
    PHANTRAMGIAM: data.PHANTRAMGIAM,

  })
}