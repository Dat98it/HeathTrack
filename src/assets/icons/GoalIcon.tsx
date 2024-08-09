import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {FC} from 'react';
import {FillProps, Path, Svg, Rect, StrokeProps} from 'react-native-svg';

type Props = {
  color?: keyof (typeof DefaultTheme)['colors'];
  size?: number;
};

export const GoalIconIcon: FC<Props> = ({color = 'void', size = 12}) => {
  const theme = useAppTheme();

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Rect
        x="11.5393"
        y="11.7166"
        width="11"
        height="11"
        rx="2.5"
        transform="rotate(179.804 11.5393 11.7166)"
        stroke={theme.colors[color] as StrokeProps['stroke']}
      />
      <Path
        d="M3.00909 2.74513C2.73295 2.74608 2.50986 2.9707 2.5108 3.24684L2.52617 7.74681C2.52711 8.02295 2.75173 8.24604 3.02787 8.2451C3.30401 8.24416 3.5271 8.01954 3.52616 7.7434L3.5125 3.74342L7.51248 3.72976C7.78862 3.72882 8.01171 3.5042 8.01077 3.22806C8.00983 2.95192 7.78521 2.72883 7.50907 2.72977L3.00909 2.74513ZM9.38359 8.86985L3.36314 2.89037L2.65846 3.59989L8.67891 9.57937L9.38359 8.86985Z"
        fill={theme.colors[color] as FillProps['fill']}
      />
    </Svg>
  );
};

export default GoalIconIcon;
