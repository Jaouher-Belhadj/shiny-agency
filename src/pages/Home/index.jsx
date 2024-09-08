import styled from 'styled-components'
import homeIllustration from '../../assets/home-illustration.svg'
import { StyledLink } from '../../utils/style/Atoms'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f9f9fc;
  margin: 25px;
  padding: 40px 100px;
  max-width: 1200px;
`

const StyledH1 = styled.h1`
  color: #2f2e41;
  line-height: 50px;
  padding-bottom: 20px;
  max-width: 420px;
`

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const StyledImg = styled.img`
  padding: 60px 100px;
`

function Home() {
  return <HomeWrapper>
    <StyledDiv>
      <StyledDiv2>
        <StyledH1>Identify your needs and we'll take care of the rest along with our talented professionals </StyledH1>
        <StyledLink to="/survey/1" $isFullLink style={{textAlign: "center", maxWidth: "250px"}}>Take the survey</StyledLink>
      </StyledDiv2>
      <StyledImg src={homeIllustration} alt='home-illustration' />
    </StyledDiv>
  </HomeWrapper>
}

export default Home
