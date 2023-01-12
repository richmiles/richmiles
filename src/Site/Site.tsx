import { css } from '@emotion/core';
import theme from '../theme';

interface Props {
  children: React.ReactNode;
}
const StyledButton: React.FC<Props> = (props) => (
    <button
        css={css`
            background-color: ${theme.colors.primary};
            color: white;
            font-size: ${theme.fontSizes.body};
        `}
        {...props}
    />
);