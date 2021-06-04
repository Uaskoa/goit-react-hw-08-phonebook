import { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";
// // import Filter from "./components/Filter/Filter";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
import routes from './routes';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';
import NotFoundView from "./views/NotFoundView";
// import { phonebookOperations } from "./redux/phonebook/";
import { authOperations } from "./redux/auth";
// import { getIsLoading } from "./redux/phonebook/phonebook-selectors";
import "./styles.css";
import "./App.scss";



class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.register} component={RegisterView} />
          <Route path={routes.login} component={LoginView} />
          <Route path={routes.contacts} component={PhonebookView} />
          <Route component={NotFoundView} />
        </Switch>
      </>
    );
  }
}

// const App = () => (
//   <>
//   <AppBar/>
//   <Switch>
//     <Route exact path={routes.home} component={HomeView} />
//     <Route path={routes.register} component={RegisterView} />
//     <Route path={routes.login} component={LoginView} />
//     <Route path={routes.contacts} component={PhonebookView} />
//     <Route component={NotFoundView} />
//   </Switch>
//   </>
// );


// const mapDispatchToProps = (dispatch) => ({
//   onGetCurrentUser: () => dispatch(authOperations.getCuurentUser()),
// });
  
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCuurentUser,
};


export default connect(null, mapDispatchToProps)(App);




// class App extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           <div className="phonebook">
//             <h1>Phonebook</h1>
//             <ContactForm />
//             <h2>Contacts</h2>
//             <Filter />
//             {this.props.isLoadingContacts && <h1>Loading</h1>}
//             <ContactList />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isLoadingContacts: getIsLoading(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);