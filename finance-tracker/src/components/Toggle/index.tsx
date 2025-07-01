import React, { useState } from "react";

import { Container, ToggleLabel, SwitchStyled } from "./style";

const Toggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <SwitchStyled
        onChange={() => setChecked(!checked)}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
