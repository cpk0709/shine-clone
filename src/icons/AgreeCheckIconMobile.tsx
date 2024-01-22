import { css } from '@emotion/react';

const body = (isChecked: boolean) => css`
  width: 16px;
  height: 16px;
  background-color: ${isChecked ? '#000' : 'transparent'};
  border-width: 1px;
  border-style: solid;
  border-color: #000;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const checkBody = (isChecked: boolean) => css`
  height: 1px;
  width: 4px;
  position: relative;
  background-color: ${isChecked ? '#fff' : '#000'};
  transform-origin: left top;
  transform: rotate(45deg) translate(-25%);
  ::after {
    content: '';
    display: block;
    background-color: ${isChecked ? '#fff' : '#000'};
    width: 1px;
    height: 7px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    transform: rotate(-5deg);
  }
`;

type Props = {
  isChecked?: boolean;
};

const AgreeCheckIconMobile = (props: Props) => {
  const { isChecked = false } = props;

  return (
    <div css={body(isChecked)}>
      <div css={checkBody(isChecked)} />
    </div>
  );
};

export default AgreeCheckIconMobile;
