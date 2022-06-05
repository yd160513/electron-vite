import instance from "./instance";
import { AxiosPromise } from "axios";

interface UploadSingleRes {
  code: number
  codeText: string
  originalFilename: string
  servicePath: string
}

export const uploadSingle = (formData: FormData): AxiosPromise<UploadSingleRes> => {
  return instance({
    url: '/api/upload_single',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}