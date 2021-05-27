import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";

const Item = ({ item }) => {

	//State to test checkbox behaviour
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    return (
        <Flex
            bg="gray"
            w="100%"
            p={3}
            mt={4}
            borderRadius="lg"
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex
                alignItems="center"
                onClick={handleClick}
                _hover={{
                    cursor: "pointer",
                }}
            >
                <Box
                    borderRadius="full"
                    border="2px solid"
                    borderColor={checked ? "yellow" : "white"}
                    backgroundColor={checked ? "yellow" : "gray"}
                    display="block"
                    mr="1rem"
                >
                    {checked ? (
                        <Flex
                            height="1.5rem"
                            width="1.5rem"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <CheckIcon fontSize="15px" color="black" />
                        </Flex>
                    ) : (
                        <Box height="1.5rem" width="1.5rem"></Box>
                    )}
                </Box>

                {checked ? (
                    <Text as="del" color="#999999">
                        {item.name}
                    </Text>
                ) : (
                    <Text>{item.name}</Text>
                )}
            </Flex>
            <CloseIcon
                _hover={{
                    cursor: "pointer",
                }}
            />
        </Flex>
    );
};

export default Item;
