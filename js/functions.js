$(document).ready(function() {

	// When user clicks on one of the tags below the associated code is executed

		// Change the download tabs
		$("#drag2install").click(function() {
			$("#install_emc").removeClass('active');
			$("#updatesite").removeClass('active');
			$(this).addClass("active");

			$("#content_drag2install").fadeIn(700);
			$("#content_emc").hide();
			$("#content_updatesite").hide();

			return false;
		});

		$("#eclipse_drag2install").click(function() {
			$("#eclipse_install_emc").removeClass('active');
			$("#eclipse_updatesite").removeClass('active');
			$(this).addClass("active");

			$("#content_drag2install_1").fadeIn(700);
			$("#content_emc_1").hide();
			$("#content_updatesite_1").hide();
			$("#eclipse_package_content").hide();

			return false;
		});

		$("#install_emc").click(function() {
			$("#drag2install").removeClass('active');
			$("#updatesite").removeClass('active');
			$(this).addClass("active");

			$("#content_emc").fadeIn(700);
			$("#content_drag2install").hide();
			$("#content_updatesite").hide();
			
			return false;

		});

		$("#eclipse_install_emc").click(function() {
			$("#eclipse_drag2install").removeClass('active');
			$("#eclipse_updatesite").removeClass('active');
			$(this).addClass("active");

			$("#content_emc_1").fadeIn(700);
			$("#content_drag2install_1").hide();
			$("#content_updatesite_1").hide();
			$("#eclipse_package_content").hide();

		});

		$("#updatesite").click(function() {
			$("#drag2install").removeClass('active');
			$("#install_emc").removeClass('active');
			$(this).addClass("active");

			$("#content_updatesite").fadeIn(700);
			$("#content_drag2install").hide();
			$("#content_emc").hide();

		});

		$("#eclipse_updatesite").click(function() {
			$("#eclipse_drag2install").removeClass('active');
			$("#eclipse_install_emc").removeClass('active');
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
