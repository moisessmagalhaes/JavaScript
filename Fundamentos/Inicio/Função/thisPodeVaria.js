document.getElementsByTagName('Body')[0].onclick = f1

function f1() {
    console.log(this === Window)
  }

const f3 = () => console.log(this === windows)

document.getElementsByName('Body')[0].onclick = f3
