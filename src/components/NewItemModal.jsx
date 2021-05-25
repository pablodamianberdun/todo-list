import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Input,
    InputGroup,
    Button,
    InputRightElement,
} from "@chakra-ui/react";

const NewItemModal = ({ isOpen, onClose }) => {
    const [newItem, setNewItem] = useState({
        name: "",
        status: "uncompleted",
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setNewItem({
            ...newItem,
            name: e.target.value,
        });
    };

    const handleClick = (e) => {
        if (newItem.name.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        setNewItem({
            ...newItem,
            name: "",
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bgColor="grey">
                <ModalHeader>Add new item</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <InputGroup>
                        <Input
                            placeholder="Cook, Clean, Study..."
                            onChange={handleChange}
                            isInvalid={error}
                            value={newItem.name}
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                colorScheme="blackAlpha"
                                onClick={handleClick}
                            >
                                Add
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NewItemModal;
