import React, { useState, useEffect, useRef } from 'react';
import styles from './CreateCalendar.module.css';
import Card from '../../Atoms/Card/Card';

function CreateCalendar() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const textAreaRef = useRef(null);
  const [titleFocus, setTitleFocus] = useState(false);
  const [subtitleFocus, setSubtitleFocus] = useState(false);
  const [descriptionFocus, setDescriptionFocus] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length < 5001) {
      setDescription(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    if (event.target.value.length < 21) {
      setTitle(event.target.value);
    }
  };

  const handleSubtitleChange = (event) => {
    if (event.target.value.length < 21) {
      setSubtitle(event.target.value);
    }
  };

  useEffect(() => {
    // Adjust the height of the textarea based on its scroll height
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [description]);

  return (
    <div className={styles.main}>
      <div className={styles.titlee}>
        <span>Create Calendar</span>
        <button>Next</button>
      </div>
      <div className={styles.containercard}>
      <div className={styles.inpoo}>
        <div className={titleFocus ? styles.titlef : styles.title}>
          <span>Title</span>
          <input
            type="text"
            placeholder="Add your title"
            onChange={handleTitleChange}
            value={title}
            onFocus={() => setTitleFocus(true)}
            onBlur={() => setTitleFocus(false)}
          />
          <span style={title.length>16 ? { alignSelf: 'flex-end', color:'rgb(204, 5, 5)' } : { alignSelf: 'flex-end', color:'black' }}>{titleFocus ? title.length+'/20' : ''}</span>
        </div>
        <div className={subtitleFocus ? styles.subtitlef : styles.subtitle}>
          <span>Subtitle</span>
          <input
            type="text"
            placeholder="Add your subtitle"
            onChange={handleSubtitleChange}
            value={subtitle}
            onFocus={() => setSubtitleFocus(true)}
            onBlur={() => setSubtitleFocus(false)}
          />
          <span style={subtitle.length>16 ? { alignSelf: 'flex-end', color:'rgb(204, 5, 5)' } : { alignSelf: 'flex-end' }}>{subtitleFocus ? subtitle.length+'/20' : ''}</span>
        </div>
        <div className={descriptionFocus ? styles.descriptionf : styles.description}>
          <span>Description</span>
          <textarea
            ref={textAreaRef}
            rows={5}
            value={description}
            onChange={handleChange}
            placeholder="Add your text"
            onFocus={() => setDescriptionFocus(true)}
            onBlur={() => setDescriptionFocus(false)}
            style={{ overflow: 'hidden', resize: 'none' }} // Prevent manual resizing
          />
          <span style={description.length>4750 ? { alignSelf: 'flex-end', color:'rgb(204, 5, 5)' } : { alignSelf: 'flex-end' }}>{descriptionFocus ? description.length+'/5000' : ''}</span>
        </div>
      </div>
      <Card title={title} description={subtitle} linkss={' '} />
      </div>
    </div>
  );
}

export default CreateCalendar;
