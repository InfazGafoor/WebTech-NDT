import bg from "../bg.jpg";
function Home() {
    return (
        <div className="container-fluid">
            <div>
            <img style={{width:"100%"}} src={bg} className="img-thumbnail" alt="Cinque Terre"/> 
            </div>
        </div>
    )
}

export default Home;