$('.backToTop').on('click',()=>$("html, body").animate({scrollTop: $("body").offset().top}, 1000));

const sections = document.querySelectorAll('.section');

 
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},{})
sections.forEach(section=>{
    observer.observe(section);
});

function getYPosition(){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    console.log(top)
    return top;
  }
  window.addEventListener('scroll',()=>{
    let top  = window.pageYOffset || document.documentElement.scrollTop;
    console.log(top)
    if(top >= 0 && top < 5){
        $('.backToTop').fadeOut();
    }
    else{
        $('.backToTop').fadeIn();
    }
  })