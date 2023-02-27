import React from "react";
import { Container, Logo } from "./style";
import { useNavigate } from "react-router-dom";

export function Header () {

    const navigate = useNavigate(); 
    return (
        <Container>
            <Logo onClick={() => navigate('/')}/>
        </Container>
    )
}