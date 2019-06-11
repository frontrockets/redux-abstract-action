const createAbstractAction = require('..')

describe('returns an object', () => {
  const properties = [
    ['init', 'INIT'],
    ['failure', 'FAILURE'],
    ['success', 'SUCCESS'],
  ]

  properties.forEach((property) => {
    const methodRefName = property[0]
    const typeRefName = property[1]

    describe(`where "${methodRefName}" property`, () => {
      it('returns object', () => {
        const action = createAbstractAction('Namespace/ActionName')

        expect(action[methodRefName]()).toBeInstanceOf(Object)
      })

      it('returns correct type', () => {
        const action = createAbstractAction('Namespace/ActionName')

        expect(action[methodRefName]()).toHaveProperty('type', `Namespace/ActionName/${typeRefName}`)
      })

      it('returns type matched with exported', () => {
        const action = createAbstractAction('Namespace/ActionName')
        expect(action[methodRefName]()).toHaveProperty('type', action[typeRefName])
      })

      it('return empty payload by default', () => {
        const action = createAbstractAction('Namespace/ActionName')

        expect(action[methodRefName]()).toHaveProperty('payload', {})
      })

      it('returns correct payload', () => {
        const action = createAbstractAction('Namespace/ActionName', {
          [methodRefName]: (first, ...rest) => ({ first, rest }),
        })
        const first = '$$first'
        const second = '$$second'
        const third = '$$third'

        expect(action[methodRefName](first, second, third)).toHaveProperty('payload', {
          first,
          rest: [second, third],
        })
      })
    })
  })
})
