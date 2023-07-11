// import React from 'react'

// const CustomCursor = () => {


//     console.log('hi')

//     let cursor = document.querySelector(".custom");
//     console.log(cursor)
//     var timeout;
//     // //follow
//     document.addEventListener("mousemove",(e)=>{
//         let x = e.clientX;
//         let y = e.clientY;
        
//         var w = window.innerWidth;
//         var h = window.innerHeight;
        
//         // console.log(w,h,x%w,y%h)

//         if (cursor) {
            
//             cursor.style.top=y+"px";
//             cursor.style.left=x+"px";
//             cursor.style.display="block";
//         }
//     })

//     // //mousestop
//     // document.addEventListener("mouseout",(e)=>{
//     //     cursor.style.display="none";
//     // })

//     // function mouseStopped() {
//     //     cursor.style.display = "none";
//     // }
//     // clearTimeout(timeout);
//     // timeout = setTimeout(mouseStopped,1000);

//   return (
//     <div className='custom block fixed z-[1000] bg-[#2696EB] w-[20px] h-[20px] rounded-full pointer-events-none before:content-[""] before:absolute before:bg-[#2696EB] before:w-[50px] before:h-[50px] before:opacity-20 before:translate-x-[-30%] before:translate-y-[-30%] before:rounded-full'></div>
//   )
// }

// export default CustomCursor
