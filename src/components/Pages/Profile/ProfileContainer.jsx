import React from "react";
import ProfileInfo from "./ProfileInfo";
import style from "./ProfileContainer.module.css";
import { connect } from "react-redux";
import {
    setUserProfile,
    onPostChange,
    addNewPost,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../../api/usersAPI";

class ProfileContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        usersAPI
            .getUserProfile(this.props.router.params.userId)
            .then((data) => {
                this.props.setUserProfile(data);
                // this.props.setUsersCount(data.totalCount);
            });
    };
    render = () => {
        return (
            <div className={style.ProfileWrapper}>
                <h1 className={style.title}>Profile</h1>
                <ProfileInfo profilePage={this.props.profilePage} />
                <MyPosts
                    onPostChange={this.props.onPostChange}
                    addNewPost={this.props.addNewPost}
                    profilePage={this.props.profilePage}
                />
            </div>
        );
    };
}

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};

export default connect(mapStateToProps, {
    setUserProfile,
    addNewPost,
    onPostChange,
})(withRouter(ProfileContainer));
