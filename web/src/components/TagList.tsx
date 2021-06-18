import axios from 'axios';
import React, {useEffect, useState} from 'react';

interface ITag {
  name: string;
}

export const TagList = () => {
  const [tags, setTags] = useState<Array<ITag>>([]);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const response = await axios.get('/api/tags');
        const data = await response.data;
        setTags(data.tags);
      } catch (err) {
        console.log(`zavanton - error: ${err}`);
      }
    }

    loadTags();
  }, []);

  let content;
  if (tags.length > 0) {
    content = <ul> {tags.map(tag => <li key={tag.name}>{tag.name}</li>)} </ul>
  } else {
    content = <p>No tags yet...</p>
  }

  return (
    <>
      <h1>Hello world 2</h1>
      {content}
    </>
  );
}
