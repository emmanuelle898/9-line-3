import {render, screen} from '@testing-library/react';
import {RequesterPage} from '../pages/RequesterPage';
import {expect, vitest} from "vitest";
import {userEvent} from "@testing-library/user-event";



//arrange

describe('RequesterPageTest', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });
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

    it("should show form submitted alert on pressing submit button with location data", async () => {
        render(<RequesterPage/>);
        const myLocation = "12345asdfghjkl";
        const input = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(input, myLocation);

        const submit = screen.getByRole("submit", {name: /Submit/i})
        await userEvent.click(submit);

        const alertElement = screen.getByRole('alert');
        // const alertMock = vi.spyOn(window, 'alert').mockImplementation(()=>{});
        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveTextContent(`Form submitted successfully ${myLocation}`);
    })

    it("should show API response successfully", async () => {
        render(<RequesterPage/>);
        const myRadioFrequency = screen.getByRole("text", {name: /Radio Frequency/i})
        await userEvent.click(myRadioFrequency);
    })
})