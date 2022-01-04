import React from "react"
import { render } from "@testing-library/react"
import CountryFinder from "./SearchImput"

describe("CountryFinder Test",() => {
    const CountryFinderProps = {
        placeHolder: "Search for a country",
        defaultPlaceHolder: "type something..."
    }
     
    test('Placeholder text', () => {
        const component = render(<CountryFinder placeHolder={CountryFinderProps.placeHolder}/>)
        component.getByPlaceholderText(CountryFinderProps.placeHolder)
    })
    test('without placeholder param',() => {
        const component = render(<CountryFinder />)
        component.getByPlaceholderText(CountryFinderProps.defaultPlaceHolder)
    })



})