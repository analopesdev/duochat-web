import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Checkbox,
  addToast,
} from "@heroui/react";
import { useState } from "react";
import { createRoom } from "../../../../services/roomService";

interface CreateRoomDialogProps {
  openDialog: boolean;
  closeDialog: () => void;
}

export default function CreateRoomDialog({
  openDialog,
  closeDialog,
}: CreateRoomDialogProps) {
  const { isOpen } = useDisclosure({
    isOpen: openDialog,
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");
  const [maxUsers, setMaxUsers] = useState<number>(10);

  const onOpenChangeDialog = (isOpen: boolean) => {
    if (!isOpen) {
      closeDialog();
    }
  };

  const onCreateRoom = async () => {
    const room = {
      name,
      description,
      isPrivate,
      password: isPrivate ? password : null,
      maxUsers,
    };

    const response = await createRoom(room);

    if (response) {
      addToast({
        title: "Room created successfully",
        description: "Room created successfully",
        color: "success",
      });
      closeDialog();
    }
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      className="bg-zinc-900"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      onOpenChange={onOpenChangeDialog}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create Room
            </ModalHeader>
            <ModalBody>
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Input
                label="Max Users"
                type="number"
                onChange={(e) => setMaxUsers(Number(e.target.value))}
              />

              <Checkbox
                isSelected={isPrivate}
                onValueChange={(e) => setIsPrivate(e)}
              >
                Private Room
              </Checkbox>

              {isPrivate && (
                <Input
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onCreateRoom}>
                Create Room
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
