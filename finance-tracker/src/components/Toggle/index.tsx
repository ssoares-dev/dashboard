import React, { useState } from "react";

import { Container, ToggleLabel, SwitchStyled } from "./style";

interface IToggleProps {
  labelLeft?: string;
  labelRight?: string;
  checked?: boolean;
  onChange?: () => void;
}


const Toggle: React.FC<IToggleProps> = ({
  labelLeft = "Light",
  labelRight = "Dark",
  checked = false,
  onChange,
}) => {
  // Adapter for SwitchStyled's onChange signature
  const handleChange = (nextChecked: boolean, event: any, id: string) => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <SwitchStyled
        onChange={handleChange}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
};

export default Toggle;
