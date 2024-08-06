import {useAppTheme} from '@hooks/theme';
import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {color?: string; size?: number};

const TransactionIcon: FC<Props> = ({color, size = 33}) => {
  const theme = useAppTheme();

  return (
    <Svg width={size} height={size} viewBox="0 0 65 51" fill="none">
      <Path
        d="M27.393 25.5228H44.4965V34.658L62.8135 18.7431L44.4965 2.82812V11.9633H27.393M37.4206 25.5023H20.3171V16.3671L2 32.282L20.3171 48.197V39.0617H37.4206"
        stroke={color ?? theme.colors.cyprus}
        strokeWidth="3.86118"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TransactionIcon;
