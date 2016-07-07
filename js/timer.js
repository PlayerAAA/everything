var     tempwin         =     document.getElementById('tempwin'),
        tempwinin       =     document.getElementById('tempwinin'),
        userChoiceH     =     document.getElementById('userChoiceH'),
        userChoiceM     =     document.getElementById('userChoiceM'),
        userChoiceS     =     document.getElementById('userChoiceS'),
        userChoiceses   =     [userChoiceH, userChoiceM, userChoiceS],
        timerInt,
        timer           =     document.getElementById('timer'),
        s               =     0,
        m               =     0,
        h               =     0,
        displayTimer   =     function () {
                                if (s < 10) {
                                    s = "0" + s;
                                }

                                if (m < 10) {
                                    m = "0" + m;
                                }

                                if (h < 10) {
                                    h = "0" + h;
                                }
                                timer.value = h + ":" + m + ":" + s;
                              };

function clearInputs(e) {
  userChoiceses[e].value = "";
}

function restoreInputs(x) {
  if(userChoiceses[x].value == "") {
    userChoiceses[x].value = "00"
  }
}

$('#startTime').on('click', function(e) {
  $(this).attr('value', function(_, text) {
    if (text === 'Stop!') {
      $(this).attr('class', 'w3-btn w3-green');
      stopTimer();
      return 'Start!';
    } else {
      $(this).attr("class", "w3-btn w3-red");
      resetTimer();
      startTimer();
      return 'Stop!';
    }
  });
});

function startTimer() {
  for (var i = 0; i < userChoiceses.length; i++) {
    if (userChoiceses[i].value < 10 & userChoiceses[i].value != 00 & userChoiceses[i].value.length != 2) {
       userChoiceses[i].value = "0" + userChoiceses[i].value;
     }
  }

  // if (userChoiceS.value < 10 & userChoiceS.value != 00) {
  //    userChoiceS.value = "0" + userChoiceS.value;
  //  }

  timerInt = setInterval(function () {
    m = +m;
    h = +h;
    s = +s;
    s++;

    if (s == 60) {
      m++;
      s = 0;
    } if (m == 60) {
      h++;
      m = 0;
    }

    displayTimer();
    if (h == userChoiceH.value & m == userChoiceM.value & s == userChoiceS.value || userChoiceH.value == 0 & userChoiceM.value == 0 & userChoiceS.value == 0) {
      $('#startTime').attr('class', 'w3-btn w3-green')
      stopTimer();
      $('#startTime').attr('value', 'Start!')
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInt);
}

function resetTimer() {
  s = 0;
  m = 0;
  h = 0;
  displayTimer();
}
