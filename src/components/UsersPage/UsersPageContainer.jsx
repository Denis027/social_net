import React, { useEffect, useState } from "react";
import UsersPage from "./UsersPage";
import { connect, useSelector } from "react-redux";
import Preloader from "../Preloader";
import {
    selectUsersList,
    getUsers,
    userFollow,
    userUnfollow,
} from "../../redux/slices/usersSlice";

import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

const UsersPageContainer = (props) => {
    const usersList = useSelector(selectUsersList);

    // eslint-disable-next-line
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        props.getUsers(currentPage, pageSize);
    }, [props, currentPage, pageSize]);

    const onPageChange = (page) => {
        getUsers(page, usersList.pageSize);
    };

    return (
        <div>
            {usersList.isFetching ? (
                <Preloader />
            ) : (
                <UsersPage
                    setCurrentPage={setCurrentPage}
                    setPageSize={setPageSize}
                    usersList={usersList}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    userFollow={props.userFollow}
                    userUnfollow={props.userUnfollow}
                />
            )}
        </div>
    );
};

export default compose(
    withRouter,
    connect(null, { getUsers, userFollow, userUnfollow })
)(UsersPageContainer);
