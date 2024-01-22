import NextHead from 'next/head';

import { SeoTags } from '@/components/common/SeoTags';
import { IsMobileScript } from '@/scripts/IsMobileScript';
import { ieCustomPropertyFix, iePicturefill } from '@/scripts/PolyFillsScript';

const Head = () => (
  <NextHead>
    {SeoTags}
    {ieCustomPropertyFix}
    {iePicturefill}
    {IsMobileScript}
  </NextHead>
);

export default Head;
