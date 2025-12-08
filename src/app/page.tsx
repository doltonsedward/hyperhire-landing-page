import Footer from '@components/section/Footer';
import HeroSection from '@components/section/HeroSection';
import getHomePageData from '../lib/getHomePageData';

export default async function Home() {
  const { talentsRes, featureRes } = await getHomePageData();

  return (
    <div>
      <HeroSection talents={talentsRes.data} features={featureRes.data} />
      <Footer />
    </div>
  );
}
