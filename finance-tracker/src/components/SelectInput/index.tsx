import React from "react";

import { Container } from "./style";

interface ISelectInputProps {
  options: Array<{ value: string | number; label: string | number }>;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {options.length === 0 && <option value="">No options available</option>}
      </select>
    </Container>
  );
};

export default SelectInput;
