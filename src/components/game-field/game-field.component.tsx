import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModeSelect from '../mode-select/mode-select.component'
import Grid from '../grid/grid.components'
import {
  selectError,
  selectIsLoading,
  selectIsStarted,
} from '../../redux/selectors'
import { fetchModes, toggleStart } from '../../redux/actions'

const GameField = () => {
  const isStarted = useSelector(selectIsStarted)
  const error = useSelector(selectError)
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchModes())
  }, [dispatch])

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : !error ? (
        <>
          <ModeSelect />
          <button onClick={() => dispatch(toggleStart())}>
            {!isStarted ? 'Start' : 'Stop'}
          </button>
          <Grid />
        </>
      ) : (
        <>Error: {error.message}</>
      )}
    </>
  )
}

export default GameField
