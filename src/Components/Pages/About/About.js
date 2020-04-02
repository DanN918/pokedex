import React, { Component } from 'react';
import classes from './About.module.css';
import Logo from '../../Logo/Logo';

//About page of application

class About extends Component {
    render() {
        return (
            <div>
                <h1>ABOUT</h1>
                <br />
                <Logo />
                <br />
                <p>So, what has this intern done to showcase his understanding of JavaScript and the React library?</p>

                <p>Th application I chose to build is a PokeDex (hence name of the application). There are tons of <br />
                examples of React projects created in this format found over the internet. However, I have added some new <br /
                    >features into this app.</p>
                <br />

                <h3>Features:</h3>
                <div className={classes.container}>
                    <ul >
                        <li className={classes.List}>Comparison Page</li>
                        <li className={classes.List}>Display an individual Pokemon's stats</li>
                        <li className={classes.List}>Search page that enables user to <br/> search for a pokemon based on their <br/>index</li>
                       
                    </ul>
                </div>
                <br/>
                <h3>Future Features:</h3>
                <div className={classes.container}>
                    <ul >
                        <li className={classes.List}>Log In/HomePage with a modal</li>
                        <li className={classes.List}>Various button animations</li>
                        <li className={classes.List}>Prev/Next Buttons to dashboard</li>
                        <li className={classes.List}>Have Random Page generate pokemon <br/> on page rather than link to another page</li>
                       
                    </ul>
                </div>

            </div>
        )
    }
}

export default About;