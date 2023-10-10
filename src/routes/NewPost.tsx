import "./NewPost.css";

import { blogFetch } from "../axios/config";
import { useState } from "react";

export const NewPost = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const cretePost = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const post = {
        title,
        body,
        userId: 1,
      };

      await blogFetch.post("/posts", {
        body: post,
      });
      console.log("Criado com Sucesso")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => cretePost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o Título"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o Conteúdo"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Criar Post
        </button>
      </form>
    </div>
  );
};
