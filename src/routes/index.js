import config from '~/config';

// Layouts
import { ProfileLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Charge from '~/pages/Charge';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import ShoppingCart from '~/pages/ShoppingCart';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import ProductDetail from '~/pages/ProductDetail';
import User from '~/pages/User';
import Settings from '~/layouts/components/ProfileForm/pages/Settings';
import MyMedia from '~/layouts/components/ProfileForm/pages/MyMedia';
import Following from '~/layouts/components/ProfileForm/pages/Following';
import Messages from '~/layouts/components/ProfileForm/pages/Messages';
import Statistics from '~/layouts/components/ProfileForm/pages/Statistics';
import Upload from '~/pages/Upload';

// Pucblic Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.charge, component: Charge },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signUp, component: SignUp, layout: null },
  { path: config.routes.search, component: Search },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.user, component: User },
  { path: config.routes.upload, component: Upload },
  { path: config.routes.profile, component: Profile, layout: ProfileLayout },
  { path: config.routes.settings, component: Settings },
  { path: config.routes.myMedia, component: MyMedia },
  { path: config.routes.following, component: Following, layout: ProfileLayout },
  { path: config.routes.messages, component: Messages, layout: ProfileLayout },
  { path: config.routes.statistics, component: Statistics, layout: ProfileLayout },
  { path: config.routes.shoppingcart, component: ShoppingCart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
