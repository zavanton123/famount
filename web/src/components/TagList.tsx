import axios from 'axios';
import React, {useEffect, useState} from 'react';

interface ITag {
  name: string;
}

export const TagList = () => {
  const [tags, setTags] = useState<Array<ITag>>([]);

  useEffect(() => {
    console.log(`zavanton - use effect`);
    const loadTags = async () => {
      try {
        const response = await axios.get('/api/tags');
        const data = await response.data;
        console.log(`zavanton - tags`);
        console.log(data);
        setTags(data.tags);
      } catch (err) {
        console.log(`zavanton - error: ${err}`);
      }
    }

    loadTags();
  });


  let content;
  if (tags.length > 0) {
    console.log(`zavanton - not empty`);
    console.log(tags);
    content = <ul> {tags.map(tag => <li key={tag.name}>{tag.name}</li>)} </ul>
  } else {
    console.log(`zavanton - empty tags`);
    content = <p>No tags yet...</p>
  }

  return (
    <>
      {content}
    </>
  );
}
