import { useState,Fragment, useEffect } from "react";
import "../Styles/Videos.css";

const Videos = () => {
  const [video, setVideo] = useState([]);
  const [shorts, setShorts] = useState([]);

  // useEffect(() => {
  //   let fetchData =async () => {
  //     let response =await fetch("http://localhost:4000/videos");
  //     let result = await response.json();
  //     setVideo(result)
  //   }
  //   fetchData();
  // }, [])
  // useEffect(() => {
  //   let fetchData = async () => {
  //     let response = await fetch("http://localhost:4000/shorts");
  //     let result = await response.json();
  //     setShorts(result);
  //   };
  //   fetchData();
  // }, []);

  //////
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/youtubeData");
      let result = await response.json();
      // console.log(result.videos);
      setVideo(result.videos);
      setShorts(result.shorts);
    }
    fetchData()
  },[])
  //////
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
