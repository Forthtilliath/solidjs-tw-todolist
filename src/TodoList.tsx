import { For } from "solid-js";
import { todos, todoActions } from "./store/todos";

export function TodoList() {
  let inputRef: HTMLInputElement;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    todoActions.addTodo(inputRef.value);
    inputRef.value = "";
  };

  return (
    <div class="h-screen w-full flex items-center justify-center bg-blue-200 font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-[40rem]">
        <div class="mb-4">
          <h1 class="text-5xl font-bold">Todo List</h1>
          <form onSubmit={handleSubmit}>
            <div class="flex mt-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 focus:outline-blue-400"
                placeholder="Add Todo"
                ref={inputRef!}
              />
              <button
                type="submit"
                class="flex-no-shrink p-2 border-2 rounded text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div>
          <For each={todos}>{(todo) => <TodoItem todo={todo} />}</For>
        </div>
      </div>
    </div>
  );
}

type TodoItemProps = {
  todo: Todo;
};

function TodoItem(props: TodoItemProps) {
  return (
    <div class="flex mb-4 items-center">
      <p
        class="w-full"
        classList={{
          "line-through text-green-500": props.todo.completed,
          "text-grey-darkest": !props.todo.completed,
        }}
      >
        {props.todo.title}
      </p>
      <button
        type="button"
        class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white w-32 whitespace-nowrap"
        classList={{
          "text-gray-300 border-gray-300 hover:bg-gray-300":
            !props.todo.completed,
          "text-green-500 border-green-500 hover:bg-green-500":
            props.todo.completed,
        }}
        onClick={() => todoActions.toggleTodo(props.todo)}
      >
        {props.todo.completed ? "Done" : "Not Done"}
      </button>
      <button
        type="button"
        class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 w-32 whitespace-nowrap"
        onClick={() => todoActions.removeTodo(props.todo)}
      >
        Remove
      </button>
    </div>
  );
}
