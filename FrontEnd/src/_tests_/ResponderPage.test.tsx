import {ResponderPage} from "../pages/ResponderPage";
import {getAllByRole, queryAllByRole, render, screen, within} from "@testing-library/react";
import type {NineLine} from "@/NineLineType";
import { vi } from "vitest";
import * as NineLineAPI from "../NineLineAPI";

const mockListItems: NineLine[] = [
    {
        id: 1,
        location: '11223',
        callSign: 'Test 1',
        precedenceCounters: { ROUTINE: 'yes' },
        specialEquipment: ['of course'],
        litterPatient: 'litter',
        ambulatoryPatient: 'ambulatory',
        security: 'security',
        markings: ['smoke'],
        patientStatus: 'status',
        contamination: 'contamination',
    },
    {
        id: 2,
        location: '11223',
        callSign: 'Test 1',
        precedenceCounters: { ROUTINE: 'yes' },
        specialEquipment: ['of course'],
        litterPatient: 'litter',
        ambulatoryPatient: 'ambulatory',
        security: 'security',
        markings: ['smoke'],
        patientStatus: 'status',
        contamination: 'contamination',
    }]

 vi.mock('../NineLineAPI');

describe('ResponderPage', () => {

    beforeEach(()=>{
        vi.clearAllMocks();
    });


    it('should rendername of page in heading', () => {

        //act
        render(<ResponderPage/>)

        //assert
        expect(screen.getByRole('heading', {name:/ResponderPage/i})).toBeVisible()
    });

    it('should display assign button', () => {
        //act
        render(<ResponderPage/>)

        expect(screen.getByRole('button',{name:/assign/i})).toBeVisible()

    });

    it('should display responder table headings', () => {
        render(<ResponderPage/>)

        expect(screen.getByRole('columnheader', {name: /location/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /call Sign/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /precedence/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /special Equipment/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /security/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /markings/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /details/i})).toBeVisible()

    });

    it('should render multiple responder requests', async () => {

        vi.mocked(NineLineAPI.fetchAllNineLine).mockResolvedValue(mockListItems);
        render(<ResponderPage/>)

        // const location = await screen.findByText(/11223/i);
        // expect(location).toBeVisible();

        const table = await screen.findByRole('table', {name: /Responder_Table/i});
        expect(table).toBeInTheDocument();

        const rows = within(table).getAllByRole('row');
        screen.logTestingPlaygroundURL()
        expect(rows).toHaveLength(3);
        expect(rows[0]).toHaveTextContent('11223');
        expect(rows[1]).toHaveTextContent('Walk dog');





    });


});