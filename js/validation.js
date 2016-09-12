/**
*@license ValidationJS v1.0.0
*(c) 2016 Kushal Jain
*License: Kushal Jain
*/

/**
*This is a small library for validation which validates the following:
*1.URL
*2.Number
*3.E-mail
*4.U.S. Phone numbers
*5.U.S. Zip Codes
*6.Credit Cards
*/

//Initial declaration and initialisation of variables
var error_counter = 0;
var error_list;
var i;

var url = document.getElementsByClassName("validate-url");
var number = document.getElementsByClassName("validate-number");
 var email = document.getElementsByClassName("validate-email");
var phone = document.getElementsByClassName("validate-phone");
var zip = document.getElementsByClassName("validate-zipcode");
var credit = document.getElementsByClassName("validate-creditcard");

var form_list = document.forms;

var url_expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
var number_expression = /^[0-9]+$/;
var email_expression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var phone_expression = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
var zip_expression = /^\d{5}(?:[-\s]\d{4})?$/;
var credit_expression = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

/**
*References for regular expressions:
*1.URL - http://stackoverflow.com/questions/18568244/url-validation-regex-url-just-valid-with-http
*2.E-mail - http://stackoverflow.com/questions/12159993/manual-filter-for-email-javascript
*3.Phone - http://www.zparacha.com/phone_number_regex/
*4.Zip - http://stackoverflow.com/questions/2577236/regex-for-zip-code
*5.Credit Card - http://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
*/

//Association of functions with events and initialisation of attributes of form controls
for(i=0; i<form_list.length; i++)
{
    if(form_list[i].className == "validate-form")
    {
        form_list[i].onsubmit = function(){
            return validate(this);
        };
    }
}

for(i=0; i<url.length; i++)
{
        url[i].onfocus = function(){
            this.style.border="1px solid blue";
        };
        url[i].onblur = function(){
           validate_url(this); 
        };
    
    if(url[i].value == "")
        url[i].setAttribute("error_flag","1");
    else
        validate_url(url[i]);
}

for(i=0; i<number.length; i++)
{
    number[i].onfocus = function(){
        this.style.border="1px solid blue";
    };
    number[i].onblur = function(){
       validate_number(this); 
    };
    
    if(number[i].value == "")
        number[i].setAttribute("error_flag","1");
    else
        validate_number(number[i]);
}

for(i=0; i<email.length; i++)
{
    email[i].onfocus = function(){
        this.style.border = "1px solid blue";
    };
    email[i].onblur = function(){
       validate_email(this); 
    };
    
    if(email[i].value == "")
        email[i].setAttribute("error_flag","1");
    else
        validate_email(email[i]);
}

for(i=0; i<phone.length; i++)
{
    phone[i].onfocus = function(){
        this.style.border = "1px solid blue";
    };
    phone[i].onblur = function(){
       validate_phone(this); 
    };
    
    if(phone[i].value == "")
        phone[i].setAttribute("error_flag","1");
    else
        validate_phone(phone[i]);
}

for(i=0; i<zip.length; i++)
{
    zip[i].onfocus = function(){
        this.style.border ="1px solid blue";
    };
    zip[i].onblur = function(){
       validate_zip(this); 
    };
    
    if(zip[i].value == "")
        zip[i].setAttribute("error_flag","1");
    else
        validate_zip(zip[i]);
}

for(i=0; i<credit.length; i++)
{
    credit[i].onfocus = function(){
        this.style.border ="1px solid blue";
    };
    credit[i].onblur = function(){
       validate_credit(this); 
    };
    
    if(credit[i].value == "")
        credit[i].setAttribute("error_flag","1");
    else
        validate_credit(credit[i]);
}

//Validation functions
function validate_url(url_element)
{
    //Url Validation
    if(url_expression.test(url_element.value.toString().trim()))
    {
       url_element.style.border = "2px solid green";
       url_element.setAttribute("error_flag","0");
    }
    else
    {
        url_element.style.border ="2px solid red";
        url_element.setAttribute("error_flag","1");
    }
}

