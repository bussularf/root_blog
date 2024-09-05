import React, { useState, useRef, useEffect } from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Container, Box, AppBar, Toolbar, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9B86BD',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#9B86BD',
    },
  },
});

function App() {
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  const formRef = useRef(null); // Ref for the form container
  const buttonRef = useRef(null); // Ref for the button

  const handleOpenForm = () => {
    setShowCreatePostForm(true);
  };

  const handleCloseForm = () => {
    setShowCreatePostForm(false);
  };

  useEffect(() => {
    if (showCreatePostForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCreatePostForm]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static"
        sx={{
          backgroundColor: '#E2BBE9',
          marginBottom: '40px',
          borderRadius: '0 0 8px 8px',
          padding: '16px',
        }}
      >
        <Toolbar>
          <Container>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Blog
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleOpenForm}
                ref={buttonRef}
              >
                Create New Post
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <PostList />
        <div ref={formRef}>
          {showCreatePostForm && (
            <CreatePostForm onClose={handleCloseForm} />
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
