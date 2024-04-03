const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

let initialState = {
    newMessageText: "qwerty",
    dialogsData: [
        {
            id: "1",
            name: "Ivan",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi.",
        },
        {
            id: "2",
            name: "Kirill",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi.",
        },
        {
            id: "3",
            name: "Anton",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi.",
        },
        {
            id: "4",
            name: "Mary",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi.",
        },
        {
            id: "5",
            name: "Alex",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi.",
        },
    ],
    messagesData: [
        {
            id: 1,
            my_message: "false",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
        },
        {
            id: 2,
            my_message: "true",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
        },
        {
            id: 3,
            my_message: "true",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
        },
        {
            id: 4,
            my_message: "false",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
        },
        {
            id: 5,
            my_message: "false",
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
        },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        case SEND_NEW_MESSAGE: {
            let newMessege = {
                id: 1,
                myMessage: "true",
                message: state.newMessageText,
            };
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessege);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        default:
            return state;
    }
};

export const updateMessageTextActionCreator = (newMessageText) => {
    return { type: "UPDATE-MESSAGE-TEXT", newMessageText: newMessageText };
};
export const sendNewMessageActionCreator = () => {
    return { type: "SEND-NEW-MESSAGE" };
};

export default dialogsReducer;
