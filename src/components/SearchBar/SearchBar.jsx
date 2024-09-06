import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query.trim()) {
      return alert("cant be empty"); //тут має бути тост
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
