import React from "react";

import { Container, Header, Footer } from "./style";

interface IMessageBoxProps {
    title: string;
    description: string;
    icon: string;
    footerText: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({ title, description, icon, footerText }) => {
  return (
    <Container>
      <Header>
        <h1>
          {title} <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </Header>
      <Footer>
        <span>{footerText}</span>
      </Footer>
    </Container>
  );
};

export default MessageBox;