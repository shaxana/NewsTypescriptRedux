import  { useEffect, useState } from 'react';
import axios from 'axios';

type NewsItem = {
  id: string | null;
  title: string;
  description: string;
  img: string;
  liked: boolean;
  disliked: boolean;
};
type Props = {}

function Admin({}: Props){
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    axios.get<NewsItem[]>('http://localhost:3000/news').then((res) => {
      setNewsList(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Image</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Liked</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Disliked</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{news.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{news.title}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{news.description}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <img src={news.img} alt="News" style={{ width: '50px', height: '50px' }} />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{news.liked ? 'Liked' : 'Not Liked'}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{news.disliked ? 'Disliked' : 'Not Disliked'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
