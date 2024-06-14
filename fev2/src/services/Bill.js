import HttpService from "./Gateway"

//API get list bill
export const GetListBill = async () => {
  return HttpService.get(`bill`)
}

export const GetBillById = async (id) => {
  return HttpService.get(`bill/${id}`)
}

export const GetBillByMAPD = async (MAPD) => {
  return HttpService.get(`bill/phieudat/${MAPD}`)
}

export const UpdateBillById = async (id, data) => {
  return HttpService.put(`bill/${id}`, {
    NGAY: data.NGAY,
    THANHTIEN: data.THANHTIEN,
    MASOTHUE: data.MASOTHUE,
    MANV: data.MANV,
    MAPD: data.MAPD,

  })
}

export const DeleteBillById = async (id) => {
  return HttpService.delete(`bill/${id}`)
}

export const CreateBill = async (data) => {
  return HttpService.post(`bill`, {
    MAHD: data.MAHD,
    NGAY: data.NGAY,
    THANHTIEN: data.THANHTIEN,
    MASOTHUE: data.MASOTHUE,
    MANV: data.MANV,
    MAPD: data.MAPD,
  })
}



///PD

export const GetListPD = async () => {
  return HttpService.get(`phieudat`)
}

export const GetPDById = async (id) => {
  return HttpService.get(`phieudat/${id}`)
}





