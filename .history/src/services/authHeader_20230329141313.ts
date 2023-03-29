import axios from "axios";

const authHeader = () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken") || "");
  const accessTokenWithoutString = accessToken.replace(/"/g, "");
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken") || "");
  const refreshTokenWithoutString = refreshToken.replace(/"/g, "");

  if (accessToken && refreshToken) {
    axios.post(process.env.REACT_APP_API_URL + "/Auth/useToken", {
      accessToken: accessTokenWithoutString,
      refreshToken: refreshTokenWithoutString,
    });
  } else {
    return {};
  }
};

export default authHeader;
