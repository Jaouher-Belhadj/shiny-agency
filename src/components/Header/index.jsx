import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'

const StyledNav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px;
`

function Header() {
   return (
      <StyledNav>
         <img src={darkLogo} alt='light-logo' height={"80px"} />
         <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/freelancers">Profiles</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Take the survey</StyledLink>
         </div>
      </StyledNav>
   )
}

export default Header