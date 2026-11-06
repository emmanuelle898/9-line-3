import {render,screen} from "@testing-library/react";
import {NineLineRow} from "../dispatch/NineLineRow";
import type {NineLine, PrecedenceType} from "@/NineLineType";

describe('NineLineRow', () => {

    it('should display all data', () => {
        //act
        const nineLine: NineLine={
            location: "location",
            callSign: "call sign",
            precedenceCounters: {ROUTINE:"yes"},
            specialEquipment: ["of course"],
            litterPatient: "litter",
            ambulatoryPatient: "ambulatory",
            security: "security",
            markings: ["smoke"],
            patientStatus: "status",
            contamination: "contamination"

        }
        render(<NineLineRow nineLine={nineLine}/>)
        screen.logTestingPlaygroundURL()

        //assert
        expect(screen.getByRole('checkbox', {name:/toAssign/i})).not.toBeChecked()
        expect(screen.getByRole('checkbox', {name:/toAssign/i})).toBeEnabled()
        expect(screen.getByText(/location/i)).toBeVisible()
        expect(screen.getByText(/call sign/i)).toBeVisible()
    });

});


/*
checkbox,
localtion,
 call sign,
 precedence
,special equipment,
security
marking
details
 */