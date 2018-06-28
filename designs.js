// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, cellColor;
$('#sizePicker').submit(function(e){

	e.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height,width);


});

function makeGrid(h,w) {
// Your code goes here!
$('tr').remove();

	for(var i=1; i<=h; i++){
		$('#pixelCanvas').append('<tr id=makeTable' +i+ '></tr>');

			for(var j = 1; j <=w; j++){
				$('#makeTable' + i).append('<td></td>');
			}
	}

	$('td').click(function addCellColor(){
		cellColor = $('#colorPicker').val();
			if($(this).attr('style')){
				$(this).removeAttr('style')
			}
			else{
				$(this).attr('style','background-color:' + cellColor);
			}

	});

}
