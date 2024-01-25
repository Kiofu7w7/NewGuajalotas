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
`
