function submit_form(){
 	if(typeof(validateCaptchaAndSubmit)!='undefined'){
 		validateCaptchaAndSubmit();
 	}else{
 		check_webtolead_fields();
 	}
 }

function check_webtolead_fields(){
     if(document.getElementById('bool_id') != null){
        var reqs=document.getElementById('bool_id').value;
        bools = reqs.substring(0,reqs.lastIndexOf(';'));
        var bool_fields = new Array();
        var bool_fields = bools.split(';');
        nbr_fields = bool_fields.length;
        for(var i=0;i<nbr_fields;i++){
          if(document.getElementById(bool_fields[i]).value == 'on'){
             document.getElementById(bool_fields[i]).value = 1;
          }
          else{
             document.getElementById(bool_fields[i]).value = 0;
          }
        }
      }
    if(document.getElementById('req_id') != null){
        var reqs=document.getElementById('req_id').value;
        reqs = reqs.substring(0,reqs.lastIndexOf(';'));
        var req_fields = new Array();
        var req_fields = reqs.split(';');
        nbr_fields = req_fields.length;
        var req = true;
        for(var i=0;i<nbr_fields;i++){
          if(document.getElementById(req_fields[i]).value.length <=0 || document.getElementById(req_fields[i]).value==0){
           req = false;
           break;
          }
        }
        if(req){
            if(validateEmailAdd()){
                         document.WebToLeadForm.submit();
                         return true;
                      }
                      else {
                         return false;
                      }
         }
        else{
          alert('Please fill out all required fields!');
          return false;
         }
        return false
   }
   else{
    document.WebToLeadForm.submit();
   }
}

 function validateEmailAdd(){
       var req = true;
       var regexp= /^\w+(['\.\-\+]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
       if(document.getElementById('email1').value.length >0) {
         if(document.getElementById('email1').value.match(regexp)== null){
           alert('Invalid email address.');
           return false;
         }
     }
     else {req=false;}
     return req;
}
