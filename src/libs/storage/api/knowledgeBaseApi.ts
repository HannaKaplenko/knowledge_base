const BASE_URL = 'https://api-lms.opdev.pp.ua/api/v1';
const TOKEN = '631|kHXehU4n1ekAK3krwlEqblNDtv8aUx2DLLwKEjnA4f9a3933';

export const getKnowledgeBase = async () => {
  try {
    const response = await fetch(`${BASE_URL}/knowledge-base?offset=0&limit=20&sortedDirection=ASC`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'x-partner': 'dev',
        'Authorization': `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Помилка ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при отриманні бази знань:', error);
    throw error;
  }
};

export const getFolderBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL}/knowledge-base/folder/${slug}`, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'x-partner': 'dev',
        'Authorization': `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Помилка ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при отриманні папки:', error);
    throw error;
  }
};
