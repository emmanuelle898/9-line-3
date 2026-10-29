import { describe, expect, it } from "vitest";
import Dispatch_table from "../dispatch/Dispatch_table";
import {render, screen} from "@testing-library/react";
import dispatch_error from "../dispatch/dispatch_error";

describe("Dispatch_table", () => {
    it("Should render Dispatch_table", () => {
        render(<Dispatch_table/>)
        expect (screen.getByRole('table', { name: /Dispatch_table/i })).toBeInTheDocument()
        expect(screen.getByRole('columnheader', {name: /Location/i})).toBeVisible()
    })
})

describe("Dispatch_table", () => {
    it("Should render location by id", () => {
        render (<Dispatch_table/>)

        const expectedId = 1;
        const idCell = screen.getByRole('cell', { name: new RegExp(`^${expectedId}$`) });
        expect(idCell).toBeVisible()
    })
})

describe("Dispatch_table", () => {
    it("should throw error when table does not render", () => {
        render(<Dispatch_table/>)
    })
})

describe("Dispatch_table", () => {
    render(<dispatch_error/>)
    it("should display the error message when table does not render", () => {
        expect(screen.getByRole('alert'))
    })
})



