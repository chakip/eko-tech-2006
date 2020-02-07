function odliczanie()
		{
			
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		if(dzien<10) dzien = "0" +dzien;
		var miesiac = dzisiaj.getMonth()+1;
		
		
			if(miesiac==1) miesiac = "01";
			else if(miesiac==2) miesiac = "02";
			else if(miesiac==3) miesiac = "03";
			else if(miesiac==4) miesiac = "04";
			else if(miesiac==5) miesiac = "05";
			else if(miesiac==6) miesiac = "06";
			else if(miesiac==7) miesiac = "07";
			else if(miesiac==8) miesiac = "08";
			else if(miesiac==9) miesiac = "09";
			else if(miesiac==10) miesiac = "10";
			else if(miesiac==11) miesiac = "11";
			else if(miesiac==12) miesiac = "12";
		//-----------------------------------------	
			
		var rok = dzisiaj.getFullYear();
		
		var godzina = dzisiaj.getHours();
		if(godzina<10) godzina = "0" + godzina;		
		var minuta = dzisiaj.getMinutes();
		if(minuta<10) minuta = "0" + minuta;
		
		document.getElementById("clock").innerHTML = 
		dzien+"."+miesiac+"."+rok+" • "+godzina+":"+minuta;
		
		setTimeout("odliczanie()",1000);
		
		}	