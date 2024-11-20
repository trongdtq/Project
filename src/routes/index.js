import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Charge from '~/pages/Charge';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import ShoppingCart from '~/pages/ShoppingCart';

// Pucblic Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.charge, component: Charge, layout: HeaderOnly },
  { path: config.routes.search, component: Search },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.shoppingcart, component: ShoppingCart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
