/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import KnowledgeThumb from 'assets/images/knowledge-thumb.png';

const data = {
  title: 'Chúng tôi cam kết 100% đảm bảo rằng vốn lưu động phù hợp với bạn… và cho tất cả mọi người.',
  description:
    'Vào bất kỳ ngày nào, các nhà cung cấp từ khắp nơi trên thế giới có 43 nghìn tỷ đô la bị ràng buộc trong các khoản phải thu. Họ đợi trung bình 60 ngày để được thanh toán và có các lựa chọn tài chính hạn chế, không hiệu quả. Trong khi đó, các doanh nghiệp đang duy trì mức tiền mặt kỷ lục trên bảng cân đối kế toán - tiền mặt chỉ nằm đó, thu về lợi nhuận thấp kỷ lục. PIOT đang sử dụng công nghệ để xây dựng một tương lai tươi sáng hơn nơi tiền mặt của doanh nghiệp hoạt động tích cực hơn - cho doanh nghiệp, các nhà cung cấp và nền kinh tế thế giới.',
  btnName: 'Explore Details',
  btnURL: '#',
};

export default function Knowledge() {
  return (
    <section sx={{ variant: 'section.knowledge' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
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
