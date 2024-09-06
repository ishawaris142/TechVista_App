// Use ImageList from Material ui for sliding of images and finally map that array into jsx.As These are slides i have used useEffect for setting specific time for an image to show
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import { useState, useEffect } from "react";
import image1 from "../Images/image-1.png";
import image2 from "../Images/image-2.png";
import image3 from "../Images/image-3.jpg";
import image4 from "../Images/image-4.jpg";
import "./Slider.css";

export default function Slider() {
  const images = [
    {
      title: "Google's AI Chatbot",
      src: image1,
      alt: "Google's AI Chatbot",
      caption:
        "Google's AI chatbot, AMIE, has demonstrated superior diagnostic accuracy and communication quality compared to human physicians in text-based medical consultations. Its advanced algorithms and data processing capabilities enable more precise and effective interactions. This breakthrough highlights the growing potential of AI in enhancing healthcare services.",
    },
    {
      title: "Block-Chain",
      src: image2,
      alt: "Block-Chain",
      caption:
        "As cryptocurrency continues to evolve, multi-blockchain support becomes essential for modern wallets. Handling multiple chains ensures that users can manage diverse assets seamlessly. This capability is vital for staying relevant in an increasingly complex crypto landscape.",
    },
    {
      title: "Internet Of Things-IOT",
      src: image3,
      alt: "Internet Of Things-IOT",
      caption:
        "Seamlessly Connected: IoT Devices Transforming Everyday Objects into Smart Solutions. Embrace the Future with Intelligent Networking at Your Fingertips.",
    },
    {
      title: "Evolving Metropolis",
      src: image4,
      alt: "EVolving Metropolis",
      caption:
        "The destiny of our world is intricately tied to the quality of its future cities. Technology plays a central role in enhancing urban life, and the aspiration of creating genuinely smart cities is alive like never before. As long as human civilization thrives within urban hubs, the drive to enhance the urban landscape will persist.",
    },
  ];
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <Box className="slider-container">
      <ImageList cols={1} rowHeight="auto">
        {images.map((image, index) => (
          <ImageListItem
            key={index}
            style={{ display: index === currIndex ? "flex" : "none" }}
            className="slider-item"
          >
            <Typography variant="h4" className="slider-title">
              {image.title}
            </Typography>
            <Box className="slider-image-container">
              <img src={image.src} alt={image.alt} className="slider-image" />
            </Box>
            <Box className="slider-description">
              <Typography variant="h6" className="slider-caption">
                {image.caption}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
