$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


const status = Array.from(document.querySelectorAll('.status'));
status.forEach(cur => {
  if (cur.innerHTML === "Published")
  cur.style.color = '#0ACF83';
  else
  cur.style.color = '#EB5757';
});
