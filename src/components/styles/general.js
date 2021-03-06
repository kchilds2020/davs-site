import styled, {keyframes} from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    padding: 20px;
    height: 100vh;
    /* filter: brightness(40%); */
`

const colors = keyframes`
     0% {color: #39f;}
     15% {color: #8bc5d1;}
     30% {color: #f8cb4a;}
     45% {color: #95b850;}
     60% {color: #944893;}
     75% {color: #c71f00;}
     90% {color: #bdb280;}
    100% {color: #39f;}
`;

export const Title = styled.h2`
    font-family: 'Big Shoulders Stencil Text';
    font-size: 72px;
    text-transform: uppercase;
    text-align: center;
    color: transparent;
    letter-spacing: 10px;
    /* animation: ${colors} 10s linear infinite;    */
	-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;

    @media (max-width: 600px) {
    font-size: 48px;
    letter-spacing: 5px;
	-webkit-text-stroke-width: 1px;
  }


`



export const TagLine = styled.h4`
    text-transform: uppercase;
    text-align: center;
    color: white;
    letter-spacing: 5px;
`

export const CallToAction = styled.button`
    margin: 20px;
    border: none;
    padding: 5px;
    background-color: #d80023;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    font-size: 18px;
    box-shadow: 0px 0px 8px #333;
    transition: 400ms;

    :hover{
        background-color: rgb(44, 114, 250);
        transition: 400ms;
    }

    :focus{
        outline: none;
    }

    @media (max-width: 600px) {
        width: 100%;
  }
    
`

export const FDRow = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
  }
`