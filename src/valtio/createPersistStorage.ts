export function createPersistStorage() {
  const isServer = typeof window === 'undefined'

  // Returns noop (dummy) storage.
  if (isServer) {
    return {
      getItem() {
        return null
      },
      setItem() {
        return
      },
      removeItem() {
        return
      },
      getAllKeys() {
        return []
      },
    }
  }

  return {
    getItem: (name: string) => window.localStorage.getItem(name),
    setItem: (name: string, value: string) =>
      window.localStorage.setItem(name, value),
    removeItem: (name: string) => window.localStorage.removeItem(name),
    getAllKeys: () => Object.keys(window.localStorage),
  }
}
