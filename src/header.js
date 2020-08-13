import React from 'react';

const navButtons = ['Home','About','Contact'];

function NavButton(props){
    const {button} = props
    return(
        <div className={button}>
            <a href='#'>{button}</a>
        </div>
    )
}

function NavBar(){
    return(
        <nav>
        <div className='header-icon'>
            <img src='' alt="generic-space-image"></img>
        </div>
        <div className='nav-bar'>
        {
            navButtons.map(entry => (
                <NavButton
                key={entry}
                button={entry}
                />
            ))
        }

        </div>
        </nav>
        
        
    )
}

export function Header() {
    return(
        <header>
            <NavBar />

            <div className='header-img'>
                <h1> NASA Pictures forever</h1>

            </div>
        </header>
    )
}

