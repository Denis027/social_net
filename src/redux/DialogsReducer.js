import { fishText } from "../components/Fish";

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
            message: fishText,
        },
        {
            id: "2",
            name: "Kirill",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message: fishText,
        },
        {
            id: "3",
            name: "Anton",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message: fishText,
        },
        {
            id: "4",
            name: "Mary",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message: fishText,
        },
        {
            id: "5",
            name: "Alex",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message: fishText,
        },
    ],
    messagesData: [
        {
            id: 1,
            my_message: "false",
            message: fishText,
        },
        {
            id: 2,
            my_message: "true",
            message: fishText,
        },
        {
            id: 3,
            my_message: "true",
            message: fishText,
        },
        {
            id: 4,
            my_message: "false",
            message: fishText,
        },
        {
            id: 5,
            my_message: "false",
            message: fishText,
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

export const updateMessageText = (newMessageText) => {
    return { type: "UPDATE-MESSAGE-TEXT", newMessageText: newMessageText };
};
export const sendNewMessage = () => {
    return { type: "SEND-NEW-MESSAGE" };
};

export default dialogsReducer;
