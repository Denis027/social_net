export type UsersRequestType = {
    currentPage: number;
    pageSize: number;
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
