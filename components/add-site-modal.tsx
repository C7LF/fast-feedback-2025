import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  FormControl,
  Input,
  FormErrorMessage,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";

type SiteInput = {
  site: string;
  url: URL;
};

interface AddSiteModal {
  text: string;
  icon?: any;
}

const AddSiteModal = ({ text, icon }: AddSiteModal) => {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const toast = useToast();

  const { register, handleSubmit, errors } = useForm<SiteInput>();

  const { user } = auth;

  const onCreateSite = (data: SiteInput) => {
    createSite({
      authorId: user.uid,
      createdAt: new Date().toISOString(),
      ...data,
    });
    toast({
      title: "Sucess!",
      description: "Site added",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button
        variant="solid"
        size="md"
        color="#ffffff"
        fontWeight="bold"
        backgroundColor="#282828"
        onClick={onOpen}
        leftIcon={icon}
      >
        {text}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My site"
                name="site"
                ref={register({ required: true })}
              />
              {errors.site && (
                <FormErrorMessage>Site name is required</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://example.com"
                name="url"
                ref={register({ required: true })}
              />
              {errors.url && (
                <FormErrorMessage>Link is required</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
