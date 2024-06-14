import HttpService from "./Gateway"
import * as moment from 'moment'


export const getDDH = async () => {
    return HttpService.get('/order')
}

export const getCtDDHById = async (id) => {
    return HttpService.get(`/ct-order/findbyMADDH/${id}`)
}

export const createOrderNCC = async (data) => {
    
    
      // if(this.updateSLT())
      return HttpService.post('order', {
          NGAYDAT: moment(new Date()).format('YYYY-MM-DD'),
          MANV: data.MANV,
          MANCC:data.MANCC,
          CTODS: data.CTODS
          
          
        })
}