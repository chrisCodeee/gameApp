import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "78c24ea0e95b4a5db1bc502ebb4b44b9",
	},
});
export default apiClient;
