import HttpService from "./Gateway"
import * as moment from 'moment'
import { updateSLT } from "./Product"


export const createPhieuDat = async (data) => {

  // data.CTPDS.map(cur => {
  //   console.log(cur.MADONG, cur.SOLUONG)
  //   updateSLT(cur.MADONG, cur.SOLUONG)
  //   .then(res => {
  //     console.log(res)
  //     if (res.status !== 201){
  //       // alert('Failed')
  //       return
  //     }
  //   })
  // })

  // if(this.updateSLT())
  return HttpService.post('phieudat', {
      NGAYDAT: moment(new Date()).format('YYYY-MM-DD'),
      HONN: data.HONN,
      TENNN: data.TENNN,
      DIACHINN: data.DIACHINN,
      SDTNN: data.SDTNN,
      GHICHU: data.GHICHU,
      TRANGTHAI: "Chưa duyệt",
      MANVD: "",
      MANVGH: "",
      MAKH: data.MAKH,
      CTPDS: data.CTPDS
      
      
    })
}


export const createPhieuDatPaypal = (data, orderID) => {
  return HttpService.post('phieudat/create/paypal', {
      NGAYDAT: moment(new Date()).format('YYYY-MM-DD'),
      HONN: data.HONN,
      TENNN: data.TENNN,
      DIACHINN: data.DIACHINN,
      SDTNN: data.SDTNN,
      GHICHU: data.GHICHU,
      TRANGTHAI: "Chưa duyệt",
      MANVD: "",
      MANVGH: "",
      MAKH: data.MAKH,
      CTPDS: data.CTPDS,
      MAPD: orderID,
      
      // [
      //   {
      //     MADONG: "001",
      //     SOLUONG: 5,
      //     GIA: 60000
      //   }
      // ]
    })
}

export const UpdatePdById = async (id, data) => {
  console.log(data)
  return HttpService.put(`phieudat/${id}`, {
    MAPD: data.MAPD,
    NGAYDAT: data.NGAYDAT,
    HONN: data.HONN,
    TENNN: data.TENNN,
    DIACHINN: data.DIACHINN,
    SDTNN: data.SDTNN,
    GHICHU: data.GHICHU,
    TRANGTHAI: data.TRANGTHAI,
    MANVD: data.MANVD,
    MANVGH: data.MANVGH,
    MAKH: data.MAKH,
    CTPDS: data.CTPDS

  }, {
    headers: 
    {
      
    }
  })
}

export const findByState = (TRANGTHAI) => {
  return HttpService.get('phieudat/state/'.concat(TRANGTHAI))
}


export const getListPdByNVGH = (MANV) => {
  return HttpService.get(`phieudat/list/NVGH/${MANV}`)
}

export const getListPdByStateAndNVGH = (TRANGTHAI,MANV) => {
  return HttpService.get(`phieudat/NV&state/${TRANGTHAI},${MANV}`)
}

export const getListPdByCustomer = (MAKH) => {
  return HttpService.get(`phieudat/list/pd/KH/${MAKH}`)
}

export const getListPdByStateAndCustomer = (TRANGTHAI,MAKH) => {
  return HttpService.get(`phieudat/cus&state/list/${TRANGTHAI},${MAKH}`)
}

export const checkSltPaypal = (data) => {
  return HttpService.post('phieudat/create/checkslt/paypal', {
    NGAYDAT: moment(new Date()).format('YYYY-MM-DD'),
    HONN: data.HONN,
    TENNN: data.TENNN,
    DIACHINN: data.DIACHINN,
    SDTNN: data.SDTNN,
    GHICHU: data.GHICHU,
    TRANGTHAI: "Chưa duyệt",
    MANVD: "",
    MANVGH: "",
    MAKH: data.MAKH,
    CTPDS: data.CTPDS
    
    
  })
}