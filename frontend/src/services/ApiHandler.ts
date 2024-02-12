import { useState, useEffect } from 'react';

const useApi = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');

        if (jwtToken) {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          });

          if (response.ok) {
            const result = await response.json();
            setData(result);
          } else {
            console.error('API呼び出しエラー');
          }
        } else {
          console.error('JWTトークンがありません');
        }
      } catch (error) {
        console.error('エラーが発生しました', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useApi;