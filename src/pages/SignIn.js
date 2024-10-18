// import React, { useEffect } from 'react';
// import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
// import TwitterIcon from '@rsuite/icons/legacy/Twitter'; 


// const TWITTER_API_KEY = 'CDCoeG6ZN3vxFoqNF8r98W4JT';
// const TWITTER_API_SECRET_KEY = '8OOBTIxdt4a12I4nSTatVrE0Ee3O2GTkfMXX1LiUd7P2MlKXWr';
// const CALLBACK_URL = 'https://my-tweet-eight.vercel.app/signin';

// const SignIn = () => {

//    const signInWithProvider = () => {
//       // Add your sign-in logic here
//       // Redirect to Twitter's OAuth page
//     const oauthUrl = `https://api.twitter.com/oauth/authenticate?oauth_token=${TWITTER_API_KEY}`;
//     window.location.href = oauthUrl;
//    }

//    const onXLogin = () => {
//       signInWithProvider();
//    }

//    // Check for Twitter OAuth callback
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const oauthToken = urlParams.get('oauth_token');
//     const oauthVerifier = urlParams.get('oauth_verifier');

//     if (oauthToken && oauthVerifier) {
//       // You can send the tokens to your backend to verify the user
//       console.log('Logged in successfully'); // Log success message
//       // Here, you can also handle storing the user session or redirecting the user
//     }
//   }, []);

//   return (
//     <Container>
//       <Grid className="mt-page">
//         <Row>
//           <Col xs={24} md={12} mdOffset={6}>
//             <Panel>
//               <div className="text-center mb-3">
//                 <h2>Welcome to MyTweet</h2>
//                 <p>Let's have fun with Personal Twitter</p>
//               </div>

//               <div className="mt-3">
//                 <Button
//                   block
//                   style={{ backgroundColor: '#1DA1F2', color: 'black', fontWeight: 'bold' }} 
//                   onClick={onXLogin} 
//                 >
//                   Sign In with Twitter
//                 </Button>
//               </div>
              
//               <div className="text-center mt-3">
//                 <TwitterIcon style={{ fontSize: '2rem', color: '#1DA1F2' }} />  
//               </div>
//             </Panel>
//           </Col>
//         </Row>
//       </Grid>
//     </Container>
//   );
// };

// export default SignIn;


// import React, { useEffect, useState } from 'react';
// import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
// import TwitterIcon from '@rsuite/icons/legacy/Twitter';

// // Replace with your Twitter OAuth 2.0 Client ID
// const TWITTER_CLIENT_ID = 'CDCoeG6ZN3vxFoqNF8r98W4JT';
// const TWITTER_CLIENT_SECRET = '8OOBTIxdt4a12I4nSTatVrE0Ee3O2GTkfMXX1LiUd7P2MlKXWr';
// const CALLBACK_URL = 'https://my-tweet-eight.vercel.app/signin';

// const SignIn = () => {
//   const [accessToken, setAccessToken] = useState(null);

//   // Function to redirect user to Twitter's OAuth 2.0 authentication page
//   const signInWithProvider = () => {
//     const oauthUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${TWITTER_CLIENT_ID}&redirect_uri=${encodeURIComponent(CALLBACK_URL)}&scope=tweet.read%20users.read&state=state123`;
//     window.location.href = oauthUrl;
//   };

//   // Function to handle login click
//   const onXLogin = () => {
//     signInWithProvider();
//   };

//   // Function to exchange authorization code for access token
//   const exchangeCodeForToken = async (authorizationCode) => {
//     const tokenUrl = 'https://api.twitter.com/2/oauth2/token';

//     const body = new URLSearchParams({
//       code: authorizationCode,
//       grant_type: 'authorization_code',
//       client_id: TWITTER_CLIENT_ID,
//       client_secret: TWITTER_CLIENT_SECRET,
//       redirect_uri: CALLBACK_URL,
//     });

//     try {
//       const response = await fetch(tokenUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: body.toString(),
//       });

//       const data = await response.json();

