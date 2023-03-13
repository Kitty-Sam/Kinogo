import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOpen } from '~hooks/useOpen';
import { LanguagePickerProps } from '~components/LanguagePicker/type';
import CountryFlag from 'react-native-country-flag';
import {
    CentredView,
    ContainerView,
    DropDownContainer,
    ItemContainer,
    PickerText,
} from '~components/LanguagePicker/style';
import { useColor } from '~hooks/useColor';

export const LanguagePicker: FC<LanguagePickerProps> = ({ label, data }) => {
    const { textColor } = useColor();

    const [selected, setSelected] = useState<{ label: string; value: string } | null>(null);

    const { isOpen, onClose, onOpen, onToggle } = useOpen(false);

    const { i18n } = useTranslation();

    const onItemPress = (item: { value: string; label: string }): void => {
        i18n.changeLanguage(item.value);
        setSelected(item);
        onClose();
    };

    const renderItem = ({ item }: { item: { value: string; label: string } }) => (
        <ItemContainer onPress={() => onItemPress(item)}>
            <CountryFlag isoCode={item.value === 'en' ? 'us' : 'ru'} size={25} />
            <PickerText textColor={textColor}>{item.label}</PickerText>
        </ItemContainer>
    );

    const DropDown = () => {
        return (
            <>
                {isOpen && (
                    <DropDownContainer onPress={onToggle}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </DropDownContainer>
                )}
            </>
        );
    };

    return (
        <CentredView>
            <ContainerView>
                <CountryFlag isoCode={i18n.language === 'en' ? 'us' : 'ru'} size={25} />
                <PickerText textColor={textColor}>{selected ? selected.label : label}</PickerText>
                {!isOpen ? (
                    <Icon name="chevron-down-outline" onPress={onOpen} size={24} color={textColor} />
                ) : (
                    <Icon name="chevron-up" onPress={onClose} size={24} color={textColor} />
                )}
            </ContainerView>
            <DropDown />
        </CentredView>
    );
};
