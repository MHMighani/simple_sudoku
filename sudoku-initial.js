all_numbers = [1,2,3,4,5,6,7,8]

var horizental_inputs = [[1,2],[3,4,5,6,7],[8,9,10,11,12,13]
						,[14,15,16,17,18],[19,20,21,22,23,24]
						,[25,26,27,28,29],[30,31]]

var diagonal_inputs_1 = [[7,13],[2,6,12,18,24]
					   ,[1,5,11,17,23,29]
					   ,[4,10,16,22,28]
					   ,[3,9,15,21,27,31]
					   ,[8,14,20,26,30]
					   ,[19,25]]	

var diagonal_inputs_2 = [[3,8],[1,4,9,14,19],[2,5,10,15,20,25]
						,[6,11,16,21,26],[7,12,17,22,27,30]
						,[13,18,23,28,31],[24,29]]

var diagonal_inputs_3 = [[1,2,6,11,10,4],[6,7,13,18,17,11]
						,[17,18,24,29,28,22],[21,22,28,31,30,26]
						,[14,15,21,26,25,19],[3,4,10,15,14,8]
						,[10,11,17,22,21,15]]



function check_repeat(list){
	list_of_values = []
	list_of_strings = []
	for(j=0;j<list.length;j++){
		string = "#cell_" + list[j];
		value = $(string).val()
		list_of_values.push(value)
		list_of_strings.push(string)
	}
	
	for(k=0;k<list_of_values.length;k++){
		list2=[]
		value1 = list_of_values[k]
		for(k1=0;k1<list_of_values.length;k1++){
			value2 = list_of_values[k1]
			if(value1 == value2 && value1!=""){
				list2.push(list_of_strings[k1])
			}
		}

		if(list2.length>1){

			for(k3=0;k3<list2.length;k3++){
				$(list2[k3]).css("background","#DE480D")
			}
		}
	}
}

$("input").blur(function(){
	value = ($(this).val())
	len = value.length
	allowed_numbers = ["1","2","3","4","5","6","7","8"]
	for(i=0;i<len;i++){
		if(allowed_numbers.includes(value[i])){
			v = parseInt(value[i])
			$(this).val(v)
			return
		}
	}
	$(this).val("")
})



$("#new").on("click",function(){
	var styles = {
		"background-color" : "#DDD",
		"color" : "#222"
	}
	$("input").val("")
	$("input").css(styles)
	$("input").removeAttr("disabled")
	$("input").focus(function(){
		$(this).css("background","#FFF")
	}).blur(function(){
		$(this).css("background","")
	})
})

$("#check").on("click",function(){
	$("input").attr("disabled","disabled")
	$("input").css("color","white")

	var empty_styles = {
		"background" : "#F5BB88",
		"color" : "white"
	}

	var not_correct_styles = {
		"color" : "white",
		"background" : "#DE480D"
	}

	all_inputs = $("input")
	for(index=0;index<all_inputs.length;index++){
		if(all_inputs[index].value==""){
			all_inputs[index].style.backgroundColor = "#F5BB88"
		}else{
			(all_inputs[index].style.backgroundColor="#F37540")
		}
	}

	for(i=0;i<horizental_inputs.length; i++){
		check_repeat(horizental_inputs[i])
		check_repeat(diagonal_inputs_1[i])
		check_repeat(diagonal_inputs_2[i])
		check_repeat(diagonal_inputs_3[i])
		}

	check = true
	for(i = 0;i<all_inputs.length;i++){
		if(all_inputs[i].style.backgroundColor !== "rgb(243, 117, 64)"){
			check = false
		}
	}
	if(check == true){
		for(i = 0;i<all_inputs.length;i++){
			all_inputs[i].style.backgroundColor = "#37B75E"
		}
	}
	
})
	

	


