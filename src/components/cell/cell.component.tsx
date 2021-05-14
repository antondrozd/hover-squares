import { useSelector, useDispatch } from 'react-redux'

import { toggleCellActive } from '../../redux/actions'
import { selectIsStarted } from '../../redux/selectors'

import { ICell } from '../../interfaces/common.interfaces'

import { StyledCell } from './cell.styled'

interface IProps extends ICell {}

const Cell = ({ row, col, active }: IProps) => {
  const isStarted = useSelector(selectIsStarted)
  const dispatch = useDispatch()

  const handleHover = () => {
    if (isStarted) {
      dispatch(toggleCellActive(row, col))
    }
  }

  return <StyledCell active={active} onMouseEnter={handleHover} />
}

export default Cell
