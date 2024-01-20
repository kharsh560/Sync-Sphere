import React from "react";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { API } from "../../service/Api";

import { Link } from "react-router-dom";
// -------------------------
import {
  Box,
  CardActions,
  CardContent,
  Paper,
  Typography,
  styled,
  Button,
  TextareaAutosize,
  Card,
} from "@mui/material";

import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

// ------------

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize: none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const Author = styled(Box)(({ theme }) => ({
  color: "#878787",
  display: "flex",
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

function DetailView() {
  const { id } = useParams();

  const url =
    "https://t4.ftcdn.net/jpg/04/29/64/57/360_F_429645702_EXZw2TFIzZBjegrXvBzg68gzd4aD62kB.jpg";

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      console.log("response from the backend", response);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Paper
          elevation={24}
          sx={{
            bgcolor: "hsl(0, 0%, 89.5%)",
            border: "2px solid black",
            padding: "4px",
            borderRadius: "6px",
          }}
        >
          <Image src={url} alt="post" />
          <Box style={{ float: "right" }}>
            {/* <CardActions>
                        <Link to="/edit">
                            <Button variant="outlined" color="primary">
                                Edit
                            </Button>
                        </Link>
                    </CardActions>  */}
          </Box>
          <Heading>Project : {post.title}</Heading>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "4px 14px",
            }}
          >
            <Author>
              <Typography>
                <span style={{ fontWeight: 600 }}>
                  Username : {post.username}
                </span>
              </Typography>
            </Author>
            <Author>
              <Typography>
                <span style={{ fontWeight: 600 }}>
                  {new Date(post.createdDate).toDateString()}
                </span>
              </Typography>
            </Author>
          </Box>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ bgcolor: "hsl(0, 0%, 89.5%)" }}
            >
              Project Budget:
              <CurrencyRupeeOutlinedIcon fontSize="icon" />
              {post.budget}
            </Typography>
            {/* ----------------- */}
            <Box sx={{ bgcolor: "hsl(0, 0%, 89.5%)" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ bgcolor: "hsl(0, 0%, 89.5%)", marginTop: 3 }}
              >
                Details :-
              </Typography>

              <Box
                sx={{
                  padding: "3.5px 0px",
                }}
              >
                <Typography>
                  <span style={{ fontWeight: 600 }}>Created As : </span>
                  Individual
                </Typography>

                <Typography>
                  <span style={{ fontWeight: 600 }}>Created By :</span> Abhyuday
                  Pratap Singh
                </Typography>

                <Typography>
                  <span style={{ fontWeight: 600 }}>
                    CSR Status : Verrified
                  </span>
                </Typography>

                <Typography>
                  <span style={{ fontWeight: 600 }}>Contact : </span>
                  {post.number}
                </Typography>

                <Typography>
                  <span style={{ fontWeight: 600 }}>Email : </span>
                  {post.email}
                </Typography>
              </Box>

              <Box>
                <Typography>
                  <span style={{ fontWeight: 600 }}>Summary : </span>
                  {post.summary}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ bgcolor: "hsl(0, 0%, 89.5%)", marginTop: "15px" }}>
              <Typography>
                <span style={{ fontWeight: 600 }}>Location : </span>
                {post.address}
              </Typography>

              <Typography>
                <span style={{ fontWeight: 600 }}>Locatoin URL: </span>{" "}
                {post.address}
              </Typography>
            </Box>
            {/* ----------------- */}

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginTop: 3 }}
            >
              Description :-
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Link to={"/join"}>
                <Button variant="contained">Join</Button>
              </Link>
            </Typography>
          </CardContent>
        </Paper>
      </Container>
    </>
  );
}

export default DetailView;
