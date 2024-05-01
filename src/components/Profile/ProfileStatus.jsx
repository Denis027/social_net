import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };
    editModeOn = () => {
        this.setState({
            editMode: true,
        });
    };
    editModeOff = () => {
        this.setState({
            editMode: false,
        });
    };
    render() {
        return (
            <div>
                {this.state.editMode ? (
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={() => {
                                this.editModeOff();
                            }}
                            value={this.props.status}
                            type="text"
                        />
                    </div>
                ) : (
                    <div>
                        <span
                            className={style.statusText}
                            onDoubleClick={() => {
                                this.editModeOn();
                            }}
                        >
                            {this.props.status}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
