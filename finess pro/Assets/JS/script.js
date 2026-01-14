function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let contentBox = document.querySelector('.mainContainer');
    let x = document.getElementsByClassName('searching');
   
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
  }