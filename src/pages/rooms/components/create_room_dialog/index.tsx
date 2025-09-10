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
} from "@heroui/react";
import { useState } from "react";

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

  const onOpenChangeDialog = (isOpen: boolean) => {
    if (!isOpen) {
      closeDialog();
    }
  };

  const onCreateRoom = () => {
    console.log("onCreateRoom");
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
                label="Room Name"
                placeholder="Enter Room Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Room Description"
                placeholder="Enter Room Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Checkbox
                isSelected={isPrivate}
                onValueChange={(e) => setIsPrivate(e)}
              >
                Private Room
              </Checkbox>

              {isPrivate && (
                <Input
                  label="Room Password"
                  placeholder="Enter Room Password"
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
