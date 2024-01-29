import styled from "styled-components";

export const NavBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SearchDiv = styled.div`
  width: auto;
  height: 60px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #E7E7E7;
  display: flex;
  align-items: center;
  padding: 0 28px;
`

export const SearchInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  color: #9A9A9D;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const TarjetaBlanca = styled.div`
  display: flex;
  width: 312px;
  padding: 16px;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 8px;
  cursor: pointer;
`

export const TextTarjeta = styled.p`
  align-self: stretch;
  color: var(--Black, #0D0D0D);
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const TextPrecioTarjeta = styled.p`
  align-self: stretch;
  color: #FA4A0C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`

export const DivCategoria = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ItemCategorias = styled.p`
  color: #9A9A9D;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  border-bottom: 2px solid;
  margin-bottom: 24px;

  &.selected {
    color: #FA4A0C;
    
  }
`

export const CarritoImg = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivIconB = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchP = styled.p`
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`