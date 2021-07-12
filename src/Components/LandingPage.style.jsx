import styled from "styled-components";

export const StyledSignInPage = styled.div`
    display:grid;
    place-items:center;
    height:100vh;
`

export const Button = styled.div`
    display: inline-block;
    background:black;
    color:white;
    box-sizing:border-box;
    padding:15px;
    width:200px;
    height:50px;
    cursor:pointer;
    margin: 10px;
    text-align: center;
`;


export const StyledPlayerWrapper = styled.div`
display:flex;
justify-content:space-between;

`;

export const Spinner = styled.div`
    position:relative;
    height:100px;
    width:100px;
        div{
            position:absolute;
            width:100%;
            height:100%;
            border:10px solid transparent;
            border-top-color:#ce5252;
            border-radius:50%;
            animation: spinnerOne 1.2s linear infinite;
            box-sizing: border-box;
        }
        div:nth-child(2){
            border:10px solid transparent;
            border-bottom-color:#ce5252;
            animation: spinnerTwo 1.2s linear infinite;
        }
        @keyframes spinnerOne{
            0% { transform:rotate(0deg);border-width:1px}
            50% { transform:rotate(180deg);border-width:10px}
            100% { transform:rotate(360deg);border-width:1px}
        }
        @keyframes spinnerTwo{
            0% { transform:rotate(0deg);border-width:10px}
            50% { transform:rotate(180deg);border-width:1px}
            100% { transform:rotate(360deg);border-width:10px}
        }


`


export const Bouncer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:flex-end;
    width:100px;
        div{
            width:20px;
            height:20px;
            background:#5396d3;
            border-radius:50%;
            animation:Bounce 0.5s ease infinite alternate;
        }
        div:nth-child(2){
            opacity:0.8;
            animation-delay:0.1s;
        }
        div:nth-child(3){
            opacity:0.6;
            animation-delay:0.2s;
        }
        div:nth-child(4){
            opacity:0.4;
            animation-delay:0.3s;
        }

    @keyframes Bounce{
        from{
            transform:translateY(0);
        }
        to{
            transform:translateY(-100px);
        }
    }

`


export const Flipper = styled.div`
width:100px;
height:100px;
position:relative;
perspective:200px;
    div{
        height:50px;
        width:50px;
        background:coral;
        position:absolute;
        animation:flip 2s infinite;
        transform-origin:right bottom;
    }
    div:nth-child(2){
        animation-delay:1s;
        opacity:0.5;
    }

@keyframes flip{
    0%{transform:rotateX(0) rotateY(0)}
    25%{transform:rotateX(0) rotateY(180deg)}
    50%{transform:rotateX(180deg) rotateY(180deg)}
    75%{transform:rotateX(180deg) rotateY(0)}
    100%{transform:rotateX(0) rotateY(0)}
}
`

export const StyledCardList = styled.div`
display:flex;
height:350px;
width:100%;
flex-wrap:wrap;

`

export const StyledCard = styled.div`
    height:300px;
    width:200px;
    box-shadow: 1px 2px 3px 4px #eee;
    display:flex;
    flex: 0 1 200px;
    flex-direction:column;
    justify-content:space-between;
    margin:10px;
`
export const Cardheader = styled.div`
align-self:flex-start;`
export const CardBody = styled.div`
align-self:center;
`
export const CardFooter = styled.div`
align-self:flex-end;`

export const Image = styled.img`
    height:30px;
    width:30px;
    svg{
        color:red;
    }
   

`
