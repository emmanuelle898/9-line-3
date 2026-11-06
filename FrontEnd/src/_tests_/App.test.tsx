import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
//import userEvent from "@testing-library/user-event";
import App from "../App.tsx";

describe('App.tsx', () => {

    it('should display heading', () => {

// Arrange
        render(<App />);
// Assert
        expect(screen.queryByRole('heading', { name: /""/i })).toBeNull()

    });
});