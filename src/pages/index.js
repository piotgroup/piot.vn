import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import Feature1 from 'sections/feature1';
import BusinessProfit from 'sections/business-profit';
import Commitment from 'sections/commitment';
import Usercase from 'sections/usercase';
import ClientNetwork from 'sections/client-network';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';
import Testimonials from 'sections/testimonials';
import CallToAction from 'sections/call-to-action';
import SubscribeEmail from 'sections/subcribe-email';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Nền tảng tài trợ thương mại trực tuyến an toàn của PIOT cho phép các công ty làm việc với các nhà cung cấp và khách hàng để cải thiện dòng tiền bằng cách xác định thời gian và điều khoản tốt nhất để thanh toán hoặc nhận thanh toán"
          title="PIOT - Đồng hành cùng doanh nghiệp bạn"
        />
        <Banner />
        <WorkFlow />
        {/* <Feature1 /> */}
        <Feature />
        <Commitment />
        <Testimonials/>
        <BusinessProfit />
        <ClientNetwork />
        <Usercase />
        {/* <Support /> */}
        {/* <CallToAction /> */}
        <SubscribeEmail />
      </Layout>
    </ThemeProvider>
  );
}
