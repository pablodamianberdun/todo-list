import React, { useState, useContext } from "react";
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

import { ItemsContext } from "../context/ItemsContext";
import shortid from "shortid";

const NewItemModal = ({ isOpen, onClose }) => {
    const { items, setItems } = useContext(ItemsContext);

    const [newItem, setNewItem] = useState({
        name: "",
        completed: false,
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setNewItem({
            ...newItem,
            name: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        newItem.id = shortid.generate();
        setItems([...items, newItem]);
        setNewItem({
            ...newItem,
            name: "",
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bgColor="gray">
                <ModalHeader>Add new item</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Input
                                placeholder="Cook, Study, Wash the car..."
                                onChange={handleChange}
                                isInvalid={error}
                                value={newItem.name}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    colorScheme="blackAlpha"
                                    type="submit"
                                >
                                    Add
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NewItemModal;
