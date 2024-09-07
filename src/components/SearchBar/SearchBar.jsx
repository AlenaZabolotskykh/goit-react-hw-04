import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };
  const notify = () => toast("Field cant be empty");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!query.trim()) {
      notify();
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid red",
            padding: "16px",
            color: "red",
            width: "500px",
            height: "100px",
            fontSize: "40px",
            fontWeight: "300px",
            margin: "0 auto",
            marginBottom: "20px",
          },
        }}
      />
    </header>
  );
}
