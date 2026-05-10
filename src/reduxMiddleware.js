export const promiseMiddleware = () => (next) => (action) => {
  if (action && typeof action.then === 'function') {
    return action.then(
      (result) => next(result),
      (error) => next({ ...action, payload: error, error: true })
    );
  }
  
  if (action && action.payload && typeof action.payload.then === 'function') {
    action.payload.then(
      (result) => next({ ...action, payload: result }),
      (error) => next({ ...action, payload: error, error: true })
    );
    return;
  }
  
  return next(action);
};