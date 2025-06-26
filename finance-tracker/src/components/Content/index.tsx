import React, { ReactNode } from "react";
import { Container } from "./styles";
import ContentHeader from "../ContentHeader";

interface ContentProps {
    children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}
export default Content;