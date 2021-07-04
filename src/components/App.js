import { useState } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      {/* onSubmit is my optional name */}
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
