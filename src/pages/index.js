/** @jsx jsx */
import { jsx } from "theme-ui";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Subscribe from "sections/subscribe";
import Services from "sections/services";
import VideoIntro from "sections/video-intro";
import WorldMap from "sections/world-map";
import Milestone from "sections/milestone";
import Blog from "sections/blog";

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Công ty tài chính PIOT"
        description="Công ty cung cấp các dịch vụ tài trợ thương mại cho doanh nghiệp."
      />
      <Banner />
      <Services />
      <VideoIntro />
      <WorldMap />
      <Milestone />
      <Blog />
      <Subscribe />
    </Layout>
  );
}
