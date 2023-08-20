import { proxy, subscribe } from 'valtio'

import { createPersistStorage } from './createPersistStorage'

interface Params<T extends object> {
  key: string
  initialState: T
  isPersist?: boolean
}

export default function createStateProxy<T extends object>({
  key,
  initialState,
  isPersist = false,
}: Params<T>) {
  if (isPersist) {
    const storage = createPersistStorage()

    const persistedData = storage.getItem(key)

    const state = proxy<T>(
      persistedData ? JSON.parse(persistedData) : initialState
    )

    subscribe(state, () => {
      storage.setItem(key, JSON.stringify(state))
    })

    return state
  }

  return proxy<T>(initialState)
}
