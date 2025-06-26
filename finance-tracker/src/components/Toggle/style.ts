import styled from "styled-components";
import Switch, {ReactSwitchProps} from "react-switch";
import React from "react";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${(props) => props.theme.colors.white};
    font-size: 1rem;
    margin: 0 10px;
    display: flex;
    align-items: center;
`;

export const SwitchStyled = styled<any>(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.primary,
        offColor: theme.colors.secondary,
        checkedIcon: false,
        uncheckedIcon: false,
        height: 25,
        width: 55,
        handleDiameter: 25,
        
    }))<ReactSwitchProps>`
`;