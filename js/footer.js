// JavaScript Document
//	根據當前時間自動更改版權年份
//
function footer()
{
	var myDate = new Date();
	var year= myDate.getFullYear();
  document.write("<footer class='footer'>");
  document.write("<p>&copy;" + year.toString() +" 澳門高血壓聯盟</p>");
  document.write("</footer>");
	
}