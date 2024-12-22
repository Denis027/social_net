import React, { useEffect, useState } from "react";
import UsersPage from "./UsersPage";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import {
    selectUsersList,
    getUsers,
    userFollow,
    userUnfollow,
} from "../../redux/slices/usersSlice";

// import { compose } from "redux";
// import { withRouter } from "../../hoc/withRouter";

const UsersPageContainer = (props) => {
    const usersList = useSelector(selectUsersList);
    const dispatch = useDispatch();

    // eslint-disable-next-line
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize));
    }, [dispatch, props, currentPage, pageSize]);

    const onPageChange = (page) => {
        getUsers(page, pageSize);
    };

    const onPageSizeChange = (page) => {
        setPageSize(page);
        console.log(page);
    };

    return (
        <div>
            {usersList.isFetching ? (
                <Preloader />
            ) : (
                <UsersPage
                    setCurrentPage={setCurrentPage}
                    onPageSizeChange={onPageSizeChange}
                    usersList={usersList}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={onPageChange}
                    userFollow={userFollow}
                    userUnfollow={userUnfollow}
                    dispatch={dispatch}
                />
            )}
        </div>
    );
};

export default UsersPageContainer;
