input = document.getElementById("input_date");
aff = document.getElementById("aff");

DAYS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

function toDate(n){
    // TODO
    return "19/01/2021";
}

function compressMonthDay(month, day) {
    return 100 * month + day
}

function toDay(day, month, year){
    if ((month <= 2) & (day < 28)) {
        while (compressMonthDay(month, day) != compressMonthDay(2, 2)) {
            if (compressMonthDay(month, day) < compressMonthDay(2, 2)) {
                if (day >= 30) {
                    day = 1
                    month += 1
                } else {
                    day += 1
                }
            } else {
                if (day <= 1) {
                    day = 30
                    month -= 1
                } else {
                    day -= 1
                }
            }
        }
    } else {
        while (compressMonthDay(month, day) != compressMonthDay(8, 8)) {
            if (compressMonthDay(month, day) < compressMonthDay(8, 8)) {
                if (day >= 30) {
                    day = 1
                    month += 1
                } else {
                    day += 1
                }
                }
                else {
                    if (day <= 30) {
                        day = 30
                        month -= 1
                    } else {
                        day -= 1
                    }
                }
            }
        }
    }
    alert("the day is" + day.toString() + " / " + month.toString())

}


var dayToLongDay = {
    "lun" : "Monday",
    "mar" : "Tuesday",
    "mer" : "Wednesday",
    "jeu" : "Thursday",
    "ven" : "Friday",
    "sam" : "Saturday",
    "dim" : "Sunday"
}

// pour stocker ta date secrète 
secretDate = {
  value: new Date(+(new Date()) + Math.random() * (end - start));
  update: function() {
  var date = new Date(+(new Date()) + Math.random() * (end - start));
  // date.setHours(hour);
  aff.InnerHtml = date.format("DD/MM/YYYY");
  }
  good: function(d){d==toDay(value)},
}


function check_date() {
  let day_index = input.selectedIndex
  
  if (secretDate.good(day_index)){
      alert("good answer");
  }
  else {
    alert("bad answer")
    alert("The date changed")
  
    secretDate.update()
  }
  
}

secretDate.update()
</script>
