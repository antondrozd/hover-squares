import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: stretch;
  margin-bottom: 15px;
`

export const StyledSelect = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`

interface IStyledButtonProps {
  primary?: boolean
  danger?: boolean
}

export const Button = styled.button<IStyledButtonProps>`
  min-width: 65px;
  padding: 10px 15px;
  border: none;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #ffffff;
  background-color: ${({ primary, danger, disabled }) =>
    (primary && 'green') || (danger && 'red') || (disabled && 'grey') || ''};
  text-align: center;
  transition: all 0.2s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`
