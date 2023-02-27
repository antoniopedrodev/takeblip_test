import styled, { css } from "styled-components";
import "@fontsource/nunito-sans";

interface ListingTypeProps {
    type: 'list' | 'block';
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 60px;
  background-color: #F5F8F9;
`;

export const Subheader = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.text`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  color: #56616E;
`;

export const InteractiveContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Subtitle = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #607B99;
  margin-bottom: 16px !important;
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 312px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid #d2dfe6;
  outline: none;
  margin: 0;
  padding: 0 1rem;
  color: #8ca0b3;
  ::placeholder {
    color: #8ca0b3;
  }
  :focus {
    outline: 1px solid #2CC3D5;
  }
`;

export const ListCards = styled.div<ListingTypeProps>`
  width: 100%;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  ${({ type }) => {
    if (type === 'list') {
      return css`
        grid-template-columns: 91%;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;

export const RoundButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RoundButton = styled.div`
  width: 56px;
  height: 56px;
  background-color: #2CC3D5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 16px;
`;
