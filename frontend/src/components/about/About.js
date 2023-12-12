import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, CardMedia, Fab, Grid, Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';

const About = () => {
  const paperStyle = {
    minWidth: 300,
    borderRadius: 3,
    // backgroundColor: "red",
    height: "fit-content",
    // padding: "6px",
    margin: "7px",
  };

  return (
    <>
      <Typography sx={{ fontSize: 100, fontWeight: 500, display: "flex", alignContent: "center", justifyContent: "center" }}>
        About - SyncSphere
      </Typography>
      <Typography sx={{ fontSize: 40, display: "flex", alignContent: "center", justifyContent: "center", marginX: 17 }}>We are a revolutionary platform connecting individuals eager to volunteer or donate, companies pursuing CSR opportunities and NGOs facing resource constraints. Our mission is to forge impactful collaborations, uniting these diverse groups to address societal challenges and contribute to SDG Goal 17.</Typography>

      <Typography sx={{ fontSize: 100, fontWeight: 500, display: "flex", alignContent: "center", justifyContent: "center" }}>FEATURES We Offers</Typography>

      <Typography sx={{ fontSize: 60, fontWeight: 500, display: "flex", alignContent: "center",marginTop:7}}>1) Donate as Individual:</Typography>
      <Typography sx={{ fontSize: 40, display: "flex", alignContent: "center", justifyContent: "center", marginX: 17 }}>Our app empowers individuals to contribute directly to NGO projects. Streamlining the donation process, users can effortlessly support causes that resonate with them. Experience the simplicity of making a meaningful impact as we connect you directly with projects that align with your philanthropic vision.</Typography>

      <Typography sx={{ fontSize: 60, fontWeight: 500, display: "flex", alignContent: "center",marginTop:7 }}>2) Join as Volunteer:</Typography>
      <Typography sx={{ fontSize: 40, display: "flex", alignContent: "center", justifyContent: "center", marginX: 17 }}>Our app goes beyond donations; individuals can explore NGO posts and seamlessly join as volunteers for specific projects. Experience a holistic approach to giving by connecting directly with causes, contributing funds, and actively participating in projects that align with your passion for positive change.</Typography>

      <Typography sx={{ fontSize: 60, fontWeight: 500, display: "flex", alignContent: "center",marginTop:7 }}>3) Create Post:</Typography>
      <Typography sx={{ fontSize: 40, display: "flex", alignContent: "center", justifyContent: "center", marginX: 17 }}>Empowering NGOs and individuals alike, our app serves as a unified platform for social impact. Create and share posts for social work projects, attracting volunteers and donations from both individuals and companies. Fostering a collaborative environment, our app connects passionate contributors with meaningful causes, ensuring that social impact flourishes through collective efforts and diverse contributions. Join us in building a community where positive change is driven by shared dedication and impactful collaborations.</Typography>

      <Typography sx={{ fontSize: 60, fontWeight: 500, display: "flex", alignContent: "center",marginTop:7 }}>4) Get CSR documents:</Typography>
      <Typography sx={{ fontSize: 40, display: "flex", alignContent: "center", justifyContent: "center", marginX: 17 }}>Simplify corporate social responsibility decisions with our app. Big companies can effortlessly acquire CSR documents directly from NGOs, enabling a swift and efficient evaluation process. This direct access ensures transparency and empowers companies to make informed decisions on the eligibility of NGOs for Corporate Social Responsibility initiatives, fostering impactful and transparent corporate-community collaborations.</Typography>

      <Typography sx={{ fontSize: 60, fontWeight: 500, display: "flex", alignContent: "center",marginTop:7 }}>5) Chat with NGOs :</Typography>
      <Typography sx={{ fontSize: 40, display: "flex", alignContent: "center", justifyContent: "center", marginX: 17 }}>Elevate collaboration in our platform as major CSR companies and donors engage in direct, real-time conversations with NGOs. This unique feature enhances transparency, enabling constructive dialogues that lead to impactful partnerships. Foster meaningful connections and drive positive change by seamlessly connecting with NGOs, aligning visions, and collectively contributing to social betterment. Join us in creating a space where communication fuels transformative collaborations for a brighter future.</Typography>

      <Typography sx={{ fontSize: 100, fontWeight: 600, display: "flex", alignContent: "center", justifyContent: "center" ,marginTop:7 }} >Out Team</Typography>

      <div style={{ display: "flex", backgroundColor: "", justifyContent: "center", gap: 20  }}>
        {/* Abhyuday */}
        <Paper style={{ ...paperStyle, gap: 10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              style={{
                backgroundImage:
                  'url(https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4)',
                backgroundSize: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                alt: "image",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Abhyuday
              </Typography>
            </CardContent>
          </CardActionArea>
        </Paper>
        {/* Aditya Jaiswal */}
        <Paper style={{ ...paperStyle, gap: 10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              style={{
                backgroundImage:
                  'url(https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4)',
                backgroundSize: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                alt: "image",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aditya Jaiswal
              </Typography>
            </CardContent>
          </CardActionArea>
        </Paper>
        {/* Akhilesh */}
        <Paper style={{ ...paperStyle, gap: 10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              style={{
                backgroundImage:
                  'url(https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4)',
                backgroundSize: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                alt: "image",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Akhilesh
              </Typography>
            </CardContent>
          </CardActionArea>
        </Paper>

        {/* Harsh */}
        <Paper style={{ ...paperStyle, gap: 10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              style={{
                backgroundImage:
                  'url(https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4)',
                backgroundSize: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                alt: "image",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Harsh
              </Typography>
            </CardContent>
          </CardActionArea>
        </Paper>
      </div>




    </>
  )
}

export default About