import { css } from '@emotion/react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import AgreeCheckIcon from '@/icons/AgreeCheckIcon';

const labelTitle = (isValid: boolean | string) => css`
  margin-left: 10px;
  color: ${isValid ? '#AAA' : '#fff'};
  font-family: Noto Sans KR;
  font-size: ${isValid ? 12 : 15}px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  bottom: 8px;
  transform: translateY(${isValid ? '-26px' : 0});
  transition: all 0.3s ease-in-out;
`;

const labelCss = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const inputCss = (width: number) => css`
  padding: 4px 0 8px 10px;
  width: ${width}px;
  background-color: transparent;
  border-bottom: 1px solid #888;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ::placeholder {
    color: #fff;
  }
`;

const checkboxWrap = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
  white-space: nowrap;
  > span {
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

type InputProps = {
  type?: 'text' | 'checkbox';
  text?: string;
  isValid?: boolean;
  onFocusEffect?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
  width?: number;
  isChecked?: boolean;
};

const Input = (props: InputProps) => {
  const {
    type = 'text',
    text = '성함',
    isValid = false,
    onFocusEffect,
    register,
    width = 194,
    isChecked = false,
  } = props;

  if (type === 'text') {
    return (
      <label css={labelCss}>
        <span css={labelTitle(isValid)}>{text}</span>
        <input
          type="text"
          autoComplete="off"
          onFocus={onFocusEffect}
          {...register}
          css={inputCss(width)}
        />
      </label>
    );
  }

  if (type === 'checkbox') {
    return (
      <label css={checkboxWrap}>
        <input type="checkbox" {...register} />
        <AgreeCheckIcon isChecked={isChecked} />
        <span>개인정보 수집 및 이용에 동의합니다</span>
      </label>
    );
  }
};

export default Input;
