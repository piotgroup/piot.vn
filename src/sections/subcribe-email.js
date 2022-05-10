/** @jsx jsx */
import { jsx } from 'theme-ui';
import CallToAction from './call-to-action';
import Image from 'components/image';

export default function SubscribeEmail() {
  return (
    <section sx={{ variant: 'section.subcribe' }} id="subcribe">
      <CallToAction />
    </section>
  );
}

