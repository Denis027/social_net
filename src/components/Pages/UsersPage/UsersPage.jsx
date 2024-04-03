import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";
import axios from "axios";

class UsersPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users/")
            .then((resp) => {
                this.props.setUsers(resp.data.items);
                console.log(resp.data.items);
            });
    }
    render = () => {
        return (
            <div>
                <div className={style.title}>
                    <h1>Users</h1>
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
