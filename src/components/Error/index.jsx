import styled from 'styled-components';
import error from '../../assets/404.svg';
import colors from '../../utils/style/colors';

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100vh;
    background-color: ${colors.backgroundLight};
    margin: 30px;
`

const StyledTitle = styled.h1`
    color: ${colors.secondary};
`

const StyledSubTitle = styled.h2`
    color: ${colors.secondary};
`
const ErrorIllustration = styled.img`
  max-width: 800px;
`

function Error() {
    return (
        <ErrorWrapper>
            <StyledTitle>Oops ...</StyledTitle>
            <ErrorIllustration src={error} />
            <StyledSubTitle>Something went wrong</StyledSubTitle>
        </ErrorWrapper>
    )
}

export default Error