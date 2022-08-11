    function func(){
    var xhr=new XMLHttpRequest()
    var url="https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"       
    xhr.open("GET",url,false)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)

            let template =''
            for(let i=0;i<30;i++){
                template=template + `
                    <div>
                         <img src="${response[i].thumbnailUrl}" alt="img not found"  height="200px" width="200px"/>
                    </div>
                `
            }

             document.getElementById("d5").innerHTML += template;

        
        }
    }
    xhr.send()
    
}

document.querySelector("#d99").addEventListener('click',(e)=>{
    e.preventDefault
    func()
})