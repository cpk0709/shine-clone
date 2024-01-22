/* eslint-disable @typescript-eslint/no-misused-promises */
import { css } from '@emotion/react';
import Head from 'next/head';
import { useCallback, useMemo, useState } from 'react';
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import ImageWrapper from '@/components/common/ImageWrapper';
import MobileCounselReqModal from '@/components/common/modal/MobileCounselReqModal';
import Input from '@/components/common/req-form/Input';
import TermsPrivacy from '@/components/common/terms/TermsPrivacy';
import { useMatchMedia } from '@/hooks/use-match-media';
import { useScrollBlock } from '@/hooks/use-scroll-block';

const container = (isTermsOpen: boolean) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    height: ${isTermsOpen ? 172 : 142}px;
    background-color: rgba(0, 0, 0, 0.7);
    padding-bottom: unset;
    transition: height 0.2s;
  }
`;

const formTitle = css`
  padding: 18px 16px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  margin-right: 50px;
  span {
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const formBody = (isTermsOpen: boolean) => css`
  display: flex;
  opacity: ${isTermsOpen ? 0 : 1};
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transition: opacity 0.2s;
`;

const inputWrap = css`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;

const agreeSubmitWrap = css`
  display: flex;
  input[type='checkbox'] {
    display: none;
  }
`;

const personalInfoBtn = css`
  margin-right: 22px;
`;

const submitButton = css`
  white-space: nowrap;
  padding: 10px 32px;
  background-color: #fff;
  border-radius: 50px;
  color: #666;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const mobileButtonWrap = (isVisible: boolean) => css`
  display: ${isVisible ? 'flex' : 'none'};
  gap: 5px;
  width: 100%;
  max-width: 500px;
  padding-inline: 20px;
  button {
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
    letter-spacing: -0.16px;
  }
`;

const naverButton = css`
  background-color: #00c300;
  padding: 11px 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 5px;
`;

const counselButton = css`
  background-color: #282828;
  border-radius: 5px;
  flex: 2;
`;

const termsWrap = (isTermsOpen: boolean) => css`
  height: 145px;
  padding-right: 38px;
  overflow-y: scroll;
  position: absolute;
  z-index: 3;
  top: 0;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 12px;
  transform: translateY(${isTermsOpen ? '-26px' : '145px'});
  transition: all 0.3s ease-in-out;
`;

const termsCloseBtn = (isTermsOpen: boolean) => css`
  display: ${isTermsOpen ? 'block' : 'none'};
  background-color: #fff;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  font-weight: 700;
  position: absolute;
  top: -10px;
  right: 20px;
  z-index: 4;
`;

export type RequestBookingFormInputs = {
  name: string;
  phone: string;
  content: string;
  isAgreeTerms: boolean;
};

const RequestBookingForm = () => {
  const { register, handleSubmit, watch, clearErrors } =
    useForm<RequestBookingFormInputs>({
      defaultValues: {
        isAgreeTerms: true,
      },
    });

  // 개인정보 수집 이용 표시
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // 모바일 상담신청 모달
  const [isOpenMobileModal, setIsOpenMobileModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  // input values
  const inputValue = watch();

  // 폼 제출
  const onSubmit: SubmitHandler<RequestBookingFormInputs> = useCallback(
    // code here
    // eslint-disable-next-line no-console
    (data) => console.log(data),
    [],
  );

  // pc 개인정보방침 보기
  const handleShowPersonalInfo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsTermsOpen(true);
  };

  const showAlert = (message?: string) => setTimeout(() => alert(message), 0);

  const onError: SubmitErrorHandler<RequestBookingFormInputs> = useCallback(
    (formErrors) => {
      if (formErrors.name?.type === 'required') {
        showAlert('이름을 입력하세요.');
      } else if (formErrors.phone?.type === 'required') {
        showAlert('전화번호를 입력해주세요.');
      } else if (
        formErrors.phone?.type === 'minLength' ||
        formErrors.phone?.type === 'maxLength'
      ) {
        showAlert('전화번호는 7자 ~ 20자로 입력해주세요.');
      } else if (formErrors.content?.type === 'required') {
        showAlert('상담문의 내용을 입력해주세요.');
      } else if (formErrors.isAgreeTerms?.type === 'required') {
        showAlert('개인정보 수집 및 이용 동의를 해주세요.');
      }

      clearErrors();
    },
    [clearErrors],
  );

  const isMobile = useMatchMedia(1200);

  const handleMobileModal = (isOpen: boolean) => {
    setIsOpenMobileModal(isOpen);
  };

  // 모바일 상담신청 모달 open시 스크롤 막기
  const isMobileModalOpen = useMemo(() => {
    if (isMobile && isOpenMobileModal) {
      blockScroll();
    } else {
      allowScroll();
    }

    return isMobile && isOpenMobileModal;
  }, [allowScroll, blockScroll, isMobile, isOpenMobileModal]);

  // PC에서 input 포커스할때 transition
  const [focusInput, setFocusInput] = useState('');

  const onFocusEffect = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name) {
      setFocusInput(e.target.name);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <div css={container(isTermsOpen)}>
        {isMobile ? (
          <div css={mobileButtonWrap(!isOpenMobileModal)}>
            <button css={naverButton}>
              <ImageWrapper
                pcSrc="/obliv/obliv-icon-naver.svg"
                alt="네이버 예약 아이콘"
                isPriority
              />
              바로 예약
            </button>
            <button onClick={() => handleMobileModal(true)} css={counselButton}>
              상담신청
            </button>
          </div>
        ) : (
          <>
            <div css={formTitle}>
              <span>상담문의</span>
            </div>
            <div style={{ position: 'relative' }}>
              <form
                css={formBody(isTermsOpen)}
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                <div css={inputWrap}>
                  <Input
                    text="성함"
                    isValid={
                      focusInput === 'name' ||
                      (Boolean(inputValue.name) && inputValue.name !== '')
                    }
                    onFocusEffect={onFocusEffect}
                    register={register('name', {
                      required: true,
                      maxLength: 20,
                      onBlur: () => setFocusInput(''),
                    })}
                  />
                  <Input
                    text="핸드폰"
                    isValid={
                      focusInput === 'phone' ||
                      (Boolean(inputValue.phone) && inputValue.phone !== '')
                    }
                    onFocusEffect={onFocusEffect}
                    register={register('phone', {
                      required: true,
                      minLength: 7,
                      maxLength: 20,
                      onBlur: () => setFocusInput(''),
                    })}
                  />
                  <Input
                    text="문의내용"
                    isValid={
                      focusInput === 'content' ||
                      (Boolean(inputValue.content) && inputValue.content !== '')
                    }
                    onFocusEffect={onFocusEffect}
                    register={register('content', {
                      required: true,
                      onBlur: () => setFocusInput(''),
                    })}
                    width={420}
                  />
                </div>
                <div css={agreeSubmitWrap}>
                  <Input
                    type="checkbox"
                    register={register('isAgreeTerms', { required: true })}
                    isChecked={inputValue.isAgreeTerms}
                  />
                  <button
                    onClick={handleShowPersonalInfo}
                    css={personalInfoBtn}
                  >
                    <ImageWrapper
                      pcSrc="/obliv/obliv-icon-cross-black-round.svg"
                      alt="개인정보정책 보기 버튼"
                    />
                  </button>
                  <button type="submit" css={submitButton}>
                    상담신청
                  </button>
                </div>
              </form>
              <button
                onClick={() => setIsTermsOpen(false)}
                css={termsCloseBtn(isTermsOpen)}
              >
                <ImageWrapper
                  pcSrc="/obliv/oblive-icon-close-bold-black.svg"
                  alt="terms close button"
                />
              </button>
              <article css={termsWrap(isTermsOpen)}>
                <TermsPrivacy
                  containerStyles={css`
                    word-break: keep-all;
                  `}
                />
              </article>
            </div>
          </>
        )}
      </div>
      {isMobileModalOpen && (
        <MobileCounselReqModal handleModal={handleMobileModal} />
      )}
    </>
  );
};

export default RequestBookingForm;
