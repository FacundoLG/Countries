import React from "react"
import { render } from "@testing-library/react"
import FlagCard from "./FlagCard"
describe("FlagCard Tests", () => {
    test("The props are rendering",() => {
        const component = render(<FlagCard countryName={"Argentina"} population={2} region={"America"} image={"a"} />)
        component.getByText("Argentina")
        component.getByText("Population: 2")
        component.getByText("Region: America")

    })
})