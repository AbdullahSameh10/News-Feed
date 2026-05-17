/* eslint-disable react-hooks/refs */
import { useState } from "react";
import { NewsFeed, NewsHeader } from "./Components";
import { useEffect } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useCallback } from "react";

const Footer = styled("div")(() => ({
  padding: "2rem 0",
  display: "flex",
  justifyContent: "space-between",
}));

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const pageNumber = useRef(1);
  const query = useRef("");

  // API is limited now with the US news ONLY!!
  // API is limited now with 9 articles ONLY!!
  const fetchArticles = async (newCategory) => {
    console.log("Data Fetching...");
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${newCategory? newCategory : "general"}&q=${query.current}&page=${pageNumber.current}&pageSize=5&country=us&apiKey=${import.meta.env.VITE_NEWS_FEED_API_KEY}`,
    );
    const data = await response.json();
    if (data.status === "error") {
      throw new Error(data.message);
    }
    return data.articles.map((article) => {
      const { title, description, author, publishedAt, urlToImage, url } = article;
      return {
        title,
        description,
        author,
        publishedAt,
        image: urlToImage,
        url,
      };
    });
  };

  const fetchArticlesFunction = useCallback((newCategory) => {
    setIsLoading(true);
    setError(null);
    fetchArticles(newCategory)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const debouncedFetchArticles = debounce((category) => {
    fetchArticlesFunction(category);
  }, 1000);

  useEffect(() => {
    fetchArticlesFunction();
  }, [fetchArticlesFunction, ]);

  const handleSearchChange = (newQuery) => {
    query.current = newQuery;
    pageNumber.current = 1;
    debouncedFetchArticles(category);
  };

  const handlePreviousPage = () => {
    pageNumber.current -= 1;
    fetchArticlesFunction(category);
  };

  const handleNextPage = () => {
    pageNumber.current += 1;
    fetchArticlesFunction(category);
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
    pageNumber.current = 1;
    fetchArticlesFunction(event.target.value);
  };

  return (
    <>
      <NewsHeader onSearchChange={handleSearchChange} category={category} onCategoryChange={onCategoryChange} />
      {!error ? (
        <NewsFeed articles={articles} isLoading={isLoading} />
      ) : (
        <Typography color="error" variant="h6" align="center" sx={{ mt: 10, mb: 10 }}>
          Oops, Error Accured While Fetching Articles!
        </Typography>
      )}

      <Footer>
        <Button
          variant="outlined"
          onClick={handlePreviousPage}
          disabled={isLoading || pageNumber.current === 1}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={handleNextPage}
          disabled={isLoading || articles.length < 5}
        >
          Next
        </Button>
      </Footer>
    </>
  );
}

export default App;
