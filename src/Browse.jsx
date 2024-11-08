import "./Browse.css"

const browseObj = [
    {
        title: "Dining",
        img: "dining-img.svg"
    },
    {
        title: "Living",
        img: "living-img.svg"
    },
    {
        title: "Bedroom",
        img: "bedroom-img.svg"
    }
]

const Browse = () => {
    return (
        <>
            <div id="browse">
                <h1>Browse The Range</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div id="browse-imgs">
                {
                    browseObj.map(element => <img className="browse-img" key={element.title} src={element.img} alt={element.title}/>)
                }
            </div>
        </>
    );
}

export default Browse;