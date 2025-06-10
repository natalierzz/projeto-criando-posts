import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Importações do Material UI
import { Container, Typography, Box, CircularProgress } from '@mui/material'; // Adicione CircularProgress para o carregamento

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <Container maxWidth="md"> {/* Substitui a div principal por Container */}
      {!post ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}> {/* Centraliza o carregamento */}
          <CircularProgress /> {/* Componente de carregamento do MUI */}
          <Typography variant="body1" sx={{ ml: 2 }}>Carregando...</Typography>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}> {/* Adiciona um espaçamento superior */}
          <Typography variant="h4" component="h1" gutterBottom> {/* Substitui h2 por Typography */}
            {post.title}
          </Typography>
          <Typography variant="body1" paragraph> {/* Substitui p por Typography */}
            {post.body}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default PostDetails;
