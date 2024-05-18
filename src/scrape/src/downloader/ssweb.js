/** @format */

import axios from 'axios'

function ssweb(url, device = 'desktop') {
  return new Promise((resolve, reject) => {
    const baseURL = 'https://www.screenshotmachine.com'
    const param = {
      url: url,
      device: device,
      cacheLimit: 0,
    }
    axios({
      url: baseURL + '/capture.php',
      method: 'POST',
      data: new URLSearchParams(Object.entries(param)),
      headers: {
        'content-type': 'application/x-www-form-urlencoded charset=UTF-8',
      },
    })
      .then(data => {
        const cookies = data.headers['set-cookie']
        if (data.data.status == 'success') {
          axios
            .get(baseURL + '/' + data.data.link, {
              headers: {
                cookie: cookies.join(''),
              },
              responseType: 'arraybuffer',
            })
            .then(({ data }) => {
              resolve(data)
            })
        } else {
          reject()
        }
      })
      .catch(reject)
  })
}
export default ssweb
