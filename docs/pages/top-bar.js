import React, { Component } from 'react';

import { TopBar, TopBarItem, TopBarTitle } from '../../src/components/top-bar/index';
import { Menu, MenuItem } from '../../src/components/menu/index';
import { Button } from '../../src/components/button/index';
import { MenuIcon } from '../../src/components/menu-icon/index';
import { ShowForScreenSize, HideForScreenSize } from '../../src/components/visibility/index';

export default class TopBarPage extends Component {
  state = {
    show: false,
  };

  handleToggle = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        <TopBar>
          <TopBarTitle>
            <Menu>
              <MenuItem text>Site Title</MenuItem>
            </Menu>
          </TopBarTitle>
          <TopBarItem position="left">
            <Menu>
              <MenuItem><a href="#">One</a></MenuItem>
              <MenuItem><a href="#">Two</a></MenuItem>
              <MenuItem><a href="#">Three</a></MenuItem>
            </Menu>
          </TopBarItem>
          <TopBarItem position="right">
            <Menu>
              <MenuItem><input type="search" placeholder="Search" /></MenuItem>
              <MenuItem><Button>Search</Button></MenuItem>
            </Menu>
          </TopBarItem>
        </TopBar>
        <br />
        <TopBar stack="large">
          <TopBarTitle>
            <Menu>
              <MenuItem text>Site Title</MenuItem>
            </Menu>
          </TopBarTitle>
          <TopBarItem position="left">
            <Menu>
              <MenuItem><a href="#">One</a></MenuItem>
              <MenuItem><a href="#">Two</a></MenuItem>
              <MenuItem><a href="#">Three</a></MenuItem>
            </Menu>
          </TopBarItem>
          <TopBarItem position="right">
            <Menu>
              <MenuItem><input type="search" placeholder="Search" /></MenuItem>
              <MenuItem><Button>Search</Button></MenuItem>
            </Menu>
          </TopBarItem>
        </TopBar>
        <br />
        <TopBar stack="medium">
          <TopBarTitle>
            <Menu>
              <HideForScreenSize screenSize="large" componentClass={MenuItem}>
                <MenuIcon dark onClick={this.handleToggle} />
              </HideForScreenSize>
              <MenuItem text>Site Title</MenuItem>
            </Menu>
          </TopBarTitle>
          <ShowForScreenSize screenSize={this.state.show ? 'small' : 'large'}>
            <TopBarItem position="left">
              <Menu vertical horizontal="large">
                <MenuItem><a href="#">One</a></MenuItem>
                <MenuItem><a href="#">Two</a></MenuItem>
                <MenuItem><a href="#">Three</a></MenuItem>
              </Menu>
            </TopBarItem>
            <TopBarItem position="right">
              <Menu>
                <MenuItem><input type="search" placeholder="Search" /></MenuItem>
                <MenuItem><Button>Search</Button></MenuItem>
              </Menu>
            </TopBarItem>
          </ShowForScreenSize>
        </TopBar>
      </div>
    );
  }
}
