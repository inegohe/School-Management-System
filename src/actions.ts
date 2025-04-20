import apiClient from "@/lib/apiclient";

export const fetchSchool = async () => {
  try {
    const res = await apiClient.get("/school");
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
