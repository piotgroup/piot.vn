import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Feature from 'sections/feature';
import Feature1 from 'sections/feature1';
import BusinessProfit from 'sections/business-profit';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WorkFlow from 'sections/workflow';
import Support from 'sections/support';
import Testimonials from 'sections/testimonials';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Nền tảng tài trợ thương mại trực tuyến an toàn của PIOT cho phép các công ty làm việc với các nhà cung cấp và khách hàng của họ để cải thiện dòng tiền bằng cách xác định thời gian và điều khoản tốt nhất để thanh toán hoặc nhận thanh toán"
          title="PIOT - Đồng hành cùng doanh nghiệp bạn"
        />
        <Banner />
        <Feature1 />
        <BusinessProfit />
        <Knowledge />
        <Testimonials/>
        <Feature />
        <ClientFeedback />
        <WorkFlow />
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
