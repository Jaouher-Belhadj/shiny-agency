// import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';

const freelancerProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    // picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Frontend developer',
    // picture: DefaultPicture,
  },
  {
    name: 'Jean Bug',
    jobTitle: 'Fullstack Developer',
    // picture: DefaultPicture,
  },
]

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
  return (
    <div>
      <StyledTitle>Find your service provider</StyledTitle>
      <StyledSubTitle>Here at Shiny we bring together the best profiles for you</StyledSubTitle>
      <ProfilesWrapper>
        <CardsContainer>
          {freelancerProfiles.map((freelancer, idx) => (
            <Card
              key={idx}
              label={freelancer.jobTitle}
              title={freelancer.name}
            />
          ))}
        </CardsContainer>
      </ProfilesWrapper>
    </div>
  );
}

export default Freelancers