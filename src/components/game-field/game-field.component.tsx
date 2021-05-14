import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModeSelect from '../mode-select/mode-select.component'
import Grid from '../grid/grid.component'
import {
  selectError,
  selectIsLoading,
  selectIsStarted,
  selectIsModeSelected,
} from '../../redux/selectors'
import { fetchModes, toggleStart } from '../../redux/actions'

import { Header, Button, StyledSelect } from './game-field.styled'

const GameField = () => {
  const isStarted = useSelector(selectIsStarted)
  const isModeSelected = useSelector(selectIsModeSelected)
  const error = useSelector(selectError)
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchModes())
  }, [dispatch])

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : !error ? (
        <>
          <Header>
            <StyledSelect>
              <ModeSelect />
            </StyledSelect>
            <Button
              primary={isModeSelected && !isStarted}
              danger={isModeSelected && isStarted}
              disabled={!isModeSelected}
              onClick={() => dispatch(toggleStart())}
            >
              {!isStarted ? 'Start' : 'Stop'}
            </Button>
          </Header>
          <Grid />
        </>
      ) : (
        <>Error: {error.message}</>
      )}
    </div>
  )
}

export default GameField
