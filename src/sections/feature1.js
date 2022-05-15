/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Nhà cung cấp',
    title: 'Dành cho Nhà cung cấp',
    text:
      'Được thanh toán sớm hơn khi bạn cần vốn lưu động - hoặc thanh toán vào thời điểm thích hợp để tối ưu hóa dòng tiền mặt.',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Doanh nghiệp',
    title: 'Dành cho Doanh nghiệp',
    text:
      'Tăng cường bảng cân đối, củng cố chuỗi cung ứng của doanh nghiệp.',
  },
];

export default function Feature1() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature1">
      <Container>
        <SectionHeader
          title="THUẬN TIỆN, HIỆU QUẢ VỀ CHI PHÍ"
          // description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      // 'repeat(3,1fr)',
    ],
  },
};
