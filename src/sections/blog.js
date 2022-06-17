/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Masonry from "react-masonry-component";
import SectionHeading from "components/section-heading";
import ArticleCard from "components/cards/article-card";

const masonryOptions = { originTop: true };

const Blog = () => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
    }
  `);

  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Latest newsfeed"
          title="Popular blog post we updated"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {allStrapiArticle.nodes?.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, 9, null, 13],
    pb: [8, null, null, 9, null, 17],
    position: "relative",
  },
  heading: {
    mb: [6, null, null, 9],
  },
};
