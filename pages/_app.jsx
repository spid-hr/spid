import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Article from "../components/Article";
import Feature from "../components/Feature";
import FeaturedPosts from "../components/FeaturedPosts";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Articles from "../components/Articles";
import Teaser from "../components/Teaser";
import Text from "../components/Text";

const MY_SECRET_TOKEN = process.env.MY_SECRET_TOKEN;

const components = {
  feature: Feature,
  "featured-posts": FeaturedPosts,
  grid: Grid,
  page: Page,
  post: Article,
  posts: Articles,
  teaser: Teaser,
  text: Text,
};

storyblokInit({
  accessToken: MY_SECRET_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
