function age_validate_onclick(){
		var vek=document.getElementById('vek_input');
		var datum= document.getElementById('datum_input');
		var chckbox_mail1 = document.getElementById('mail_chcekbox1');
		var chckbox_mail2 = document.getElementById('mail_chcekbox2');
		var chckbox_mail3 = document.getElementById('mail_chcekbox3');
		var radio_btn1 = document.getElementById('work_yes');
		var radio_btn2 = document.getElementById('work_no');
		var submit_btn1= document.getElementById('submit_btn');
		var chckboxs= document.getElementById('chceckboxes1');
		
		var datumV = new Date(datum.value);  
        var dnes = new Date; 
        var rozdiel = parseInt((dnes-datumV)/1000/3600/24/365.25);
		if(vek.value==rozdiel){
			vek.style.backgroundColor= "#A8F6AF";
			datum.style.backgroundColor= "#A8F6AF";
			vek.style.color =  "#999999";
			datum.style.color =  "#999999";
			vek.disabled=true;
			datum.disabled=true;
			chckboxs.style.display= 'block';
			radio_btn2.disabled=false;
			radio_btn1.disabled=false;
			submit_btn1.disabled=false;
		}
		else{
			vek.style.backgroundColor= "#F38484";
			datum.style.backgroundColor= "#F38484"
			setTimeout(function(){
			alert("Zadajte platný vek a/alebo dátum narodenia")}
			, 150);
			
		}
};
var ine= 0;
function onchange_f(x){
	if(x==1){
		var chckbox1= document.getElementById('mail_chcekbox1');
		console.log(chckbox1.value);
	}
	if(x==2){
		var chckbox2= document.getElementById('mail_chcekbox2');
		console.log(chckbox2.value);
	}
	if(x==3){
		ine++;
		
		var chckbox3= document.getElementById('mail_chcekbox3');
		console.log(chckbox3.value);
		var extra_input = document.getElementById("extra_mail_input");
		if(ine%2==0){
			extra_input.style.display = 'none';
			extra_input.style.opacity = '0';

		}
		else {
			extra_input.style.opacity = '1';
			extra_input.style.display = 'block';
			extra_input.style.transition = 'opacity 1s';

		}
		}
};

function onchange_f1(){
	var select1= document.getElementById('first');
	var selects = document.getElementsByTagName('select');
	var selectArray = Array.from(selects);
	selectArray.shift();
	
	selectArray.forEach(function(element){ element.style.display = 'none'; }); 
    select1.style.display='inline';	
    document.getElementById(select1.value).style.display = 'inline';

};
function onchange_f2(){
	var select1= document.getElementById('auto');
	var selects = document.getElementsByTagName('select');
	var selectArray = Array.from(selects);
	selectArray.shift();
	
	selectArray.forEach(function(element){ element.style.display = 'none'; });  
	    select1.style.display='inline';
    document.getElementById(select1.value).style.display = 'inline';

};
function onchange_f3(){
	var select1= document.getElementById('hd');
	var selects = document.getElementsByTagName('select');
	var selectArray = Array.from(selects);
	selectArray.shift();
	
	selectArray.forEach(function(element){ element.style.display = 'none'; });  
	    select1.style.display='inline';
    document.getElementById(select1.value).style.display = 'inline';

};
function onchange_f4(){
	var select1= document.getElementById('mhd');
	var selects = document.getElementsByTagName('select');
	var selectArray = Array.from(selects);
	selectArray.shift();
	
	selectArray.forEach(function(element){ element.style.display = 'none'; });  
    select1.style.display='inline';
	document.getElementById(select1.value).style.display = 'inline';

};
var radio_chcecked=0;
function yes_radio(){
	var div1=document.getElementById('dropdown_list');
	var txtarea1= document.getElementById('no_work_txtarea');
	div1.style.display='block';
	txtarea1.style.display='none';
	radio_chcecked=1;
};
function no_radio(){
	var div1=document.getElementById('dropdown_list');
	var txtarea1= document.getElementById('no_work_txtarea');
	div1.style.display='none';
	txtarea1.style.display='block';
	radio_chcecked=2;
}; 

function name_validate_f(){
	var name_area= document.getElementById('meno_input');
	var name_area_val= name_area.value;
	var re= /^[A-Za-z]{1,}\s+[A-Za-z]{1,}\D*$/;
	if(re.test(name_area_val)==false){
		name_area.style.backgroundColor='#F38484';
	}
	else {
		name_area.style.backgroundColor='#A8F6AF';
	}
};
function mail_validate_f(){
	var name_area= document.getElementById('mail_input');
	var name_area_val= name_area.value;
	var re=  /^\S{3,}[@]\w+[.]\S*\w{2,4}$/;
	if(re.test(name_area_val)==false){
		name_area.style.backgroundColor='#F38484';
	}
	else {
		name_area.style.backgroundColor='#A8F6AF';
	}
};
function submit_f(){
	var re_mail =/^\S{3,}[@]\w+[.]\S*\w{2,4}$/;
	var re_name =/^[A-Za-z]{1,}\s+[A-Za-z]{1,}\D*$/;
	var re_text = /^\w{1,}.*$/;
	if(document.getElementById('meno_input').value!="" &&  document.getElementById('mail_input').value!="" && document.getElementById('datum_input').value!="" 
		&& (document.getElementById('skola_zamestnanie_input').value!="" || document.getElementById('no_work_txtarea').value!="")){
		if(!re_mail.test(document.getElementById('mail_input').value)){
			alert("Zadajte platný formát e-mailovej adresy");
		}
		else if(!re_name.test(document.getElementById('meno_input').value)){
			alert("Zadajte platný formát mena a priezviska");
		}
		else if(!re_text.test(document.getElementById('skola_zamestnanie_input').value) && !re_text.test(document.getElementById('no_work_txtarea').value)){
			alert("Zadajte platný formát textu");
		}
		if(re_mail.test(document.getElementById('mail_input').value) && re_name.test(document.getElementById('meno_input').value) 
			&&( re_text.test(document.getElementById('skola_zamestnanie_input').value) || re_text.test(document.getElementById('no_work_txtarea').value))) {
			var vek=document.getElementById('vek_input');
			var datum= document.getElementById('datum_input');
			vek.disabled=false;
			datum.disabled=false;

			var form_f= document.getElementById('form1');
			form_f.submit();
			}
	}
	else {
		alert("Vyplnte všetky povinné položky formulára");
	}
			
};