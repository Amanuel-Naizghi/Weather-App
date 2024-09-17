import {importDataToDom} from './DOM.js';

async function fetchData(city){
    try{
        let loadingDialog=document.querySelector('#loading-dialog');
        loadingDialog.showModal();
        let response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,{mode:'cors'});
        let data=await response.json();
        importDataToDom(data);
        loadingDialog.close();
    }
    catch(err){
        let errorDialog=document.querySelector('#error-dialog');
        let errorText=document.querySelector('#error-dialog>p');
        errorText.textContent=`${err}`;
        errorDialog.showModal();
        setTimeout(()=>{
            errorDialog.close();
        },5000);
        fetchData('Asmara');
    }
}

function getCurrentDayInfo(dateInfo){
    let dayData=new Date(dateInfo);
    let day=dayData.getDate();
    let month=dayData.getMonth()+1;
    let year=dayData.getFullYear();

    let getActualDayMonthYear=()=>{
        const date=new Date(year,month-1,day);
        const options={year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleString('en-US',options);
    };

    let getActualDayMonth=()=>{
        const date=new Date(year,month-1,day);
        const options={year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleString('en-US',options);
    };

    let getDayName=()=>{
        const date=new Date(dateInfo);
        return date.toLocaleString('en-US',{weekday:'long'});
    };

    return{getDayName,getActualDayMonthYear,getActualDayMonth};
}

function timeFormatter(time){
    let myTime=time.slice(0,5);
    let myHour=myTime.slice(0,2);
    let myMinute=myTime.slice(3,5);
    let timeIndicator;

    if(myHour>12){
        myHour-=12;
        timeIndicator="Pm";
    }
    else if(myHour==='12'){
        timeIndicator='Pm';
    }
    else{
        timeIndicator='Am';
    }

    let myNewTime=`${myHour}:${myMinute}`;
    return {myNewTime,timeIndicator};
}


export {fetchData,getCurrentDayInfo,timeFormatter};