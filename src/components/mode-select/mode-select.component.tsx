import { useDispatch, useSelector } from 'react-redux'
import Select, { ValueType } from 'react-select'

import { selectModes } from '../../redux/selectors'
import { setMode } from '../../redux/actions'

interface IOption {
  value: string
  label: string
}

const ModeSelect = () => {
  const modes = useSelector(selectModes)

  const dispatch = useDispatch()

  const handleModeChange = (value: ValueType<IOption, false>) => {
    const selectedMode = value!.value

    dispatch(setMode(selectedMode))
  }

  const options: IOption[] = modes
    ? Object.keys(modes).map((mode) => ({
        value: mode,
        label: mode.replace('Mode', ''),
      }))
    : []

  return (
    <Select
      isSearchable={false}
      options={options}
      onChange={handleModeChange}
    />
  )
}

export default ModeSelect
