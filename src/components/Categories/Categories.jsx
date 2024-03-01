import './Categories.css'
import { useEffect,useState } from "react"
import axios from "axios";
import { useCategory } from '../../context';
export const Categories=()=>{
    const [categories,setCategories]=useState([]);
    const [numberOfCategoryToShow,setnumberOfCategoryToShow]=useState(0);
    const { hotelCategory, setHotelCategory } = useCategory();
    const handleShowMoreRightClick=()=>{
        console.log("Clicked");
        setnumberOfCategoryToShow((prev)=>prev+10);
    };
    const handleShowMoreLeftClick=()=>{

        setnumberOfCategoryToShow((prev)=>prev-10);
    };
    useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get(
              "http://localhost:3500/api/category"
            );
            
            const categoriesToShow=data.slice(numberOfCategoryToShow+10>data.length?data.length-10:numberOfCategoryToShow,
              numberOfCategoryToShow>data.length?data.length:numberOfCategoryToShow+10
              );
            setCategories(categoriesToShow);
          } catch (err) {
            console.log(err);
          }
        })();
      }, [numberOfCategoryToShow]);
      const handleCategoryClick=(category)=>{
        console.log({hotelCategory});
         setHotelCategory(category);
      }
    return(<section className="categories d-flex align-center gap-large cursor-pointer">
        
         { numberOfCategoryToShow>=10 && (
                <button onClick={handleShowMoreLeftClick}>
                <span class="material-symbols-outlined">
       chevron_left
       </span>
                </button>
           )}
         
         
        {
            categories && categories.map(({_id,category})=>(<span key={_id} onClick={handleCategoryClick(category)}>{category}</span>)
        )}
        
         {
          numberOfCategoryToShow - 10 <categories.length && (
            <button onClick={handleShowMoreRightClick}>
            <span class="material-symbols-outlined">
   chevron_right
   </span>
            </button>
          )
         }
         
        
        
        
    </section>)
}