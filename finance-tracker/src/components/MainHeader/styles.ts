import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.backie};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.white};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.div`
  margin-right: 10px;
  font-weight: bold;
  
`;

export const Username = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const Emoji = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  vertical-align: top;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: row ;
  align-items: end;
`;



