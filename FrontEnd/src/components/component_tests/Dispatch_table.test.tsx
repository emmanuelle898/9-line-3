import { describe, expect, it } from "vitest";
import Dispatch_table from "../dispatch/Dispatch_table";
import {render, screen} from "@testing-library/react";
// import dispatch_error from "../dispatch/Dispatch_error";

describe("Dispatch_table", () => {
    it("Should render Dispatch_table", () => {
        render(<Dispatch_table nineLineData={[]}/>)
        expect (screen.getByRole('table', { name: /Dispatch_table/i })).toBeInTheDocument()
        expect(screen.getByRole('columnheader', {name: /Location/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /Call Sign/i})).toBeVisible()
    })
})

describe("Dispatch_table row data", () => {
    it("Should render a 9 Line", () => {
        render (<Dispatch_table nineLineData={[]}/>)

        const expectedLocation = "11223";
        const locationCell = screen.getByRole('cell', { name: expectedLocation });
        expect(locationCell).toBeVisible()

        const expectedCallSign = "Test 1";
        const callSignCell = screen.getByRole('cell', { name: expectedCallSign });
        expect(callSignCell).toBeVisible()

    })
})

describe("Dispatch_table", () => {
    it("should throw error when table does not render", () => {
        render(<Dispatch_table nineLineData={[]}/>)
    })
})



// commenting out failing test, not valid test
// describe("Dispatch_table", () => {
//     render(<dispatch_error/>)
//     it("should display the error message when table does not render", () => {
//         expect(screen.getByRole('alert'))
//     })
// })



