import {getCurrentDayInfo,timeFormatter,fetchData} from './fetch.js';
import weatherIcon from './images/cloudy.png';
import overcast from './images/overcast.png';
import partialCloud from './images/partial-cloud.png';
import rainy from './images/rainy.png';
import snow from './images/snow.png';
import sunny from './images/sunny.png';
import night from './images/night.png';
import drop from './images/water-drop.png';

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
    let nightIcon=document.createElement('img');
    let dropIcon=document.createElement('img');

    overcastIcon.src=overcast;
    partialCloudIcon.src=partialCloud;
    rainyIcon.src=rainy;
    snowIcon.src=snow;
    sunnyIcon.src=sunny;
    nightIcon.src=night;
    dropIcon.src=drop;

    return {overcastIcon,partialCloudIcon,rainyIcon,snowIcon,sunnyIcon,nightIcon,dropIcon};
}

function importDataToDom(data){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftAddress=document.querySelector('.top-left>.location-container>.location');
    let topLeftDate=document.querySelector('.top-left>.location-container>.date');
    let topRightTime=document.querySelector('.top-right>.time-img>.time');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.time-img>.img-container');

    
    //The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
    let currentDay=getCurrentDayInfo(data.days[0].datetime).getDayName();
    let currentDayMonthYear=getCurrentDayInfo(data.days[0].datetime).getActualDayMonthYear();
    //myTopRightIcon variable contains the appropriate icon which matches with the current air condition
    let myTopRightIcon=loadIcon(data.currentConditions.conditions);

    topLeftTemp.textContent=`${data.currentConditions.temp} °C`;
    topLeftAddress.textContent=data.resolvedAddress;
    topLeftDate.textContent=`${currentDay}, ${currentDayMonthYear}`;
    topRightTime.textContent=`${timeFormatter(data.currentConditions.datetime).myNewTime} ${timeFormatter(data.currentConditions.datetime).timeIndicator}`;
    topRightCondition.textContent=data.currentConditions.conditions;
    topRightImage.appendChild(myTopRightIcon);

    let todayTempInfo=()=>{
        let todayInfoIndex=1;
        let shift=false;
        let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');
        let currentTime=data.currentConditions.datetime;
        let index=(data.days[0].hours.findIndex(item=>item.datetime===currentTime));
        if(index===-1){
            console.log("Yes");
            index=(data.days[0].hours.findIndex(item=>item.datetime.slice(0,2)===currentTime.slice(0,2)))+2;
        }
        else{
            index+=2;
        }
        if(index>23){
            index=0;
            shift=true;
        }
        console.log(currentTime);
        console.log(index);//Just for checking the index of the time selected
        bottomDivContainers.forEach(()=>{
            let temperature=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
            let imgContainer=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`);
            let time=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`);
            let timeIndicator=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`);
            if(!shift&&index<=23){
                temperature.textContent=`${data.days[0].hours[index].temp} °C`;
                let conditionIcon=data.days[0].hours[index].icon;
                let myIcon=loadIcon(conditionIcon);
                imgContainer.appendChild(myIcon);
                time.textContent=timeFormatter(data.days[0].hours[index].datetime).myNewTime;
                timeIndicator.textContent=timeFormatter(data.days[0].hours[index].datetime).timeIndicator;
            }
            else{
                temperature.textContent=`${data.days[1].hours[index].temp} °C`;
                let conditionIcon=data.days[1].hours[index].icon;
                let myIcon=loadIcon(conditionIcon);
                imgContainer.appendChild(myIcon);
                time.textContent=data.days[1].hours[index].datetime;
                time.textContent=timeFormatter(data.days[1].hours[index].datetime).myNewTime;
                timeIndicator.textContent=timeFormatter(data.days[1].hours[index].datetime).timeIndicator;
            }
            index+=2;
            todayInfoIndex+=1;
            if(index>23){
                if(index-2===23){
                    index=1;
                }
                else{
                    index=0;
                }
                shift=true;
            }
        });
    }

    let weeklyTempInfo=()=>{
        let weeklyInfoIndex=1;
        let weeklyDivContainers=document.querySelectorAll('.weekly-info>div');

        weeklyDivContainers.forEach(()=>{
            let date=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`);
            let rainPercent=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`);
            let waterDropIconCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`);
            let conditionIconContainer=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`);
            let tempMin=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`);
            let tempMax=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`);

            let daysInfo=getCurrentDayInfo(data.days[weeklyInfoIndex].datetime).getDayName().slice(0,3);
            let daysAndMonthInfo=getCurrentDayInfo(data.days[weeklyInfoIndex].datetime).getActualDayMonth();
            date.textContent=`${daysInfo}, ${daysAndMonthInfo.slice(0,-6)}`;
            rainPercent.textContent=`${data.days[weeklyInfoIndex].precipprob} %`;
            waterDropIconCont.appendChild(loadContentImages().dropIcon);
            tempMin.textContent=data.days[weeklyInfoIndex].tempmin;
            tempMax.textContent=`/${data.days[weeklyInfoIndex].tempmax} °C`;
            
            let conditionIcon=loadIcon(data.days[weeklyInfoIndex].conditions);
            conditionIconContainer.appendChild(conditionIcon);

            weeklyInfoIndex+=1;
        })
    }

    console.log(data.days[0]);
    console.log(data.days[1]);
    console.log(data.days[2]);
    console.log(data.days[3]);
    todayTempInfo();
    weeklyTempInfo();
    
}

function loadIcon(conditionIcon){
    let myIcon;
    if(/Clear/i.test(conditionIcon)){
        console.log(conditionIcon);
        if(/night/i.test(conditionIcon)){
            myIcon=loadContentImages().nightIcon;
        }
        else{
            myIcon=loadContentImages().sunnyIcon;
        }  
    }
    else if(/Rain/i.test(conditionIcon)){
        myIcon=loadContentImages().rainyIcon;
    }
    else if(/partly-cloudy/i.test(conditionIcon)){
        if(/night/i.test(conditionIcon)){
            myIcon=loadContentImages().nightIcon;
        }
        else{
            myIcon=loadContentImages().partialCloudIcon;
        }  
    }
    else if(/Overcast/i.test(conditionIcon)||/Cloudy/i.test(conditionIcon)){
        myIcon=loadContentImages().overcastIcon;
    }
    else if(/Snow/i.test(conditionIcon)){
        myIcon=loadContentImages().snowIcon;
    }

    return myIcon;
}

function clearPreviousContents(){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftAddress=document.querySelector('.top-left>.location-container>.location');
    let topLeftDate=document.querySelector('.top-left>.location-container>.date');
    let topRightTime=document.querySelector('.top-right>.time-img>.time');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.time-img>.img-container');
    let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');

    topLeftTemp.innerHTML='';
    topLeftAddress.textContent='';
    topLeftDate.innerHTML='';
    topRightTime.innerHTML='';
    topRightCondition.innerHTML='';
    topRightImage.innerHTML='';

    let todayInfoIndex=1;
    bottomDivContainers.forEach(()=>{
        let temperature=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
        let imgContainer=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`);
        let time=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`);
        let timeIndicator=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`);

        temperature.innerHTML='';
        imgContainer.innerHTML='';
        time.innerHtml='';
        timeIndicator.innerHtml='';

        todayInfoIndex+=1;
    });

    let weeklyInfoDivContainers=document.querySelectorAll('.weekly-info>div');
    let weeklyInfoIndex=1;

    weeklyInfoDivContainers.forEach(()=>{
        let date=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`);
        let rainPercent=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`);
        let waterDropIconCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`);
        let conditionIconContainer=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`);
        let tempMin=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`);
        let tempMax=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`);

        date.innerHTML='';
        rainPercent.innerHtml='';
        waterDropIconCont.innerHTML='';
        conditionIconContainer.innerHTML='';
        tempMin.innerHTML='';
        tempMax.innerHTML='';

        weeklyInfoIndex+=1;
    });

}

