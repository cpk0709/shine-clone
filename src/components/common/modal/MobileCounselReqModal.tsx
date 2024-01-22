/* eslint-disable @typescript-eslint/no-misused-promises */
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import ImageWrapper from '@/components/common/ImageWrapper';
import type { RequestBookingFormInputs } from '@/components/common/RequestBookingForm';
import TermsPrivacy from '@/components/common/terms/TermsPrivacy';
import AgreeCheckIconMobile from '@/icons/AgreeCheckIconMobile';

const container = css`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: #fff;
  padding-inline: 20px;
  overflow-y: auto;
`;

const closeBtnWrap = css`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const closeButton = css`
  padding: 10px;
`;

const title = css`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-bottom: 50px;
`;

const formBody = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const inputWrap = css`
  display: flex;
  flex-direction: column;
  > span {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
    letter-spacing: -0.16px;
  }
  > input {
    padding-block: 10px;
    border-bottom: 1px solid #ddd;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.15px;
    ::placeholder {
      color: #bbb;
      font-family: Noto Sans KR;
      font-size: 13px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: -0.13px;
    }
  }
  > textarea {
    margin-top: 10px;
    min-height: 200px;
    resize: none;
    border: 1px solid #ddd;
    padding: 15px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: -0.15px;
    ::placeholder {
      color: #bbb;
      font-family: Noto Sans KR;
      font-size: 13px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: -0.13px;
    }
  }
`;

const checkboxArea = css`
  display: flex;
  justify-content: space-between;
  > button {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 11px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
    letter-spacing: -0.11px;
  }
`;

const checkboxWrap = css`
  display: flex;
  align-items: center;
  gap: 5px;
  input[type='checkbox'] {
    display: none;
  }
  > p {
    color: #000;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
    letter-spacing: -0.16px;
  }
`;

const policyText = (isPolicyOpen: boolean) => css`
  border-width: ${isPolicyOpen ? 1 : 0}px;
  border-style: solid;
  border-color: #ddd;
  height: ${isPolicyOpen ? 350 : 0}px;
  padding: ${isPolicyOpen ? 15 : 0}px;
  overflow-y: scroll;
  transition: height 0.1s;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: -0.11px;
  word-break: keep-all;
`;

const bottomWrap = css`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
`;

const noticeText = css`
  color: #888;
  font-family: Noto Sans KR;
  font-size: 11px;
  font-style: normal;
  font-weight: 350;
  line-height: 16px;
  letter-spacing: -0.11px;
`;

const requestButton = css`
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  letter-spacing: -0.16px;
  background-color: #282828;
  padding-block: 11px;
  margin-bottom: 30px;
  border-radius: 5px;
`;

type Props = {
  handleModal: (isOpen: boolean) => void;
};

const MobileCounselReqModal = (props: Props) => {
  const { handleModal } = props;
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const { register, handleSubmit, watch, clearErrors } =
    useForm<RequestBookingFormInputs>({
      defaultValues: {
        isAgreeTerms: true,
      },
    });

  const isAgreeValue = watch('isAgreeTerms');

  const onSubmit: SubmitHandler<RequestBookingFormInputs> = useCallback(
    // eslint-disable-next-line no-console
    (data: RequestBookingFormInputs) => console.log(data),
    [],
  );

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

  return (
    <section css={container}>
      <div css={closeBtnWrap}>
        <button onClick={() => handleModal(false)} css={closeButton}>
          <ImageWrapper
            pcSrc="/obliv/oblive-icon-close-bold-black.svg"
            alt="close button"
          />
        </button>
      </div>
      <h1 css={title}>오블리브의원 상담신청</h1>
      <form css={formBody} onSubmit={handleSubmit(onSubmit, onError)}>
        <label css={inputWrap}>
          <span>이름</span>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            maxLength={20}
            {...register('name', { required: true, maxLength: 20 })}
          />
        </label>
        <label css={inputWrap}>
          <span>휴대폰 번호</span>
          <input
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
            minLength={7}
            maxLength={20}
            {...register('phone', {
              required: true,
              minLength: 7,
              maxLength: 20,
            })}
          />
        </label>
        <label css={inputWrap}>
          <span>상담받고 싶은 내용</span>
          <textarea
            placeholder="상담받고 싶은 내용을 입력해주세요"
            {...register('content', {
              required: true,
            })}
          />
        </label>
        <div css={checkboxArea}>
          <label css={checkboxWrap}>
            <input
              type="checkbox"
              {...register('isAgreeTerms', { required: true })}
            />
            <AgreeCheckIconMobile isChecked={isAgreeValue} />
            <p>개인정보수집이용 이용자 동의</p>
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsPolicyOpen((prev) => !prev);
            }}
          >
            {isPolicyOpen ? '-' : '+'} 상세보기
          </button>
        </div>
        <div css={policyText(isPolicyOpen)}>
          <TermsPrivacy
            containerStyles={css`
              word-break: keep-all;
            `}
          />
          <br />
        </div>
        <div css={bottomWrap}>
          <p css={noticeText}>
            상담 서비스 이용을 위해 개인정보 수집이용 처리위탁 규정을
            <br />
            확인하였으며 이에 동의합니다.
          </p>
          <button type="submit" css={requestButton}>
            신청완료
          </button>
        </div>
      </form>
    </section>
  );
};

export default MobileCounselReqModal;
