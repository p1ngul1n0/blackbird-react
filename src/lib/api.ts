import { ApiResponse } from "@/types/general";
import { axiosClient } from "@/lib/axiosClient";

async function getResult(username: string) {
  const { data } = await axiosClient.post<ApiResponse>("search/username", {
    username,
  });
  return data;
}

export { getResult };
