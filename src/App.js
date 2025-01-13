import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import DefaultLayout, { ProfileLayout } from '~/layouts';
import ProfileForm from './layouts/components/ProfileForm';
import Settings from './layouts/components/ProfileForm/pages/Settings';
import MyMedia from './layouts/components/ProfileForm/pages/MyMedia';
import Statistics from './layouts/components/ProfileForm/pages/Statistics';
import Following from './layouts/components/ProfileForm/pages/Following';
import Messages from './layouts/components/ProfileForm/pages/Messages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Fragment key={index}>
                <Route
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
                <Route path="/profile" element={<ProfileLayout />}>
                  <Route index element={<ProfileForm />} />
                  <Route path="mymedia" element={<MyMedia />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="statistics" element={<Statistics />} />
                  <Route path="following" element={<Following />} />
                  <Route path="messages" element={<Messages />} />
                </Route>
              </Fragment>
            );
          })}
          {/* Các route của Profile */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
