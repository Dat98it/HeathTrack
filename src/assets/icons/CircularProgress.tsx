import {Text} from '@components/Text';
import {View} from '@components/View';
import React from 'react';
import Svg, {Circle} from 'react-native-svg';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progress: number; // progress value between 0 and 1
  color: string;
  backgroundColor: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  progress,
  color,
  backgroundColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - circumference * progress;

  return (
    <View width={size} height={size}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      {/* Display progress percentage */}
      <View
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        justifyContent="center"
        alignItems="center">
        <Text color="white" fontSize={20} fontWeight={'bold'}>
          {(progress * 100).toFixed(0)}%
        </Text>
      </View>
    </View>
  );
};

export default CircularProgress;
