import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import type { SubNavMenuConfig } from '@/constants/nav';

const container = (isOpen: boolean) => css`
  display: ${isOpen ? 'block' : 'none'};
  position: absolute;
  top: 76%;
  left: 0;
  min-width: 140px;
`;

const liCss = (isClicked: boolean) => css`
  padding: 14px 22px;
  background-color: #fff;
  color: #4b4b4b;
  font-size: 14px;
  font-style: normal;
  font-weight: ${isClicked ? 700 : 400};
  text-decoration: ${isClicked ? 'underline' : 'unset'};
  line-height: 20px;
  padding-block: 10px;
  &:hover {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const invisiblePadding = css`
  height: 30px;
  background-color: transparent;
`;

const subMenuItemFont = (isAboutObliv: boolean) => css`
  font-family: ${isAboutObliv ? 'Bernhard Modern Std' : 'Noto Sans KR'};
`;

type Props = {
  menuList: SubNavMenuConfig[];
  isOpen: boolean;
};

const SubNav = ({ menuList, isOpen }: Props) => {
  const router = useRouter();

  const comparePath = (hrefPath: string) =>
    Boolean(router.pathname.includes(hrefPath));

  return (
    <ul css={container(isOpen)}>
      <div css={invisiblePadding} />
      {menuList.map((item, index) => (
        <li
          key={index}
          css={[
            liCss(comparePath(item.path)),
            subMenuItemFont(item.subMenuTitle === 'About Obliv'),
          ]}
          onClick={() => void router.push(item.path)}
        >
          {item.subMenuTitle}
        </li>
      ))}
    </ul>
  );
};

export default SubNav;
