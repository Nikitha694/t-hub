function edit_row(no) {
 document.getElementById("edit_button" + no).style.display = "none";
 document.getElementById("save_button" + no).style.display = "block";

 var id = document.getElementById("id_row" + no);
 var name = document.getElementById("name_row" + no);
 var price = document.getElementById("price_row" + no);

 var id_data = id.innerHTML;
 var name_data = name.innerHTML;
 var price_data = price.innerHTML;

 id.innerHTML =
  "<input type='text' id='id_text" + no + "' value='" + id_data + "'>";
 name.innerHTML =
  "<input type='text' id='name_text" +
  no +
  "' value='" +
  name_data +
  "'>";
 price.innerHTML =
  "<input type='text' id='price_text" + no + "' value='" + price_data + "'>";
}

function save_row(no) {
 var id_val = document.getElementById("id_text" + no).value;
 var name_val = document.getElementById("name_text" + no).value;
 var price_val = document.getElementById("price_text" + no).value;

 document.getElementById("id_row" + no).innerHTML = id_val;
 document.getElementById("name_row" + no).innerHTML = name_val;
 document.getElementById("price_row" + no).innerHTML = price_val;

 document.getElementById("edit_button" + no).style.display = "block";
 document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
 document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
  var table = document.getElementById("data_table").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = "<input type='text'>";
  cell2.innerHTML = "<input type='text'>";
  cell3.innerHTML = "<input type='text'>";
  cell4.innerHTML = "<button onclick='save_row (row.length)' style='border: none;background-color: white;'><i class='fa-solid fa-bookmark' style='font-size: 20px;color: green;'></i></button>"+"<button onclick='deleteRow(this)' style='border: none;background-color: white;''><i class='fa fa-trash' style='font-size: 20px;color: red;'></i></button>";
  
}
var new_id = document.getElementById("new_id").value;

var new_name = document.getElementById("new_name").value;
var new_price = document.getElementById("new_price").value;

var table = document.getElementById("data_table");
var table_len = table.rows.length - 1;
var row = (table.insertRow(table_len).outerHTML =
 "<tr id='row" +
 table_len +
 "'><td id='id_row" +
 table_len +
 "'>" +
 new_id +
 "</td><td id='name_row" +
 table_len +
 "'>" +
 new_name +
 "</td><td id='price_row" +
 table_len +
 "'>" +
 new_price +
 "</td><td><i id='edit_button" +
 table_len +
 "' value='Edit' class='fa-solid fa-pen edit' onclick='edit_row(" +
 table_len +
 ")'></i> <i id='save_button" +
 table_len +
 "' value='Save' class='fa-solid fa-bookmark save' onclick='save_row(" +
 table_len +
 ")'></i> <i value='Delete' class='fa-solid fa-trash delete' onclick='delete_row(" + table_len + ")'></i></td></tr>");

document.getElementById("new_id").value = "";
document.getElementById("new_name").value = "";
document.getElementById("new_price").value = "";
}
