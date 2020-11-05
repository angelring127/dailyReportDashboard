/**
 * Flatlogic Dashboards (https://flatlogic.com/admin-dashboards)
 *
 * Copyright © 2015-present Flatlogic, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Switch, Route, withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';


import s from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

// Dashboard component is loaded directly as an example of server side rendering
import Dashboard from '../../pages/dashboard'
import Buttons from '../../pages/buttons'
import Charts from '../../pages/charts'
import Maps from '../../pages/google'
import NotFound from '../../pages/notFound'
import Icons from '../../pages/icons'
import Typography from '../../pages/typography'
import Tables from '../../pages/tables'
import Notifications from '../../pages/notifications'
import Posts from '../../pages/posts'
import Profile from '../../pages/profile'
import Privacy from '../../pages/privacy'
import Driver from '../../pages/driver'
import Client from '../../pages/client'
import Truck from '../../pages/truck'
import Admin from '../../pages/admin'


import {getUser} from '../../actions/user'


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const auth = useSelector(state => state.auth, []);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.user === null && !auth.isFetching) {
      dispatch(getUser());
      console.log(auth);
    }
  },[])

  return (
    <div className={s.root}>
      <Sidebar />
      <div
        className={cx(s.wrap, { [s.sidebarOpen]: sidebarOpen })}
      >
        <Header
          sidebarToggle={() =>
            setSidebarOpen(!sidebarOpen)
          }
        />
        <main className={s.content}>
          <Switch>
            <Route path="/app/main" exact component={Dashboard} />
            <Route path="/app/typography" exact component={Typography} />
            <Route path="/app/tables" exact component={Tables} />
            <Route path="/app/posts" component={Posts} />
            <Route path="/app/privacy" exact component={Privacy} />
            <Route path="/app/profile" exact component={Profile} />
            <Route path="/app/notifications" exact component={Notifications} />
            <Route path="/app/components/buttons" exact component={Buttons} />
            <Route path="/app/components/charts" exact component={Charts} />
            <Route path="/app/components/icons" exact component={Icons} />
            <Route path="/app/components/maps" exact component={Maps} />
            <Route path="/app/driver" exact component={Driver} />
            <Route path="/app/truck" exact component={Truck} />
            <Route path="/app/client" exact component={Client} />
            <Route path="/app/admin" exact component={Admin} />


            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}
// class Layout extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       sidebarOpen: false,
//     };
//   }

//   render() {
//     return (
//       <div className={s.root}>
//         <Sidebar />
//         <div
//           className={cx(s.wrap, { [s.sidebarOpen]: this.state.sidebarOpen })}
//         >
//           <Header
//             sidebarToggle={() =>
//               this.setState({
//                 sidebarOpen: !this.state.sidebarOpen,
//               })
//             }
//           />
//           <main className={s.content}>
//             <Switch>
//               <Route path="/app/main" exact component={Dashboard} />
//               <Route path="/app/typography" exact component={Typography} />
//               <Route path="/app/tables" exact component={Tables} />
//               <Route path="/app/posts" component={Posts} />
//               <Route path="/app/privacy" exact component={Privacy} />
//               <Route path="/app/profile" exact component={Profile} />
//               <Route path="/app/notifications" exact component={Notifications} />
//               <Route path="/app/components/buttons" exact component={Buttons} />
//               <Route path="/app/components/charts" exact component={Charts} />
//               <Route path="/app/components/icons" exact component={Icons} />
//               <Route path="/app/components/maps" exact component={Maps} />
//               <Route component={NotFound} />
//             </Switch>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

export default withRouter(Layout);
