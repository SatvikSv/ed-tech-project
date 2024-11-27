import React from 'react';
import { Navbar } from '../components/Navbar';
import './Home.css';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='title'>
                <h1>Accelerate<br />
                    your learning with AJ World.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Eaque doloribus voluptas et voluptate maiores provident! Corporis similique <br /> velit ducimus quo nemo consectetur consequuntur unde temporibus.
                </p>
                <div className='search-bar'>
                    <div className='search-content'>
                        <input type="text" placeholder="Search Courses" />
                        <a href='#'><SearchIcon /></a>
                    </div>
                </div>
            </div>

            <div className='choose-class'>
                <h2>Choose Your Class</h2>
                <div className='class-list'>
                    <div className='class-item'>
                        <p>8th</p>
                    </div>
                    <div className='class-item'>
                        <p>9th</p>
                    </div>
                    <div className='class-item'>
                        <p>10th</p>
                    </div>
                    <div className='class-item'>
                        <p>11th</p>
                    </div>
                    <div className='class-item'>
                        <p>12th</p>
                    </div>
                </div>
            </div>

            <div className='recommended-courses'>
                <h2>Recommended Courses</h2>
                <div className='course-list'>
                    <div className='course-item'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://placehold.co/600x400"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='course-item'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://placehold.co/600x400"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='course-item'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://placehold.co/600x400"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='reviews'>
                <p className='reviews-title'>The Reviews are in</p>
                <h2>What learners are saying</h2>
                <div className='review-list'>
                    <div className='review-item'>
                        <Card sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolor, eveniet error quis facere fugit dolores, dicta animi odio perspiciatis dolorem tenetur et! Mollitia, a itaque obcaecati inventore architecto cupiditate corporis aspernatur.
                                    <br />
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body2">
                                    Maggie B.
                                    <br />
                                    Parent {"(10th Class)"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='review-item'>
                        <Card sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolor, eveniet error quis facere fugit dolores, dicta animi odio perspiciatis dolorem tenetur et! Mollitia, a itaque obcaecati inventore architecto cupiditate corporis aspernatur.
                                    <br />
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body2">
                                    Maggie B.
                                    <br />
                                    Parent {"(10th Class)"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolor, eveniet error quis facere fugit dolores, dicta animi odio perspiciatis dolorem tenetur et! Mollitia, a itaque obcaecati inventore architecto cupiditate corporis aspernatur.
                                    <br />
                                    <br />
                                    <br />
                                </Typography>
                                <Typography variant="body2">
                                    Maggie B.
                                    <br />
                                    Parent {"(10th Class)"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}
