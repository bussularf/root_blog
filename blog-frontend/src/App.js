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
  typography: {
    fontFamily: '"Playfair Display", serif',
  },
});

function App() {
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
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
          borderRadius: '0 0 8px 8px',
          padding: '16px',
          textShadow: '2px 2px 4px #000002;'

        }}
      >
        <Toolbar>
          <Container
          sx={{
            display: 'flex',
          }}
          >
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              My Blog
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleOpenForm}
                ref={buttonRef}
                sx={{ boxShadow: '2px 2px 4px 1px #000002;'}}
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
