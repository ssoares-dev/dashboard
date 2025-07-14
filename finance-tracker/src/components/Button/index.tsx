import React, { InputHTMLAttributes } from "react";

import { Container } from "./style";

type ButtonProps = InputHTMLAttributes<HTMLInputElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Button;