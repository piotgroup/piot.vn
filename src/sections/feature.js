/** @jsx jsx */
import { jsx, Box} from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TextFeature from 'components/text-feature';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';
import { IoIosCheckmarkCircle } from 'react-icons/io';

// const data = [
//   {
//     id: 1,
//     imgSrc: Marketplace,
//     altText: 'XEM LẠI HÓA ĐƠN',
//     title: 'HÌNH THỨC HỢP ĐỒNG',
//     text:
//       'Online bằng smart contract',
//   },
//   {
//     id: 2,
//     imgSrc: Gift,
//     altText: 'Gift',
//     title: 'THỜI GIAN PHÊ DUYỆT',
//     text:
//       'Từ 03 đến 24 giờ làm việc và Không yêu cầu mục đích sử dụng vốn tài trợ',
//   },
//   {
//     id: 3,
//     imgSrc: Award,
//     altText: 'Awards',
//     title: 'HỒ SƠ THẨM ĐỊNH',
//     text:
//       'Đơn giản, Ngắn gọn và Không thẩm định BCTC, hoạt động kinh doanh',
//   },
//   {
//     id: 4,
//     imgSrc: Award,
//     altText: 'Awards',
//     title: 'THỜI GIAN  VÀ HÌNH THỨC GIẢI NGÂN',
//     text:
//       'Từ 12 đến 24h làm việc, trực tiếp vào tài khoản ngân hàng',
//   },
//   {
//     id: 4,
//     imgSrc: Award,
//     altText: 'Awards',
//     title: 'TÀI SẢN ĐẢM BẢO',
//     text:
//       'Không yêu cầu tài sản đảm bảo và Bảo lãnh cá nhân',
//   },
//   {
//     id: 4,
//     imgSrc: Award,
//     altText: 'Awards',
//     title: 'ẢNH HƯỞNG ĐẾN BCTC & CIC',
//     text:
//       'Không tăng Nợ vay và thể hiện trên CIC',
//   },

// ];
const data = {
  title:
    'Sản phẩm PIOT',
  // description:
  //   'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  // btnName: 'Xem chi tiết',
  btnURL: '#',
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'HÌNH THỨC HỢP ĐỒNG',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Doanh nghiệp: Tăng cường bảng cân đối - và Củng cố chuỗi cung ứng của bạn.',
    },
  ],
};
const data1 = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'XEM LẠI HÓA ĐƠN',
    title: 'HÌNH THỨC HỢP ĐỒNG',
    text:
      'Hợp đồng ký, đóng dấu Bản cứng',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'THỜI GIAN PHÊ DUYỆT',
    text:
      'Từ 01 tuần đến 01 tháng & LUÔN yêu cầu mục đích sử dụng vốn vay',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Awards',
    title: 'HỒ SƠ THẨM ĐỊNH',
    text:
      'Yêu cầu nhiều loại hồ sơ, tài liệu thẩm định',
  },
  {
    id: 4,
    imgSrc: Award,
    altText: 'Awards',
    title: 'THỜI GIAN  VÀ HÌNH THỨC GIẢI NGÂN',
    text:
      'Từ 03 ngày đến 02 tuần vào Tài khoản Bên thứ ba',
  },
  {
    id: 4,
    imgSrc: Award,
    altText: 'Awards',
    title: 'TÀI SẢN ĐẢM BẢO',
    text:
      'Bắt buộc có Tài sản Đảm bảo & Bảo lãnh Cá nhân',
  },
  {
    id: 4,
    imgSrc: Award,
    altText: 'Awards',
    title: 'ẢNH HƯỞNG ĐẾN BCTC & CIC',
    text:
      'Tăng Nợ Ngắn hạn trên BCTC và Nợ trên CIC',
  },

];


export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Giải pháp PIOT vs Vay Ngân Hàng"
          description=""
        />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>

          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
        <Box sx={styles.contentBox}>

          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
  

        
        </Container>
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
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
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
      'repeat(1,1fr)',
      null,
      'repeat(1,1fr)',
    ],
  },
};
