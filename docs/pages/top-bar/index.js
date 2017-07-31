import React, { Component } from 'react';

import { TopBar, TopBarItem, TopBarTitle } from '../../../src/top-bar/index';
import {
  TopBar as FlexTopBar,
  TopBarItem as FlexTopBarItem,
  TopBarTitle as FlexTopBarTitle,
} from '../../../lib/top-bar-flex/index'; // eslint-disable-line import/no-unresolved
import { Menu, MenuItem } from '../../../src/menu/index';
import {
  Menu as FlexMenu,
  MenuItem as FlexMenuItem,
} from '../../../lib/menu-flex/index'; // eslint-disable-line import/no-unresolved
import { Button } from '../../../src/button/index';
import { MenuIcon } from '../../../src/menu-icon/index';
import { ShowForScreenSize, HideForScreenSize } from '../../../src/visibility/index';

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
        <br />
        <FlexTopBar>
          <FlexTopBarTitle>
            <FlexMenu>
              <FlexMenuItem text>Site Title</FlexMenuItem>
            </FlexMenu>
          </FlexTopBarTitle>
          <FlexTopBarItem position="left">
            <FlexMenu>
              <FlexMenuItem><a href="#">One</a></FlexMenuItem>
              <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
              <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
            </FlexMenu>
          </FlexTopBarItem>
          <FlexTopBarItem position="right">
            <FlexMenu>
              <FlexMenuItem><input type="search" placeholder="Search" /></FlexMenuItem>
              <FlexMenuItem><Button>Search</Button></FlexMenuItem>
            </FlexMenu>
          </FlexTopBarItem>
        </FlexTopBar>
        <br />
        <FlexTopBar stack="large">
          <FlexTopBarTitle>
            <FlexMenu>
              <FlexMenuItem text>Site Title</FlexMenuItem>
            </FlexMenu>
          </FlexTopBarTitle>
          <FlexTopBarItem position="left">
            <FlexMenu>
              <FlexMenuItem><a href="#">One</a></FlexMenuItem>
              <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
              <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
            </FlexMenu>
          </FlexTopBarItem>
          <FlexTopBarItem position="right">
            <FlexMenu>
              <FlexMenuItem><input type="search" placeholder="Search" /></FlexMenuItem>
              <FlexMenuItem><Button>Search</Button></FlexMenuItem>
            </FlexMenu>
          </FlexTopBarItem>
        </FlexTopBar>
        <br />
        <FlexTopBar stack="medium">
          <FlexTopBarTitle>
            <FlexMenu>
              <HideForScreenSize screenSize="large" componentClass={FlexMenuItem}>
                <MenuIcon dark onClick={this.handleToggle} />
              </HideForScreenSize>
              <FlexMenuItem text>Site Title</FlexMenuItem>
            </FlexMenu>
          </FlexTopBarTitle>
          <ShowForScreenSize
            screenSize={this.state.show ? 'small' : 'large'}
            componentClass={FlexTopBarItem}
            position="left"
          >
            <FlexMenu vertical horizontal="large">
              <FlexMenuItem><a href="#">One</a></FlexMenuItem>
              <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
              <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
            </FlexMenu>
          </ShowForScreenSize>
          <ShowForScreenSize
            screenSize={this.state.show ? 'small' : 'large'}
            componentClass={FlexTopBarItem}
            position="right"
          >
            <FlexMenu>
              <FlexMenuItem><input type="search" placeholder="Search" /></FlexMenuItem>
              <FlexMenuItem><Button>Search</Button></FlexMenuItem>
            </FlexMenu>
          </ShowForScreenSize>
        </FlexTopBar>
      </div>
    );
  }
}
