$(document).ready(
  ()=>{
    $('.modal-cancel').css({
        'display':'block',
        'position':'absolute',
        'top':'3px',
        'right':'2px',
        'color':'black',
        'height':'30px',
        'width':'35px',
        'font-size':'30px',
        'text-decoration':'none',
        'text-align':'center',
        'font-weight':'bold'
    })
    $('#modalScreen').addClass('mScreen')
    $('.modal-header').css({
        'font-size': '25px',
        'color': 'black'
    })
    $('.click').css({
        'background-color': '#555555',
        'border': 'none',
        'color': 'white',
        'padding': '15px 32px',
        'text-align': 'center',
        'text-decoration': 'none',
        'display': 'inline-block',
        'font-size': '16px'
    })
  }
);
