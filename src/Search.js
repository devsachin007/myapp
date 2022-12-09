
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search(){
    return(
        <div className="search">
            <div className="upper">
                Medical Darpan >Search><b>Fabiflu Tablets</b>
            </div>
            <div className="middle"><AiOutlineSearch style={{width:"20px",height:"20px"}}/>
                <input type="search" style={{width:"30%",zIndex:"-1"}} />

                <button type="submit" style={{background:"aqua",border:"2px solid grey"}}>Search</button>
            </div>
            <div className="curr" style={{padding:"10px"}}>
                Paracetamol (128 products)
                <button style={{background:"aqua",borderRadius:"5px",marginLeft:"10px"}}>Aceclofenac</button>
                <button style={{background:"aqua",borderRadius:"5px",marginLeft:"10px"}}>500mg</button>
                <button style={{color:"maroon",fontWeight:"bold"}}>Remove all</button>
            </div>
        </div>
    );
}