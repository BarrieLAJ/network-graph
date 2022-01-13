import { Input, InputProps } from "antd";
import React, { useRef, useState } from "react";
import styled, { StyledComponent } from "styled-components";

type MultiInputProps = {
  inputFocused: boolean;
};

const MultiinputWrapper = styled.span<MultiInputProps>`
  .ant-input-group-wrapper {
    .ant-input-group {
      border: 1px solid #d9d9d9;
      border-color: ${(props) => props.inputFocused && "#40a9ff"};
      border-width: ${(props) => props.inputFocused && "1px"};
      border-style: ${(props) => props.inputFocused && "solid"};
      box-shadow: ${(props) =>
        props.inputFocused && "0 0 0 2px rgba(24, 144, 255, 0.2)"};
      border-radius: 5px;
      .ant-input {
        border: none;
      }

      .ant-input-group-addon {
        border: none;
        background-color: #fff;
      }
    }
  }
`;

export const MultiInput = (props: InputProps) => {
  const { addonBefore, style, onBlur, onFocus, ...rest } = props;
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <MultiinputWrapper style={style} inputFocused={inputFocused}>
      <Input
        ref={inputRef}
        addonBefore={addonBefore}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        {...rest}
      />
    </MultiinputWrapper>
  );
};
