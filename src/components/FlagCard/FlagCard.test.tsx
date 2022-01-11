import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import FlagCard from "./FlagCard"
describe("FlagCard Tests", () => {
    test("The props are rendering",() => {
        const component = render(
        <MemoryRouter>
            <FlagCard countryName={"Argentina"} population={2} region={"America"} image={"a"} />
        </MemoryRouter>)
            
        component.getByText("Argentina")
        component.getByText("Population: 2")
        component.getByText("Region: America")

    })
})