import axiosInstance from "../config/axiosInstance";

export const createUser = async ({
  nickname,
  avatar,
}: {
  nickname: string;
  avatar: string;
}) => {
  const response = await axiosInstance.post("/users", {
    nickname,
    avatar,
  });

  return response.data;
};
