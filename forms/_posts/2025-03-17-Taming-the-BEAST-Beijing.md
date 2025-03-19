---
formtype: Application form
title: Taming the BEAST Beijing
layout: form
opendate: 2025-03-17
closedate: 2025-04-17
image: /images/workshops/Taming-the-BEAST-Beijing-Logo.svg
flyer: /images/workshops/Taming-the-BEAST-Beijing-Flyer.pdf
homepage: /workshops/Taming-the-BEAST-Beijing/index.html
---

{% capture todaysdate %}{{ 'now' | date: '%s '}}{% endcapture %}
{% capture formopendate %}{{ page.opendate | date: '%s '}}{% endcapture %}
{% capture formclosedate %}{{ page.closedate | date: '%s '}}{% endcapture %}

{% if formopendate > todaysdate %} 

  <div class="row">
  It looks like this form isn't open for responses yet, please check again soon!
  </div>

{% elsif formclosedate < todaysdate %}

  <div class="row">
	It looks like this form's deadline has passed 
	</div>

{% else %}


This is the application form for participants to the [Taming the BEAST Beijing workshop]( {{page.homepage}} ), which will take place at the **IVPP** in **Beijing**, **July 14-18, 2025**. The application fee is **1500 CNY**, and will cover all meals during the workshop. Participants are expected to arrange for their own accomodation as well as travel to and from the workshop.

We welcome applications from researchers at all career stages and research interests. However, spaces are limited and we will give priority to early-career applicants as well as applicants who intend to come to the workshop with their own dataset to analyze.

Applications are open until **April 17th**! We expect to contact successful applicants by **May 5th**.

For any questions, please contact the organizing committee at [ttb.beijing@ivpp.ac.cn](mailto:ttb.beijing@ivpp.ac.cn).



<div class="bigspacer"></div>
<hr>


<form
  action="https://formspree.io/f/mrbpbayd"
  class="fs-form"
  target="_top"
  method="POST"
>

<p class="fs-description" id="dpa-consent-description">
   	Fields marked with <sup>*</sup> are required.
