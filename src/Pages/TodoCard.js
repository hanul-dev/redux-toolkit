import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { Button, TodoItem, WillBeDone } from "../Style/styles";
import { delTodo, switchTodo, detailTodo } from '../redux/modules/todosSlice';
const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <WillBeDone>
      <TodoItem>{todo.content}</TodoItem>
      <Link to={`/${todo.id}`}>
        {/* button을 컴포넌트로 */}
        <Button
          onClick={() => dispatch(detailTodo(todo.id))}
          bgColor={"rgba(247, 203, 79)"}
        >
          Detail
        </Button>
      </Link>
      {todo.isDone ? (
        <Button
          onClick={() => dispatch(switchTodo(todo.id))}
          bgColor={"rgba(98, 115, 124)"}
        >
          Revert
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(switchTodo(todo.id))}
          bgColor={"rgba(98, 115, 124)"}
        >
          Done
        </Button>
      )}
      <Button
        onClick={() => dispatch(delTodo(todo.id))}
        bgColor={"rgba(255, 69, 58)"}
      >
        Delete
      </Button>
    </WillBeDone>
  );
};

export default TodoCard;