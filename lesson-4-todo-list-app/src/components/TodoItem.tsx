"use client"

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
  };
  
  export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    function handleToggleTodo(checked: boolean): void {
      toggleTodo(id, checked);
    }
  
    return (
      <li className="flex gap-1 center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => handleToggleTodo(e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </li>
    );
  }