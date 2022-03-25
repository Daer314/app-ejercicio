import styled from 'styled-components'

export const CardsContainer = styled.div`
    margin: 15px 20px;
`

export const CardWrapper = styled.div`
    position: relative;
    overflow: hidden;
    color: #F6AA1C;
    font-size: 5rem;
    height: 30vh;
    margin: 25px 0;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: 1px solid #621708;
    border-radius: 15px;
    //box-shadow: 0 0 20px #F6AA1C;
    position: relative;
`
export const CardImage = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CardIcon = styled(props => props.icon)`
`

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: #F6AA1C;
    text-shadow: 0 0 6px #220901;
    background-color: transparent;
`