function validate_number(number_element)
{
    //Number Validation
    if(number_expression.test(number_element.value.toString().trim()))
    {
        number_element.style.border = "2px solid green";
        number_element.setAttribute("error_flag","0");
    }
    else
    {
        number_element.style.border = "2px solid red";
        number_element.setAttribute("error_flag","1");
    }
}

function validate_email(email_element)
{
    //Email Validation
    if(email_expression.test(email_element.value.toString().trim()))
    {
        email_element.style.border = "2px solid green";
        email_element.setAttribute("error_flag","0");
    }
    else
    {
        email_element.style.border = "2px solid red";
        email_element.setAttribute("error_flag","1");
    }
}

function validate_phone(phone_element)
{
    //Phone Validation
    if(phone_expression.test(phone_element.value.toString().trim()))
    {
        phone_element.style.border = "2px solid green";
        phone_element.setAttribute("error_flag","0");
    }
    else
    {
        phone_element.style.border = "2px solid red";
        phone_element.setAttribute("error_flag","1");
    }
}

function validate_zip(zip_element)
{
    //Zip Validation
    if(zip_expression.test(zip_element.value.toString().trim()))
    {
        zip_element.style.border = "2px solid green";
        zip_element.setAttribute("error_flag","0");
    }
    else
    {
        zip_element.style.border = "2px solid red";
        zip_element.setAttribute("error_flag","1");
    }
    
}

function validate_credit(credit_element)
{
    //Credit Validation
    if(credit_expression.test(credit_element.value.toString().trim()))
    {
        credit_element.style.border = "2px solid green";
        credit_element.setAttribute("error_flag","0");
    }
    else
    {
        credit_element.style.border = "2px solid red";
        credit_element.setAttribute("error_flag","1");
    }
}

//Final form validation
function validate(form_element)
{
    error_counter = 0;
    
    url = form_element.getElementsByClassName("validate-url");
    number = form_element.getElementsByClassName("validate-number");
    email = form_element.getElementsByClassName("validate-email");
    phone = form_element.getElementsByClassName("validate-phone");
    zip = form_element.getElementsByClassName("validate-zipcode");
    credit = form_element.getElementsByClassName("validate-creditcard");
    
    for(i=0; i<url.length; i++)
    {
        if(url[i].getAttribute("error_flag") === "1")
        {
            error_counter++;
            url[i].style.border = "2px solid red";
        }
    }
    
    for(i=0; i<number.length; i++)
    {
        if(number[i].getAttribute("error_flag") === "1")
        {
            error_counter++;
            number[i].style.border = "2px solid red";
        }
    }
    
    for(i=0; i<email.length; i++)
    {
        if(email[i].getAttribute("error_flag") === "1")
        {
            error_counter++;
            email[i].style.border = "2px solid red";
        }
    }
    
    for(i=0; i<phone.length; i++)
    {
        if(phone[i].getAttribute("error_flag") === "1")
        {
            error_counter++;
            phone[i].style.border = "2px solid red";
        }
    }
    
    for(i=0; i<zip.length; i++)
    {
        if(zip[i].getAttribute("error_flag") === "1")
        {
            error_counter++;
            zip[i].style.border = "2px solid red";
        }
    }
    
    for(i=0; i<credit.length; i++)
    {
        if(credit[i].getAttribute("error_flag") === "1")
        {
            error_counter++;
            credit[i].style.border = "2px solid red";
        }
    }
    
    if(error_counter === 0)
    {
        return true;
    }
    else if(error_counter === 1)
    {
        error_list="There is "+ error_counter +" field in your form which contains invalid data (the one with a red border)\nPlease correct it in order to proceed further...";
        alert(error_list);
        return false;
    }
    else
    {
        error_list="There are "+ error_counter +" fields in your form which contain invalid data (the ones with a red border)\nPlease correct them in order to proceed further...";
        alert(error_list);
        return false; 
    }
}