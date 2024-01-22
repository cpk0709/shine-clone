import ImageWrapper from '@/components/common/ImageWrapper';
import { imageStyle } from '@/styles/common';

type Props = {
  pcSrcList: string[];
};
const TempImageMap = ({ pcSrcList }: Props) => (
  <>
    {pcSrcList.map((img, idx) => (
      <ImageWrapper
        key={idx}
        pcSrc={img}
        alt="obliv 리프팅 이미지"
        imageCss={imageStyle()}
      />
    ))}
  </>
);

export default TempImageMap;
