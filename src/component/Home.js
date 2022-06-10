import React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  let navigate = useNavigate();
  const BackLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <div className="container">
            <div> 
          <Button variant="contained" onClick={BackLogin} style={{position: 'relative', left:'30%', margin:'2%',borderRadius:'12px',background:'purple'}}>
            Logout
          </Button>
          </div>
          {items.slice(0, visible).map((item) => (
            <div className="card">
              <div
                className="id"
                style={{
                  border: "2px solid black",
                  margin: "1%",
                  padding: "5%",
                  background:"blue"
                  
                }}
              >
                {/* grid */}
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    {/* <Grid item xs={4}>
          <Item>
          <span>{item.id}</span>
          </Item>
        </Grid> */}
                    <Grid item xs={4}>
                      <img
                        src={item.thumbnailUrl}
                        alt="logo"
                        style={{ borderRadius: "100%" }}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <h1>John dep</h1>
                    </Grid>
                    <Grid item xs={8}>
                      <p style={{ border: "2px solid black" }}>{item.title}</p>
                    </Grid>
                  </Grid>
                </Box>

                {/* button */}
                <div>
                  <Stack spacing={2} direction="row">
                    <Button variant="text"  style={{position: 'relative',borderRadius:'12px',background:'purple',color:"white"}}>Like</Button>
                    <Button variant="text" style={{position: 'relative',borderRadius:'12px',background:'green',color:"white"}}>Comment</Button>
                    {/* <Button variant="contained" onClick={HomeFifteenTo}>Connect</Button> */}
                  </Stack>
                </div>
              </div>
            </div>
          ))}
          {/* <button onClick={showMoreItems} > Load more</button> */}
          <Button variant="contained" onClick={showMoreItems}>
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
