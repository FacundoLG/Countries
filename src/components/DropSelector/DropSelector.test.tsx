import React from "react"
import DropSelector from "./DropSelector"
import {render} from "@testing-library/react"
describe("Drop Selector Test", () => {
    test("Options exists", () => {
        const selector = render(<DropSelector SendOption={(str) => {}}  options={["Global","America","Asia"]}/>)
        selector.getByText("Asia")
        selector.getByText("Global")
        selector.getByText("America")
    })
})