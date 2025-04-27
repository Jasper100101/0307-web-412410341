function frame(index) {
  const c = document.querySelector('.show-classdemo');
  console.log(c);

  switch (index) {
    case 1:
      c.innerHTML = '<iframe src="W01.html" frameborder="1"></iframe>';
      break;
    case 2:
      c.innerHTML = '<iframe src="card.html" frameborder="1"></iframe>';
      break;
    case 3:
      c.innerHTML = '<iframe src="blogs.html" frameborder="1"></iframe>';
      break;
    case 4:
      c.innerHTML = '<iframe src="t3_3.html" frameborder="1"></iframe>';
      break;
    default:
      c.innerHTML = '<iframe src="t3_3.html" frameborder="1"></iframe>';
  }

  console.log(index);
}