import React from "react"
import "@testing-library/react"
import ThemeMode from "./ThemeMode"
import { render, screen } from "@testing-library/react"
describe("ThemeMode tests",() => {
    test("Sun Exist",() => {  
      localStorage.setItem("theme","light")
      const ThemeButton = render(<ThemeMode/>)
      const SunSVG = ThemeButton.getByTestId("sun")
      expect(SunSVG).toBeDefined()
    })
    test("Moon exist",() => {
        localStorage.setItem("theme","dark")
        const ThemeButon = render(<ThemeMode/>)
        const MoonSVG = ThemeButon.getByTestId("moon")
        expect(MoonSVG).toBeDefined()
    })
})