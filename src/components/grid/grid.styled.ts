import styled from 'styled-components'

interface IStyledProps {
  gridSize: number
}

export const StyledGrid = styled.div<IStyledProps>`
  display: grid;
  grid-template: ${({ gridSize }) =>
    `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`};
  width: 420px;
  height: 420px;
  border: 1px solid #000;
`
