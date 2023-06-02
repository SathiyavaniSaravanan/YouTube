import '../Styles/Categories.css';

const Categories = () => {
    const categoriesList = [
      {
        link: "All",
      },
      {
        link: "Sports",
      },
      {
        link: "Comedy",
      },
      {
        link: "Travel",
      },
      {
        link: "Music",
      },
      {
        link: "Kids",
      },
      {
        link: "Gaming",
      },
      {
        link: "Vlogs",
      },
      {
        link: "Fashion",
      },
      {
        link: "Recently Uploaded",
      },
    ];
    return ( 
        <div className="categories">
            <ul>
                {categoriesList.map(items => {
                    return <li><a href="">{ items.link}</a></li>
                })}
            </ul>
        </div>
    );
}
 
export default Categories;