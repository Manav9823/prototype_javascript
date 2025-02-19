# Problem Without useCallback(https://chatgpt.com/c/67b30b9a-2558-8009-9c75-870781ea9deb)



1. `When a parent component passes a function as a prop to a child, the function gets recreated on every render.This causes unnecessary re-renders of the child.`

# Example Without useCallback (Causes Unnecessary Re-renders)

import { useState } from "react";

function Child({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click me</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  // Function is re-created on every render
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Parent Increment</button>
    </div>
  );
}


👉 Issue: Even when clicking the parent button (which does not affect the child),
the child still re-renders because handleClick is recreated every render.


✅ Optimized with useCallback

import { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click me</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  // Memoized function, only recreated if `count` changes
  const handleClick = useCallback(() => setCount(prev => prev + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Parent Increment</button>
    </div>
  );
}

✅ Now, handleClick is only recreated if dependencies change,
preventing unnecessary re-renders of the child component.

2. 
