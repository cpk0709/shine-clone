import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import ImageWrapper from '@/components/common/ImageWrapper';
import MobileNavMenu from '@/components/common/nav/MobileNavMenu';
import SubNav from '@/components/common/nav/SubNav';
import type { GlobalNavMenuConfig } from '@/constants/nav';
import { globalNavMenuList } from '@/constants/nav';
import { useMatchMedia } from '@/hooks/use-match-media';
import { imageSize } from '@/styles/common';

const mobileWidth = 1500;

const container = (isMobileMenuOpen: boolean, scrollDirection: string) => css`
  position: fixed;
  top: ${scrollDirection === 'up' || scrollDirection === 'none'
    ? '0'
    : '-130px'};
  transition: all 0.3s ease-in-out;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 50px;
  display: ${isMobileMenuOpen ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;
  padding-inline: 25px;
  background-color: transparent;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #fff;
  }
  @media (min-width: 1500px) {
    display: flex;
    height: 80px;
    justify-content: center;
    padding-inline: unset;
  }
`;

const logoButton = css`
  cursor: pointer;
  margin-right: 50px;
`;

const mainMenuList = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
  height: 100%;
  @media (max-width: ${mobileWidth}px) {
    display: none;
  }
`;

const mainMenu = css`
  position: relative;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
  height: 100%;
  display: flex;
  align-items: center;
  color: #000;
  white-space: nowrap;
  background-color: transparent;
  &:hover {
    background-color: #fff;
  }
  padding-inline: 10px;
  cursor: pointer;
`;
const hambergerButton = css`
  cursor: pointer;
  padding: 10px;
`;

const GlobalNav = () => {
  const isMobile = useMatchMedia(1500);
  const router = useRouter();
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(-1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoRoute = () => {
    void router.push('/');
  };

  const handleGlobalMenuClick = useCallback(
    (menu: GlobalNavMenuConfig) => {
      if (menu.path) {
        void router.push(menu.path);
      }
    },
    [router],
  );

  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | 'none'
  >('none');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > 100) {
        if (currentScrollTop > window.previousScrollTop) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
      } else {
        setScrollDirection('none');
      }

      window.previousScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return (
    <>
      <nav css={container(isMobileMenuOpen, scrollDirection)}>
        <div css={logoButton} onClick={handleLogoRoute}>
          <ImageWrapper
            pcSrc="/obliv/oblive-gnb-logo-black.svg"
            alt="obliv logo"
            imageCss={imageSize('115px', 1500)}
            isPriority
          />
        </div>
        {globalNavMenuList?.length > 0 && (
          <ul css={mainMenuList}>
            {globalNavMenuList.map((menu, index) => (
              <li
                key={menu.title}
                onMouseEnter={() => {
                  setHoveredMenuIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredMenuIndex(-1);
                }}
                onClick={() => handleGlobalMenuClick(menu)}
                title={menu.title}
                css={mainMenu}
              >
                {menu.title}
                {menu.subMenus && (
                  <SubNav
                    menuList={menu.subMenus}
                    isOpen={hoveredMenuIndex === index}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
        {isMobile && (
          <div
            css={hambergerButton}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <ImageWrapper
              pcSrc="/obliv/oblive-icon-gnb-hamberger-black.svg"
              alt="mobile menu button"
              imageCss={imageSize()}
            />
          </div>
        )}
      </nav>
      {isMobile && isMobileMenuOpen ? (
        <MobileNavMenu
          menuList={globalNavMenuList}
          onCloseClick={setIsMobileMenuOpen}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default GlobalNav;