</p>
<p></p>
<!--h2>Personal details </h2-->

  <fieldset class ="fs-layout__2-column">
    <div class="fs-field">
      <label class="fs-label" for="firstname">First Name <sup>*</sup></label>
      <input class="fs-input" id="firstname" name="firstname" required />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="lastname">Last Name <sup>*</sup></label>
      <input class="fs-input" id="lastname" name="lastname" required />
    </div>
    <!-- Can't easily interrupt submission if not equals, so no real use -->
    <!--div class="fs-field">
      <label class="fs-label" for="email1">Email address <sup>*</sup></label>
      <input class="fs-input" id="email1" name="email1" required />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="email2">Confirm email <sup>*</sup></label>
      <input class="fs-input" id="email2" name="email2" required />
    </div-->
	</fieldset>
	<fieldset>
	    <div class="fs-field">
	      <label class="fs-label" for="displayname">Full name as you would like it to appear on your namebadge</label>
	      <input class="fs-input" id="displayname" name="displayname"/>
	      <p class="fs-description" id="dpa-consent-description">
        	Please also include any titles, pronouns or special characters that you would like to appear on your namebadge. If left blank this will be simply your first name and last name as entered above.
      	  </p>
	    </div> 
	</fieldset>
	<hr>
  <fieldset class ="fs-layout__2-column">
  <!-- Gender radios start -->
	<div class="fs-field">
	    <label class="fs-label">Gender <sup>*</sup></label>	    
	    <div class="fs-radio-group">
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isMale"
	            name="gender"
	            required
	            type="radio"
	            value="male"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isMale">Male</label>
	        </div>
	      </div>
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isFemale"
	            name="gender"
	            required
	            type="radio"
	            value="female"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isFemale">Female</label>
	        </div>
	      </div>	
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isOtherGender"
	            name="gender"
	            required
	            type="radio"
	            value="other"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isOtherGender">Other</label>
	        </div>
	      </div>	      	    
	    </div>
  	</div>
  	<!-- Gender radios end -->
  	<!-- Position radios start -->
	<div class="fs-field">
	    <label class="fs-label">Current position <sup>*</sup></label>
	    <div class="fs-radio-group">
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isMSc"
	            name="position"
	            required
	            type="radio"
	            value="msc"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isMSc">MSc student</label>
	        </div>
	      </div>
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isPhD"
	            name="position"
	            required
	            type="radio"
	            value="phd"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isPhD">PhD student</label>
	        </div>
	      </div>
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isPostdoc"
	            name="position"
	            required
	            type="radio"
	            value="postdoc"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isPostdoc">Postdoc / Fellow</label>
	        </div>
	      </div>
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isECR"
	            name="position"
	            required
	            type="radio"
	            value="ecr"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isECR">Early career researcher</label>
	        </div>
	      </div>
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isSenior"
	            name="position"
	            required
	            type="radio"
	            value="senior"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isSenior">Senior researcher</label>
	        </div>
	      </div>
	      <div class="fs-radio-field">
	        <div class="fs-radio-wrapper">
	          <input
	            class="fs-radio"
	            id="isOtherPosition"
	            name="position"
	            required
	            type="radio"
	            value="other"
	          />
	        </div>
	        <div>
	          <label class="fs-label" for="isOtherPosition">Other</label>
	        </div>
	      </div>	      
	    </div>
  	</div>
  	<!-- Position radios end -->
  	<div class="fs-field">
      <label class="fs-label" for="genderOther">If you selected other above, please specify:</label>
      <input class="fs-input" id="genderOther" name="genderOther"/>
      <p class="fs-description" id="gender-description">
        We collect information on gender to help ensure equitable representation.
      </p>
    </div>    
    <div class="fs-field">
      <label class="fs-label" for="positionOther">If you selected other above, please specify:</label>
      <input class="fs-input" id="positionOther" name="positionOther"/>
      <p class="fs-description" id="gender-description">
        We collect information on career stage to help ensure equitable representation.
      </p>
    </div>           
  </fieldset>
  <hr>

  <fieldset>
  	<div class="fs-field">
      <label class="fs-label" for="institution">Home institution <sup>*</sup></label>
      <input class="fs-input" id="institution" name="institution" required />
    </div>
  </fieldset>

  <fieldset class ="fs-layout__2-column">
    <div class="fs-field ">
      <label class="fs-label" for="email">Email adress <sup>*</sup></label>
      <input class="fs-input" id="email" name="email" required />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="phone">Contact Number <sup>*</sup></label>
      <input
        class="fs-input"
        id="phone"
        name="phone"
        placeholder="+00 00 000 0000"
        required
      />
      <p class="fs-description" id="phone-description">
        Please include the country code.
      </p>
    </div>
  </fieldset>

  <fieldset class ="fs-layout__2-column">
    <div class="fs-field">
      <label class="fs-label" for="address-1">Address line 1 <sup>*</sup></label>
      <input class="fs-input" id="address-1" name="address-1" required/>
    </div>
    <div class="fs-field">
      <label class="fs-label" for="address-2">Address line 2</label>
      <input class="fs-input" id="address-2" name="address-2" />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="city">City <sup>*</sup></label>
      <input class="fs-input" id="city" name="city" required/>        
    </div>
    <div class="fs-field">
      <label class="fs-label" for="state">State / Province</label>
      <input class="fs-input" id="state" name="state" />
    </div>
    <div class="fs-field">
      <label class="fs-label" for="zip-code">Postal / Zip Code <sup>*</sup></label>
      <input class="fs-input" id="zip-code" name="zip-code" required/>
    </div>
    <div class="fs-field">
      <label class="fs-label" for="country">Country <sup>*</sup></label>
      <input class="fs-input" id="country" name="country" required/>
    </div>
    <div class="fs-field">
      <label class="fs-label" for="website">Personal website</label>
      <input class="fs-input" id="website" name="website" />      
      <p class="fs-description">
      	Optional, but it's highly recommended to link to a personal or institutional page.
      </p>
    </div>    
  </fieldset>
  <hr>

  <fieldset>
    <div class="fs-field">
      <label class="fs-label" for="special-requests">Additional requests and dietary restrictions</label>
      <textarea
        class="fs-textarea"
        id="special-requests"
        name="special-requests"
        rows=3
      ></textarea>
      <p class="fs-description">
        Please use the box above for any special requests and please let us know about any food allergies or other dietary restrictions. Please keep in mind that we may not be able to accommodate all requests. 
      </p>
    </div>
  </fieldset>
  <hr>

  <!--h2>Motivation </h2-->
  <fieldset>
    <div class="fs-field">
      <label class="fs-label" for="interests">Research interests <sup>*</sup></label>
      <textarea
        class="fs-textarea"
        id="interests"
        name="interests"
        rows=10
        maxlength=3000
        required
      ></textarea>
      <p class="fs-description">
        Please tell us who you are and give a short description of the research you do (maximum 3000 characters including spaces).
      </p>
    </div>
    <div class="fs-field">
      <label class="fs-label" for="motivation">Motivation <sup>*</sup></label>
      <textarea
        class="fs-textarea"
        id="motivation"
        name="motivation"
        rows=10
        maxlength=3000
        required
      ></textarea>
      <p class="fs-description">
        Please outline your reasons for wanting to join the workshop (maximum 3000 characters including spaces). 
      </p>
    </div>
  </fieldset>
  <hr>


  <fieldset>
    <div class="fs-checkbox-field">
	    <div class="fs-checkbox-wrapper">
	      <input
	        class="fs-checkbox"
	        id="understand-application"
	        name="understand-application"
	        required
	        type="checkbox"
	        value="understand-application"
	      />
	    </div>
    	<div>
     	<label class="fs-label" for="understand-application">
        	I understand that filling in this application form does not guarantee me a spot at the workshop. <sup>*</sup>
      	</label>
      	</div>
    </div>
    <div class="fs-checkbox-field">
	    <div class="fs-checkbox-wrapper">
	      <input
	        class="fs-checkbox"
	        id="understand-accommodation"
	        name="understand-accommodation"
	        required
	        type="checkbox"
	        value="understand-accommodation"
	      />
	    </div>
    	<div>
     	<label class="fs-label" for="understand-accommodation">
        	I understand that if I am accepted for the workshop I will have to book my own accommodation in Beijing. <sup>*</sup>
      	</label>
      	</div>
    </div>
    <div class="fs-checkbox-field">
	    <div class="fs-checkbox-wrapper">
	      <input
	        class="fs-checkbox"
	        id="updates"
	        name="updates"
	        type="checkbox"
	        value="updates"
	      />
	    </div>
    	<div>
     	<label class="fs-label" for="updates">
        	I would like to receive updates about future workshops. 
      	</label>
      	</div>
    </div>
  	</fieldset>
  	<fieldset class ="fs-layout__2-column">
    <div class="fs-field">
      <label class="fs-label" for="discover">How did you learn about this workshop?</label>
      <select class="fs-select" id="discover" name="discover">
      	<option value="blank"></option>        
      	<option value="website">Taming the BEAST website</option>        
        <option value="social-media">Social Media</option>
        <option value="email">Email</option>        
        <option value="word-of-mouth">Word of mouth</option>        
        <option value="other">Other</option>        
      </select>
    </div>    
  </fieldset>
  <hr>
    <fieldset>
      <p class="fs-label"><b>
			  The organisers of TTB Beijing will use the data in this form solely for the purpose of evaluating your application and, if your application is successful, managing your involvement in the workshop.  It will not be shared with third parties, and will be deleted once it is no longer needed for the stated purpose. If you requested to receive updates about future workshops your name and email address will be retained. For further details, please contact <a href="mailto:ttb.beijing@ivpp.ac.cn">ttb.beijing@ivpp.ac.cn</a>.
			</b></p>
		<div class="fs-checkbox-field">
	    <div class="fs-checkbox-wrapper">
	      <input
	        class="fs-checkbox"
	        id="understand-declaration"
	        name="understand-declaration"
	        required
	        type="checkbox"
	        value="understand-declaration"
	      />
	    </div>
    	<div>
     	<label class="fs-label" for="understand-declaration">
        	I have read and understood the declaration above. <sup>*</sup>
      </label>
      </div>
    </div>
  </fieldset>



  <div class="fs-button-group">
    <button class="fs-button" type="submit">Submit</button>
  </div>
  <p class="fs-description" align="right">By submitting this form, you agree to have your data processed by <a href="http://Formspree.io">Formspree.io</a>.</p>
</form>


{% endif %}
