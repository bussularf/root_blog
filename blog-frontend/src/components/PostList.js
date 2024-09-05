import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography, Container } from '@mui/material';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <Container
    sx={{
      backgroundColor: '#E2BBE9',
      padding: '16px',
      borderRadius: '8px',
      marginTop: '20px',
      marginBottom: '40px',
    }}
    >
        <Typography variant="h4" component="h1" gutterBottom>
          Blog Posts
        </Typography>
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <ListItemText 
              primary={<Typography variant="h6">{post.title}</Typography>}
              secondary={<Typography variant="body1">{post.content}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostList;
