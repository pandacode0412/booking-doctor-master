import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import HomeHeader from '../../HomePage/HomeHeader';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';
import {FormattedMessage} from 'react-intl';
import { getDetailInforDoctor } from '../../../services/userService';
import DoctorSchedule from './DoctorSchedule'
import DoctorExtraInfor from './DoctorExtraInfor'
class DetailDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detailDoctor: {},
            currentDoctorId:-1
        }
    }

    async componetDidMount() {
         if(this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            this.setState({
                currentDoctorId:id
            })
            let res = await getDetailInforDoctor(id);
            if(res && res.errCode === 0) {
                    this.setState({
                        detailDoctor:res.data
                    })
            }
         }
    }

    componetDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let {language} = this.props

        let {detailDoctor} = this.state
        let nameVi= '' , nameEn = ''
        if(detailDoctor && detailDoctor.positionData) {
            nameVi=`${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`,
            nameEn=`${detailDoctor.positionData.valueVi},  ${detailDoctor.firstName} ${detailDoctor.lastName}`
        }

        return (
            <>
                  <HomeHeader
                   isShowBanner={false}                 
                  />
                  <div className="doctor-detail-doctor"> 
                       <div className="intro-doctor">
                           <div
                               className="content-left"
                               style={{backgroundImage:`url(${detailDoctor && detailDoctor.image ? detailDoctor.image: ''})`}}
                           >
                           </div>
                           <div className="conetent-right">
                                <div className="up">
                                    {language === LANGUAGES.VI ? nameVi : nameEn}
                                </div>
                                <div className="down">
                                     {detailDoctor && detailDoctor.Markdown
                                       && detailDoctor.Markdown.description
                                       &&
                                       <span>
                                          {detailDoctor.Markdown.description}
                                       </span>
                                     }
                                </div>
                           </div>
                       </div>
                       <div className="schedule-doctor">
<div className="content-left">
    <DoctorSchedule
      doctorIdFromParent={this.state.currentDoctorId}
    />
</div>
<div className="content-right">
  <DoctorExtraInfor doctorIdFromParent={this.state.currentDoctorId} />
</div>
                       </div>
                       <div className="detail-infor-doctor">
                           {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML
                             &&
                            <div dangerouslySetInnerHTML={{_html : detailDoctor.Markdown.contentHTML}}>
                                     
                            </div>
                            
                           }
                       </div>
                       <div className="comment-doctor">

                       </div>
                  </div>
             
            
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        language:state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux:(language)=>dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
