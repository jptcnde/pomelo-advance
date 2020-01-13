import styled from 'styled-components';
import {
  TypograpyVariantsEnum,
  ITheme,
 } from '../Theme/theme'

type Props = {
  variant: 'body1' | 'caption' | 'headline',
  align?: 'left' | 'center' | 'right',
  fontWeight?: string | number,
  theme: ITheme,
}

const Typography = styled.p.attrs((props: Props) => ({
  variant: props.variant,
  'data-testid': 'pmlo-typography',
  'data-cmp-typography': props.variant,
}))`
  font-size: ${({ variant, theme }) => theme.typography[variant].fontSize};
  line-height: 1.6;
  color: ${({ theme, color }) => color || theme.palette.text.primary };
  text-align: ${({ align }: Props) => align };
  font-weight: ${({ fontWeight, variant }: Props) => {
    if (fontWeight) { return fontWeight; }
    switch (variant) {
      case TypograpyVariantsEnum.body1:
      case TypograpyVariantsEnum.caption:
        return 'normal';
      case TypograpyVariantsEnum.headline:
        return 'bold';
    }
  }};
`;

Typography.defaultProps = {
  variant: TypograpyVariantsEnum.body1,
  align: 'left'
}

export default Typography;