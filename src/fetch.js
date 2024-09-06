import {importDataToDom} from './DOM.js';

async function fetchData(city){
    try{
        let response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,{mode:'cors'});
        let data=await response.json();
        importDataToDom(data);
    }
    catch(err){

    }
}

function getCurrentDayInfo(dateInfo){
    let dayData=new Date(dateInfo);
    let day=dayData.getDate();
    let month=dayData.getMonth()+1;
    let year=dayData.getFullYear();

    let getActualDay=()=>{
        const date=new Date(year,month-1,day);
        const options={year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleString('en-US',options);
    }

    let getDayName=()=>{
        const date=new Date(dateInfo);
        return date.toLocaleString('en-US',{weekday:'long'});
    }

    return{getDayName,getActualDay};
}


export {fetchData,getCurrentDayInfo};