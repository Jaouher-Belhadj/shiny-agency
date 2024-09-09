import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

const removeVariationSelectors = str => str.replace(/\uFE0F/g, '');

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })

    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        const expected = 'Switch mode : ☀️️'
        
        expect(removeVariationSelectors(nightModeButton.textContent)).toBe(removeVariationSelectors(expected))
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Switch mode : 🌙')

    })
})
