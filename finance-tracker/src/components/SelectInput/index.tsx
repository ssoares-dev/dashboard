import React from 'react';

import { Container } from "./style";

interface ISelectInputProps {
    options: Array<{ value: string | number; label: string | number }>;
}

const SelectInput: React.FC<ISelectInputProps> = ({options}) => {
    return (
        <Container>
            <select>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
                {
                    options.length === 0 && <option value="">No options available</option>
                }
            </select>
        </Container>
    );
}

export default SelectInput;