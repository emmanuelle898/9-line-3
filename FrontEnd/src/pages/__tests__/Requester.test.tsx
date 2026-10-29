import {render, screen} from '@testing-library/react';
import {RequesterPage} from "../RequesterPage";
import {expect} from "vitest";
import {userEvent} from "@testing-library/user-event";

//arrange

describe('RequesterPageTest', () => {
    const user = userEvent.setup();

    it("it should show requester entry field", () => {
        render(<RequesterPage/>);
        expect(screen.getByRole("textbox", {name: /Location/i})).toBeVisible();
        screen.logTestingPlaygroundURL()
    })


    it("should show a clickable submit button", () => {
        render(<RequesterPage/>);
        expect(screen.getByRole("button", {name: /Submit/i})).toBeVisible();
    })

    it("should show form submited alert on pressing submit button with location data", async () => {
        render(<RequesterPage/>);
        const myLocation = "12345asdfghjkl";
        const input = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(input, myLocation);

        const submit = screen.getByRole("button", {name: /Submit/i})
        await userEvent.click(submit);

        const alertElement = screen.getByRole('alert');
        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveTextContent(`Form submitted successfully ${myLocation}`);
    })
})