import React from "react";
import style from "./ProfileInfo.module.css";

let newStatus = React.createRef();

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        profileStatus: this.props.profileStatus,
        newStatusText: ""
    };
    changeStatus = (newText)=>{
        this.setState({
            newStatusText: newText,
            profileStatus: newText
        });
    };
    editModeOn = () => {
        this.setState({
            editMode: true,
        });
    };
    editModeOff = () => {
        this.props.editProfileStatus(this.state.profileStatus)
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
                            onChange={()=>{this.changeStatus(newStatus.current.value)}}
                            ref={newStatus}
                            autoFocus={true}
                            onBlur={() => {
                                this.editModeOff();
                            }}
                            value={this.state.newStatusText}
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
                            {this.props.profileStatus}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
