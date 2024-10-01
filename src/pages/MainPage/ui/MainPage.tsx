import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <HStack>
                <ListBox
                    defaultValue={t('Выберите значение')}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '121233', disabled: true },
                        { value: '3', content: '1zxczc23' },
                    ]}
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
