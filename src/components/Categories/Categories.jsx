import { useEffect } from "react"

export const Categories=()=>{
    useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get(
              "http://localhost:3500/api/category"
            );
            console.log(data);
          } catch (err) {
            console.log(err);
          }
        })();
      }, []);
    return(<>
    </>)
}