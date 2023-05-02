import { getSize } from "@/constants";

import { StyleProps } from "./Icon.types";

import "@flaticon/flaticon-uicons/css/all/all.css";
import tw, { css, styled, theme } from "twin.macro";

export const StyledIcon = styled.i((props: StyleProps) => [
  tw`inline-block text-center h-fit`,
  getSize[props.size ?? "md"],
  props.iconColor ??
    css`
      color: #000;
    `,
]);

export default StyledIcon;
