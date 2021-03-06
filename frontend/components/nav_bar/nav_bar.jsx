import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import { Link, withRouter } from 'react-router-dom';
import LogInSignUp from '../modals/log_in_sign_up';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.welcome = this.welcome.bind(this);
  }

  welcome() {
    const currentUser = this.props.session.currentUser;

    if (currentUser) {
      const first = currentUser.first;
      return (
        <div className="nav-bar-greeting-and-logout">
          <h2 className="greeting">Hi, {first}!</h2>
          <button
            className="header-button"
            onClick={() => this.props.logout()}
          >
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <LogInSignUp />
    );
  }
}

render(){

  return(
    <div className="nav-bar">
      <div className='left-nav'>
        <a className="logo" href="#/">
          <img src='http://res.cloudinary.com/dreuhltzt/image/upload/v1518133771/Logo_foyk7n.png' ></img>
        </a>
        <SearchBarContainer />

      </div>
      <div className="right-nav">
        {this.welcome()}
      </div>
    </div>
  );
}

}

export default NavBar;
