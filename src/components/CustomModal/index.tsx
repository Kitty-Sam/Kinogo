import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-native';
import { CentredView, ModalView } from '~components/style';
import { useColor } from '~hooks/useColor';

export const CustomModal: FC<PropsWithChildren> = ({ children }) => {
    const { bgColorModal } = useColor();
    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <CentredView>
                <ModalView bgColor={bgColorModal}>{children}</ModalView>
            </CentredView>
        </Modal>
    );
};

