import styled from "styled-components";

export const DivTituloPrecio = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const TituloDeDetails = styled.p`
    color: var(--Black, #0D0D0D);
    text-align: center;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const PrecioDeDetails = styled.p`
    color: #FA4A0C;
    text-align: center;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const DivContadorCart = styled.div`
    font-family: Inter;
    display: inline-flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
`

export const DivSabores = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: flex-start;
    gap: 60px;
    justify-content: space-between;
`

export const Titulos = styled.div`
    color: var(--Black, #0D0D0D);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const ParrafoTitulo = styled.p`
    color: var(--Black, #0D0D0D);
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 138.836%; /* 20.825px */
    letter-spacing: 0.3px;
    opacity: 0.5;
`

export const ContenedorItemsExtra = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    align-items: flex-start;
    gap: 8px;
    justify-content: space-between;
`

export const DivItemsExtra = styled.div`
    display: flex;
    width: 120px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.03);
    cursor: pointer
`

export const TextoItemsExtra = styled.p`
    color: var(--Black, #0D0D0D);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const DivBotonAgregarCarrito = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: inline-flex;
  margin: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: rgba(242, 242, 242, 0.01);
  backdrop-filter: blur(24px);
`;

export const BotonAgregarCarrito = styled.div`
  display: flex;
  width: 312px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  background: #FA4A0C;
  color: #F6F6F9;
  text-align: right;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
`