import { useSelector, useDispatch } from 'react-redux'

import { toggleCellActive } from '../../redux/actions'
import { selectIsStarted } from '../../redux/selectors'

import { ICell } from '../../interfaces/common.interfaces'

interface IProps extends ICell {}

const Cell = ({ row, col, active }: IProps) => {
  const isStarted = useSelector(selectIsStarted)
  const dispatch = useDispatch()

  const handleHover = () => {
    if (isStarted) {
      dispatch(toggleCellActive(row, col))
    }
  }

  return (
    <span
      style={{
        cursor: 'default',
        backgroundColor: active ? 'blue' : 'transparent',
      }}
      className="cell"
      onMouseEnter={handleHover}
    >
      Cell: {row} {col}
    </span>
  )
}

export default Cell
