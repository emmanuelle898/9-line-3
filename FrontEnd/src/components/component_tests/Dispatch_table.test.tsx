import { describe, expect, it } from "vitest";
import Dispatch_table from "../Dispatch_table";
import {render, screen} from "@testing-library/react";

describe("Dispatch_table", () => {
    it("Should render Dispatch_table", () => {
        render(<Dispatch_table/>)
        expect (screen.getByRole('table', { name: /Dispatch_table/i })).toBeInTheDocument()
    })

it("Should render location data", () => {
    render(<Dispatch_table/>)
    expect(screen.getByRole('columnheader', {name: /Location/i})).toBeVisible()

    it(" location data should populate")
    render(<Dispatch_table/>)
    expect(screen.getByRole(''))

})

})


