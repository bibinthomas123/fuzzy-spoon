import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function SeoTitle(props) {
  const location = useLocation();
  const site = "https://bibinthomas.me";
  const canonicalURL = site + location.pathname;

  const { title, description, keywords, image } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
  
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={canonicalURL} />
    </Helmet>
  );
}

export default SeoTitle;
