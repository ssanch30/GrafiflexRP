import React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const Mutate = () => {
  let input;

  return (
    <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default Mutate