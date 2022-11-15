import React from 'react';
import styled from 'styled-components';
import img from '../assets/trees.jpg';
import imgHand from '../assets/hand.png';
import ReactStars from 'react-stars';

const Card = () => {

const theme = {
    firstSize: "12px"
}

const Div = styled.div`
    margin-block: 30vh;
    margin-inline: 40%;
    padding-bottom: 5vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    border-radius: ${props => props.theme.firstSize};
    background-color: ${props => (props.primare ? "black": "green")};
`

const Ul = styled.ul`
    padding: 0;
`

const Image = styled.img`
    width: 100%;
    object-fit: contain;
    border-top-right-radius: ${props => props.theme.firstSize};
    border-top-left-radius: ${props => props.theme.firstSize};
`

const Li = styled.li`
    list-style: none;
`

const Quote = styled.p`
    color: white;
    font-family: 'Rajdhani', sans-serif;
    font-size: 24px;
    `
    
const Author = styled.p`
    color: white;
    font-family: 'Rajdhani', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

const ImageHand = styled.img`
    height: 35px;
    filter: brightness(3);
`

const SndLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ThrLi = styled.li`
    display: flex;
    justify-content: center;
`

const ratingChanged = (newRating) => {
    console.log(newRating)
  }

    return (
        <Div className="scene" primare theme={theme}>
            <Ul>
                <Li>
                    <Image theme={theme} src={img}/>
                    <Quote>“Le désir est l'essence même de l'homme, c'est à dire l'effort par lequel l'homme s'efforce de persévérer dans son être.”</Quote>
                </Li>
                <SndLi>
                    <ImageHand src={imgHand} />
                    <Author>Baruch Spinoza</Author>
                </SndLi>
                <ThrLi>
                    <ReactStars 
                        count={5}
                        onChange={ratingChanged}
                        size={38}
                    />
                </ThrLi>
            </Ul>
        </Div>
    );
};

export default Card;