//rafce
import {useState} from "react";
const App=()=>{

    const[kg,setKg]=useState(68);
    const[boy,setBoy]=useState(1.79);
    const[bmi,setBmi]=useState(0);
    const[sonuc,setSonuc]=useState("");
    return(
    <>
        <button onClick={()=>{
            const bmi=kg/(boy*boy);
            setBmi(bmi);
            if(bmi<18.5){
                setSonuc("zayıf.")
            }else if(bmi<24.9){
                setSonuc("normal")
            }else if(bmi<29.9){
                setSonuc("fazla kilolu")
            }else if(bmi<34.9){
                setSonuc("1.derece obezite")
            }else if(bmi<39.9){
                setSonuc("2.derece obezite")
            }
        }}
        >
            BMI hesapla</button>
        <h1>Boy:{boy}</h1>
        <h1>Kilo:{kg}</h1>
        <h1>Bmi:{bmi}</h1>
        <h1>Sonuç:{sonuc}</h1>

        </>
    );
};
export default App;
