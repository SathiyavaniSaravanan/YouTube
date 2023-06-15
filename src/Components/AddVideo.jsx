import "../Styles/AddVideo.css";
import ChritmasTree from '../Images/addVideo-image.webp';

const AddVideo = () => {
    return (
      <div className="addVideo">
        <div className="innerAddVideo">
          <div className="addVideoImage">
            <img src={ChritmasTree} />
          </div>
          <div className="addVideoDetails">
            <h1>Add New Video</h1>
            <form className="addVideoForm">
              <label htmlFor="thumbnail">Thumbnail</label>
              <input type="text" name="thumbnail" id="thumbnail" />
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />
              <label htmlFor="channel">Channel</label>
              <input type="text" name="channel" id="channel" />
              <label htmlFor="views">Views</label>
              <input type="text" name="views" id="views" />
              <button>Add Video</button>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default AddVideo;