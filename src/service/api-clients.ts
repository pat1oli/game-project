import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac9d1a0993d84cceade3554399905bf8",
  },
});
