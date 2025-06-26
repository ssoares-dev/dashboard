import React, {useMemo} from "react";
import { Container, Profile, Welcome, Username, WelcomeWrapper, Emoji } from "./styles";
import Toggle from "../Toggle";
import emojis from "../../utils/emojis";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);


  return (
    <Container>
      <Toggle />

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
