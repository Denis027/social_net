import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";
import axios from "axios";
import UsersList from "./User/UsersList";

class UsersPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((resp) => {
                this.props.setUsers(resp.data.items);
                // this.props.setUsersCount(resp.data.totalCount);
                this.props.getPages();
                console.log(resp.data.items);
            });
    }
    render = () => {
        let onPageChange = (page) => {
            console.log(page);
            this.props.setCurrentPage(page);
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
                )
                .then((resp) => {
                    this.props.setUsers(resp.data.items);
                    // this.props.setUsersCount(resp.data.totalCount);
                    this.props.getPages();
                    console.log(resp.data.items);
                });
        };
        return (
            <div>
                <div className={style.title}>
                    <h1>Users</h1>
                </div>
                <div>
                    {this.props.pages.map((page) => (
                        <UsersList
                            onPageChange={onPageChange}
                            currentPage={this.props.currentPage}
                            key={page}
                            page={page}
                        />
                    ))}
                </div>
                <div className={style.usersWrapper}>
                    <div className={style.usersItems}>
                        {this.props.users.map((u) => (
                            <User
                                key={u.id}
                                // alt={u.ava_alt}
                                // src={u.ava_src}
                                name={u.name}
                                // location={u.location}
                                id={u.id}
                                // status={u.status}
                                followed={u.followed}
                                onClickUnfollow={this.props.onClickUnfollow}
                                onClickFollow={this.props.onClickFollow}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    };
}

export default UsersPage;
