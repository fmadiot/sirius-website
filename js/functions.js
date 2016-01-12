$(document).ready(function() {

	// When user clicks on one of the tags below the associated code is executed

		// Change the download tabs
		$("#eclipse_drag2install").click(function() {
			$("#eclipse_install_emc").removeClass('active');
			$("#eclipse_updatesite").removeClass('active');
			$("#eclipse_package").removeClass('active');
			$(this).addClass("active");

			$("#content_drag2install_1").fadeIn(700);
			$("#content_emc_1").hide();
			$("#content_updatesite_1").hide();
			$("#eclipse_package_content").hide();

			return false;
		});

		$("#eclipse_install_emc").click(function() {
			$("#eclipse_drag2install").removeClass('active');
			$("#eclipse_updatesite").removeClass('active');
			$("#eclipse_package").removeClass('active');
			$(this).addClass("active");

			$("#content_emc_1").fadeIn(700);
			$("#content_drag2install_1").hide();
			$("#content_updatesite_1").hide();
			$("#eclipse_package_content").hide();

		});

		$("#eclipse_updatesite").click(function() {
			$("#eclipse_drag2install").removeClass('active');
			$("#eclipse_install_emc").removeClass('active');
			$("#eclipse_package").removeClass('active');
			$(this).addClass("active");

			$("#content_updatesite_1").fadeIn(700);
			$("#content_drag2install_1").hide();
			$("#content_emc_1").hide();
			$("#eclipse_package_content").hide();

		});

		$("#eclipse_package").click(function() {
			$("#eclipse_drag2install").removeClass('active');
			$("#eclipse_install_emc").removeClass('active');
			$("#eclipse_updatesite").removeClass('active');
			$(this).addClass("active");

			$("#eclipse_package_content").fadeIn(700);
			$("#content_drag2install_1").hide();
			$("#content_emc_1").hide();
			$("#content_updatesite_1").hide();
		});

		$(".updateSite").click(function() {
			$(".updateSiteBlock").css('display', 'block');

			return false;
		});

		$(".closeButtonUpdateSite").click(function() {
			$(".updateSiteBlock").css('display', 'none');

			return false;
		});
		
		// Drop down the tutorials content
		$("#resource1").click(function() {
			if ($(".content").is(":hidden")) {
				$(".content").show(500);
			} else {
				$(".content").hide(500);
			}
			return false;
		});
		
		// Close the download bar
		$(".closeButton").click(function() {
			$("#download_banner_wrapper").css('display', 'none');

			return false;
		});

		// Display current year
		$("#year").text( (new Date).getFullYear() );
	});

function drag2InstallTooltip() {
	$('.drag2install_tooltip').css('display', 'block');

	return false;
}

function drag2InstallTooltip_out() {
	$('.drag2install_tooltip').css('display', 'none');

	return false;
}

function tabs() {
	// When user clicks on tab, this code will be executed
	$("#tabs li").click(function() {
		// First remove class "active" from currently active tab
			$("#tabs li").removeClass('active');

			// Now add class "active" to the selected/clicked tab
			$(this).addClass("active");

			// Hide all tab content
			$(".tab_content").hide();

			// Here we get the href value of the selected tab
			var selected_tab = $(this).find("span").attr("id");

			// Show the selected tab content
			$(selected_tab).fadeIn();

			// At the end, we add return false so that the click on the link
			// is not
			// executed
			return false;
		});
}

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
