import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import LandingPage from './views/Landing';
import LoginPage from './views/Login';
import RegisterPage from './views/Register';
import DashboardPage from './views/Dashboard';
import HistoryPage from './views/History';
import InventoryPage from './views/Inventory';
import OrderPage from './views/Orders';
import UserManagementPage from './views/UserManagement';
import NotificationPage from './views/Notifications';
import CartPage from './views/Cart';
import BadOrderPage from './views/BadOrder';
import SalesReportPage from './views/SalesReport';
import ReportsPage from './views/Reports';
import CommentsPage from './views/Comments';
import MessagePage from './views/Messages';
import WithlistPage from './views/Wishlists';

import * as ROUTES from './components/routes'

function App() {
  return(
    <Router>
      <div>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.REGISTER} component={RegisterPage} />
        <Route path={ROUTES.DASHBOARD} component={DashboardPage}/>
        <Route path={ROUTES.HISTORY} component={HistoryPage}/>
        <Route path={ROUTES.INVENTORY} component={InventoryPage} />
        <Route path={ROUTES.ORDERS} component={OrderPage} />
        <Route path={ROUTES.USERMANAGEMENT} component={UserManagementPage} />
        <Route path={ROUTES.NOTIFICATION} component={NotificationPage} />
        <Route path={ROUTES.CART} component={CartPage} />
        <Route path={ROUTES.BADORDERS} component={BadOrderPage} />
        <Route path={ROUTES.SALESREPORT} component={SalesReportPage} />
        <Route path={ROUTES.REPORTS} components={ReportsPage} />
        <Route path={ROUTES.COMMENTS} components={CommentsPage} />
        <Route path={ROUTES.MESSAGES} components={MessagePage} />
        <Route path={ROUTES.WISHLISTS} components={WithlistPage} />
      </div>
    </Router>
  );
}

export default App;