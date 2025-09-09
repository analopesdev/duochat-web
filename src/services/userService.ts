import axiosInstance from "../config/axiosInstance";

export const createUser = async ({
  nickname,
  avatar,
}: {
  nickname: string;
  avatar: string;
}) => {
  const response = await axiosInstance.post("/users", {
    withCredentials: true,
    nickname,
    avatar,
  });

  return response;
};
