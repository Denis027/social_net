import userPhoto from "../img/images.png";

let initialState = {
    friendsList: [
        {
            id: 1,
            name: "Ivan",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 2,
            name: "Kirill",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 3,
            name: "Anton",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 4,
            name: "Mary",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 5,
            name: "Alex",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
    ],
};

const sideBarReducer = (state = initialState, action) => {
    return state;
};

export default sideBarReducer;
