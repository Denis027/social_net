import React, { useEffect, useState } from "react";
import UsersPage from "./UsersPage";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../app/Preloader";
import {
    selectUsersList,
    getUsers,
    userFollow,
    userUnfollow,
} from "../../app/redux/slices/usersSlice.ts";

const UsersPageContainer = (props) => {
    const usersList = useSelector(selectUsersList);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(
        JSON.parse(localStorage.getItem("pageSize")) || 10
    );

    useEffect(() => {
        dispatch(getUsers({ currentPage, pageSize }));
    }, [dispatch, currentPage, pageSize]);

    const onPageSizeChange = (pageSize) => {
        setPageSize(pageSize);
        localStorage.setItem("pageSize", JSON.stringify(pageSize));
    };

    const follow = (userId) => {
        dispatch(userFollow(userId));
    };
    const unfollow = (userId) => {
        dispatch(userUnfollow(userId));
    };

    return (
        <div>
            {usersList.isFetching ? (
                <Preloader />
            ) : (
                <UsersPage
                    follow={follow}
                    unfollow={unfollow}
                    setCurrentPage={setCurrentPage}
                    onPageSizeChange={onPageSizeChange}
                    usersList={usersList}
                    currentPage={currentPage}
                    pageSize={pageSize}
                />
            )}
        </div>
    );
};

export default UsersPageContainer;
