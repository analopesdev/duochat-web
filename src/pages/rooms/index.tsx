import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  AvatarGroup,
  Avatar,
} from "@heroui/react";
import { useEffect, useState } from "react";
import CreateRoomDialog from "./components/create_room_dialog";
import { getRooms, type Room } from "../../services/roomService";

export function Rooms() {
  const [openDialog, setOpenDialog] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);

  const fetchRooms = async () => {
    const response = await getRooms();
    console.log(response);
    setRooms(response);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="flex-col w-full mx-auto gap-4 p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Rooms</h1>
        <Button
          color="primary"
          onPress={() => {
            setOpenDialog(true);
          }}
        >
          Create Room
        </Button>
      </div>

      <div className="flex gap-4">
        <Card
          isFooterBlurred
          className="w-1/2 h-[150px] bg-gradient-to-br from-white/1 to-white/8 backdrop-blur-xl border border-white/5 shadow-xl rounded-2xl"
        >
          <CardHeader className="mt-2">
            <AvatarGroup>
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Riley" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Christopher" />
            </AvatarGroup>
          </CardHeader>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_25px)] shadow-small mx-3 mb-3 z-10">
            <div className="flex grow gap-2 items-center">
              <div className="flex flex-col">
                <h1 className="text-white/60 font-bold">Breathing App</h1>
                <p className="text-tiny text-white/60">
                  Get a good night&#39;s sleep.
                </p>
              </div>
            </div>
            <Button radius="full" color="primary" size="sm">
              Enter Room
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="w-1/2 h-[150px] bg-gradient-to-br from-white/1 to-white/8 backdrop-blur-xl border border-white/5 shadow-xl rounded-2xl"
        >
          <CardHeader className="mt-2">
            <AvatarGroup>
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Riley" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Christopher" />
            </AvatarGroup>
          </CardHeader>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_25px)] shadow-small mx-3 mb-3 z-10">
            <div className="flex grow gap-2 items-center">
              <div className="flex flex-col">
                <h1 className="text-white/60 font-bold">Breathing App</h1>
                <p className="text-tiny text-white/60">
                  Get a good night&#39;s sleep.
                </p>
              </div>
            </div>
            <Button radius="full" color="primary" size="sm">
              Enter Room
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          className="w-1/2 h-[150px] bg-gradient-to-br from-white/1 to-white/8 backdrop-blur-xl border border-white/5 shadow-xl rounded-2xl"
        >
          <CardHeader className="mt-2">
            <AvatarGroup>
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Emery" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Riley" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn" />
              <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Christopher" />
            </AvatarGroup>
          </CardHeader>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_25px)] shadow-small mx-3 mb-3 z-10">
            <div className="flex grow gap-2 items-center">
              <div className="flex flex-col">
                <h1 className="text-white/60 font-bold">Breathing App</h1>
                <p className="text-tiny text-white/60">
                  Get a good night&#39;s sleep.
                </p>
              </div>
            </div>
            <Button radius="full" color="primary" size="sm">
              Enter Room
            </Button>
          </CardFooter>
        </Card>
      </div>

      <CreateRoomDialog
        openDialog={openDialog}
        closeDialog={() => setOpenDialog(false)}
      />
    </div>
  );
}
