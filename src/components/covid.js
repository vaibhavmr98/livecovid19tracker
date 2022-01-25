import './covid.css';
import CovidCard from './CovidCard';
import { useEffect,useState } from "react";


const Covid = () => {

    const [data, setdata] = useState([]);

    const getCovidData = async () =>{
      try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        //console.log(actualData);
        setdata(actualData.statewise[0])
      }catch(err){
          console.log(err);
      }
    }
    useEffect(() => {
        getCovidData()
    }, []);
    
  return <>
    <section>
       <div className="container">
             <h6>🔴 LIVE </h6>
            <h2 >COVID-19 Virus Tracker APP</h2>


            <div className="row">
            
                <CovidCard cardtitlesm='our' cardtitlelg='Country' cardnos='India' cardbackground='primary'/>
                <CovidCard cardtitlesm='total' cardtitlelg='Recovered' cardnos={data.recovered} cardbackground='success'/>
                <CovidCard cardtitlesm='total' cardtitlelg='Confirmed' cardnos={data.confirmed} cardbackground='warning'/>
                <CovidCard cardtitlesm='total' cardtitlelg='Deaths' cardnos={data.deaths} cardbackground='danger'/>
                <CovidCard cardtitlesm='total' cardtitlelg='Active' cardnos={data.active} cardbackground='warning'/>
                <CovidCard cardtitlesm='LAST' cardtitlelg='uPDATED' cardnos={data.lastupdatedtime} cardbackground='info'/>

            
            </div>

       
        </div>

       


    </section>
  </>;
};

export default Covid;
