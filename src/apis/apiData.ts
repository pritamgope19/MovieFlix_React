import axios from "axios";

const apiData = {
  data: [],
  call: function (method, path, queryParam, config = {}) {
    // .get('https://jsonplaceholder.typicode.com/users')
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "0122f66b835be1351367d17f60ca287b";
    let url = `${baseUrl}/${path}?api_key=${apiKey}`;
    if (queryParam) url = `${url}?${queryParam}`;
    switch (method) {
      case "get":
        return axios.get(url).then((res) => {
          this.data = res.data;
          return this.data;
        });
      case "post":
        return axios.post(url, config).then((res) => {
          this.data = res.data;
          return this.data;
        });
      default:
        return null;
    }
  }
};

export default apiData;
