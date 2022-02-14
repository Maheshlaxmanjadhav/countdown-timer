        const form = document.querySelector(".contact_form");
        function sendMsg(e){
            e.preventDefault();
    
            const name = document.querySelector(".name"), 
                    email = document.querySelector(".email"),
                    msg = document.querySelector(".msg");
            var body="Name: "+name.value+"<br>Email: "+email.value+"<br>Remarks:"+msg.value;
            Email.send({
            Host : "smtp.gmail.com",
            Username : "maheshlaxmanjadhav.sangamone@gmail.com",
            Password : "gtlfdlndhjixwqqp",
            To : 'maheshlj093@gmail.com',
            From : "no-reply@sangamone.com",
            Subject : "Contact",
            Body : body
        }).then(
        message => alert("send successfully")
        );
        }
        form.addEventListener("submit",sendMsg);