import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";
import Icon from "metabase/components/Icon";

export const EmptyStateRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export const EmptyStateIcon = styled(Icon)`
  color: ${color("text-medium")};
  width: 5rem;
  height: 5rem;
  margin-bottom: 2.5rem;
`;

export const EmptyStateText = styled.div`
  color: ${color("text-medium")};
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  max-width: 19.375rem;
`;
