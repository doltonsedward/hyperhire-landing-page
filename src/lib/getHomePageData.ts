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
  benefitRes: {
    type: 'success' | 'error';
    data: string[];
  };
};

async function getHomePageData(options?: { revalidate?: number }): Promise<GetHomePageDataReturnType> {
  const [talentsRes, featureRes, benefitRes] = await Promise.all([
    fetcher('/talents', {
      cache: 'no-store',
      ...(options?.revalidate ? { next: { revalidate: options.revalidate } } : {}),
    }),
    fetcher('/featured', {
      cache: 'force-cache',
      ...(options?.revalidate ? { next: { revalidate: options.revalidate } } : {}),
    }),
    fetcher('/benefit', {
      cache: 'force-cache',
      ...(options?.revalidate ? { next: { revalidate: options.revalidate } } : {}),
    }),
  ]);

  return { talentsRes, featureRes, benefitRes };
}

export default getHomePageData;
