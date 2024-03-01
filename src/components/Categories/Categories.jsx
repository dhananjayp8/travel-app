import './Categories.css'
import { useEffect,useState } from "react"
import axios from "axios";
export const Categories=()=>{
    const [categories,setCategories]=useState([]);
    const [numberOfCategoryToShow,setnumberOfCategoryToShow]=useState(0);
    const handleShowMoreRightClick=()=>{

        setnumberOfCategoryToShow((prev)=>prev+10);
    }
    const handleShowMoreLeftClick=()=>{

        setnumberOfCategoryToShow((prev)=>prev-10);
    }
    useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get(
              "http://localhost:3500/api/category"
            );
            const categoriesToShow=data.slice(
            numberOfCategoryToShow+10>data.length?data.length-10:numberOfCategoryToShow,
            numberOfCategoryToShow>data.length?data.length:numberOfCategoryToShow+10
            );
            setCategories(categoriesToShow);
          } catch (err) {
            console.log(err);
          }
        })();
      }, [numberOfCategoryToShow]);
    return(<section className="categories d-flex align-center gap cursor-pointer">
        
        { numberOfCategoryToShow>=10 && (
                <button className="button btn-category btn-left fixed cursor-pointer "
                onClick={handleShowMoreLeftClick}>
            <span className="material-icons-outlined">chevron_left
            </span>
        </button>
           )}
        
        {
            categories && categories.map(({_id,category})=>(<span key={_id}>{category}</span>)
        )}
        {
            numberOfCategoryToShow + 10 < categories.length && (
                <button onClick={handleShowMoreRightClick}>
            <span className="material-icons-outlined">chevron_right
            </span>
        </button>
            )
        }
        
    </section>)
}