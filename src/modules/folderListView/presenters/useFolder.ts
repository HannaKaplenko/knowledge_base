import { useEffect, useState } from 'react';
import { useUIContext } from '../../../UIProvider';

const BASE_URL = 'https://api-lms.opdev.pp.ua/api/v1';
const TOKEN = '631|kHXehU4n1ekAK3krwlEqblNDtv8aUx2DLLwKEjnA4f9a3933';

export const useFolder = (slug: string) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useUIContext();

  useEffect(() => {
    const fetchFolder = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASE_URL}/knowledge-base/folder/${slug}`, {
          headers: {
            'accept': '*/*',
            'x-partner': 'dev',
            'Authorization': `Bearer ${TOKEN}`,
          },
        });
        const data = await response.json();
        setItems(data.rows || data);
      } catch (e) {
        setError(t("useFolder.errorMessage"));
      } finally {
        setLoading(false);
      }
    };

    fetchFolder();
  }, [slug]);

  return { items, loading, error };
};
