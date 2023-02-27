import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isButtonIcon?: boolean;
    isActive?: boolean;
}

export const Button = ({
    children,
    isButtonIcon = false,
    isActive = false,
    ...rest

}: ButtonProps) => (

    <Container isButtonIcon={isButtonIcon} isActive={isActive}>
        <button {...rest}>{children}</button>
    </Container>
)