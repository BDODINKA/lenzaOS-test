import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { RootStateType } from '../app/store'

import { ActionsType } from '../interface/action'

export type AppDispatch = ThunkDispatch<RootStateType, undefined, ActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateType,
    unknown,
    ActionsType
    >