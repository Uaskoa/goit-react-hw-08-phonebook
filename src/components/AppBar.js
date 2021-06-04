import {connect} from 'react-redux';
import Navigation from './Navigation';
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import {getIsAuth} from '../redux/auth/auth-selectors';

const AppBar = ({isAuth}) => {
  return (
    <header>
      <Navigation />
      {isAuth ? <UserMenu/> : <AuthNav />}
    </header>
  );
};

const makeStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});

export default connect(makeStateToProps)(AppBar);
