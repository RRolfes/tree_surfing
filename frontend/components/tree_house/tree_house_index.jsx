import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseContainer from './tree_house_container';
import Map from './tree_house_map';

class TreeHouseIndex extends React.Component {
  constructor(props) {
    super(props);

    this.greeting = this.greeting.bind(this);
  }

  greeting() {
    const currentUser = this.props.session.currentUser;

    if (currentUser) {
      return <div className="index-page-nav-bar-greeting-and-logout">
        <h2>Welcome Back, {currentUser.full_name}!</h2>
        <button
          className="header-button"
          onClick={this.props.logout}>
          Log Out
        </button>
      </div>;
    } else {
      return <div className="index-page-nav-bar-greeting-and-logout">
        <Link to={`/login`}>
          <button
            className="header-button"
            >
            Login
          </button>
        </Link>
      </div>;
    }
  }

  render() {
    const treeHouses = this.props.treeHouses;
    // const currentUserName = this.props.session.currentUser.full_name;

    if (treeHouses) {
    return (
      <div className="index-page-master">
        <div className="index-page-nav-bar">
          <h1 className="index-page-nav-bar-header">Tree Surfing</h1>

          <div>{this.greeting()}</div>

        </div>

        <div className="index-map-container">
          <div className="tree-house-index">
            <ul className="index-list">
              {Object.keys(treeHouses).map((key, idx) =>
                <li key={idx} className="tree-house-index-item" >
                  <Link to={`/treehouses/${key}`}>
                    <img className=".map-img" src={treeHouses[key].image_url}></img>
                  </Link>
                  <ul className="tree-house-info">
                    <li>{treeHouses[key].name}</li>
                    <li>{treeHouses[key].city}</li>
                    <li>{treeHouses[key].country}</li>
                  </ul>
                </li>
              )}
            </ul>
          </div>

          <div className="map-container">
            <Map
              treeHouses={treeHouses}
              updateFilter={this.props.updateFilter}
              />
          </div>

          <div className="logout-button">
          </div>
        </div>
      </div>
    );
    } else {
      return(
        <div> Loading </div>
      );
    }
  }
}

export default withRouter(TreeHouseIndex);
