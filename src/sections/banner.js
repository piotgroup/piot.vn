/** @jsx jsx */
import { jsx, Box, Image, Container } from "theme-ui";
import banner from "assets/images/slide-1.jpg";

const Banner = () => {
  return <Box as="section" id="home" sx={styles.section}></Box>;
};

export default Banner;

const styles = {
  section: {
    position: "relative",
    zIndex: 0,
    height: "100vh",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  contentWrapper: {
    gap: [12, null, null, 14, 12],
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, null, "385px 1fr", "470px 1fr"],
    alignItems: "center",
  },
};
