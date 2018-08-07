const changedisplayAction = data => {
  console.log('action');
  return {
    type: 'CHANGE_STR_ACTION',
    payload: data,
  };
};
export { changedisplayAction };
