import { useState, useEffect } from "react";
import KekambasList from './components/KekambasList';



export default function App() {
    
    const [names, setNames] = useState([]);
    console.log(names)


    useEffect(() => {
        console.log('useEffect effect callback has been called');
        fetch("https://scratched-juniper-salto.glitch.me/kekambas")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const classMates = data;
            console.log(classMates)
            setNames(classMates);
        })
    },[]);

   return (     
        <>
            <div className="container;">
                <h1 class="text-center">Kekambas</h1>
                <button type="button" class="btn btn-info mb-2">Students</button>
                <KekambasList names={names}/>
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                        
                        </tr>
                        <tbody>
                            {names.map(names => (
                            <tr key={names.first_name}>
                                <th>{names.first_name}</th> 
                                <th>{names.last_name}</th> 
                            </tr>
                            ))}
                        </tbody>
                    </thead>
                </table>
            
            </div>
        </>
   );
   
  
}

