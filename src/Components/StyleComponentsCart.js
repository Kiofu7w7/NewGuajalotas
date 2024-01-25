import styled from "styled-components";

export const TitlePages = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const ImagenProducto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const DivButtonAS = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px 24px;
  gap: 10px;
  background: rgba(242, 242, 242, 0.01);
  backdrop-filter: blur(24px);
  justify-content: center;
`;

export const ButtonAS = styled.div`
  display: flex;
  width: 312px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #FA4A0C;
  color: #F6F6F9;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
`

export const TextButtonAS = styled.p`
  color: #F6F6F9;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const CartItemText = styled.p`
  color: var(--Black, #0D0D0D);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`

export const CartPriceText = styled.p`
  color: #FA4A0C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const CartTotalDiv = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
`

export const NoCartItemsIcon = styled.h2`
  color: var(--Black, #0D0D0D);
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const DivContadorCart = styled.div`
  display: inline-flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
`