//       if (data.access_token) {
//         // Store the access token in localStorage
//         localStorage.setItem('twitter_access_token', data.access_token);
//         setAccessToken(data.access_token);
//         console.log('Access Token:', data.access_token);
//       } else {
//         console.error('Error exchanging code for token:', data);
//       }
//     } catch (error) {
//       console.error('Failed to exchange authorization code:', error);
//     }
//   };

//   // Check if Twitter redirected back with an authorization code
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const authorizationCode = urlParams.get('code');
//     const state = urlParams.get('state');

//     if (authorizationCode && state === 'state123') {
//       // Exchange the authorization code for an access token
//       exchangeCodeForToken(authorizationCode);
//     }
//   }, []);

//   return (
//     <Container>
//       <Grid className="mt-page">
//         <Row>
//           <Col xs={24} md={12} mdOffset={6}>
//             <Panel>
//               <div className="text-center mb-3">
//                 <h2>Welcome to MyTweet</h2>
//                 <p>Let's have fun with Personal Twitter</p>
//               </div>

//               <div className="mt-3">
//                 <Button
//                   block
//                   style={{ backgroundColor: '#1DA1F2', color: 'black', fontWeight: 'bold' }}
//                   onClick={onXLogin}
//                 >
//                   Sign In with Twitter
//                 </Button>
//               </div>

//               {accessToken && (
//                 <div className="text-center mt-3">
//                   <p>You are logged in with Twitter! Access Token is stored in LocalStorage.</p>
//                 </div>
//               )}

//               <div className="text-center mt-3">
//                 <TwitterIcon style={{ fontSize: '2rem', color: '#1DA1F2' }} />
//               </div>
//             </Panel>
//           </Col>
//         </Row>
//       </Grid>
//     </Container>
//   );
// };

// export default SignIn;



























import React, { useEffect, useState } from 'react'; 
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import TwitterIcon from '@rsuite/icons/legacy/Twitter';

// Replace with your Twitter OAuth 2.0 credentials
const TWITTER_CLIENT_ID = 'MmsxeUVOTGtwQ2pmT0FCc29RMVA6MTpjaQ';  // Provide your actual client ID
const TWITTER_CLIENT_SECRET = 'R_B-aSeIVJKIHWbhzZi8jpSE9fjvkgDlA5TDQRjBV9r_Uk5uWV';  // Provide your actual client secret
const CALLBACK_URL = 'https://my-tweet-eight.vercel.app/signin';  // Provide your actual callback URL

