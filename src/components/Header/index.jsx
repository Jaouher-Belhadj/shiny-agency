import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
   padding: 10px 20px;
   margin: 10px;
   color: #8186a0;
   text-decoration: none;
   font-size: 18px;
   ${(props) => 
   props.$isFullLink && 
   `color: white; border-radius: 30px; background-color: ${colors.primary}; `}
`

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