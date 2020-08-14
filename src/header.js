import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color:${props => props.theme.color2};
    display:flex;
    justify-content:space-between;
    flex-direction:column;

`;

const StyledNavBar = styled.nav`
    display:flex;
    justify-content:space-around;
`;

const StyledNavButtons = styled.a`
    display:flex;
    justify-content:space-around;
`;

const StyledButtons = styled.div`
    margin:10%;
    padding:10%;
    border-left: 1px solid black;
    border-right: 1px solid black;
      

    &:hover{
        background:white;
        transition: all 0.5s ease-in-out;
      transform: scale(1.3);
    }
`;

const StyledA = styled.a`
    text-decoration:none;
    
`;

const StyledBackground = styled.div`
    background-image:url("https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80");
    height:90vh;
    width:80%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-around;
`;


const navButtons = ['Home','About','Contact'];

function NavButton(props){
    const {button} = props
    return(
        <StyledButtons className={button}>
            <StyledA href='#'>{button}</StyledA>
        </StyledButtons>
    )
}

function NavBar(){
    return(
        <StyledNavBar>
        <div className='header-icon'>
            <h2>NASA's Not Official Site</h2>
        </div>
        <StyledNavButtons className='nav-bar'>
        {
            navButtons.map(entry => (
                <NavButton
                key={entry}
                button={entry}
                />
            ))
        }

        </StyledNavButtons>
        </StyledNavBar>
        
        
    )
}

export function Header() {
    return(
        <StyledHeader>
            <NavBar />

            <StyledBackground className='header-img'>
                <h1> NASA Pictures forever</h1>

            </StyledBackground>
        </StyledHeader>
    )
}

