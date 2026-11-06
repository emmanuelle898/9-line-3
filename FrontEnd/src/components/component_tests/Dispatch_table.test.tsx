import Dispatch_table from '../dispatch/Dispatch_table';
import { render, screen } from '@testing-library/react';
import * as NineLineAPI from '../../NineLineAPI';
import type { NineLine } from '@/NineLineType';
import { expect, vi, describe, it, beforeEach } from 'vitest';

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
        location: '45678',
        callSign: 'Test 2',
        precedenceCounters: { ROUTINE: 'yes' },
        specialEquipment: ['of course'],
        litterPatient: 'litter',
        ambulatoryPatient: 'ambulatory',
        security: 'security',
        markings: ['smoke'],
        patientStatus: 'status',
        contamination: 'contamination',
    },
];

vi.mock('../../NineLineAPI');

describe('Dispatch_table', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Should render Dispatch_table', async () => {
        vi.mocked(NineLineAPI.fetchAllNineLine).mockResolvedValue(mockListItems);

        render(<Dispatch_table />);
        const location = await screen.queryByText(/Location/i);
        const callSign = await screen.queryByText( /Call Sign/i );

        expect(screen.getByRole('table', { name: /Dispatch_table/i })).toBeInTheDocument();
        expect(location).toBeVisible();
        expect(callSign).toBeVisible();
        screen.logTestingPlaygroundURL()
    });

    it('Should render 9 Line items', async () => {
        vi.mocked(NineLineAPI.fetchAllNineLine).mockResolvedValue(mockListItems);

        render(<Dispatch_table />);

        const expectedLocation = '11223';
        const locationCell = await screen.findByRole('cell', { name: expectedLocation });
        expect(locationCell).toBeVisible();

        const expectedCallSign = 'Test 1';
        const callSignCell = await screen.findByRole('cell', { name: expectedCallSign });
        expect(callSignCell).toBeVisible();
    });

    it('should handle error when table fails to render or fetch fails', async () => {
        vi.mocked(NineLineAPI.fetchAllNineLine).mockRejectedValue(new Error('API failure'));

        render(<Dispatch_table />);

        // const alert = await screen.findByRole('alert');
        // expect(alert).toBeInTheDocument();
    });
});
