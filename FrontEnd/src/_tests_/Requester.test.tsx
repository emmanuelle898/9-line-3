import {render, screen, waitFor} from '@testing-library/react';
import {RequesterPage} from '../pages/RequesterPage';
import {expect, describe, it, vi, beforeEach} from "vitest";
import {userEvent} from "@testing-library/user-event";
import {saveNineLine} from "../NineLineAPI";


vi.mock("../NineLineAPI", () => ({
    saveNineLine: vi.fn()
}));



describe('RequesterPage', () => {

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

    it("should show form submitted alert on pressing submit button with all form data", async () => {

        const newNineLine =  {
            "id": 1,
            "location": "12345 12345",
            "callSign": "temu7",
            "precedenceCounters": {
                "PRIORITY": "2",
                "URGENT": "3",
                "URGENT_SURGICAL": "0",
                "ROUTINE": "0",
                "CONVENIENCE": "0"
            },
            "specialEquipment": ["HOIST","VENTILATOR"],
            "litterPatient": "3",
            "ambulatoryPatient": "2",
            "security": "ESCORT_REQUIRED",
            "markings": ["SMOKE_SIGNAL","PANEL"],
            "patientStatus": "US_MILITARY",
            "contamination": "NUCLEAR"
        }

        vi.mocked(saveNineLine).mockResolvedValue(newNineLine);

        render(<RequesterPage/>);
        screen.logTestingPlaygroundURL()
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(()=>{});


        const location = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(location, newNineLine.location);

        const callSign = screen.getByRole("textbox", {name: /Call Sign/i});
        await userEvent.type(callSign, newNineLine.callSign);

        const priority = screen.getByRole('spinbutton', { name: /priority/i });
        await user.clear(priority);
        await user.type(priority,"2");

        const urgent = screen.getByRole('spinbutton', { name: /^urgent$/i });
        await user.clear(urgent);
        await user.type(urgent,"3");

        const hoist = screen.getByRole('checkbox', { name: /hoist/i });
        await user.click(hoist);

        const ventilator = screen.getByRole('checkbox', { name: /ventilator/i });
        await user.click(ventilator);

        const litter = screen.getByRole('spinbutton', { name: /litter/i });
        await user.clear(litter);
        await user.type(litter,newNineLine.litterPatient);

        const ambulatory = screen.getByRole('spinbutton', { name: /ambulatory/i });
        await user.clear(ambulatory);
        await user.type(ambulatory, newNineLine.ambulatoryPatient);

        const security = screen.getByRole('combobox', { name: /security/i });
        await user.selectOptions(security, newNineLine.security);

        const smoke = screen.getByRole('checkbox', { name: /smoke/i });
        await user.click(smoke);

        const panel = screen.getByRole('checkbox', { name: /panel/i });
        await user.click(panel);

        const patient_nation = screen.getByRole('combobox', { name: /patient status/i });
        await user.selectOptions(patient_nation, newNineLine.patientStatus);

        const contamination = screen.getByRole('combobox', { name: /contamination/i });
        await user.selectOptions(contamination, newNineLine.contamination);

        const submit = screen.getByRole("button", {name: /Submit/i})
        await user.click(submit);


        //VALIDATE THIS


        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith(`Form submitted successfully:\n${JSON.stringify(newNineLine)}`);
        });

        alertSpy.mockRestore();
    })

    it("should show API response successfully", async () => {
        render(<RequesterPage/>);
        const myRadioFrequency = screen.getByRole("textbox", {name: /Radio Frequency/i})
        await userEvent.click(myRadioFrequency);

    })
})