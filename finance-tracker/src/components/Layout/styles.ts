import styled from "styled-components";

/**
 * Layout
 * MH = MainHeader
 * AS = Aside
 * CT = Content
 */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
`;
