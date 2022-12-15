import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
    border: 1px solid #2874f0;
    margin-right:10px;
    font-weight:600;
`;

const GroupedButton = () => {
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <Component>
            <StyledButton style={{borderRight: counter>1?"1px solid #2874f0":"1px solid #f0f0f0"}} onClick={() => handleDecrement()} disabled={counter == 1}>-</StyledButton>
            <Button style={{marginRight:"10px", border: "1px solid #cecece", color:"black"}} disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;