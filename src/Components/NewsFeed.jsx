import { Typography } from "@mui/material";
import { NewsArticle } from "./NewsArticle";
import { LoadingArticle } from "./LoadingArticle";

export function NewsFeed(props) {
  const { articles, isLoading } = props;

  if (!isLoading && !articles.length) {
    return (
      <Typography
        sx={{
          align: "center",
          variant: "h5",
          color: "text.secondary",
          marginTop: 4,
        }}
      >
        No Articles Found.
      </Typography>
    );
  }

  return (
    <div>
      {isLoading
        ? [...Array(5)].map((_, index) => <LoadingArticle key={index} />)
        : articles.map((article) => (
            <NewsArticle key={JSON.stringify(article)} {...article} />
          ))}
    </div>
  );
}
