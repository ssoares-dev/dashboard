import React from "react";
import { Container, TitleContainer, Controllers } from "./style";

const ContentHeader: React.FC = () => {

    return (
        <Container>
            <TitleContainer>
                <h1>Dashboard</h1>
            </TitleContainer>
            <Controllers>
               <button type="button">
                   <span>New Transaction</span>
                </button>
                <button type="button">
                    <span>Export</span>
                </button>
            </Controllers>
        </Container>
    );
}

export default ContentHeader;