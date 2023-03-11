import { ChatActionsType } from '../app/chatReducer'
import {AppActionsType} from "../app/appReducer";


export type ActionsType = AppActionsType | ChatActionsType
