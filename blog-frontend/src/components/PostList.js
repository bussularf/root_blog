import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, IconButton, Container, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

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
      <Typography variant="h4" component="h1" gutterBottom color='white'
      sx={{ textShadow: '2px 2px 4px #000002;' }}>
        Blog Posts
      </Typography>
      {posts.map(post => (
        <Card 
          key={post.id}
          sx={{
            marginBottom: '16px',
            backgroundColor: '#D7C3F1',
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {post.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {post.content}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
              }}
            >
              <IconButton
                color="secondary"
                onClick={() => handleDelete(post.id)}
                sx={{                color: 'purple'
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default PostList;
