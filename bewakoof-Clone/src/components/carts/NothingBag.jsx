import { useNavigate } from "react-router-dom";


const NothingBag = () => {
    let navigate = useNavigate();
    let handleClick = () => {
      
      navigate("/");
    };
 
}

export default NothingBag
