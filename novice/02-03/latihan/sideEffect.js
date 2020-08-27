let meetUp ={ name :'JsCommuntry',isActive:true, members :49}

const schaduleMeetUp =( date, place)=>{
    meetUp.date = date;
    meetUp.place =place;

    if(meetUp.members < 50){
        meetUp.isActive =false;
    }
}

const publicMeetUp=()=>{
    if(meetUp.isActive){
        meetUp.publish =true;
    }
}

schaduleMeetUp('sunday','sleman');
publicMeetUp();
console.log(meetUp)