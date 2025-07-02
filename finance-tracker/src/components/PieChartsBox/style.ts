import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${({ theme }) => theme.colors.back};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 7px;

  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    height: 170px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 15px;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  > div {
    background-color: ${({ color }) => color};
    width: 45px;
    height: 45px;
    border-radius: 5px;

    font-size: 16px;
    line-height: 45px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
`;

export const SideRight = styled.main`
display: flex;
flex: 1;
justify-content: center;
`;
