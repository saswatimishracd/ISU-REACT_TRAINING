import axios from "./axiosInstance";

export const updateLanguage = async (payload) => {
  try {
    const res = await axios.post(
      "/CBOI/isu_soundbox/lang/status_update",
      payload
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};