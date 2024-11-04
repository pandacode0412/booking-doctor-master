import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Specialty.scss'
import {FormattedMessage} from 'react-intl'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
class Specialty extends Component {

    render() {

        // let settings = {
        //     dots:false,
        //     infinite:true,
        //     speed:500,
        //     slidesToShow:4,
        //     slidesToScroll:1
        // }


      return (
        <div>
            
            <div className="section-share section-specialty">
                 <div className="section-container">
                      <div className="section-header">
                           <span className="title-section">Chuyên khoa phổ biến</span>
                           <button className="btn-section">xem them</button>
                      </div>
                      <div className="section-body">
                      <Slider {...this.props.settings}>
                           <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Cơ xương khơp1</div>
                           </div>
                           <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Cơ xương khơp1</div>
                           </div>
                           <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Cơ xương khơp1</div>
                           </div>
                           <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Cơ xương khơp1</div>
                           </div>
                       </Slider>
                      </div>
                 </div>
            </div>
        </div>
      )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
