import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Snackbar, Alert, Box, Container, Typography } from '@mui/material';

const CreatePostForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState('success');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/posts', {
        post: { title, content },
      });
      setMessage('Post created successfully!');
      setSnackbarType('success');
      setOpenSnackbar(true);
      setTitle('');
      setContent('');
      onClose();
    } catch (error) {
      setMessage('Error creating post');
      setSnackbarType('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
    sx={{
      backgroundColor: '#E2BBE9',
      padding: '16px',
      borderRadius: '8px',
      marginTop: '20px',
      marginBottom: '16px',
    }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Create a New Post
      </Typography>
      {message && (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarType}>
            {message}
          </Alert>
        </Snackbar>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Box sx={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Create Post
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={onClose}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreatePostForm;
