import styled from "styled-components";

enum spacerSize {
    small = 2,
    medium = 4,
    large = 5,
}

interface SpacerProps {
    size: spacerSize}

export const Spacer = styled.div<SpacerProps>((props) => ({
  display: "block",
  width: '100%',
  height: `${props.size * 10}px`,
}));