import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl'
import Slider from "react-slick"


class MedicalFacility extends Component {

    render() {
       
      return (
        <div className="section-share section-medical-facility">
            <div className="section-container ">
                <div className="section-header">
                     
                     <span className="title-section">Cơ sở y tế nổ bật</span>
                     <button className="btn-section">xem thêm</button>
                </div>
                <div className="section-body">
                   <Slider {...this.props.settings}>
                         <div className="section-customize">
                                <div className="bg-image section-mediacl-facility"></div>
                                <div>Cơ Xương khớp 1</div>
                         </div>
                         <div className="section-customize">
                                <div className="bg-image section-mediacl-facility"></div>
                                <div>Cơ Xương khớp 1</div>
                         </div>
                         <div className="section-customize">
                                <div className="bg-image section-mediacl-facility"></div>
                                <div>Cơ Xương khớp 1</div>
                         </div>
                   </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
