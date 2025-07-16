import { useEffect } from 'react';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { EducationTypesEnum, IKnowledgeBaseListItem } from '../../../entities/knowledgeBaseList/IKnowledgeBaseListItem';

export const useKnowledgeBase = () => {
    const { setItems, items } = useKnowledgeBaseStore();

    useEffect(() => {
        const mockData: IKnowledgeBaseListItem[] = [
            {
                id: 1,
                contentId: 1,
                name: 'React Native',
                slug: 'react-native',
                description: 'Офіційна документація',
                image: { id: 1, url: 'https://reactnative.dev/img/header_logo.svg' },
                createdAt: '2024-01-01',
                updatedAt: '2024-01-01',
                sortNumber: 1,
                type: EducationTypesEnum.DOCUMENT,
                itemCounts: {
                    FOLDER: 0,
                    DOCUMENT: 5,
                    COURSE: 0,
                    QUIZ: 0,
                    QUESTIONNAIRE: 0,
                    ANNOUNCEMENT: 0,
                },
            },
        ];

        setItems(mockData);
    }, [setItems]);

    return {
        items,
        setItems,
    };
};