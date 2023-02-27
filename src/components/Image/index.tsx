import React from "react";
import { Container } from "./style";

interface Props {
    urlImage: string;
}

export function Image({ urlImage }: Props) {
    return (
        <Container src={urlImage}>
        </Container>
    )
}