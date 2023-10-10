import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { blogFetch } from "../axios/config";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get<Post[]>(
        "/posts"
      );
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p>carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
          </div>
        ))
      )}
    </div>
  );
};
