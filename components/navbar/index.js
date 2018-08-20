$(document).ready(
  ()=>{
    $('.home').click(()=>{removeAndAddClass('.home')})
    $('.login').click(()=>{removeAndAddClass('.login')})
    $('.contact').click(()=>{removeAndAddClass('.contact')})
    $('.about').click(()=>{removeAndAddClass('.about')})
    $('.icon').click(()=>{
        let x = $('#mynav');
        if (x.hasClass('nav')&&!x.hasClass('responsive'))
            x.addClass('responsive')
        else
          x.removeClass('responsive')

    })

  }
);
let removeAndAddClass=(addClass)=>{
    $('.home').removeClass('active');
    $('.login').removeClass('active');
    $('.contact').removeClass('active');
    $('.about').removeClass('active');
    $(addClass).addClass('active');
}
