import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "https://afternoon-castle-59606-f91da93d1220.herokuapp.com/",
  withCredentials: true,
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
