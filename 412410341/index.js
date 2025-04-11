function frame(index) {
  const c = document.querySelector('.show-classdemo');
  console.log(c);

  switch (index) {
    case 1:
      c.innerHTML = '<iframe src="card.html" frameborder="1"></iframe>';
      break;
    case 2:
      c.innerHTML = '<iframe src="temp.html" frameborder="1"></iframe>';
      break;
    default:
      c.innerHTML = '<iframe src="class/t3_3.html" frameborder="1"></iframe>';
  }

  console.log(index);
}
