        const form = document.querySelector(".contact_form");
        function sendMsg(e){
            e.preventDefault();
    
            const name = document.querySelector(".name"), 
                    email = document.querySelector(".email"),
                    from = document.querySelector(".from");
                    to = document.querySelector(".to");
                    type = document.querySelector(".type");
                    msg = document.querySelector(".msg");
            var body="Name: "+name.value+"<br>Email: "+email.value+"<br>From: "+from.value+"<br>To: "+to.value+"<br>Type of leave: "+type.value+"<br>Remarks:"+msg.value;
            Email.send({
            Host : "smtp.gmail.com",
            Username : "maheshlaxmanjadhav.sangamone@gmail.com",
            Password : "gtlfdlndhjixwqqp",
            To : 'maheshlj093@gmail.com',
            From : "no-reply@sangamone.com",
            Subject : "leave application",
            Body : body
        }).then(
        message => alert("Your Leave Application has send successfully")
        );
        }
        form.addEventListener("submit",sendMsg);