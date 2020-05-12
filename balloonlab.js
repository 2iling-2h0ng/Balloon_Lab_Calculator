function calculate()
			{
				var angle, length, rad, Fg, Fe, d, twoD, q, num, Cou;
				angle=Number(document.balloon.angle_month.value);
				length=Number(document.balloon.length_day.value)/100;
				
				Cou=8.99e9;
				rad=angle * ((Math.PI)/180);
				
				Fg=(9.80*.0035).toPrecision(3);
				Fe=(Math.tan(rad) * Fg).toPrecision(3);				
				d=(Math.sin(rad) * length).toPrecision(3);
				twoD=(d*2).toPrecision(3);
				var a=Fe*twoD*twoD;
				var b=a/Cou;
				q=(Math.sqrt(b)).toPrecision(3);
				num=(q * 6.2e18).toPrecision(3);
				
				document.getElementById("gravity").innerHTML=Fg;
				document.getElementById("e").innerHTML=Fe;
				document.getElementById("D").innerHTML=d;
				document.getElementById("2D").innerHTML=twoD;
				document.getElementById("charge").innerHTML=q;
				document.getElementById("number").innerHTML=num;		
			}