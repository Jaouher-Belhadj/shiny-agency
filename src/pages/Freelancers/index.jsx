// import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import { useEffect, useState } from 'react';
import { Loader } from '../../utils/style/Atoms';

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
  color: #2f2e41;
`

const StyledSubTitle = styled.h3`
  width: 100%;
  text-align: center;
  line-height: 2;
  color: ${colors.secondary};
  margin-bottom: 60px;
`

function Freelancers() {
  const [freelancerProfiles, setFreelancerProfiles] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    async function fetchFreelancers() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelancers`)        
        const { freelancersList } = await response.json()
        setFreelancerProfiles(freelancersList)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelancers()
  }, [])

  return (
    <div>
      <StyledTitle>Find your service provider</StyledTitle>
      <StyledSubTitle>Here at Shiny we bring together the best profiles for you</StyledSubTitle>
      <ProfilesWrapper>
        <CardsContainer>
          {error && <span>Something went wrong</span>}
          {isDataLoading ?
            <Loader />
            :
            freelancerProfiles.map((freelancer, idx) => (
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