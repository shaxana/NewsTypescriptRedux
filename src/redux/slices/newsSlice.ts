import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  img: string;
  likes: number;
  dislikes: number;
}

const newsSlice = createSlice({
  name: 'news',
  initialState: [] as NewsItem[],
  reducers: {
    likeNews: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const newsItem = state.find((item) => item.id === id);
      if (newsItem) {
        newsItem.likes += 1;
      }
    },
    dislikeNews: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const newsItem = state.find((item) => item.id === id);
      if (newsItem) {
        newsItem.dislikes += 1;
      }
    },
  },
});

export const { likeNews, dislikeNews } = newsSlice.actions;
export default newsSlice.reducer;
