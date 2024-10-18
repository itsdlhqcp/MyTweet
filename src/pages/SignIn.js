import React from 'react';
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import TwitterIcon from '@rsuite/icons/legacy/Twitter';  

const SignIn = () => {

   const signInWithProvider = (provider) => {
      // Add your sign-in logic here
   }

   const onXLogin = () => {
      signInWithProvider();
   }

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center mb-3">
                <h2>Welcome to MyTweet</h2>
                <p>Let's have fun with Personal Twitter</p>
              </div>

              <div className="mt-3">
                <Button
                  block
                  style={{ backgroundColor: '#1DA1F2', color: 'black', fontWeight: 'bold' }}  
                >
                  Sign In with Twitter
                </Button>
              </div>
              
             
              <div className="text-center mt-3">
                <TwitterIcon style={{ fontSize: '2rem', color: '#1DA1F2' }} />  
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
