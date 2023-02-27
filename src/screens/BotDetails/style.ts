import styled, { css } from 'styled-components';

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 32px 0;
`;

export const DetailedBot = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //neutral off
  background-color: #dee8ec;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #56616E;
`;
export const Id = styled.div`
  font-weight: 400;
  font-size: 14px;
  color:#607B99;
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

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

interface IGridItem {
  collumSpan?: number;
  rowSpan?: number;
}
export const GridItem = styled.div<IGridItem>`
  width: 100%;
  height: 212px;
  background-color: white;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  grid-column: span ${({ collumSpan }) => collumSpan};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GridItemTrasnparent = styled.div<IGridItem>`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  grid-column: span ${({ collumSpan }) => collumSpan};
  grid-row: span ${({ rowSpan }) => rowSpan};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface ITypography {
  fontSize?: string;
  fontWeight?: number;
}
export const Typography = styled.span<ITypography>`
  ${({ fontSize, fontWeight }) => css`
    font-weight: ${fontWeight ? fontWeight : 400};
    font-size: ${fontSize ? fontSize : '12px'};
  `}
  color: ${({ theme }) => '#56616E'};
`;

export const UserCultureContainer = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

export const Error = styled.div`
  text-align: center;
  width: 100%;
`;

export const StatusAccountTitle = styled.text`
  margin-top: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8CA0B3;
`;

export const StatusAccountType = styled.text`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #56616E;
  margin-bottom: 24px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterText = styled.text`
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  color: #8CA0B3;
  padding-bottom: 46px;

  & strong {
    color: #738192;
    cursor: pointer;
;
  }
`;