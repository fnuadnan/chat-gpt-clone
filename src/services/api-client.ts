import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000",
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = async (message: string) => {
    return axiosIntance
      .post<T>(this.endpoint + "/", { message })
      .then((res) => res.data);
  };
}

export default APIClient;
