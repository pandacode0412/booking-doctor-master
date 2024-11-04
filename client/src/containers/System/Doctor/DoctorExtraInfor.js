import React , {Component} from 'react';
import {connect} from 'react-redux'
import './DoctorExtraInfor.scss'
import {FormattedMessage} from 'react-intl'
import Select from 'react-select'
import * as actions from '../../../store/actions'
import { CRUD_ACTIONS, LANGUAGES , dateFormat } from '../../../utils';
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment'
import {toast} from 'react-toastify'
import _ from 'lodash'
class ManageSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
           isShowDetailInfor:false
           
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps , prevState, snapshot) {
       
    }

   showHideDetailInfor = (status) => {
    this.setState({
        isShowDetailInfor:status
    })
   }

  
    
    render() {
        let {isShowDetailInfor} = this.state
        return (
            <div className="doctor-extra-infor-container">
                <div className='content-up'>
                    <div className='text-address'>ĐỊA CHỈ KHÁM</div>
                    <div className='name-clinic'>Phòng khám Chuyên khoa Da liễu</div>
                    <div className='detail-address'>Sài Gòn</div>

                </div>
                <div className="content-down">
{
    isShowDetailInfor === false &&
    <div className='short-infor'>
        GIÁ KHÁM:250.000đ.
        <span onClick={()=>this.showHideDetailInfor(true)}>Xem chi tiết</span>
         </div>
}
                </div>
         
            </div>
        )
    }

    

}

{
    isShowDetailInfor === true &&
  <>
  <div className='title-price'>GIÁ KHÁM: .</div>
  <div className='detail-infor'>
<div className='price'>
 <span className='left'>Giá khám</span>
 <span className='right'>250.000đ</span>
</div>
<div className='note'>
 Được ưu tiên khám trước khi đặt khám qua Booking care
</div>
  </div>
  <div className='payment'>
   Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và quẹt thẻ
  </div>
  <div className='hide-price'>
<span onClick={()=> this.showHideDetailInfor(false)}>
Ẩn bảng giá
</span>
  </div>
  </>
}
     

const mapStateToProps = state => {
    return {
        isLoggedIn:state.user.isLoggedIn,
        language:state.app.language,
        allDoctors:state.admin.allDoctors,
        allScheduleTime:state.admin.allScheduleTime
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchAllDoctors:() => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
