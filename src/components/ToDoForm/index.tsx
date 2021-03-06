import React, { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { StyledError, StyledInput, StyledForm } from "./styles";
import { ITodo } from "interfaces";
import onSubmit from "./on-submit";
import { AuthContext } from "components/CognitoAuth";

interface IProps {
  todo: ITodo;
  setIsEditing: (val: boolean) => void;
  setStateTodo: (val: ITodo) => void;
}

const ToDoForm: FC<IProps> = ({ todo, setIsEditing, setStateTodo }) => {
  const { jwt } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  const submitFn = handleSubmit((data) =>
    onSubmit(data, todo, setStateTodo, setIsEditing, jwt)
  );

  return (
    <StyledForm onSubmit={submitFn}>
      <StyledInput
        autoFocus
        name="title"
        placeholder="Your todo..."
        defaultValue={todo.title}
        onBlur={submitFn}
        ref={register}
      />
      <ErrorMessage as={StyledError} errors={errors} name="value" />
    </StyledForm>
  );
};

export default ToDoForm;
