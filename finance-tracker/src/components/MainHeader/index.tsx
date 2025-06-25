import React from "react";
import { Container, Profile, Welcome, Username } from "./styles";

const MainHeader: React.FC = () => {
  return (
    <Container>
      <h1>Toggle</h1>

      <Profile>
        <Welcome>Hello,</Welcome>
        <img src="/assets/header-icon.svg" alt="Emoji" style={{ width: 24, height: 24, marginRight: 8 }} />
        <Username>Sónia Soares</Username>
      </Profile>
    </Container>
  );
};
export default MainHeader;
