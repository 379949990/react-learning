import { useState, useEffect } from "react";

export default function useLocalStorage(key){
  const [name, setName] = useState(() => {
    const date = JSON.parse(window.localStorage.getItem(key));
    return date ? date.name : '';
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify({name: name, height: 1.86}))
  }, [name])

  return [name, setName]
}