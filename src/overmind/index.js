import {
    createActionsHook,
    createEffectsHook,
    createReactionHook, createStateHook
} from 'overmind-react'
import { namespaced } from 'overmind/config'
import * as tickers from "./tickers"
import * as user from "./user"
export const config = namespaced(
    {
        user,
        tickers,
        isLoading: false,
        
    }
)

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()