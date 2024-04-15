function Food(){
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        //<div>
            //<h1>I like {food1} and {food2}</h1>
        //</div>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase}</li>
        </ul>
    );
}

export default Food