import "../Styles/AddVideo.css";
import ChritmasTree from '../Images/addVideo-image.webp';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  let navigate = useNavigate();

  const thumbnailRef = useRef(null);
  const titleRef = useRef(null);
  const channelRef = useRef(null);
  const viewsRef = useRef(null);

  const handleUpload = (e) => {
    e.preventDefault(); //Prevents the page from reloading
    const data = {
      thumbnail: thumbnailRef.current.value,
      title: thumbnailRef.current.value,
      channel: channelRef.current.value,
      views:viewsRef.current.value
    }
    // console.log(data);
    fetch("http://localhost:4000/videos", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(data)
    });
    alert('Video Uploaded Successfully');
    navigate('/');
  }
    return (
      <div className="addVideo">
        <div className="innerAddVideo">
          <div className="addVideoImage">
            <img src={ChritmasTree} />
          </div>
          <div className="addVideoDetails">
            <h1>Add New Video</h1>
            <form className="addVideoForm"  onSubmit={handleUpload}>
              <label htmlFor="thumbnail">Thumbnail</label>
              <input ref={thumbnailRef} type="url" name="thumbnail" id="thumbnail" />
              <label htmlFor="title">Title</label>
              <input ref={titleRef} type="text" name="title" id="title" />
              <label htmlFor="channel">Channel</label>
              <input ref={channelRef} type="text" name="channel" id="channel" />
              <label htmlFor="views">Views</label>
              <input ref={viewsRef} type="text" name="views" id="views" />
              <button>Upload Video</button>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default AddVideo;