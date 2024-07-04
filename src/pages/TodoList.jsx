import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const generateTodo = () => {
    // Placeholder AI function to generate a new todo item
    const aiGeneratedTodo = "AI-generated todo item";
    setTodos([...todos, { text: aiGeneratedTodo, completed: false }]);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="bg-opacity-80 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>AI-Driven Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a new todo"
              className="bg-secondary text-secondary-foreground"
            />
            <Button onClick={addTodo}>Add Todo</Button>
            <Button onClick={generateTodo} variant="secondary">
              Generate Todo
            </Button>
          </div>
          <div>
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-2 p-2 border rounded bg-secondary text-secondary-foreground"
              >
                <div className="flex items-center">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(index)}
                    className="text-secondary-foreground"
                  />
                  <span
                    className={`ml-2 ${todo.completed ? "line-through" : ""}`}
                  >
                    {todo.text}
                  </span>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteTodo(index)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;