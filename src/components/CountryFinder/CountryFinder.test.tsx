import React from "react"
import { render } from "@testing-library/react"
import CountryFinder from "./CountryFinder"

test('render', () => {
    const component = render(<CountryFinder placeHolder="Search for a country"/>)
    console.log(component)
})