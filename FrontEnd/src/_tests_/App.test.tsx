import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';
//import userEvent from "@testing-library/user-event";
import App from "../App.tsx";

describe('App.tsx', () => {

    it('should display heading', () => {

// Arrange
        render(<App />);

// Assert
        expect(
            screen.getByRole('heading', { name: /""/i }),
        );
    });
});