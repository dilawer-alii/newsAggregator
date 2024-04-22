import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);

  const [filteredArticles, setFilteredArticles] = useState([]);

  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    if (props.apisource == "16c5212158ba49f2b5868e6e61bdcdcd") {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } else {
      props.setProgress(10);
      const url = `https://content.guardianapis.com/search?q=${props.sectionName}&country=${props.country}&api-key=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);

      setArticles(parsedData.response.results);
      setTotalResults(parsedData.response.total);
      setLoading(false);
      props.setProgress(100);
    }
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.sectionName
    )} - NewsAggregator`;
    updateNews();
  }, [props.apisource]);

  useEffect(() => {
    setFilteredArticles(
      articles?.filter((item) => {
        return (
          item.title?.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
          item.description
            ?.toLowerCase()
            .includes(props.searchQuery.toLowerCase()) ||
          item.sectionName
            ?.toLowerCase()
            .includes(props.searchQuery.toLowerCase()) ||
          item.type?.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
          item.webTitle
            ?.toLowerCase()
            .includes(props.searchQuery.toLowerCase()) ||
          item.sectionId
            ?.toLowerCase()
            .includes(props.searchQuery.toLowerCase()) ||
          item.pillarName
            ?.toLowerCase()
            .includes(props.searchQuery.toLowerCase())
        );
      })
    );
  }, [articles, props.searchQuery]);
  const fetchMoreData = async () => {
    try {
      if (props.apisource == "16c5212158ba49f2b5868e6e61bdcdcd") {
        const url = `https://newsapi.org/v2/top-headlines?category=${
          props.category
        }&apiKey=${props.apiKey}&country=${props.country}&page=${
          page + 1
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
      } else {
        const url = `https://content.guardianapis.com/search?q=${
          props.sectionName
        }&api-key=${props.apiKey}&country=${props.country}&page=${
          page + 1
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.response.results));
        setTotalResults(parsedData.response.total);
      }
    } catch (error) {
      alert(
        "Free api plane reached maximum limit please update to a paid plan"
      );
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "15px 0px" }}>
        News Aggregator - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {filteredArticles?.map((element) => {
              return (
                <div
                  className="col-md-4"
                  key={element.url ? element.url : element.webUrl}
                >
                  <NewsItem
                    title={element.title ? element.title : element.type}
                    description={
                      element.description
                        ? element.description
                        : element.webTitle
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url ? element.url : element.webUrl}
                    author={element.author}
                    date={
                      element.publishedAt
                        ? element.publishedAt
                        : element.webPublicationDate
                    }
                    source={
                      element.source?.name
                        ? element.source?.name
                        : element.pillarId
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
