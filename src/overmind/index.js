import {
    createActionsHook,
    createEffectsHook,
    createReactionHook, createStateHook
} from 'overmind-react'
import { merge, namespaced } from 'overmind/config'

//Overmind Top-level 
import * as actions from "./actions"
import * as effects from "./effects"
import { state } from "./state"

//Overmind Branches
import * as tickers from "./tickers"
import * as user from "./user"

export const config = merge(
    {
        state,
        actions,
        effects
    },
    namespaced(
        {
            user,
            tickers,
        }
    )
)

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()