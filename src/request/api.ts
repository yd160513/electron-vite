import instance from "./instance";

const fm = new FormData()
fm.append('file', '')
fm.append('filename', '')
instance.post('/upload_single', fm, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export const uploadSigle = () => {
  return new Promise((resolve, reject) => {
    const fm = new FormData()
    fm.append('file', '')
    fm.append('filename', '')
    instance.post('/upload_single', fm, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// xxx=xxxx&xx=xx
instance.post('/upload_single_base64', {
  file: '',
  fileName: ''
}, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export const uploadSingle = (formData: FormData) => {
  return instance({
    url: '',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}