/** @jsx jsx */
import { jsx } from "theme-ui";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Subscribe from "sections/subscribe";
import VideoIntro from "sections/video-intro";
import Blog from "sections/blog";

import "react-multi-carousel/lib/styles.css";

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Công ty tài chính PIOT"
        description="Công ty cung cấp các dịch vụ tài trợ thương mại cho doanh nghiệp."
      />
      <Banner />
      <VideoIntro />
      <Blog />
      <Subscribe />
    </Layout>
  );
}
