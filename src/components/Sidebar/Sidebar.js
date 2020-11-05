import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import Icon from '../Icon';
import LinksGroup from './LinksGroup/LinksGroup';

import s from './Sidebar.module.scss';

import * as constant from '../../constants'

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link to="/app/main">
        <Icon glyph="logo" />
      </Link>
    </header>
    <ul className={s.nav}>
      <LinksGroup
        header="Dashboard"
        headerLink="/app/main"
        glyph="dashboard"
      />
      <LinksGroup
        header="Typography"
        headerLink="/app/typography"
        glyph="typography"
      />
      <LinksGroup
        header="Tables Basic"
        headerLink="/app/tables"
        glyph="tables"
      />
      <LinksGroup
        header="Notifications"
        headerLink="/app/notifications"
        glyph="notifications"
      />
      <LinksGroup
        header="Components"
        headerLink="/app/components"
        childrenLinks={[
          {
            name: 'Buttons',
            link: '/app/components/buttons',
          },
          {
            name: 'Charts',
            link: '/app/components/charts',
          },
          {
            name: 'Icons',
            link: '/app/components/icons',
          },
          {
            name: 'Maps',
            link: '/app/components/maps',
          },
        ]}
        glyph="components"
      />
      <LinksGroup
        header="日報"
        headerLink="/app/main"
        glyph="dashboard"
      />
      <LinksGroup
        header={constant.DRIVER}
        headerLink="/app/driver"
        glyph="dashboard"
      />
      <LinksGroup
        header={constant.TRUCK}
        headerLink="/app/truck"
        glyph="dashboard"
      />
      <LinksGroup
        header={constant.CLIENT}
        headerLink="/app/client"
        glyph="dashboard"
      />
      <LinksGroup
        header={constant.ADMINISTOR}
        headerLink="/app/admin"
        glyph="dashboard"
      />
      <LinksGroup
        header="売上管理"
        headerLink="/app/main"
        glyph="dashboard"
      />

    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
