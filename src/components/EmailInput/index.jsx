import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`

function EmailInput({ theme }) {
  const [inputVal, setInputVal] = useState('')

  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Email address</StyledLabel>
      <StyledInput
        theme={theme}
        onChange={(e) => setInputVal(e.target.value)}
      />
      {/* {inputVal} */}
    </InputWrapper>
  )
}

export default EmailInput