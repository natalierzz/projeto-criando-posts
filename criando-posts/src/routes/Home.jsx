import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';


import "./Home.css";


const Home = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

    try {
      const response = await blogFetch.get ("/posts");


      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }

  };

  

  useEffect(() => {

    getPosts();

  }, [])

  
 return (
    <Container maxWidth="md"> {/* Substitui a div principal por Container */}
      <Typography variant="h4" component="h1" gutterBottom> {/* Substitui h1 por Typography */}
        Últimos posts
      </Typography>

      {posts.length === 0 ? (
        <Typography>Carregando...</Typography> // Substitui p por Typography
      ) : (
        posts.map((post) => (
          <Card key={post.id} sx={{ mb: 3 }}> {/* Substitui div.post por Card */}
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom> {/* Substitui h2 por Typography */}
                {post.title}
              </Typography>
              <Typography variant="body1" paragraph> {/* Substitui p por Typography */}
                {post.body}
              </Typography>
              <Button 
                variant="contained" 
                component={Link} 
                to={`posts/${post.id}`} 
                sx={{ mt: 2 }} // Adiciona um espaçamento superior
              >
                Ler mais
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Home;