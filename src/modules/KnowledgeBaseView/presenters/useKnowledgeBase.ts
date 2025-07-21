import { useEffect } from 'react';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { EducationTypesEnum, IKnowledgeBaseListItem } from '../../../entities/knowledgeBaseList/IKnowledgeBaseListItem';

const BASE_URL = 'https://api-lms.opdev.pp.ua/api/v1';
const TOKEN = '631|kHXehU4n1ekAK3krwlEqblNDtv8aUx2DLLwKEjnA4f9a3933'

export const useKnowledgeBase = () => {
    const { setItems, items } = useKnowledgeBaseStore();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/knowledge-base?offset=0&limit=20&sortedDirection=ASC`,
          {
            headers: {
              'accept': '*/*',
              'x-partner': 'dev',
              'Authorization': `Bearer ${TOKEN}`,
            },
          }
        );

        const data = await response.json();
        setItems(data.rows);
      } catch (error) {
        console.error('Помилка при отриманні бази знань:', error);
      }
    };

    fetchData();
  }, [setItems]);

  return { items: Array.isArray(items) ? items : [] };
};