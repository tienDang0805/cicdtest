import HttpService from "./Gateway"

export const GetReviewByMadong = async (MADONG) => {
    return HttpService.get(`review/madong/${MADONG}`)
  }

export const CreateReview = async (data) => {
    return HttpService.post(`review`, data)
}