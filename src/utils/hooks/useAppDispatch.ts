import { useDispatch } from 'react-redux'

import { AppDispatch } from '../appThunk'

export const useAppDispatch = () => useDispatch<AppDispatch>()