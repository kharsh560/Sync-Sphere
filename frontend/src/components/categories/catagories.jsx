import React from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { catagories } from "../constants/data";
import { Link, useSearchParams } from "react-router-dom";
import "./categories.css";

const StyledTable = styled(Table)`
  border: 2px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #00df9a;
  color: #000300;
  font-weight: 600;
  border: 2px solid #00df9a;

  &:hover {
    background: #fcfcfc;
    color: crimson;
    border: 2px solid #00df9a;
  }
`;
const StyledHead = styled(TableCell)`
  font-size: 1rem;
  background: #e8e8e8;
  color: black;
  font-weight: 850;
  letter-spacing: 0.05em;
  text-align: center;
`;
const StyledTableCell = styled(TableCell)`
  text-align: center;

  &:hover {
    background: #e8e8e8;
    color: crimson;
    // font-weight: 850;
    // letter-spacing: 0.05em;
    // border: 2px solid #00df9a;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;


function Categories() {
  const divStyle = {
    maxHeight: "100vh",
    overflowX: "hidden",
    border: "2px solid grey",
    borderRadius: "14px",
    padding: "5px",
    margin: "1px",
  };
  
  const [searchParams] = useSearchParams();
  const category =searchParams.get('category')

  return (
    <>
      <Grid container>
        <div style={divStyle} className="scrollbar">
          <Link to={`/create?category=${category || ''}`}>
            <StyledButton variant="contained" color="primary">
              New Project
            </StyledButton>
          </Link>

          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledHead>
                  <StyledLink to={"/projects"}>All Categories</StyledLink>
                </StyledHead>
              </TableRow>
            </TableHead>

            <TableBody>
              {catagories.map((category) => (
                <TableRow key={category.id}>
                  <StyledTableCell>
                    
                    <StyledLink to={`/projects/?category=${category.type}`}>
                    {category.type}
                    </StyledLink>
                    
                    </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </div>
      </Grid>
    </>
  );
}

export default Categories;
