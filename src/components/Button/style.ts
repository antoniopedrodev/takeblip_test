import styled, { css } from "styled-components";

interface ContainerProps {
    isButtonIcon: boolean;
    isActive: boolean;
}

export const Container = styled.div<ContainerProps>`

    button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: transparent;
        border: none;
        font-size: 14px;
        font-weight: 700;
        color: #F8FBFB;
    }

    ${({ isButtonIcon, isActive }) => {
        if (isButtonIcon)
            return css`
                width: 40px;
                height: 40px;
                background-color: transparent;
                button {
                    color: ${isActive
                        ? '#6E7B91'
                        : '#D2DFE6'
                }
            `;
        return css`
            width: 129px;
            height: 40px;
            background-color: #2CC3D5;
        `;
    }};

    border-radius: 8px;
`;