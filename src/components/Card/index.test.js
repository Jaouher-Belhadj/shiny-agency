import Card from './'
import { fireEvent, render, screen } from '@testing-library/react'

describe('The Card component', () => {
    it('Should render without crash', async () => {
        render(
            <Card
                picture='https://www.google.com'
            />
        )
    })

    it('Should render the picture passed as prop', async () => {
        render(
            <Card
                picture='https://www.google.com'
            />
        )
        const img = screen.getByRole('img')
        expect(img.src).toBe('https://www.google.com/')
    })

    it('Should render the title passed as prop', async () => {
        render(
            <Card
                picture='https://www.google.com'
                title='The title'
            />
        )
        const title = screen.getByText(/title/i)
        expect(title.textContent).toBe(' The title ')
    })

    it('should change the title when the profile is selected', async () => {
        render(
            <Card
                picture='https://www.google.com'
                title='The title'
            />
        )
        const title = screen.getByText(/title/i)
        fireEvent.click(title)
        expect(title.textContent).toBe('⭐️ The title ⭐️')
    })
})
