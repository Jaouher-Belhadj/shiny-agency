import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import EmailInput from '../EmailInput'

const FooterContainer = styled.footer`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 30px 0;
`

const NightModeButton = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   color: ${colors.secondary};
   padding-top: 20px;
`

function Footer() {
    const { toggleTheme, theme } = useTheme()

    return (
        <FooterContainer>
            <EmailInput theme={theme}/>
            <NightModeButton onClick={() => toggleTheme()} >
                Switch mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer