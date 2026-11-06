import {ResponderPage} from "../pages/ResponderPage";
import {render,screen} from "@testing-library/react";

describe('ResponderPage', () => {

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





});