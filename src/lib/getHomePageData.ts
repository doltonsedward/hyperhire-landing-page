import { FeatureDataType } from '../types/api/features';
import { TalentDataType } from '../types/api/talents';
import { fetcher } from './fetcher';

type GetHomePageDataReturnType = {
  talentsRes: {
    type: 'success' | 'error';
    data: TalentDataType[];
  };
  featureRes: {
    type: 'success' | 'error';
    data: FeatureDataType[];
  };
};

async function getHomePageData(options?: {
  talentsCache?: RequestCache;
  featuredCache?: RequestCache;
  revalidate?: number;
}): Promise<GetHomePageDataReturnType> {
  const [talentsRes, featureRes] = await Promise.all([
    fetcher('/talents', {
      cache: options?.talentsCache ?? 'no-store',
    }),
    fetcher('/featured', {
      cache: options?.featuredCache ?? 'force-cache',
    }),
  ]);

  return { talentsRes, featureRes };
}

export default getHomePageData;
