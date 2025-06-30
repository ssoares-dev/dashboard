import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

export const FiltersButton = styled.button<{ filterType: string }>`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  margin: 0 10px 30px 10px;
  border: none;
  cursor: pointer;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &.tag-filter-frequently::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid
      ${(props) =>
        props.filterType === "income"
          ? props.theme.colors.secondary
          : props.theme.colors.primary};
    border-radius: 5px;
  }

  &.tag-filter-occasionally::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid
      ${(props) =>
        props.filterType === "income"
          ? props.theme.colors.entry
          : props.theme.colors.exit};
    border-radius: 5px;
  }
`;
