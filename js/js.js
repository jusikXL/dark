$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });





    $('.label-1').click(function(event){
        $('.label-1').addClass('Active');
        $('.label-2').removeClass('Active');
        $('.label-3').removeClass('Active');
        $('.label-4').removeClass('Active');
    });


    $('.label-2').click(function(event){
        $('.label-2').addClass('Active');
        $('.label-1').removeClass('Active');
        $('.label-3').removeClass('Active');
        $('.label-4').removeClass('Active');
    });
    $('.label-3').click(function(event){
        $('.label-3').toggleClass('Active');
        $('.label-1').removeClass('Active');
        $('.label-2').removeClass('Active');
        $('.label-4').removeClass('Active');
    });
    $('.label-4').click(function(event){
        $('.label-4').toggleClass('Active');
        $('.label-1').removeClass('Active');
        $('.label-3').removeClass('Active');
        $('.label-2').removeClass('Active');
    });

    
});



const animItems = document.querySelectorAll('._anim-items');

        if(animItems.length > 0 ){
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll(params) {
                for (let i = 0; i < animItems.length; i++){
                    const animItem = animItems[i];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;

                    if(animItemHeight > window.innerHeight){
                        animItemPoint = window.innerHeight - animItemHeight / animStart;
                    }

                    if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                        animItem.classList.add('_active');
                    }
                    else {
                        if(!animItem.classList.contains('_anim-no-hide')){
                            animItem.classList.remove('_active');
                        }
                    }



                }
            }

            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {top: rect.top + scrollTop, left: rect.left + scrollLeft}     
            }
            animOnScroll();
        }







        consoleText(['Made with Love.'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}