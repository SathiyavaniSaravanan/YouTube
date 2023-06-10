import { useState,Fragment } from "react";
import "../Styles/Videos.css";

const Videos = () => {
  const [video, setVideo] = useState([
    {
      thumbnail:
        "https://i.ytimg.com/vi/uYPbbksJxIg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2M_LSAVX5C1yeaypLoWxlz78y5Q",
      title: "Oppenheimer | New Trailer",
      channel: "Universal Pictures",
      views: "27M views",
      id: 1,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/4T7HwLGNiuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjWWCpOnI_22rbnXEtCs3U3pMPjA",
      title:
        "Morning Vibes 🍀 Positive Feelings and Energy ~ Morning songs for a positive day",
      channel: "Chill Vibes",
      views: "9.4M views",
      id: 2,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/ggAPiMTPUew/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeFgbZvSxcMMu2HVwiC5z__Ochpg",
      title: "Thai Chef Tries Instant Pad Thai!",
      channel: "Pailin's Kitchen",
      views: "50K views",
      id: 3,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/r_6q_-d-7Sk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASL0dDdoC4A1AC1ROr9Gs4Vo7NZg",
      title: "여자친구 GFRIEND - 시간을 달려서(ROUGH) M/V",
      channel: "여자친구 GFRIEND OFFICIAL",
      views: "20M views",
      id: 4,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/hReUWvzldbE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDNIn14KxEnXMZFIZq4OyPcq99WQ",
      title:
        "Cabbage Manchurian Recipe in Tamil | முட்டைகோஸ் மஞ்சூரியன் | Cabbage Chilli Recipe in Tamil",
      channel: "Madras Samayal",
      views: "131K views",
      id: 5,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/8JOCd84Pnas/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB23fXblQgGtKFJUS4Uv59FPZ97GQ",
      title:
        "[GOING SEVENTEEN] EP.77 화이트에서 할 수 있는 모든 것 #1 (Everything Possible in the White Zone #1)",
      channel: "SEVENTEEN",
      views: "2.7M views",
      id: 6,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/2omv7oQBSV0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0LMxgk28l08kbh9dEMa5pBsNPmA",
      title: "Rice to Bread // How to make bread out of RICE !",
      channel: "Peaceful Cuisine",
      views: "34K views",
      id: 7,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/D3w41jof9wE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7-66lqh1uUhEUIXLhzvL9j9_LhA",
      title:
        "'Spices of Four Seasons' Purple Garlic - The Essential Spicy Flavor on the Tables in Yunnan",
      channel: "滇西小哥 Dianxi Xiaoge",
      views: "2.5M views",
      id: 8,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/-E2mRSZvJlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn2sfNqWTIKTEzi7AVz-RaBCxqpw",
      title:
        "Aga Naga - Full Video | PS2 Tamil | @ARRahman | Mani Ratnam | Karthi, Trisha | Shakthisree Gopalan",
      channel: "Tips Tamil",
      views: "4.7M views",
      id: 9,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/i7GdQPsbDjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-xkGVVA1EjbbBfw0tluOqPHn9eA",
      title: "SEVENTEEN: The Puppy Interview",
      channel: "BuzzFeed Celeb",
      views: "930K views",
      id: 10,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/PeVyADesFUw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2p0j6WLvvyCKKKZ9tMmL002U18w",
      title:
        "I Went To Singapore To Find The ULTIMATE Singapore Laksa Recipe | Marion's Kitchen",
      channel: "Marion's Kitchen",
      views: "27K views",
      id: 11,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/WRLVrfIBS1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDISEbUCwyi0LZ_x6Vo9rKiRlN26A",
      title:
        "Thai Street Food - 5 MUST EAT Foods in Chinatown, Bangkok!! (Local Favorites Only!)",
      channel: "Mark Wiens",
      views: "1.6M views",
      id: 12,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/6sgXRWcOmmk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw1bs6l7OgZFk9aSto7HzkJFUt-g",
      title: "유주(YUJU) - 복숭아꽃 ART FILM",
      channel: "KONNECT Entertainment",
      views: "48K views",
      id: 13,
    },
  ]);
  const [shorts, setShorts] = useState([
    {
      thumbnail:
        "https://i.ytimg.com/vi/sO2wFWWnVAg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAIx7Bb4bIMDgg5wLhbtleZ8O-eDQ",
      title:
        "TsBullieskennel #americanbully #doglover #bullywebtv www.Bullywebtv.com",
      views: "97K views",
      id: 1,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/bHjAO3XKgng/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBPNF7xs4L_eaEWiGYeiOiyaO7wFw",
      title: "The diversity of food in Singapore is next level AMAZING.",
      views: "17K views",
      id: 2,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/dTmzMHE0VXY/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDaSeDFa-YLUrHIh9w9XOSHN_7I3A",
      title: "Nanny Kissing Baby Panda | iPanda #Shorts",
      views: "1.8M views",
      id: 3,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/KtFSz_Iv-pE/hq720_2.jpg?sqp=-oaymwEdCMAEENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDnC1UVk9hPaT48FQMg7Oe3f78pBQ",
      title: "Fluffy baby cow #shorts #cute #animals",
      views: "91K views",
      id: 4,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/NumX4AnV9aI/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLABgn-fimlIOAZclum5NiZVwLgJzQ",
      title: "Older dogs are the sweetest ❤️😭 #shorts",
      views: "3M views",
      id: 5,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/aeHHb3-i7ag/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA-2PqLx-H7QGx7bWrqVWloUScQjA",
      title: "Do you have two sides? #shorts",
      views: "305K views",
      id: 6,
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/CCJB7aQejTw/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA7xacCTa1DrclAd_hOTyOjt0qo4g",
      title:
        "Honey Chili Oil Chicken Wings Recipe | Over The Fire Cooking by Derek Wolf",
      views: "6.8M views",
      id: 7,
    },
  ]);
  const removeVideo = (id, channel) => {
    let result = video.filter(x => x.id !== id);
    setVideo(result);
    alert(`${channel} video has been removed`);
  }
  const deleteShorts = (id, title) => {
    let result = shorts.filter(y => y.id !== id);
    setShorts(result);
    alert(`${title} has been removed`);
  }

  return (
    <Fragment>
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
                  <button onClick={() => removeVideo(data.id, data.channel)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shorts">
        <h1>Shorts</h1>
        <div className="shortsData">
          {
            shorts.map(items => {
              return (
                <div className="YTshorts">
                  <img src={items.thumbnail} alt="" />
                  <div className="YTshortsDetails">
                    <h3>{items.title}</h3>
                    <p>{items.views}</p>
                    <button onClick={()=>deleteShorts(items.id,items.title)}>Remove</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Videos;
