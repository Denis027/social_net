import dialogsReducer from "./dalogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";

let store = {
    _state: {
        dialogsPage: {
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
                    myMessage: "false",
                    message:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
                },
                {
                    id: 2,
                    myMessage: "true",
                    message:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
                },
                {
                    id: 3,
                    myMessage: "true",
                    message:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
                },
                {
                    id: 4,
                    myMessage: "false",
                    message:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
                },
                {
                    id: 5,
                    myMessage: "false",
                    message:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate natus quasi. Assumenda corporis eaque maxime sequi at non quibusdam quae exercitationem dicta veritatis, in placeat tenetur consectetur impedit laborum!",
                },
            ],
            newMessageText: "qwerty",
        },
        profilePage: {
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
        },
        sideBar: {
            friendsList: [
                {
                    id: "1",
                    name: "Ivan",
                    ava_alt: "ava",
                    ava_src:
                        "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                },
                {
                    id: "2",
                    name: "Kirill",
                    ava_alt: "ava",
                    ava_src:
                        "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                },
                {
                    id: "3",
                    name: "Anton",
                    ava_alt: "ava",
                    ava_src:
                        "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                },
                {
                    id: "4",
                    name: "Mary",
                    ava_alt: "ava",
                    ava_src:
                        "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                },
                {
                    id: "5",
                    name: "Alex",
                    ava_alt: "ava",
                    ava_src:
                        "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                },
            ],
        },
    },
    _callSubscriber() {
        console.log("ffff");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        dialogsReducer(this._state.dialogsPage, action);
        profileReducer(this._state.profilePage, action);
        sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
