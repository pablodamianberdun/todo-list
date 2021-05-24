import React, { Fragment } from "react";
import { Heading, Stack, Button, Flex } from "@chakra-ui/react";

const Header = () => {
    return (
        <Fragment>
            <Heading margin="5">Todo list</Heading>
				
            <Stack spacing={4} direction="row" align="center"
			justify="flex-start">
                <Button
                    _hover={{
                        background: "grey",
                    }}
					_focus={{
						bg: "grey"
					}}
                    variant="outline"
                >
                    All
                </Button>
                <Button
                    _hover={{
                        background: "grey",
                    }}
					_focus={{
						bg: "grey"
					}}
                    variant="outline"
                >
                    Completed
                </Button>
                <Button
                    _hover={{
                        background: "grey",
                    }}
					_focus={{
						bg: "grey"
					}}
                    variant="outline"
                >
                    Uncompleted
                </Button>
            </Stack>
        </Fragment>
    );
};

export default Header;
