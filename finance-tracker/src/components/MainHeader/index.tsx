import React, { useMemo, useState } from "react";
import {
  Container,
  Profile,
  Welcome,
  Username,
  WelcomeWrapper,
  Emoji,
} from "./styles";

import { useTheme } from "../../hooks/theme";

import Toggle from "../Toggle";

import emojis from "../../utils/emojis";

const MainHeader: React.FC = () => {

  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === "dark" ? true : false);

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={() => {
          setDarkTheme(!darkTheme);
          toggleTheme();
        }}
      />

      <Profile>
        <WelcomeWrapper className="welcome">
          <Welcome>Hello,</Welcome>
          <Emoji src={emoji} alt="Emoji" className="emoji" />
        </WelcomeWrapper>
        <Username>Sónia Soares</Username>
      </Profile>
    </Container>
  );
};
export default MainHeader;
