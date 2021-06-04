import {connect} from 'react-redux';
import {getUsername} from '../redux/auth/auth-selectors';
import { authOperations } from "../redux/auth"; 

// import defaultAvatar from 

const UserMenu = ({name, avatar, onLogout}) => (
  <div>
      {/* <img src={avatar} alt='name', width='32'/> */}
    <span>Welcome, {name} </span>
    <button type="button" onClick={onLogout} >
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
    name: getUsername(state),
    // avatar: defaultAvatar;

})

// const mapDispatchToProps= {
//     onLogout: authOperations.logout,
// }
const mapDispatchToProps = dispatch =>({
    onLogout: () => dispatch(authOperations.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
