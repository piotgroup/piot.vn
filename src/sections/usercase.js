/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import KnowledgeThumb from 'assets/images/knowledge-thumb.png';

const data = {
  title: 'LÀM THẾ NÀO THE LEMON AD STAND TÌM THẤY SỰ TÀI TRỢ THÔNG QUA PIOT.',
  description:
    'Cơ quan quảng cáo có trụ sở tại Chicago đã có được khách hàng lớn nhất của mình nhưng phải đối mặt với điều khoản thanh toán 90 ngày. May mắn thay, việc thanh toán sớm thông qua PIOT đã giúp The Lemon Ad Stand vượt qua tình trạng ngặt nghèo.',
  // btnName: 'Explore Details',
  // btnURL: '#',
};

export default function Usercase() {
  return (
    <section sx={{ variant: 'section.knowledge' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            // btnName={data.btnName}
            // btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image
            src={KnowledgeThumb}
            alt="Thumbnail"
            width="632"
            height="750"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: 'flex',
    mx: ['auto', null, null, 0],
    img: {
      height: [400, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 365, 420, 430, '490px'],
    pb: [7, null, null, 0],
    '.description': {
      pr: [0, null, 7, 5],
    },
    '.btn__link': {
      mt: [5, null, null, 6],
    },
  },
};
