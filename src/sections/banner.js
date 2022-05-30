/** @jsx jsx */
import { jsx, Box, Image, Container, Heading, Text, Button } from "theme-ui";
import Carousel from "react-multi-carousel";
import { rgba } from "polished";

import SectionHeading from "components/section-heading";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const data = [
  {
    id: 1,
    heading:
      "Nền tảng tài trợ thương mại trực tuyến cung cấp các giải pháp tài chính cho các doanh nghiệp nhỏ và vừa",
    text: "Nền tảng trực tuyến của Piot giúp kết nối các doanh nghiệp cần vốn vốn lưu động với các nhà đầu tư đang tìm kiếm các danh mục đầu tư hiệu quả",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    heading: "Tài trợ vốn lưu động cho doanh nghiệp",
    text: "Chuyển dòng tiên tương lại thành công cụ tăng trưởng cho hiện tại.",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    heading: "Danh mục đầu tư hiệu quả cho Nhà đầu tư",
    text: "Tài trợ thương mại là loại tài sản đầu tư mới cho các Nhà đầu tư. Các khoản đầu tư ngắn hạn nhưng tỉ suất sinh lời cao và rủi ro thâp.",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const Banner = () => {
  return (
    <Box as="section" id="home" style={styles.section}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((item) => (
          <Box key={item.id}>
            <Image
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src={item.image}
            />
            <Container
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <SectionHeading
                sx={styles.heading}
                title={item.heading}
                description={item.text}
              />
            </Container>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: "relative",
    zIndex: 0,
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h3: {
      color: "white",
      fontSize: [6, null, null, 10],
    },
    p: {
      color: rgba("white", 0.6),
      fontSize: [2],
      m: ["15px auto 0", null, null, "10px auto 0"],
    },
  },
};
