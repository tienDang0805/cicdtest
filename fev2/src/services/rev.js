import HttpService from "./Gateway"

//API get list products
export const GetListRevProduct = async (from,to) => {
  return HttpService.get(`ct-phieudat/${from},${to}`)
}

export const GetListPdFromTo = async(from,to) => {
  return HttpService.get(`phieudat/rev/list/${from},${to}`)
}

export const GetTotalIncomeFromTo = async(from,to) => {
  return HttpService.get(`ct-phieudat/total/${from},${to}`)
}
