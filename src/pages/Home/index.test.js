import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { ThemeProvider } from "../../utils/context"
import Home from './'

describe('The Home component', () => {
    it('should render without crashing', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )

        expect(
            screen.getByRole('heading', {
                level: 1,
                text: "Identify your needs and we'll take care of the rest along with our talented professionals"
            }
            )
        ).toBeTruthy()
    })
})
