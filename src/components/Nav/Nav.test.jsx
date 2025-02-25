import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import userPhoto from "../../app/Fish";

describe("render Nav", () => {
    const friendsList = [
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
    ];

    test("render Nav items", () => {
        render(
            <BrowserRouter>
                <Nav friendsList={friendsList} />
            </BrowserRouter>
        );

        const navProfile = screen.getByText(/profile/i);
        expect(navProfile).toBeInTheDocument();

        const navUsers = screen.getByText(/users/i);
        expect(navUsers).toBeInTheDocument();

        const navDialogs = screen.getByText(/dialogs/i);
        expect(navDialogs).toBeInTheDocument();

        const listEl = screen.getByRole("list");
        expect(listEl).toBeInTheDocument();
    });
});
