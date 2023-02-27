import React, {ButtonHTMLAttributes} from "react";
import styled, { css } from "styled-components";

interface BotListProps {
    type: 'list' | 'block';
}

interface BotCardType {
    botCardType: 'list' | 'block';
}

interface RandomColor extends BotListProps {
    color: string;
}

export const Container = styled.div<BotCardType>`
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  display: flex;
  ${({ botCardType }) => {
  if (botCardType === 'list') {
    return css`
      width: 100%;
      height: 60px;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
    `;
  }
  return css`
    width: 188px;
    height: 192px;
  `;
}}
`;

export const BotImage = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    align-self: center;
    background-color: #55CFFF;
`;

export const BotName = styled.text`
  font-family: 'Nunito Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #52636C;
`;

export const BotType = styled.text`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #738192;
    align-self: center;
    margin-top: 8px;
`;

export const FavoriteContainer = styled.div<BotListProps>`
  position: absolute;
  ${({ type }) => {
    if (type === 'list') {
      return css`
        left: -50px;
      `;
    }
  }}
`;

export const Content = styled.div<BotListProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  ${({ type }) => {
    if (type === 'list') {
      return css`
        justify-content: flex-start;
        flex-direction: row;
      `;
    }
  }}
`;
export const RandomColor = styled.div<RandomColor>`
  border-radius: 100%;
  width: 56px;
  height: 56px;
  ${({ type }) => {
    if (type === 'list') {
      return css`
        width: 28px;
        height: 28px;
      `;
    }
  }}
  background-color: ${({ color }) => color};
`;
export const Name = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #56616E;
`;
export const Type = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #738192;
`;
export const CreatedAt = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #738192;
`;