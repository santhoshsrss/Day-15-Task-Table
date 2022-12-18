var form_creation = document.querySelector('#form-creation');
form_creation.addEventListener('submit',(a)=>{
    a.preventDefault();
    // console.log("Your form is summited successfully");
    var FirstName = document.querySelector('[placeholder="fname"]');
    var LastName = document.querySelector('[placeholder="lname"]');
    var address = document.querySelector('[placeholder="address"]');
    var pincode = document.querySelector('[placeholder="pincode"]');
    var state = document.querySelector('[placeholder="state"]');
    var country = document.querySelector('[placeholder="country"]');
    if(FirstName!="" && LastName!="" && address!=""){
      var data = [FirstName,LastName,address,pincode,state,country];
      var creating_tr = document.createElement('tr');
        for(i=0;i<6;i++){
        var creating_td = document.createElement('td');
        creating_td.innerText = data[i].value;
        creating_tr.append(creating_td); 
        }
        document.querySelector('tbody').append(creating_tr)
        for(let i of data){
            i.value =""
        }
      }else{
        console.log("Please complete the form");
      }
    
    
    


})
