var     start         =     document.getElementById('start'),
        reset         =     document.getElementById('reset'),
        counter       =     document.getElementById('counter'),
        sCounter      =     0,
        mCounter      =     0,
        hCounter      =     0,
        displayChrono =     function () {
                            if (sCounter < 10) {
                              sCounter = "0" + sCounter;
                            }

                            if (mCounter < 10) {
                              mCounter = "0" + mCounter;
                            }

                            if (hCounter < 10) {
                              hCounter = "0" + hCounter;
                            }
                            counter.value = hCounter + ":" + mCounter + ":" + sCounter;
                            },
        chronometer,
        openchrono    =     document.getElementById('openchrono'),
        chronowinin   =     document.getElementById('chronowinin');



function chrono() {
    chronometer = setInterval(function () {

        mCounter = +mCounter;
        hCounter = +hCounter;
        sCounter = +sCounter;
        sCounter++;
        if (sCounter == 60) {
          mCounter++;
          sCounter = 0;
        }

      displayChrono();
      }, 1000);
}

function resetChrono() {
  sCounter = 0;
  mCounter = 0;
  hCounter = 0;
  displayChrono();
}

function stopChrono() {
  clearInterval(chronometer);
}



$('#openchrono').click(function() {
    if ($(this).attr('value') == '+') {
        $(this).attr('value', '-');
        $('#chronowinin').slideDown();
    } else {
        $(this).attr('value', '+');
        $('#chronowinin').slideUp();
    }
});

$('#start').on('click', function (e) {
    $(this).attr('value', function (_, text) {
        $(this).attr("class", "w3-btn w3-red");
        return text === 'Stop!' ? 'Start!' : 'Stop!';
    		});
     if ($(this).attr('onclick') == 'chrono()') {
     $(this).attr('onclick', 'stopChrono()');
     } else {
     $(this).attr('onclick', 'chrono()');
     $(this).attr('class', 'w3-btn w3-green');
     }
});

function stopChrono() {
    clearInterval(chronometer);
    $(this).attr('class', 'w3-btn w3-green');
    $('#start').off('click', stopChrono);
    $('#start').on('click', startChrono);
}

function startChrono(e) {
    $(this).attr('value', 'Stop!')
    $(this).attr("class", "w3-btn w3-red")
    $('#start').off('click', startChrono);
    $('#start').on('click', stopChrono);
}

$('#start').on('click', startChrono);












//
// $('#start').click(function() {
//     if ($(this).attr('value') == 'Start!') {
//         $(this).attr('value', 'Stop!');
//         $(this).attr('class', 'w3-btn w3-red')
//         $('#start').click(stopChrono());
//     }});

//else {
//         $(this).attr('value', 'Start!');
//         $(this).attr('class', 'w3-btn w3-green');
//         $('#start').click(stopChrono()
//           // function() {
//           // function stopChrono() {
//           //   clearInterval(chronometer);
//           // }
//     //}
//   );
// }});
//
//















// openchrono.addEventListener("click", function() {
//   chronowinin.className = "w3-container w3-row";
//   openchrono.innerHTML = "-";
//   openchrono.id = "closechrono"
//
// closechrono.addEventListener("click", function() {
//   var closechrono   =     document.getElementById('closechrono');
//   chronowinin.className = "w3-container w3-row hidden";
//   openchrono.innerHTML = "+";
//   closechrono.id = "openchrono"
//   });
// });
// )
