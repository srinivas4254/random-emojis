const emoji=document.querySelector(".emoji");
const emojis =[
    "😂",
    '😁',
     '😀',
     '😁',
     '😊',
     '❤️',
     ' ❤️',
     '😍',
     '😒',
     '👌',
     '😘',
     '👍',
     '🙌',
     '🤦‍♀️',
     '🤦‍♂️',
     '💖',
     '😎',
     '😉',
     '🤦‍♀️',
     '😆',
     '🥰',
     '😘',
     '😙',
     '😍'
 
];
emoji.addEventListener('mouseover',function(){
    emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)]
    
})