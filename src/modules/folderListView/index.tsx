import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import FolderListViewUI from './ui/components';

interface FolderItem {
  id: number;
  name: string;
}

const FolderListView = () => {
  const route = useRoute();
  const { slug } = route.params as { slug: string };

  const [items, setItems] = useState<FolderItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFolderItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api-lms.opdev.pp.ua/api/v1/knowledge-base/folder/${slug}`, {
          headers: {
            accept: '*/*',
            'x-partner': 'dev',
            Authorization: `Bearer 631|kHXehU4n1ekAK3krwlEqblNDtv8aUx2DLLwKEjnA4f9a3933`,
          },
        });
        const data = await response.json();
        setItems(data.rows || []);
      } catch (err) {
        setError('Помилка при отриманні папки');
      } finally {
        setLoading(false);
      }
    };

    fetchFolderItems();
  }, [slug]);

  return <FolderListViewUI slug={slug} items={items} loading={loading} error={error ?? undefined} />;
};

export default FolderListView;
