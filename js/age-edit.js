
let TMR = 10, myDate = '17.11.1989';

onload = function ()
{
setInterval (function ()
   {
   let a =  myDate.split (' '),
       b =  a [0].split  ('.'),
       
       d = new Date (),
 
   T     =              [] , C     =               [];
   T [0] =           b [2] , C [0] = d.getFullYear (),  
   T [1] =         --b [1] , C [1] = d.getMonth    (),      
   T [2] = parseInt (b [0]), C [2] = d.getDate     ();       
   T [2] = parseInt (b [0]);       
   
   
   for (var D = [], j = -1; j < 6; j++, D [j] = C [j] - T [j]);
 
   if (D [5] < 0) --D [4],                D [5] += 60;
   if (D [4] < 0) --D [3],                D [4] += 60;                                                   
   if (D [3] < 0) --D [2],                D [3] += 24;                                                   
   if (D [2] < 0) --D [1], d.setDate (0), D [2] +=  d.getDate ();                       
   if (D [1] < 0) --D [0],                D [1] += 12;
 
   let w = [['год'    , 'года'   , 'лет'    ],   // 0
            ['месяц'  , 'месяца' , 'месяцев'],   // 1
            ];
   for (j = 0; j < 6; j++)
      {
      let n = D [j],
          k = n % 10,
          l = (!k || n > 5 && n < 21 || k > 4) ? 2 : ((k == 1) ? 0 : 1);
      document.getElementById ('age').getElementsByTagName ('div') [j].innerHTML = n  + " " + w [j] [l]; 
      }
   TMR = 1000;
   }, TMR);
}
