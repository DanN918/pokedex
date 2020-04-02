import React, { Component } from 'react';
import styled from 'styled-components';
import pokeLogo from '../../Assets/Images/pokeLogo.jpg';
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';


const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;


const NavBarStyle = styled.nav``;

export default class Navigation extends Component {
  state = {
    hoverNavBar: false
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    // Added True To End To Listen to All Events On Page
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    // Added True To End To Lssten to All Events On Page
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  render() {
    return (
      <NavBarStyle
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        style={
          this.state.hoverNavBar
            ? {
              boxShadow:
                '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
              backgroundColor: '#ef5350 !important'
            }
            : { backgroundColor: 'transparent !important' }
        }
      >
        <Branding
          href="#"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          {/*Create the pokeball logo found near the top-left corner of the application. Redirects to the dashboard when clicked on */}
          <div className={classes.Container}><img src={pokeLogo} className={classes.Logo} alt="MyPoke" /></div>

          PokeDex
        </Branding>

        {/*Create the links to the other pages that are a part of this application */}
        <div className={classes.Navigation}>
          <div className={classes.Otherlinks}>
            <ul>
              <li><Link className = {classes.Reroute} to="/About">About</Link></li>
              <li><Link className = {classes.Reroute} to="/Compare">Compare</Link></li>
              <li><Link className = {classes.Reroute} to="/Random">Random</Link></li>
              <li><Link className = {classes.Reroute} to="/Search">Search</Link></li>
            </ul>
          </div>
        </div>
      </NavBarStyle>
    );
  }
}
