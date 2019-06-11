_This is part of @datarockets infrastructure_

## Install

```
yarn add @frontrockets/redux-abstract-action
```

## Usage

```jsx
import createAbstractAction from '@frontrockets/redux-abstract-action'

const fetch = createAbstractAction('Namespace/fetch', {
  // Here we specify functions which will generate a payload according to
  // arguments (we can specify generators for `init`, `success` and `failure`
  // actions)
  init: id => ({ id }),
  success: data => data,
})

fetch.init(10)
//- { type: 'Namespace/fetch/INIT', payload: { id: 10 } }

fetch.success({ name: 'Eugene' })
//- { type: 'Namespace/fetch/SUCCESS', payload: { name: 'Eugene' } }

fetch.failure()
//- { type: 'Namespace/fetch/FAILURE', payload: {} }

fetch.INIT
//- 'Namespace/fetch/INIT'

fetch.SUCCESS
//- 'Namespace/fetch/SUCCESS'

fetch.FAILURE
//- 'Namespace/fetch/FAILURE'
```
