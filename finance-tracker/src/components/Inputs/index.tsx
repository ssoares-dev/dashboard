import React, { InputHTMLAttributes } from "react";

import { Container } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
    return (
        <Container>
            <input {...rest} />
        </Container>
    );
};

export default Input;