import apiClient from "@/lib/apiclient";

export const getUser = async () => {
  try {
    const res = await apiClient.get("/user");
    if (res.status === 200) {
      return { success: true, data: res.data };
    }
    return { success: false, data: res.data.message || "unknown error" };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      data: error.response?.data?.message || error.message || "unknown error",
    };
  }
};

export const fetchSchool = async (date: Date) => {
  try {
    const res = await apiClient.post("/school", { date: date || Date.now() });
    if (res.status === 200) {
      return { success: true, data: res.data };
    }
    return { success: false, data: res.data.message || "unknown error" };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      data: error.response?.data?.message || error.message || "unknown error",
    };
  }
};
