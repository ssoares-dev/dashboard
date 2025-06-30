import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.background};
  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.backie};
    border-radius: 10px;
  }

  scrollbar-width: normal;
  scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) => props.theme.colors.backie};
`;
