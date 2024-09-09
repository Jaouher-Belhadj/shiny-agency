import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'

const CardLabel = styled.span`
   color: #5843e4;
   font-size: 22px;
   font-weight: bold;
   align-self: flex-start;
   padding: 14px;
`
const CardImage = styled.img`
   height: 120px;
   width: 120px;
   border-radius: 50%;
`

const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 15px;
   background-color: ${colors.backgroundLight};
   border-radius: 30px;
   width: 350px;
   transition: 200ms;
   &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px #e2e3e9;
   }

   gap: inherit;
   align-items: center;
   justify-content: center;
`

function Card({ label = '', title = '', picture = DefaultPicture }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : ''

    return (
        <CardWrapper onClick={() => setIsFavorite(!isFavorite)} >
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelancer" />
            <span>{star} {title} {star}</span>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

export default Card