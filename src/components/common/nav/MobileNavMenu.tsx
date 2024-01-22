import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import ImageWrapper from '@/components/common/ImageWrapper';
import type { GlobalNavMenuConfig, SubNavMenuConfig } from '@/constants/nav';
import { imageSize } from '@/styles/common';

const container = css`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const mobileMenu = css`
  overflow: auto;
  left: 0;
  height: 100%;
  padding-left: 30px;
  background-color: #fff;
  width: 280px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const closeButtonWrap = css`
  width: 100%;
  background-color: #fff;
  button {
    display: block;
    margin-left: auto;
    padding: 10px;
  }
`;

const menuTitle = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const subMenuWrap = css`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const subMenuItem = (isAboutObliv: boolean) => css`
  color: #4b4b4b;
  font-family: ${isAboutObliv ? 'Bernhard Modern Std' : 'Noto Sans KR'};
  font-size: 14px;
  font-style: normal;
  line-height: 30px;
  cursor: pointer;
`;

const clickedStyle = (isClicked: boolean) => css`
  font-weight: ${isClicked ? 700 : 400};
`;

type Props = {
  menuList: GlobalNavMenuConfig[];
  onCloseClick: (isOpen: boolean) => void;
};

const MobileNavMenu = ({ menuList, onCloseClick }: Props) => {
  const [openSubMenuTitle, setOpenSubMenuTitle] = useState('');
  const router = useRouter();

  const comparePath = (hrefPath: string) =>
    Boolean(router.pathname.includes(hrefPath));

  const handleSubMenu = (menu: GlobalNavMenuConfig) => {
    setOpenSubMenuTitle((prev) => {
      if (prev === menu.title) {
        return '';
      }

      return menu.title;
    });
  };

  const handleGlobalMenuClick = useCallback(
    (menu: GlobalNavMenuConfig | SubNavMenuConfig) => {
      if (menu.path) {
        void router.push(menu.path);
      }
    },
    [router],
  );

  return (
    <div css={container}>
      <ul css={mobileMenu}>
        <div css={closeButtonWrap}>
          <button onClick={() => onCloseClick(false)}>
            <ImageWrapper
              pcSrc="/obliv/oblive-icon-close-black.svg"
              alt="close button"
              imageCss={imageSize()}
              isPriority
            />
          </button>
        </div>
        {menuList?.map((menu, index) => (
          <>
            {menu.path ? (
              <li
                key={index}
                css={menuTitle}
                onClick={() => handleGlobalMenuClick(menu)}
              >
                {menu.title}
              </li>
            ) : (
              <>
                <li
                  key={index}
                  css={menuTitle}
                  onClick={() => handleSubMenu(menu)}
                >
                  {menu.title}
                </li>
                {menu.subMenus && openSubMenuTitle === menu.title && (
                  <ul css={subMenuWrap}>
                    {menu.subMenus.map((subMenu, subIndex) => (
                      <li
                        key={subIndex}
                        css={[
                          clickedStyle(comparePath(subMenu.path)),
                          subMenuItem(
                            menu.title === '오블리브 의원' &&
                              subMenu.subMenuTitle === 'About Obliv',
                          ),
                        ]}
                        onClick={() => handleGlobalMenuClick(subMenu)}
                      >
                        {subMenu.subMenuTitle}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavMenu;
