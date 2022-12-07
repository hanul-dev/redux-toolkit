const divideList = (todos) => {
  const willDoneList = todos.filter(todo => todo.isDone === false);
  const doneList = todos.filter(todo => todo.isDone === true);
  return {willDoneList, doneList}
}

export default divideList;