function checkCurrentScale(){
    let status=document.querySelector('.top-left>.temp-container>.temp').textContent.slice(-1);
    if(status==='C'){
        convertToFahrenheit();
    }
    else{
        const userInput=document.querySelector('#city').value;
        clearPreviousContents();
        fetchData(userInput);
    }
}

function convertToFahrenheit(){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftTempValue=topLeftTemp.textContent;
    let topLeftTempInNumber=Number(topLeftTempValue.substring(0,topLeftTempValue.length-3));  
    topLeftTemp.textContent=`${((topLeftTempInNumber*9/5)+32).toFixed(2)} °F`;

    let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');
    let todayInfoIndex=1;
    bottomDivContainers.forEach(()=>{
        let bottomTemp=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
        let bottomTempValue=bottomTemp.textContent;
        let bottomTempInNumber=Number(bottomTempValue.substring(0,bottomTempValue.length-3));
        bottomTemp.textContent=`${((bottomTempInNumber*9/5)+32).toFixed(2)} °F`;

        todayInfoIndex+=1;
    });

    let weeklyInfoDivContainers=document.querySelectorAll('.weekly-info>div');
    let weeklyInfoIndex=1;
    weeklyInfoDivContainers.forEach(()=>{
        let minTempCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .min`);
        let maxTempCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .max`);
        let minTempValue=minTempCont.textContent;
        let maxTempValue=maxTempCont.textContent;

        let minTempInNumber=Number(minTempValue);
        let maxTempInNumber=Number(maxTempValue.substring(1,maxTempValue.length-3));

        minTempCont.textContent=`${((minTempInNumber*9/5)+32).toFixed(2)}`;
        maxTempCont.textContent=`/${((maxTempInNumber*9/5)+32).toFixed(2)} °F`;

        weeklyInfoIndex+=1;
    });
}


export {importDataToDom,loadHeaderImage,checkCurrentScale,convertToFahrenheit,clearPreviousContents};