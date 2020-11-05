/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { connect } from 'react-redux';
import cx from 'classnames';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon';

import photo from '../../images/photo.jpg';
import { logoutUser } from '../../actions/user';
import s from './Header.module.scss';

import * as constant from '../../constants'

const Header = (PropTypes) => {
  const [sidebarToggle, setSidebarToggle] = useState(PropTypes.func);
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector(state => state.auth.user, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <Navbar className={s.root}>
      <Nav>
        <NavItem
          className={cx('visible-xs mr-4 d-sm-up-none', s.headerIcon, s.sidebarToggler)}
          href="#"
          onClick={sidebarToggle}
        >
          <i className="fa fa-bars fa-2x text-muted" />
        </NavItem>
        <NavItem>
          <InputGroup>
            <Input placeholder="Search for..." />
            <InputGroupAddon addonType="append" className="px-2">
              <i className="fa fa-search" />
            </InputGroupAddon>
          </InputGroup>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <NavItem className={cx('', s.headerIcon)}>
          <Button>
            <Icon glyph="settings" />
          </Button>
        </NavItem>
        <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
          <DropdownToggle nav>
            <span className="text-body">{(user !== null) ? user.name : ''}</span>
            <i className={cx('fa fa-angle-down ml-sm', s.arrow, { [s.arrowActive]: isOpen })} />
          </DropdownToggle>
          <DropdownMenu style={{ width: '100%' }}>
            <DropdownItem>
              <NavLink to="/app/profile">Profile</NavLink>
            </DropdownItem>
            <DropdownItem onClick={doLogout}>
              { constant.LOGOUT }
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;

