        function update(){
            var date=new Date();
            var day=date.getDay(),
                month=date.getMonth(),
                dayNum=date.getDate(),
                year=date.getFullYear();
            var hour=date.getHours(),
                minute=date.getMinutes(),
                second=date.getSeconds(),
                per="AM";
                if(hour==0){
                    hour=12;
                }
                if(hour>12){
                    hour=hour-12;
                    per="PM";
                }
                Number.prototype.pad = function(digits){
                    for(var n=this.toString();n.length<digits;n=0+n);
                    return n;
                }
            var months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
            var weeks=["sun","mon","tue","wed","thur","fri","sat"];
            var ids=["day","month","dayNum","year","hour","minute","second","per"];
            var values=[weeks[day],months[month],dayNum,year,hour.pad(2),minute.pad(2),second.pad(2),per];
            for(var i=0;i<ids.length;i++)
            document.getElementById(ids[i]).innerHTML=values[i];
        }
        function initTime(){
            update();
            setInterval(update,1000);
        }

        function londonTime(){
        var a=document.getElementById("l").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Europe/London',timeStyle:'medium',hourCycle:'h12'});
      }setInterval(londonTime,1000);
      function losTime(){
        var a=document.getElementById("la").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/Los_Angeles',timeStyle:'medium',hourCycle:'h12'});
      }setInterval(losTime,1000);
      function newYork(){
        var a=document.getElementById("ny").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/New_York',timeStyle:'medium',hourCycle:'h12'});
      }setInterval(newYork,1000);
      function dubai(){
        var a=document.getElementById("db").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Asia/Dubai',timeStyle:'medium',hourCycle:'h12'});
      }setInterval(dubai,1000);

      