const SignIn = () => {
  const [accessToken, setAccessToken] = useState(null);

  // Function to redirect user to Twitter's OAuth 2.0 authentication page
  const signInWithProvider = () => {
    const oauthUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${TWITTER_CLIENT_ID}&redirect_uri=${encodeURIComponent(CALLBACK_URL)}&scope=tweet.read%20users.read&state=state123`;
    window.location.href = oauthUrl;
  };

  // Function to handle login click
  const onXLogin = () => {
    signInWithProvider();
  };

  // Function to exchange authorization code for access token
  const exchangeCodeForToken = async (authorizationCode) => {
    const tokenUrl = 'https://api.twitter.com/2/oauth2/token';

    const body = new URLSearchParams({
      code: authorizationCode,
      grant_type: 'authorization_code',
      client_id: TWITTER_CLIENT_ID,
      client_secret: TWITTER_CLIENT_SECRET,
      redirect_uri: CALLBACK_URL,
    });

    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      const data = await response.json();

      if (data.access_token) {
        // Store the access token in localStorage
        localStorage.setItem('twitter_access_token', data.access_token);
        setAccessToken(data.access_token);
        console.log('Access Token:', data.access_token);
      } else {
        console.error('Error exchanging code for token:', data);
      }
    } catch (error) {
      console.error('Failed to exchange authorization code:', error);
    }
  };

  // Check if Twitter redirected back with an authorization code
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    const state = urlParams.get('state');

    if (authorizationCode && state === 'state123') {
      // Exchange the authorization code for an access token
      exchangeCodeForToken(authorizationCode);
    }
  }, []);

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
                  onClick={onXLogin}
                >
                  Sign In with Twitter
                </Button>
              </div>

              {accessToken && (
                <div className="text-center mt-3">
                  <p>You are logged in with Twitter! Access Token is stored in LocalStorage.</p>
                </div>
              )}

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



















// import React, { useEffect, useState } from 'react'; 
// import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
// import TwitterIcon from '@rsuite/icons/legacy/Twitter';

// // Replace with your Twitter OAuth 2.0 credentials
// const TWITTER_CLIENT_ID = 'MmsxeUVOTGtwQ2pmT0FCc29RMVA6MTpjaQ';  // Provide your actual client ID
// const TWITTER_CLIENT_SECRET = 'R_B-aSeIVJKIHWbhzZi8jpSE9fjvkgDlA5TDQRjBV9r_Uk5uWV';  // Provide your actual client secret
// const CALLBACK_URL = 'https://my-tweet-eight.vercel.app/signin';  // Provide your actual callback URL

// const SignIn = () => {
//   const [accessToken, setAccessToken] = useState(null);

//   // Function to redirect user to Twitter's OAuth 2.0 authentication page
//   const signInWithProvider = () => {
//     const oauthUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${TWITTER_CLIENT_ID}&redirect_uri=${encodeURIComponent(CALLBACK_URL)}&scope=tweet.read%20users.read&state=state123`;
//     window.location.href = oauthUrl;
//   };

//   // Function to handle login click
//   const onXLogin = () => {
//     signInWithProvider();
//   };

//   // Function to exchange authorization code for access token
//   const exchangeCodeForToken = async (authorizationCode) => {
//     const tokenUrl = 'https://api.twitter.com/2/oauth2/token';

//     const body = new URLSearchParams({
//       code: authorizationCode,
//       grant_type: 'authorization_code',
//       client_id: TWITTER_CLIENT_ID,
//       client_secret: TWITTER_CLIENT_SECRET,
//       redirect_uri: CALLBACK_URL,
//     });

//     try {
//       const response = await fetch(tokenUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: body.toString(),
//       });

//       const data = await response.json();

//       if (data.access_token) {
//         // Store the access token in localStorage
//         localStorage.setItem('twitter_access_token', data.access_token);
//         setAccessToken(data.access_token);
//         console.log('Access Token:', data.access_token);
//       } else {
//         console.error('Error exchanging code for token:', data);
//       }
//     } catch (error) {
//       console.error('Failed to exchange authorization code:', error);
//     }
//   };

//   // Check if Twitter redirected back with an authorization code
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const authorizationCode = urlParams.get('code');
//     const state = urlParams.get('state');

//     if (authorizationCode && state === 'state123') {
//       // Exchange the authorization code for an access token
//       exchangeCodeForToken(authorizationCode);
//     }
//   }, []);

//   return (
//     <Container>
//       <Grid className="mt-page">
//         <Row>
//           <Col xs={24} md={12} mdOffset={6}>
//             <Panel>
//               <div className="text-center mb-3">
//                 <h2>Welcome to MyTweet</h2>
//                 <p>Let's have fun with Personal Twitter</p>
//               </div>

//               <div className="mt-3">
//                 <Button
//                   block
//                   style={{ backgroundColor: '#1DA1F2', color: 'black', fontWeight: 'bold' }}
//                   onClick={onXLogin}
//                 >
//                   Sign In with Twitter
//                 </Button>
//               </div>

//               {accessToken && (
//                 <div className="text-center mt-3">
//                   <p>You are logged in with Twitter! Access Token is stored in LocalStorage.</p>
//                 </div>
//               )}

//               <div className="text-center mt-3">
//                 <TwitterIcon style={{ fontSize: '2rem', color: '#1DA1F2' }} />
//               </div>
//             </Panel>
//           </Col>
//         </Row>
//       </Grid>
//     </Container>
//   );
// };

// export default SignIn;
