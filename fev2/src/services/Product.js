import HttpService from "./Gateway"

//API get list products
export const GetListProduct = async () => {
  return HttpService.get(`winelines`)
}

export const GetProductById = async (id) => {
  return HttpService.get(`winelines/${id}`)
}

export const GetListWinetype = async () => {
  return HttpService.get(`winetype`)
}

export const GetWinetypeById = async (id) => {
  return HttpService.get(`winetype/${id}`)

}

export const getQuantity = async (id) => {
  return HttpService.get(`winelines/product/quantity/${id}`)
}
/////


export const UpdateProductTypeById = async (id, data) => {
  return HttpService.put(`winetype/${id}`, {
    TENLOAI: data.TENLOAI,

  })
}

export const DeleteProductTypeById = async (id) => {
  return HttpService.delete(`winetype/${id}`)
}

export const CreateProductType = async (data) => {
  return HttpService.post(`winetype`, {
    MALOAI: data.MALOAI,
    TENLOAI: data.TENLOAI,
  })
}




//////
export const UpdateProductById = async (id, data) => {
  return HttpService.put(`winelines/${id}`, {
    TENDONG: data.TENDONG,
    GIA: data.GIA,
    TRANGTHAI: data.TRANGTHAI,
    HINHANH: data.HINHANH,
    MOTA: data.MOTA,
    CHITIET: data.CHITIET,
    SOLUONGTON: data.SOLUONGTON,
    MALOAI: data.MALOAI,
    MATH: data.MATH,
    MANCC: data.MANCC,
    MANV: data.MANV,

  })
}

export const DeleteProductById = async (id) => {
  return HttpService.delete(`winelines/${id}`)
}

export const CreateProduct = async (data) => {
  return HttpService.post(`winelines`, {

    MADONG: data.MADONG,
    TENDONG: data.TENDONG,
    GIA: data.GIA,
    TRANGTHAI: data.TRANGTHAI,
    HINHANH: data.HINHANH,
    MOTA: data.MOTA,
    CHITIET: data.CHITIET,
    SOLUONGTON: data.SOLUONGTON,
    MALOAI: data.MALOAI,
    MATH: data.MATH,
    MANCC: data.MANCC,
    MANV: data.MANV,
  })
}


export const GetListHotProducts =  async () => {
  return HttpService.get('winelines/product/hot')
}

export const GetListProductByType = async (MALOAI) => {
  return HttpService.get('winelines/product/'.concat(MALOAI))
}

export const GetListProductByName = async (name) => {
  return HttpService.get('winelines/product/name/'.concat(name))
}

export const GetListTopPromo = async () => {
  return HttpService.get('winelines/product/promo/top')
}

export const getPaypalDetail = async (arr) => {
  return HttpService.post('winelines/product/paypal/arr',arr)
}

export const updateSLT = (MADONG, slt) => {
  return HttpService.put(`winelines/update/slt/${MADONG},${slt}`)
  
}

export const updateSLTminus = (MADONG, slt) => {
  return HttpService.put(`winelines/update/slt/minus/${MADONG},${slt}`)
  
}