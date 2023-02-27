import styled from "styled-components";
import LogoTakeBlip from '../../assets/svg_images/logo.svg';

export const Container = styled.header`
    width: 100%;
    padding: 13px 0;
    background-color: #1A2437;
    align-items: center;
    display: flex;
    justify-content: center;
`

export const Logo = styled.div`
    cursor: pointer;
    width: 48px;
    height: 18px;
    background-image: url(${LogoTakeBlip});
    background-repeat: no-repeat;
    background-size: contain;
`