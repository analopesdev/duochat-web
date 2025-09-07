import {
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  User,
} from "@heroui/react";
import { useState } from "react";
import PenIcon from "../../assets/icons/pen.svg";
import DuochatLogo from "../../assets/images/duochat-logo.svg";

interface User {
  nickname: string;
  avatar: string;
}

export function Login() {
  const avatarsNames = [
    "Sawyer",
    "Ryan",
    "Jack",
    "Christopher",
    "Eden",
    "Brian",
  ];

  const [user, setUser] = useState<User>({
    nickname: avatarsNames[0],
    avatar: `https://api.dicebear.com/9.x/adventurer/svg?seed=${avatarsNames[0]}`,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img src={DuochatLogo} alt="Duochat Logo" width={150} height={150} />
      <Card className="w-full max-w-md bg-transparent mt-10">
        <CardBody className="p-6">
          <Dropdown placement="bottom-start" className="bg-zinc-800">
            <DropdownTrigger>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  {isHovered && (
                    <img
                      src={PenIcon}
                      alt="Pen"
                      className="w-4 h-4 absolute top-[-5px] right-[-5px] z-1 bg-zinc-800 rounded-full p-1 box-content text-white shadow-sm cursor-pointer hover:scale-110 transition-all duration-300"
                    />
                  )}
                  <Avatar
                    isBordered
                    color="primary"
                    className="w-16 h-16 transition-transform cursor-pointer"
                    src={user.avatar}
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-lg">
                    {user.nickname}
                  </h1>
                  <span className="text-white text-sm">{`@${user.nickname}`}</span>
                </div>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              {avatarsNames.map((name) => (
                <DropdownItem
                  key={name}
                  className=" gap-2 flex cursor-pointer"
                  onClick={() =>
                    setUser({
                      nickname: name,
                      avatar: `https://api.dicebear.com/9.x/adventurer/svg?seed=${name}`,
                    })
                  }
                >
                  <div className="flex items-center gap-2">
                    <Avatar
                      className="w-12 h-12"
                      name={name}
                      src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${name}`}
                    />
                    <p className="font-bold text-white">{name}</p>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <div className="space-y-4 mt-6">
            <Input
              label="Nickname"
              placeholder="Digite seu nickname"
              variant="bordered"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  nickname: e.target.value,
                }));
              }}
            />

            <Button color="primary" className="w-full" size="lg">
              Entrar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
