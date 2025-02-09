import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";
import CheckBox from "metabase/core/components/CheckBox";
import Icon from "metabase/components/Icon";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CardCheckbox = styled(CheckBox)`
  height: 1rem;
`;

export const CardLabel = styled.span`
  flex: 1 1 auto;
  margin-left: 0.5rem;
  color: ${color("text-dark")};
  font-weight: bold;
  font-size: 0.875rem;
`;

export const CardIcon = styled(Icon)`
  color: ${color("text-medium")};
  width: 1.125rem;
  height: 1.125rem;
`;

export const CardContent = styled.div`
  margin: 1rem -0.75rem 1rem -0.5rem;
`;
