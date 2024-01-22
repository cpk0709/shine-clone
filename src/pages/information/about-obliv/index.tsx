import withPageFrame from '@/components/common/withPageFrame';
import AboutBottomSection from '@/components/information/about-obliv/AboutBottomSection';
import AboutMainBanner from '@/components/information/about-obliv/AboutMainBanner';
import AboutMiddleSection from '@/components/information/about-obliv/AboutMiddleSection';

const DefaultPage = () => (
  <>
    <AboutMainBanner />
    <AboutMiddleSection />
    <AboutBottomSection />
  </>
);

export default withPageFrame(DefaultPage, { hasBottomSection: false });
