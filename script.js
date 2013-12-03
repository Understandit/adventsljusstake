var d = new Date();
var day = d.getDate();
//var day = 20;
var dayEnd = 24;
var dayRatio = dayEnd/100;

function candle(dayLimit,id) {
  if(day >= dayLimit) {
    $(id).addClass('lit');
    
    //var calculatedHeight = (dayCurrent/dayEnd);
    var dayDiff = day - dayLimit;
    var candleHeight = ((dayEnd-dayDiff)/dayRatio) + '%';
    
    console.log('dayLimit: ' + dayDiff);
    $(id).height(candleHeight);
  }
}

$(document).ready(function() {
  //console.log(dayRatio);
 
  //Calculate days left
  if(day < dayEnd) {
    $('#days-left').html('<span>Dagar kvar till jul</span>' + [dayEnd - day]);
    
    if(day == 20) {
      $('#days-left').html('<div class="single">Grattis Linda!</div>');
    }
  }
  else if(day == dayEnd) {
    $('#days-left').html('<div class="single">God jul! :)</div>');
  }
  else {
    $('#days-left').html('<div class="single">Julen är slut :(</div>');
  }

  candle(1,'#first');
  candle(8,'#second');
  candle(15,'#third');
  candle(22,'#fourth');
});

