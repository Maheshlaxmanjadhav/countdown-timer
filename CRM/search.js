let suggestions = [
    "Mahesh Stationary",
    "Aishwarya Bekary",
    "Santosh Salon"
    ];
    const searchBox = document.querySelector(".search-box");
    const inputBox = searchBox.querySelector("input");
    const suggBox = searchBox.querySelector(".auto-box");
    const icon = searchBox.querySelector("button");
    let linkBox = searchBox.querySelector("a");
    let webLink;
    
    inputBox.onkeyup = (e)=>{
        let userData = e.target.value; 
        let emptyArray = [];
        if(userData){
            icon.onclick = ()=>{
                    webLink = `${userData}.html`;
                    linkBox.setAttribute("href", webLink);
                    linkBox.click();
            }
            emptyArray = suggestions.filter((data)=>{
                return data.toLowerCase().startsWith(userData.toLowerCase());
            });
            emptyArray = emptyArray.map((data)=>{
                return data = `<li>${data}</li>`;
            });
            searchBox.classList.add("active"); 
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                allList[i].setAttribute("onclick", "select(this)");
            }
        }else{
            searchBox.classList.remove("active");
        }
    }
    
    function select(element){
        let selectData = element.textContent;
        inputBox.value = selectData;
        icon.onclick = ()=>{
            webLink = `${selectData}.html`;
            linkBox.setAttribute("href", webLink);
            linkBox.click();
        }
        searchBox.classList.remove("active");
    }
    
    function showSuggestions(list){
        let listData;
        if(!list.length){
            userValue = inputBox.value;
            listData = `<li>${userValue}</li>`;
        }else{
          listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }