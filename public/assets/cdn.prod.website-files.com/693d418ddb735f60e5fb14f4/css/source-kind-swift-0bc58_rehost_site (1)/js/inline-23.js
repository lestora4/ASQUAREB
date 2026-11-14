
	console.log("here i ammmm");
	
	var product_name = ``;
	var zip_collection_id = [];
	var credit_status = true;
	var product_id = "";
	var product_handle = "";
	var zipcode_html = `<div class="validation_msg 4444"><div class="success_msg message" style="background-color: #e5efe5;"><span style="color:#000000" >Delivery to this product is available in your area!</span></div><div class="error_msg message" style="background-color:#fae5e5;""><span style="color:#000000">Delivery to this product is not available in your area!</span></div><div class="not_valid_error_msg message" style="background-color: #fae5e5;"><span style="color:#000000">Please enter a valid pincode</span></div></div><div class="zipcodecheck_area " style=""><div class="inline_image_container"><img src="https://api-zip-remix.appjetty.com//assets/admin/img/location_icon/location_icon_7.png" alt="check delivery availability11"><span class="block_label_text" style="color:#000000;">Check availability at</span></div><div class="zipcode_validation zipcode_inline_view"><div class="zipcode_inputbox"><input type="text" maxlength="15"  id="zipcode_text" class="zipcode_input" name="zipcode_field" style="border-radius:5px;border-width:1px;border-style:solid;border-color:#bbb;" placeholder="Enter Pincode."></div><button class="zipcode_submit" style="background-color: #000000; color: #ffffff; word-break: break-all; border-radius: 5px; border-width: 1px; border-style: solid; border-color: #bbb;">Check</button></div><div class="empty_val_error" >Please enter zipcode</div><div class="additional_notes message" style=color:#000000;">Check product delivery at your location to enable Add to Cart.</div></div><div class="waiting_list_msg" style="text-align: center;margin-bottom: 10px;display: none;"><div style="text-align: center;">Sorry, this pincode is not serviceable, please subscribe to our waiting list and we will inform you when we open service in your area.</div></div><div class="contact_details"><div class="customer_email" style="padding-bottom: 10px;display: none;"><input type="text" id="customer_email" class="zipcode_input" name="email_field" style="border-radius:5px;border-width:1px;border-style:solid;border-color:#bbb;" placeholder="Enter Email Address" style="width: 100%;"><span class="error" id="req_email" style="color: red;display: none;">Email address is required.</span><span class="error" id="invalid_email" style="color: red;display: none;">Please enter valid email address</span></div><div class="customer_phone" style="padding-bottom: 10px;display: none;"><input type="text"  maxlength="15"  id="customer_phone" class="zipcode_input" name="phone_field[main]" style="width: 100%;border-radius:5px;border-width:1px;border-style:solid;border-color:#bbb;"><span class="error" id="invalid_phone" style="color: red;"></span></div></div><div class="try_zipcode"><div class="join_waitlist"><button type="button" class="waiting_list_submit" style="background-color: #000000; color:#ffffff; opacity: 1; cursor: pointer; width: 100%; border: unset; min-height: 40px; margin-bottom: 15px; display: none !important; border-radius:5px; border-width:1px; border-style:solid; border-color:#bbb;">Join Waiting List</button><span class="waiting_success_msg" style="color: green;display: none;">Successfully added !!</span></div><div class="change_zipcode" id="change_zipcode" style="margin-bottom: 10px; font-weight: 600; text-align: center; display: none;"><u><a href="javascript:void(0)">Try Different Zipcode</a></u></div></div>`;
	var zipcode_app_status = '1';
	var restriction_btn_status = '0';
	var global_restriction_btn_status = '0';
	var add_to_cart_btn_selector = 'add';   
	var button_text = `Check`;
	var estimation_msg = `Estimated Delivery Time : [est_days]`;
	var zip_prod_config_status = 'all_prod';
	var domain="aswinssweets.com";
	var waiting_list_btn_status = '0';
	var checkout_btn_selector = 'checkout';     
	var button_appearance = 'inline_form';	
	var btn_app_product_page = 'prod_manual_integration';	
	var btn_app_cart_page = 'none';	
	var btn_app_home_page = 'none';
	var modal_popup = 'none';  
	var popup_pre_prod_message = `Please {%startlink%}set a valid delivery location{%endlink%} in order to add this product to the cart.`;
	var popup_pre_prod_message_text_size = `12`;
	var popup_post_prod_message = `Please {%startlink%}try different zipcode{%endlink%} in order to add this product to the cart.`;
	var popup_post_prod_message_text_size = `12`;
	var icon_color = '#ffffff';	
	var icon_size = '30';	
	var button_position = 'bottom_right';	
	var button_bg_color = '#000000';	
	var button_margin = '10';	
	var button_padding = '10';
	var distance_from_bottom = '20';
	var distance_from_right = '20';	
	var distance_from_left = '20';
	var enable_checkout_button = '0';
	var checkout_btn_txt = `Hey, As we don't provide service in your area {zipcode}, you won't be able to place this order.`;
	var floating_icon = '1';
	var inline_header = '0';
	var header_html = `<div></div>`;
	var zip_global = `all_prod`;
	var zipcode_logs_status = `0`;
	var aj_google_map_key = ``;
	var location_detection_status = `0`;
	var popup_header_html = `<div></div>`;
	var global_validation_html = ``;
	var delivery_success_text = `Delivery is available to [aj_pincode]`;
	var delivery_unsuccess_text = `Delivery is not available to [aj_pincode]`;
	var upper_header_text = `Hello`;
	var header_lower_text = `Check your Zipcode`;
	var header_text_after_zipcode = `Deliver to`;
	var template_name = 'index';
	var selected_plan = '2';
	var trial_mode = 1;
	var zipcode_check_compulsory_status = `0`;
	var restrict_store_entry_status = `0`;
	var exchange_and_return_msg = `[return_and_exchange_days] Return & Exchange`;
	var customer_zipcode = ``;
	var autodetected_customer_zipcode_status = `1`;
	var popup_background_option = `color`;
	var popup_background_image = ``;
	var hide_auto_showing_popup = 0;
	var add_to_cart_parent_depth = 0;
	
	function inlineform(){
		  
	}
	if(typeof jQuery == 'undefined'){
		var headTag = document.getElementsByTagName("head")[0];
		var jqTag   = document.createElement('script');
		jqTag.type  = 'text/javascript';
		jqTag.src   = '/assets/ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
		jqTag.onload = inlineform;
		headTag.appendChild(jqTag);
	}else{
		inlineform();
	}

	document.addEventListener("DOMContentLoaded", () => {
		if(button_appearance == 'modal_popup'){
			const cardBody = document.querySelector(".ZipCodeRestrict .card-body");
			const icon = document.getElementById("zipcode_modal_popup_icon");
			if (popup_background_option === "image") {
				const img = new Image();
				img.src = popup_background_image;

				img.onload = function () {
					cardBody.style.background = `url(${img.src}) center center / cover no-repeat`;
					cardBody.style.display = "block";
					cardBody.style.opacity = "1";
					icon.style.opacity = "1";
				};
			}else{
				cardBody.style.display = "block";
				cardBody.style.opacity = "1";
				icon.style.opacity = "1";
			}
		}
	});

  	document.addEventListener("DOMContentLoaded", () => {
		var mic = document.querySelector(".mic");
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const zipMicBtn = document.getElementById("zipMicBtn");
		const zipcodeText = document.getElementById("zipcode_text");
		const zipcodeSubmit = document.querySelector(".zipcode_submit");
		if (!SpeechRecognition) {
			$('#zipMicBtn').hide();
			return false;
		}else{
			$('#zipMicBtn').show();
			const recognition = new SpeechRecognition();
			recognition.continuous = false; 
			recognition.lang = "en-US";
			

			if (!zipMicBtn || !zipcodeText || !zipcodeSubmit) {
				return;
			}

			zipMicBtn.addEventListener("click", () => {
				console.log("Microphone button clicked. Starting speech recognition...");
				recognition.start();
			});
			recognition.onspeechstart = () => {
				console.log("Speech detected...");
			};

			recognition.onresult = (event) => {
				console.log('hiii...');
				const transcript = event.results[0][0].transcript.trim();
				console.log("Transcript received:", transcript);
				zipcodeText.value = transcript;
				zipcodeSubmit.click();
				const path = mic.querySelector("svg path");
				if (path) {
					path.setAttribute("fill", "#333333"); // Set the green color
				}
			};
			recognition.onspeechend = () => {
				console.log("Speech ended.");
				mic.classList.remove("listening");
				const path = mic.querySelector("svg path");
				if (path) {
					path.setAttribute("fill", "#333333"); // Set the green color
				}
			};
			recognition.onerror = (event) => {
				const path = mic.querySelector("svg path");
				if (path) {
					// Update the fill attribute directly
					path.setAttribute("fill", "#333333"); // Set the green color
				}
				console.error("Speech recognition error:", event.error);
			};
			mic.addEventListener("click", function () {
				mic.classList.add("listening");
				const path = mic.querySelector("svg path");
				if (path) {
					// Update the fill attribute directly
					path.setAttribute("fill", "#26A559"); // Set the green color
				}
			});
		}
	});
	var customCss = ``;
	var styleElement = document.createElement('style');
	styleElement.type = 'text/css';
	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = customCss;
	} else {
		styleElement.appendChild(document.createTextNode(customCss));
	}
	document.head.appendChild(styleElement);
