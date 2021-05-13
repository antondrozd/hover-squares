import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Grid from '../grid/grid.components'
import { fetchGameModes } from '../../redux/actions'

const GameField = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGameModes())
  }, [dispatch])

  return (
    <>
      <>select and start</>
      <Grid />
    </>
  )
}

export default GameField
