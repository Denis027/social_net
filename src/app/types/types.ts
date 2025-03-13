import { AppDispatch, RootState } from "../redux/reduxStore";

export type UsersRequestType = {
    currentPage: number;
    pageSize: string;
};

export type UserType = {
    followed: boolean;
    id: number;
    name: string;
    photos: PhotosType;
    status: null;
    uniqueUrlName: null;
};

export type UserProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsType;
    photos: PhotosType;
};

export type ContactsType = {
    github: null | string;
    vk: null | string;
    facebook: null | string;
    instagram: null | string;
    twitter: null | string;
    website: null | string;
    youtube: null | string;
    mainLink: null | string;
};

export type PhotosType = {
    small: string;
    large: string;
};

export type PostType = {
    name: string;
    ava_alt: string;
    ava_src: string;
    message: string;
    likecount: number;
};

export type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state?: RootState;
    /** type for `thunkApi.dispatch` */
    dispatch?: AppDispatch;
    /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
    extra?: unknown;
    /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
    rejectValue?: unknown;
    /** return type of the `serializeError` option callback */
    serializedErrorType?: unknown;
    /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
    pendingMeta?: unknown;
    /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
    fulfilledMeta?: unknown;
    /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
    rejectedMeta?: unknown;
};
