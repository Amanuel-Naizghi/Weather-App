import {getCurrentDayInfo} from './fetch.js';
import weatherIcon from './images/cloudy.png';
import overcast from './images/overcast.png';
import partialCloud from './images/partial-cloud.png';
import rainy from './images/rainy.png';
import snow from './images/snow.png';
import sunny from './images/sunny.png';


let todayInfoIndex=1;

function loadHeaderImage(){
    const myWeatherIconContainer=document.querySelector('.header>.img-container');
    const myWeatherIcon=document.createElement('img');
    myWeatherIcon.src=weatherIcon;
    myWeatherIconContainer.appendChild(myWeatherIcon);
}

function loadContentImages(){
    let overcastIcon=document.createElement('img');
    let partialCloudIcon=document.createElement('img');
    let rainyIcon=document.createElement('img');
    let snowIcon=document.createElement('img');
    let sunnyIcon=document.createElement('img');

    overcastIcon.src=overcast;
    partialCloudIcon.src=partialCloud;
    rainyIcon.src=rainy;
    snowIcon.src=snow;
    sunnyIcon.src=sunny;

    return {overcastIcon,partialCloudIcon,rainyIcon,snowIcon,sunnyIcon}
}

function importDataToDom(data){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftAddress=document.querySelector('.top-left>.location-container>.location');
    let topLeftDate=document.querySelector('.top-left>.location-container>.date');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.img-container');

    
    //The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
    let currentDay=getCurrentDayInfo(data.days[0].datetime).getDayName();
    let currentDayMonthYear=getCurrentDayInfo(data.days[0].datetime).getActualDay();
    //myTopRightIcon variable contains the appropriate icon which matches with the current air condition
    let myTopRightIcon=loadIcon(data.currentConditions.conditions);

    topLeftTemp.textContent=data.currentConditions.temp;
    topLeftAddress.textContent=data.resolvedAddress;
    topLeftDate.textContent=`${currentDay}, ${currentDayMonthYear}`;
    topRightCondition.textContent=data.currentConditions.conditions;
    topRightImage.appendChild(myTopRightIcon);

    let todayTempInfo=()=>{
        let shift=false;
        let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');
        console.log(bottomDivContainers);
        let currentTime=data.currentConditions.datetime;
        let index=(data.days[0].hours.findIndex(item=>item.datetime===currentTime))+1;
        if(index>24){
            index=0;
            shift=true;
        }
        console.log(index);//Just for checking the index of the time selected
        bottomDivContainers.forEach(()=>{
            let temperature=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
            let imgContainer=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`);
            let time=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`);
            if(!shift&&index<=24){
                temperature.textContent=data.days[0].hours[index].temp;
                let myIcon=loadIcon(data.days[0].hours[index].conditions);
                imgContainer.appendChild(myIcon);
                time.textContent=data.days[0].hours[index].datetime;
            }
            else{
                temperature.textContent=data.days[1].hours[index].temp;
                let myIcon=loadIcon(data.days[1].hours[index].conditions);
                imgContainer.appendChild(myIcon);
                time.textContent=data.days[1].hours[index].datetime;
            }
            console.log(todayInfoIndex);
            index+=2;
            todayInfoIndex+=1;
        });
    }

    console.log(data.days[0].hours);
    todayTempInfo();
    
}

function loadIcon(condition){
    let myIcon;
    if(condition==='Clear'){
        myIcon=loadContentImages().sunnyIcon;
    }
    else if(condition==='Partially cloudy'){
        myIcon=loadContentImages().partialCloudIcon;
    }
    else if(condition==='Overcast'){
        myIcon=loadContentImages().overcastIcon;
    }
    else if(condition==='Rain'||condition==='Rain, Partially cloudy'){
        myIcon=loadContentImages().rainyIcon;
    }
    else if(condition==='snow'){
        myIcon=loadContentImages().snowIcon;
    }

    return myIcon;
}


export {importDataToDom,loadHeaderImage};