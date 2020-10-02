import { API_URL } from "./constants";


class ApiHelper {

  getRequest = async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "GET"
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  detailRequest = async (playerId) => {
    try {
      const response = await fetch(`https://api.monpetitgazon.com/stats/player/${playerId}?season=2018`, {
        method: "GET"
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  postRequest = async (endpoint, body) => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.accessToken}`
        },
        body: JSON.stringify(body)
      });
      
      const responseJson = await response.json();
      console.log(response.status )
      const finalResponse = { data: responseJson, status: response.status };
      return finalResponse;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
}
const APIHelper = new ApiHelper()
export default APIHelper;