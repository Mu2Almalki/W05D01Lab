import {useContext} from 'react'
import Body from './Body';
import languageContext from './language-context';

function Header(){
    const textContext = useContext(languageContext)
    console.log(textContext.languageValue)
    return(
        <div>
    {(function (){
        if (textContext.languageValue ==="E"){
            console.log("hh")
            return(
                <div>
                <h1>Hillo World</h1>
                </div>
            ) 
        }else if (textContext.languageValue ==="A"){
            return(
                <h1>السلام عليكم ورحمة الله وبركاته</h1>
            )
        }else if(textContext.languageValue==="J") {
            return(
                <h1>ヒロワールド</h1>
            )

        }
    })()}

    </div>
    )
}

export default Header;