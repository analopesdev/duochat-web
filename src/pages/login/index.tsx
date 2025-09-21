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
  addToast,
} from "@heroui/react";
import { useState } from "react";
import PenIcon from "../../assets/icons/pen.svg";
import DuochatLogo from "../../assets/images/duochat-logo.svg";
import { createUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

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
    nickname: "",
    avatar: getUrlAvatar(avatarsNames[0]),
  });

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async () => {
    if (user.nickname === "" || user.nickname.length < 3) {
      addToast({
        title: "Digite um nickname válido (mínimo 3 caracteres)",
        radius: "lg",
        color: "warning",
      });

      return;
    }

    const response = await createUser({
      nickname: user.nickname,
      avatar: user.avatar,
    }).catch((err: AxiosError) => {
      if (err.status === 409) {
        setIsInvalid(true);
        setErrorMessage("Nickname already exists");
      } else {
        addToast({
          title: "Erro ao criar usuário",
          radius: "lg",
          color: "warning",
        });
      }
    });

    if (response) {
      navigate("/rooms");
    }
  };

  function getUrlAvatar(nickname: string) {
    return `https://api.dicebear.com/9.x/adventurer/svg?seed=${nickname}`;
  }

  function handleNicknameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const nicknameRegex = /^[a-zA-Z0-9_]*$/;

    if (nicknameRegex.test(value) && value.length <= 16) {
      setUser((prev) => ({
        ...prev,
        nickname: value,
      }));
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <img src={DuochatLogo} alt="Duochat Logo" width={150} height={150} />
      <Card className="w-full max-w-[400px] mt-8 bg-gradient-to-br from-white/1 to-white/12 backdrop-blur-xl border border-white/5 shadow-xl rounded-2xl">
        <CardBody className="p-6">
          <Dropdown
            placement="bottom-start"
            className="bg-gradient-to-br from-white/1 to-white/8 backdrop-blur-xl border border-white/5 shadow-xl rounded-2xl"
          >
            <DropdownTrigger>
              <div className="flex flex-col items-center justify-center gap-2">
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
                    className="w-14 h-14 transition-transform cursor-pointer"
                    src={user.avatar}
                  />
                </div>

                <div className="flex flex-col">
                  {user.nickname ? (
                    <h1 className="text-white font-bold text-lg">
                      {`@${user.nickname}`}
                    </h1>
                  ) : (
                    <h1 className="text-gray-500 font-bold text-lg">
                      {`@nickname`}
                    </h1>
                  )}
                </div>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              {avatarsNames.map((name) => (
                <DropdownItem
                  key={name}
                  className="gap-2 flex cursor-pointer"
                  textValue={name}
                  onClick={() =>
                    setUser({
                      nickname: name,
                      avatar: getUrlAvatar(name),
                    })
                  }
                >
                  <div className="flex items-center gap-2">
                    <Avatar
                      className="w-12 h-12"
                      name={name}
                      src={getUrlAvatar(name)}
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
              placeholder="Example: john_doe"
              variant="bordered"
              value={user.nickname}
              errorMessage={errorMessage}
              isInvalid={isInvalid}
              onChange={handleNicknameChange}
            />

            <Button
              color="primary"
              className="w-full"
              size="lg"
              onPress={login}
              type="submit"
            >
              Entrar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
