import React, { useState } from "react";

function App() {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    image: "",
    category: "news",
    isPublished: false,
  });

  const [articles, setArticles] = useState([]);

  // Gestisce i cambiamenti del form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setArticle({
      ...article,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Aggiunge un articolo alla lista
  const addArticle = (e) => {
    e.preventDefault();
    if (article.title.trim() !== "" && article.content.trim() !== "") {
      setArticles([...articles, article]); // Aggiunge l'articolo alla lista
      setArticle({
        title: "",
        content: "",
        image: "",
        category: "news",
        isPublished: false,
      }); // Resetta il form
    }
  };

  // Rimuove un articolo dalla lista
  const removeArticle = (indexToRemove) => {
    setArticles(articles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <form onSubmit={addArticle}>
        <input
          type="text"
          name="title"
          value={article.title}
          onChange={handleChange}
          placeholder="Titolo"
        />
        <textarea
          name="content"
          value={article.content}
          onChange={handleChange}
          placeholder="Contenuto"
        />
        <input
          type="text"
          name="image"
          value={article.image}
          onChange={handleChange}
          placeholder="URL Immagine"
        />
        <select
          name="category"
          value={article.category}
          onChange={handleChange}
        >
          <option value="news">News</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <label>
          Pubblicare?
          <input
            type="checkbox"
            name="isPublished"
            checked={article.isPublished}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Aggiungi Articolo</button>
      </form>

      {/* Lista degli articoli */}
      <ul>
        {articles.map((art, index) => (
          <li key={index}>
            <h3>{art.title}</h3>
            <p>{art.content}</p>
            {art.image && <img src={art.image} alt={art.title} style={{ width: "100px" }} />}
            <p>Categoria: {art.category}</p>
            <p>Pubblicato: {art.isPublished ? "Sì" : "No"}</p>
            <button onClick={() => removeArticle(index)}>
              <i className="fa-solid fa-trash"></i> Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

