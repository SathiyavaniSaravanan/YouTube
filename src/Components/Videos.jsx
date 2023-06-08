import { useState } from "react";
import '../Styles/Videos.css';

const Videos = () => {
    const [video, setVideo] = useState([
      {
        thumbnail:
          "https://i.ytimg.com/vi/uYPbbksJxIg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2M_LSAVX5C1yeaypLoWxlz78y5Q",
        title: "Oppenheimer | New Trailer",
        channel: "Universal Pictures",
        views: "27M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/4T7HwLGNiuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjWWCpOnI_22rbnXEtCs3U3pMPjA",
        title:
          "Morning Vibes 🍀 Positive Feelings and Energy ~ Morning songs for a positive day",
        channel: "Chill Vibes",
        views: "9.4M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/ggAPiMTPUew/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeFgbZvSxcMMu2HVwiC5z__Ochpg",
        title: "Thai Chef Tries Instant Pad Thai!",
        channel: "Pailin's Kitchen",
        views: "50K views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/r_6q_-d-7Sk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASL0dDdoC4A1AC1ROr9Gs4Vo7NZg",
        title: "여자친구 GFRIEND - 시간을 달려서(ROUGH) M/V",
        channel: "여자친구 GFRIEND OFFICIAL",
        views: "20M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/hReUWvzldbE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDNIn14KxEnXMZFIZq4OyPcq99WQ",
        title:
          "Cabbage Manchurian Recipe in Tamil | முட்டைகோஸ் மஞ்சூரியன் | Cabbage Chilli Recipe in Tamil",
        channel: "Madras Samayal",
        views: "131K views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/8JOCd84Pnas/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB23fXblQgGtKFJUS4Uv59FPZ97GQ",
        title:
          "[GOING SEVENTEEN] EP.77 화이트에서 할 수 있는 모든 것 #1 (Everything Possible in the White Zone #1)",
        channel: "SEVENTEEN",
        views: "2.7M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/2omv7oQBSV0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0LMxgk28l08kbh9dEMa5pBsNPmA",
        title: "Rice to Bread // How to make bread out of RICE !",
        channel: "Peaceful Cuisine",
        views: "34K views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/D3w41jof9wE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7-66lqh1uUhEUIXLhzvL9j9_LhA",
        title:
          "'Spices of Four Seasons' Purple Garlic - The Essential Spicy Flavor on the Tables in Yunnan",
        channel: "滇西小哥 Dianxi Xiaoge",
        views: "2.5M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/-E2mRSZvJlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn2sfNqWTIKTEzi7AVz-RaBCxqpw",
        title:
          "Aga Naga - Full Video | PS2 Tamil | @ARRahman | Mani Ratnam | Karthi, Trisha | Shakthisree Gopalan",
        channel: "Tips Tamil",
        views: "4.7M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/i7GdQPsbDjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-xkGVVA1EjbbBfw0tluOqPHn9eA",
        title: "SEVENTEEN: The Puppy Interview",
        channel: "BuzzFeed Celeb",
        views: "930K views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/PeVyADesFUw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2p0j6WLvvyCKKKZ9tMmL002U18w",
        title:
          "I Went To Singapore To Find The ULTIMATE Singapore Laksa Recipe | Marion's Kitchen",
        channel: "Marion's Kitchen",
        views: "27K views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/WRLVrfIBS1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDISEbUCwyi0LZ_x6Vo9rKiRlN26A",
        title:
          "Thai Street Food - 5 MUST EAT Foods in Chinatown, Bangkok!! (Local Favorites Only!)",
        channel: "Mark Wiens",
        views: "1.6M views",
      },
      {
        thumbnail:
          "https://i.ytimg.com/vi/6sgXRWcOmmk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw1bs6l7OgZFk9aSto7HzkJFUt-g",
        title: "유주(YUJU) - 복숭아꽃 ART FILM",
        channel: "KONNECT Entertainment",
        views: "48K views",
      },
    ]);
    return (
      <div className="videos">
        <h1>Featured Videos</h1>
        <div className="videoData">
          {video.map(data => {
            return (
              <div className="video">
                <img src={data.thumbnail} alt="" />
                <div className="videoDetails">
                  <h3>{data.title}</h3>
                  <p>{data.channel}</p>
                  <p>{data.views}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
 
export default Videos;