var selectedPerson;

function addPerson(btn) {

  // Get vlue From text Box
  var fName = document.getElementById('txtFname').value;
  var lName = document.getElementById('txtLname').value;

  if (btn.value == "ADD") {
    // create object of Person as row
    var person = document.createElement('tr');
    person.onmouseover = function() {
      this.style.backgroundColor = "pink"
    };
    person.onmouseout = function() {
      this.style.backgroundColor = "white"
    };

    // Create column for fo checkbox
    var ckCell = document.createElement('td');
    ckCell.innerHTML = "<input type='checkbox' onclick='ckClick(this)'>";

    // Create column for First Name
    var fnCell = document.createElement('td');
    var fnNode = document.createTextNode(fName);
    fnCell.appendChild(fnNode);
    //fnCell.innerHTML = fName;

    // Create column for Last Name
    var lnCell = document.createElement('td');
    var lnNode = document.createTextNode(lName);
    lnCell.appendChild(lnNode);
    //lnCell.innerHTML = lName


    // Add Link For Delete Link
    var delLink = document.createElement('a');
    delLink.innerHTML = 'Delete';
    delLink.href = '#';
    //Way one
    //delLink.onclick = function() { deletePerson1(event)}

    //Way Two
    //delLink.onclick = function() {deletePerson2(this)}

    //Way three
    delLink.onclick = function() {
      deletePerson3(person)
    }

    // Add Link For Edit Link
    var editLink = document.createElement('a');
    editLink.innerHTML = 'Edit';
    editLink.href = '#';
    editLink.onclick = function() {
      editPerson(person)
    }

    var sep = document.createTextNode(' | ');

    var opCell = document.createElement('td');
    opCell.appendChild(delLink);
    opCell.appendChild(sep);
    opCell.appendChild(editLink);


    person.appendChild(ckCell);
    person.appendChild(fnCell);
    person.appendChild(lnCell);
    person.appendChild(opCell);
    document.getElementById('tblPerson').appendChild(person);

  } else {
    selectedPerson.childNodes[1].innerHTML = fName
    selectedPerson.childNodes[2].innerHTML = lName
    selectedPerson.backgroundColor = "white";
  }
}

// way 1 for Delete
function deletePerson1(e) {
  var person = e.srcElement.parentNode.parentNode;
  document.getElementById('tblPerson').removeChild(person);
}

// way 2 For Delete
function deletePerson2(link) {
  var person = link.parentNode.parentNode;
  document.getElementById('tblPerson').removeChild(person);
}

// way 3 For Delete
function deletePerson3(person) {
  document.getElementById('tblPerson').removeChild(person);
}

// Way 1
function editPerson(person) {
  selectedPerson = person;
  person.style.backgroundColor = "orange";
  document.getElementById('txtFname').value = person.childNodes[1].innerHTML;
  document.getElementById('txtLname').value = person.childNodes[2].innerHTML;
  document.getElementById('btnAdd').value = "Modify"
}

// if you click checkbox in header all checkbox checked
function ckDeleteAll(ckAll) {
  var tbl = document.getElementById('tblPerson');
  if (ckAll.checked) {
    for (var i = 1; i < tbl.childNodes.length; i++) {
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "checked";
    }
  } else {
    for (var i = 1; i < tbl.childNodes.length; i++) {
      tbl.childNodes[i].childNodes[0].childNodes[0].checked = "";
    }
  }

}

// If we unchecked one of the checkbox in rows check header must be unchecked
function ckClick(ck) {
  var tbl = document.getElementById('tblPerson');
  var boxes = tbl.getElementsByTagName('input');
  // first unchecked ckAll
  if (!ck.checked)
    document.getElementById('ckAll').checked = "";
  else
    for (var i = 1; i < boxes.length; ++i)
      if (boxes[i].checked )
        continue;
      else
        break;

  if (i == boxes.length)
        document.getElementById('ckAll').checked = "checked";

}

// check and Delete
function deleteSelected() {
  var tbl = document.getElementById('tblPerson');
  var boxes = tbl.getElementsByTagName('input');
    for (var i = 1; i < boxes.length;)
    {
      if (boxes[i].checked ){
        tbl.removeChild(boxes[i].parentNode.parentNode);
      }
      else {
        i++;
      }
    }
}
