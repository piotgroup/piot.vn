/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import CallToAction from './call-to-action';
import Image from 'components/image';

import SupportTeam from 'assets/images/support-thumb.png';
import Subscribe from 'components/subscribe';

export default function Support() {
  return (
    <section sx={{ variant: 'section.support' }} id="support">
      <Container>
        <SectionHeader
          title="ĐĂNG KÝ NHẬN THÔNG TIN MỚI NHẤT VỀ DỊCH VỤ"
          description="Bằng việc đăng ký, bạn đồng ý nhận thông tin dịch vụ của chúng tôi qua email"
        />

        {/*<Box sx={styles.thumbWrapper}>
           <Image
            src={SupportTeam}
            alt="Support Team"
            width="992"
            height="531"
          /> 
        </Box>*/}
        
      </Container>
      <CallToAction />
      
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    img: {
      height: [180, 'auto'],
    },
  },
};
