import React, { Fragment } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";
import NewItemModal from "./NewItemModal";

const NewItemButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Fragment>
            <Box
                display="block"
                textAlign="center"
                position="fixed"
                bottom="0"
                left="0"
                right="0"
                marginBottom="10"
            >
                <Box
                    bgColor="yellow"
                    display="inline-block"
                    padding="3"
                    borderRadius="full"
                    _hover={{
                        cursor: "pointer",
                    }}
                    onClick={onOpen}
                >
                    <AddIcon color="black" fontSize="4xl" />
                </Box>
            </Box>
            <NewItemModal isOpen={isOpen} onClose={onClose} />
        </Fragment>
    );
};

export default NewItemButton;
