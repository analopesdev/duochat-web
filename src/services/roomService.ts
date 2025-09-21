import axiosInstance from "../config/axiosInstance";

export interface Room {
  id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  password?: string;
  maxUsers: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRoom {
  name: string;
  description: string;
  isPrivate: boolean;
  password?: string | null;
  maxUsers: number;
}

export const getRooms = async (): Promise<Room[]> => {
  const response = await axiosInstance.get("/rooms");
  return response.data;
};

export const createRoom = async (room: CreateRoom): Promise<Room> => {
  const response = await axiosInstance.post("/rooms", room);
  return response.data;
};
