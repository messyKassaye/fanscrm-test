import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { frontend_routes } from './utils/frontend_routes';
import DashboardPage from './modules/dashboard/pages/DashboardPage';
import AuthenticationHOC from './modules/authentication/HOC/AuthenticationHOC';
import Login from './modules/authentication/components/Login/Login';
import SignUp from './modules/authentication/components/Signup/Signup';
import UsersList from './modules/dashboard/components/UsersList/UsersList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={'urlHome'}
          path={frontend_routes.home}
          element={
            <AuthenticationHOC>
              <SignUp />
            </AuthenticationHOC>
          }
        />
        <Route
          key={'urlDashboard'}
          path={frontend_routes.dashboard}
          element={<DashboardPage />}
        >
          <Route index element={<UsersList />} />
        </Route>
        <Route
          key={'urlLogin'}
          path={frontend_routes.login}
          element={
            <AuthenticationHOC>
              <Login />
            </AuthenticationHOC>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
