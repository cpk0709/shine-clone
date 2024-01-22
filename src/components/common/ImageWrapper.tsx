/* eslint-disable @next/next/no-img-element */
import 'react-lazy-load-image-component/src/effects/blur.css';

import type { SerializedStyles } from '@emotion/react';
import type { LazyLoadImageProps } from 'react-lazy-load-image-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useIe } from '@/hooks/use-ie';
import { useMatchMedia } from '@/hooks/use-match-media';
import { getImageName, overrideImageSrc } from '@/utils/common';

type Props = {
  pcSrc: string;
  alt: string;
  mobileSrc?: string;
  imageCss?: SerializedStyles[] | SerializedStyles;
  isPriority?: boolean;
  onClick?: () => void;
  shouldOverrideSrc?: boolean;
} & LazyLoadImageProps;

const ImageWrapper = (props: Props) => {
  const {
    shouldOverrideSrc = true,
    pcSrc,
    mobileSrc,
    alt,
    imageCss,
    onClick,
    isPriority,
    ...args
  } = props;

  const isMobile = useMatchMedia();
  const isIe = useIe();
  const src = isMobile && mobileSrc ? mobileSrc : pcSrc;

  if (isIe) {
    return (
      <img
        src={
          shouldOverrideSrc
            ? overrideImageSrc(src.replace('.webp', '.png'))
            : src
        }
        alt={alt}
        css={imageCss}
        onClick={onClick}
      />
    );
  }

  if (process.env.NEXT_PUBLIC_NODE_ENV === 'local') {
    return (
      <LazyLoadImage
        alt={alt}
        src={shouldOverrideSrc ? src.replace('.png', '.webp') : src}
        css={imageCss}
        effect="blur"
        onClick={onClick}
        visibleByDefault={isPriority}
        placeholderSrc={
          shouldOverrideSrc
            ? `/obliv/${
                process.env.NEXT_PUBLIC_LANDING_IMAGE_PLACEHOLDER_IMAGE
              }/${getImageName(src.replace('.png', '.webp'))}`
            : undefined
        }
        {...args}
      />
    );
  }

  return (
    <LazyLoadImage
      alt={alt}
      src={
        shouldOverrideSrc ? overrideImageSrc(src.replace('.png', '.webp')) : src
      }
      css={imageCss}
      effect="blur"
      onClick={onClick}
      visibleByDefault={isPriority}
      placeholderSrc={
        shouldOverrideSrc
          ? overrideImageSrc(
              `/obliv/${
                process.env.NEXT_PUBLIC_LANDING_IMAGE_PLACEHOLDER_IMAGE
              }/${getImageName(src.replace('.png', '.webp'))}`,
            )
          : undefined
      }
      {...args}
    />
  );
};

export default ImageWrapper;
