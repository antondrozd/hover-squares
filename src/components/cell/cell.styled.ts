import styled from 'styled-components'

interface IStyledCellProps {
  active: boolean
}

export const StyledCell = styled.span<IStyledCellProps>`
  border: 1px solid #000;
  background-color: ${({ active }) => (active ? 'blueviolet' : 'transparent')};
  transition: background-color 0.1s;
`
