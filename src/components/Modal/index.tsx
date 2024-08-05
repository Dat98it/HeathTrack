import {useAppTheme} from '@hooks/theme';
import React, {ReactNode} from 'react';
import {Modal as RnModal, View} from 'react-native';
import makeStyles from './styles';

interface CommonModalProps {
  position?: 'bottom' | 'center';
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<CommonModalProps> = ({
  visible,
  onClose,
  children,
  position,
}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme, position);

  return (
    <RnModal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </RnModal>
  );
};
