import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    display:flex;
    font-size: 2.2rem;
    font-weight: bold;

`;

const StyledDate = styled.h2`
    display:flex;
    justify-content: center;  
    font-size: 1.5rem;
    font-style: italic;
    margin-top:1%;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 500px;
    width: 100%;
    margin: 2%;
`;

const StyledImg = styled.img`
    display: block;
    object-fit: contain;
    height:100%;
    border: 2px solid black;
    box-shadow: 3px 3px 3px 6px #14145a;
    border-radius: 5px;
`;

const StyledExp = styled.p`
    display:flex;
    font-size: 1rem;
    max-width: 80%;
    justify-content: center;
    text-align: center;
`;

const StyledFooter = styled.footer`
    display:flex;
    margin-top:2%;
`;




function Body(props){
    console.log(props.data)

    return (
        <WrapperDiv>
            <StyledHeader>
                <StyledTitle> {props.data.title} </StyledTitle>
                <StyledDate>{props.data.date}</StyledDate>
            </StyledHeader>
            <ImgContainer>
                <StyledImg src={props.data.url} alt="redundant word for pic goes here" />
            </ImgContainer>
            <StyledExp>{props.data.explanation}</StyledExp>
            <StyledFooter>Copyright: {props.data.copyright}</StyledFooter>
        </WrapperDiv>
    );
}

export default Body;