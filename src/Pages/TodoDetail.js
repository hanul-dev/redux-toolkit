import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';
import { Card, Button } from '../Style/styles';

const TodoDetail = () => {
  const navigate = useNavigate();
  const {selected} = useSelector(state => state.todos)
  console.log(selected);
  return (
    <>
      <Button  bgColor={"rgba(111, 73, 211)"} onClick={() => navigate(-1)}>Back</Button>
      <Card>
        <div>
        ID: {selected.id}
        </div>
        <div>
        CONTENT: {selected.content}
        </div>
      </Card>
    </>
  );
};

export default TodoDetail;