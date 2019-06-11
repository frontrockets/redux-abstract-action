const POSTFIX_INIT = 'INIT'
const POSTFIX_FAILURE = 'FAILURE'
const POSTFIX_SUCCESS = 'SUCCESS'

function buildActionType(actionName, postfix) {
  return `${actionName}/${postfix}`
}

function buildPayloadWith(method, args) {
  if (method) {
    return method(...args)
  }

  return {}
}

function buildAction(type, payloadBuilder) {
  return (...args) => ({
    type,
    payload: buildPayloadWith(payloadBuilder, args),
  })
}

function createAbstractAction(actionName, params = {}) {
  const INIT = buildActionType(actionName, POSTFIX_INIT)
  const FAILURE = buildActionType(actionName, POSTFIX_FAILURE)
  const SUCCESS = buildActionType(actionName, POSTFIX_SUCCESS)

  return {
    INIT,
    FAILURE,
    SUCCESS,

    init: buildAction(INIT, params.init),
    failure: buildAction(FAILURE, params.failure),
    success: buildAction(SUCCESS, params.success),
  }
}

module.exports = createAbstractAction
