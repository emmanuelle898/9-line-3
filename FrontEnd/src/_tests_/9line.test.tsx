import { render, screen } from "@testing-library/react"
import { describe } from "vitest";
import App from "../App";
describe('App', () => {

    it('should display todo title', async () => {
        render(<App/>)
        expect( screen.getByRole("heading", { name: "Your To Do List" })).toBeVisible()
    })
})