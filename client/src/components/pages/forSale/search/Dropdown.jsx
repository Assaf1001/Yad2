import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Dropdown = ({ title, data }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h2>{title}</h2>
            </AccordionSummary>
            {/* {data.map((dataItem, i) => (
                <Accordion></Accordion>
            ))} */}
        </Accordion>
    );
};

export default Dropdown;
