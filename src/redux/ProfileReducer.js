const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";

let initialState = {
    newPostText: "kek",
    Posts: [
        {
            name: "Ivan",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
            likecount: 123,
        },
        {
            name: "Andry",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
            likecount: 123,
        },
        {
            name: "Alex",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
            likecount: 123,
        },
    ],
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case UPDATE_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case ADD_NEW_POST: {
            let newPost = {
                name: "Alex",
                ava_alt: "ava",
                ava_src:
                    "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                message: stateCopy.newPostText,
                likecount: 123,
            };
            stateCopy.Posts = [...state.Posts];
            stateCopy.Posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        default:
            return state;
    }
};

export const updatePostTextActionCreator = (newText) => {
    return { type: "UPDATE-POST-TEXT", newText: newText };
};
export const addNewPostActionCreator = () => {
    return { type: "ADD-NEW-POST" };
};

export default profileReducer;
