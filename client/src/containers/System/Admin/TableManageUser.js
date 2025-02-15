import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import { LANGUAGES } from '../../utils';
import {FormattedMessage} from 'react-intl';
import UserRedux from './UserRedux';
import './TableManageUser.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css'


const mdParser = new MarkdownIt();

function handleEditorChange({html , text}) {
    console.log("handleEditorChange" , html , text)
}

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            userRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux()
    }

    componentDidUpdate(prevProps , prevState , snapshot) {
        if(prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id)
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKy(user)
    }

   

    render() {
        let arrUsers = this.state.userRedux
        return (
            <React.Fragment>
              <table id="TableMangeUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {
                            arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button onClick={()=> this.handleEditUser(item)} className=""btn-edit><i className="fas fa-pencil-alt"></i></button>
                                            <button
                                              onClick={() => this.handleDeleteUser(item)}
                                              className="btn-delete"
                                            >
<i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
              </table>
              <MdEditor style={{height:'500px'}} renderHTML={text=>mdParser.render(text)} onChange={handleEditorChange}  />
              </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
    listUsers:state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
       fetchUserRedux: () =>  dispatch(actions.fetchAllUsersStart()),
       deleteAUserRedux : (id) => dispatch(actions.deleteAUser(id))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
