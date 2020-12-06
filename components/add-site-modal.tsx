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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createSite } from "@/lib/db";

type SiteInput = {
    site: string
    url: URL
}

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  const { register, handleSubmit, errors } = useForm<SiteInput>();

  const onCreateSite = (data: SiteInput) => createSite(data)

  return (
    <>
      <Button
        variant="solid"
        size="md"
        color="#ffffff"
        fontWeight="bold"
        backgroundColor="#282828"
        onClick={onOpen}
      >
        Add site
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
                {errors.site && <FormErrorMessage>Site name is required</FormErrorMessage>}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://example.com"
                name="url"
                ref={register({ required: true })}
              />
              {errors.url && <FormErrorMessage>Link is required</FormErrorMessage>}
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
