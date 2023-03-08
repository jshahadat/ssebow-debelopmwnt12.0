import React, { useState, useEffect, useRef } from "react";

// Import Swiper React components

// Import Swiper styles

import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SliderImage from "./SliderImage";
import "./Carousel.css";

const styles = {
    container: {
        height: "210px",
        overflowY: "scroll",
        padding: "16px",
        // width: "450px",
    },
};
const settings = {
    dots: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                // infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                // infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                // infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
            },
        },
    ],
};

function SearchResultsVideos({ videoInfo }) {
    // console.log(videoInfo);
    // useEffect(() => {
    //     console.log("query =====>", `https://chatapi.ssebowa.org/get_video?keyword=${query}`)
    //     fetch(`https://chatapi.ssebowa.org/get_video?keyword=${query}`, {
    //         method: "post",
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("data ===>", data)
    //             setVideoUrls(data.video)
    //         })
    //         .catch((error) => console.error(error));
    // }, [query]);

    // useEffect(() => {
    //     console.log('videoUrls =>>>', videoUrls)
    // }, [videoUrls])

    return (
        <div className="og">
            <Card
                sx={{
                    display: "flex",
                    marginRight: "auto",
                    width: "60%",
                    height: "25vh",
                    m: 2,
                    p: 2,
                }}
            >
                <a href={videoInfo.link} style={{ textDecoration: "none" }}>
                    <CardMedia component="img" image={videoInfo.tump_img} sx={{ width: "200px", p: 1, height: "200px" }} />
                </a>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",

                        width: "100%",
                    }}
                >
                    <CardContent
                        sx={{
                            flex: "flex",
                            textAlign: "left",
                        }}
                    >
                        <a href={videoInfo.link} style={{ textDecoration: "none" }}>
                            <Typography component="div" variant="h5" sx={{ color: "blue" }} style={{ fontWeight: "700", fontSize: "13px" }}>
                                {videoInfo.title}
                            </Typography>
                        </a>
                        <Typography component="h6" variant="h6" sx={{ color: "text.secondary" }}>
                            {videoInfo.channel_name}
                        </Typography>

                        <Typography component="span" variant="h6">
                            {videoInfo.video_platform}
                            <span> </span>
                        </Typography>
                        <Typography component="span" variant="small" sx={{ color: "info.main" }}>
                            <span> </span> {videoInfo.date}
                        </Typography>
                        <Typography component="div" variant="h6" sx={{ color: "text.secondary" }}>
                            <span>views:</span> {videoInfo.views}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                        <Typography></Typography>
                    </Box>
                </Box>
            </Card>
        </div>
    );
}

export default SearchResultsVideos;
