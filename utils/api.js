const baseUrl = 'http://localhost:8080/';

const api = (url = '', data = {}, method = 'GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: method,
			url: baseUrl + url,
			data: data,
			dataType: 'json',
			success: res => {
				resolve(res.data)
			},
			faill: err => {
				reject(err)
			}
		})
	});
}
export default api
