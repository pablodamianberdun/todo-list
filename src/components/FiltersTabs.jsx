import { Tabs, TabList, Tab } from "@chakra-ui/tabs";
import React from "react";

const FiltersTabs = ({ setFilter }) => {
    const filters = ["all", "completed", "uncompleted"];

    return (
        <Tabs
            variant="unstyled"
            onChange={(index) => setFilter(filters[index])}
        >
            <TabList>
                <Tab
                    _selected={{
                        border: "2px solid white",
                        borderRadius: "md",
                        backgroundColor: "gray",
                    }}
                >
                    All
                </Tab>
                <Tab
                    _selected={{
                        border: "2px solid white",
                        borderRadius: "md",
                        backgroundColor: "gray",
                    }}
                >
                    Completed
                </Tab>
                <Tab
                    _selected={{
                        border: "2px solid white",
                        borderRadius: "md",
                        backgroundColor: "gray",
                    }}
                >
                    Uncompleted
                </Tab>
            </TabList>
        </Tabs>
    );
};

export default FiltersTabs;
