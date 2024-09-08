import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'

const FooterContainer = styled.footer`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding-top: 30px;
   padding-bottom: 10px;
`

const NightModeButton = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   color: ${colors.secondary};
`

function Footer() {
    const { toggleTheme, theme } = useTheme()

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()} >
                Switch mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer