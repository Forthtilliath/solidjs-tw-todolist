import { produce } from "solid-js/store";
import { todos as data } from "./data";
import { createStorage } from "../utils/hooks/createStorage";

const [todos, setTodos] = createStorage(data, "todo");

function addTodo(title: Todo["title"]) {
  setTodos(
    produce((todos) => todos.push({ title, id: Date.now(), completed: false }))
  );
}

function removeTodo(todo: Todo) {
  setTodos(todos.filter((t) => t.id !== todo.id));
}

function toggleTodo(todo: Todo) {
  setTodos(
    (t) => t.id === todo.id,
    "completed",
    (completed) => !completed
  );
}

export { todos };
export const todoActions = { addTodo, removeTodo, toggleTodo };
