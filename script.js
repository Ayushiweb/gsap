
let tl= new TimelineMax();
tl.fromTo('#overlay',1,{
    transform:'translateY(0%)'
},{
    transform:'translateY(-100%)',    
    ease: Expo.easeInOut
})
.fromTo('#img',2,{
    transform: 'scale(2)'
},{
    transform: 'scale(1)',
    ease: Expo.easeInOut
})
.fromTo('#left',2,{
    width: '0%',
    opacity: 0
},{
    width: '30%',
    opacity: 1,
    ease: Expo.easeInOut
}, '-=2.3')
.fromTo('#text',1,{
    opacity: 0,
    transform: 'translateY(20px)'
},{
    opacity: 1,
    transform: 'translateY(0px)'
})