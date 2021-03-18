var bionicles = {
    "eng1":"Chris",
    "eng2":"Mario",
    "eng3":"JP",
    "eng4":"Manos",
    "eng5":"Daniel",
    "eng6":"Stefan"
}


$(".btn").click(function(){
    var randomNumber = Math.floor(Math.random()*6+1);
    var selectedBionicle = "eng"+randomNumber;
    
    console.log(randomNumber);
    console.log(selectedBionicle);
    console.log(bionicles[selectedBionicle]);
    
    $(".bionicle").text(bionicles[selectedBionicle]);
    
    $(".answer").addClass("visible");


});








