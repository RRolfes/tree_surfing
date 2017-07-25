import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TreeHouseContainer from './tree_house_container';
import Map from './tree_house_map';

class TreeHouseIndex extends React.Component {

  componentWillMount() {
    this.props.fetchTreeHouses();
  }

  render() {
    const treeHouses = this.props.treeHouses;
    if (Object.keys(treeHouses).length !== 0) {
      return (
        <div>

          <div className="nav-bar">
            <h1>Tree Surfing</h1>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
          </div>


        <div className="index-map-container">
          <div className="tree-house-index">
            <ul className="index-list">
              {Object.keys(treeHouses).map((key, idx) =>
                <li key={idx} className="tree-house-index-item" >
                  <img src={treeHouses[key].image_url}></img>
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
            <Map treeHouses={treeHouses} />
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
