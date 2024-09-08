import styled from 'styled-components';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { useFetch, useTheme } from '../../utils/hooks';

const ProfilesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`

const CardsContainer = styled.div`
   display: grid;
   gap: 30px;
   grid-template-rows: 350px 350px;
   grid-template-columns: repeat(2, 1fr);
   margin: auto;
`

const StyledTitle = styled.h1`
  width: 100%;
  text-align: center;
  line-height: 2;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const StyledSubTitle = styled.h3`
  width: 100%;
  text-align: center;
  line-height: 2;
  color: ${colors.secondary};
  margin-bottom: 60px;
`

function Freelancers() {
  const { theme } = useTheme()
  // Ensure that the path in the frontend matches the corresponding path in the backend
  const { isLoading, data, error } = useFetch('http://localhost:8000/freelancers')
  const { freelancersList } = data

  return (
    <div>
      <StyledTitle theme={theme}>Find your service provider</StyledTitle>
      <StyledSubTitle>Here at Shiny we bring together the best profiles for you</StyledSubTitle>
      <ProfilesWrapper>
        <CardsContainer>
          {error && <span>Something went wrong</span>}
          {isLoading ?
            <Loader />
            :
            freelancersList.map((freelancer, idx) => (
              <Card
                key={idx}
                label={freelancer.job}
                title={freelancer.name}
                picture={freelancer.picture}
              />
            ))
          }
        </CardsContainer>
      </ProfilesWrapper>
    </div>
  );
}

export default Freelancers