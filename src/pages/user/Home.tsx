import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { likeNews, dislikeNews } from './../../redux/slices/newsSlice';
import { useDispatch } from 'react-redux';

type Props = {};
type NewsItem = {
  id: string | null;
  title:string;
  description:string,
  img:string,
  liked:boolean,
  disliked:boolean
}
function Home({}: Props) {
  const dispatch = useDispatch()
  function handleLike(id: string | null) {
    if (id !== null) {
      dispatch(likeNews({ id }));
      const updatedNews = news.map(item => (item.id === id ? { ...item, liked: true } : item));
      setNews(updatedNews);
      localStorage.setItem('news', JSON.stringify(updatedNews));

    }
    
  }
  
  function handleDislike(id: string | null) {
    if (id !== null) {
      dispatch(dislikeNews({ id }));
      const updatedNews = news.map(item => (item.id === id ? { ...item, disliked: true } : item));
      setNews(updatedNews);
      localStorage.setItem('news', JSON.stringify(updatedNews));

    }
  }

  let [news, setNews] = useState<NewsItem[]>([])
  const theme = useTheme();
useEffect(()=>{
  axios("http://localhost:3000/news").then((res)=>{
setNews(res.data)
})
},[])
  return (
    <Container>
      <section>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <div style={{ paddingLeft: "20px" }}>
              <div
                className="topStory"
                style={{ display: "flex", marginTop: "30px" }}
              >
                <div className="topStoryLeftSide">
                  <h3 style={{ marginBottom: "10px" }}>TOP STORY</h3>

                  <h1>'Suits,' 'One Piece,' International Productions: What's Attracting Viewers To Netflix?</h1>
                  <p>
                  The streaming platform added 9 million subscribers in the third quarter, beating expectations and sending shares higher.
                  </p>
                  <ul>
                    <div>Lorem, ipsum dolor.</div>
                    <div>Lorem ipsum dolor sit.</div>
                    <div>Lorem, ipsum.</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div>Lorem, ipsum dolor.</div>
                  </ul>
                </div>

                <img
                  src="https://d.ibtimes.com/en/full/4468661/south-korean-internet-service-providers-have-accused-netflix-free-riding-their-networks-paying.webp?w=736&f=1eb08b1a8b7d03128ad5eb142fa20378"
                  alt=""
                  style={{ width: "550px", marginBottom: "30px" }}
                />
              </div>
              <hr />
              <Grid container spacing={2} style={{ display: "flex" }}>
                
                <Grid item xs={6}>
                  <h1>LATEST NEWS </h1>
                  <img
                    src="https://d.ibtimes.com/en/full/4503530/man-holds-copy-chiles-proposed-new-constitution-front-la-moneda-presidential-palace.webp?w=736&f=0ae7338a66da5f783a51d16a11c78f4c"
                    alt=""
                    width={320}
                  />
                  <h1>Chile Votes In Second Shot At New Constitution</h1>
                  <ul>
                    <li>
                      Portugal's Socialist Party Picks New Leader Ahead Of March
                      Vote
                    </li>
                    <li>Kuwait Emir Sheikh Nawaf Dies Aged 86</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                  </ul>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Live from space album cover"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 170,
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          component="div"
                          variant="h6"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          {`Italy, UK Leaders Unite On Migration, Agree Tunisia Deal`}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          British Prime Minister Rishi Sunak hailed Italian
                          premier Giorgia Meloni's approach to tackling illegal
                          migration Saturday, in a visit to Rome where they
                          agreed to co-fund a project to help migrants return
                          home from Tunisia.
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton aria-label="previous">
                          {theme.direction === "rtl" ? (
                            <SkipNextIcon />
                          ) : (
                            <SkipPreviousIcon />
                          )}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                          {theme.direction === "rtl" ? (
                            <SkipPreviousIcon />
                          ) : (
                            <SkipNextIcon />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Live from space album cover"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 170,
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          component="div"
                          variant="h6"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          {`Italy, UK Leaders Unite On Migration, Agree Tunisia Deal`}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          British Prime Minister Rishi Sunak hailed Italian
                          premier Giorgia Meloni's approach to tackling illegal
                          migration Saturday, in a visit to Rome where they
                          agreed to co-fund a project to help migrants return
                          home from Tunisia.
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton aria-label="previous">
                          {theme.direction === "rtl" ? (
                            <SkipNextIcon />
                          ) : (
                            <SkipPreviousIcon />
                          )}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                          {theme.direction === "rtl" ? (
                            <SkipPreviousIcon />
                          ) : (
                            <SkipNextIcon />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Live from space album cover"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: 170,
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                          component="div"
                          variant="h6"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          {`Italy, UK Leaders Unite On Migration, Agree Tunisia Deal`}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          British Prime Minister Rishi Sunak hailed Italian
                          premier Giorgia Meloni's approach to tackling illegal
                          migration Saturday, in a visit to Rome where they
                          agreed to co-fund a project to help migrants return
                          home from Tunisia.
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton aria-label="previous">
                          {theme.direction === "rtl" ? (
                            <SkipNextIcon />
                          ) : (
                            <SkipPreviousIcon />
                          )}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                          {theme.direction === "rtl" ? (
                            <SkipPreviousIcon />
                          ) : (
                            <SkipNextIcon />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Grid>

          {/* right */}
          <Grid item xs={3}>
            <div style={{ paddingRight: "20px" }}>
              <div className="topStory" style={{ display: "flex" }}>
                <div className="topStoryRightSide">
                  <h1>The Bottom Line </h1>
                  <img
                    src="https://d.ibtimes.com/en/full/4503530/man-holds-copy-chiles-proposed-new-constitution-front-la-moneda-presidential-palace.webp?w=736&f=0ae7338a66da5f783a51d16a11c78f4c"
                    alt=""
                    width={340}
                  />
                  <h1>title</h1>
                  <p>description</p>
                </div>
              </div>
            </div>
            <div>news title</div>
            <div>news title</div>
            <div>news title</div>

            <div className="opinions">
              <a href="">OPINIONS</a>
              <div className="opinion" style={{display:'flex', marginBottom:'30px'}}>
                <div className="rightSideoFoPINION">
                  <h5>
                    {" "}
                    Let's Make Sure Humanitarian NGOs Stand For Human Rights
                  </h5>
                  <div className="nameOFperson" style={{marginTop:'10px'}}>
                  <h5>Olga Deutsch </h5>
                  </div>
                </div>
                <img
                  src="https://d.ibtimes.com/en/full/4503229/olga-deutsch.jpg?w=70&h=70&l=54&t=52&f=4fedbd00af2fe51d3ad6e4334d8566fa"
                  alt=""
                  style={{borderRadius:'50%', width:'150px'}}
                />
              </div>
              <div className="opinion" style={{display:'flex', marginBottom:'30px'}}>
                <div className="rightSideoFoPINION">
                  <h5>
                    {" "}
                    The Season Of Giving Shouldn't Extend To American Innovation
                  </h5>
                  <div className="nameOFperson" style={{marginTop:'10px'}}>
                  <h5>Brian O' Shaughnessy
 </h5>
                  </div>
                </div>
                <img
                  src="https://d.ibtimes.com/en/full/4503155/brian-o-shaughnessy.jpg?w=70&h=70&f=9cb1130434276baddf47267ffda63816"
                  alt=""
                  style={{borderRadius:'50%', width:'150px'}}
                />
              </div>
              <div className="opinion" style={{display:'flex', marginBottom:'30px'}}>
                <div className="rightSideoFoPINION">
                  <h5>
                    {" "}
                    Blockchain Puts ESG Adoption Benefits Within Corporate Reach

                  </h5>
                  <div className="nameOFperson" style={{marginTop:'10px'}}>
                  <h5>Ting Yang </h5>
                  </div>
                </div>
                <img
                  src="https://d.ibtimes.com/en/full/4503058/gorki-ceo-ting-yang.jpg?w=70&h=70&f=018381a3b431ce200535e014bc00db80 "
                  alt=""
                  style={{borderRadius:'50%', width:'150px'}}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </section>



      {/* economy in focus */}

      <section>
  <div className="economyInFocus">
    {news.map((elem) => (
      <Grid key={uuidv4()} item xs={6} style={{ margin: '10px' }}>
        <div className="firstEconomyInFocus" style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <img src={elem.img} alt="" style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
          <div style={{ padding: '16px' }}>
            <h3 style={{ marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>
              {elem.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              {elem.description}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
          <button style={{ border: 'none'}} onClick={() => handleLike(elem.id)}>
  <AiOutlineLike style={{ marginBottom: '8px', cursor: 'pointer', color: elem.liked ? 'green' : 'black'  }} />
</button>     
<button style={{border:'none'}} onClick={() => handleDislike(elem.id)}>
<AiOutlineDislike style={{ marginBottom: '8px', cursor: 'pointer', color:  elem.disliked ? 'red' : 'black' }} />

</button>
            <GrView style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </Grid>
    ))}
  </div>
</section>




      {/* buisness */}
      <section>
        <div className="economyInFocus" style={{display:'flex'}}>
       <div className="firstEconomyInFocus" style={{display:'flex'}}>
       <img src="https://d.ibtimes.com/en/full/4503434/serbian-president-aleksandar-vucic-rally-his-serbian-progressive-party-belgrade.webp?w=385&h=257&f=8f6fd5edeb15da7a5a46c7e31f059009" alt="" />
          <h3 >
Inflation-hit Serbia Heads To Polls After Months Of Protests</h3>
<p>Serbian President Aleksandar Vucic will not be on the ballot in Sunday's parliamentary and local elections, but the contest is nevertheless a referendum on his government amid soaring inflation and months of protests.</p>
       </div>
       <div className="secondEconomyInFocus" style={{display:'flex'}}>
        <div><img src="https://d.ibtimes.com/en/full/4503298/president-javier-milei-has-warned-countrys-economic-crisis-likely-get-lot-worse-before-it-gets.webp?w=736&f=4e8c768488770b7f9138dcb6800ec7cb" alt="" width={200} />
        <h5>'We Have To Endure' - Argentines Stoic As Prices Skyrocket</h5>
        </div>
        <div><img src="https://d.ibtimes.com/en/full/4503298/president-javier-milei-has-warned-countrys-economic-crisis-likely-get-lot-worse-before-it-gets.webp?w=736&f=4e8c768488770b7f9138dcb6800ec7cb" alt="" width={200}/>
        <h5>'We Have To Endure' - Argentines Stoic As Prices Skyrocket</h5>
        </div>  
       </div>
        </div>
      </section>
    </Container>
  );
}

export default Home;
