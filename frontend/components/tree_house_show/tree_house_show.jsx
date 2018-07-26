import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import Intro from './intro';
import About from './about';
import Details from './details';
import Features from './features';
import Activites from './activities';
import ReviewsIndex from '../reviews/reviews_index';
import BookingWidgetContainer from '../bookings/booking_widget_container';
import NavBar from '../nav_bar/nav_bar_container';

class TreeHouseShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: {},
      treeHouse: null
    };
  }

  componentDidMount() {
    const treeHouseId = parseInt(this.props.match.params.treeHouseId);
    this.props.fetchCurrentTreeHouse(treeHouseId).then( payload =>
      this.props.fetchUser(payload.currentTreeHouse.user_id).then( host =>
        this.setState({
          host: host.user,
          treeHouse: payload.currentTreeHouse
        })
      )
    );
  }


  render() {
    const currentTreeHouse = this.state.treeHouse;
    console.log(this.state);
    const usersHaveLoaded = this.props.user;

    if (currentTreeHouse && usersHaveLoaded) {
      const reviews = this.props.treeHouses.currentTreeHouse.reviews;
      const bookings = this.props.treeHouses.currentTreeHouse.bookings;
      const host = this.state.host;
      const createBooking = this.props.createBooking;
      const userId = this.props.session.currentUser ? this.props.session.currentUser.id : null;
      const history = this.props.history;

      const backgroundImageStyles = {
        backgroundImage: `url(${currentTreeHouse.image_url})`
      };


      return (
        <div className="tree-house-detail-master">
          <div className="tree-house-detail-photo-container">
            <div className='tree-house-detail-photo' style={backgroundImageStyles}></div>
          </div>

          <div className='tree-house-detail-container'>
            <div className="tree-house-centered">
              <div className="tree-house-content" >
                <Intro
                  treeHouse={currentTreeHouse}
                  />
                <About
                  treeHouse={currentTreeHouse}
                  host={host}
                  />
                <Details
                  treeHouse={currentTreeHouse}
                  />
                <Features
                  treeHouse={currentTreeHouse}
                  />
                <Activites
                  treeHouse={currentTreeHouse}
                  />
                <BookingWidgetContainer
                  treeHouse={currentTreeHouse}
                  userId={userId}
                  history={history}
                  />
                <ReviewsIndex
                  reviews={reviews}
                  />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>Loading...</div>
      );
    }
  }
}

export default withRouter(TreeHouseShow);
