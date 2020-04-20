id       == getElementById
class    == getElementsByClassName
tagname  == getElementsByTagName

document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h22')
HTMLCollection []
document.getElementsByTagName('h2')
HTMLCollection [h2]
document.getElementsByTagName('p')
HTMLCollection(15) [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p]

document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I'm from NareshIT"
"I'm from NareshIT"

document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scrolllength: 4__proto__: HTMLCollection
document.getElementsByClassName('scroll')[0].innerText="Tech"
"Tech"
document.getElementsByClassName('scroll')[0].style.color="red"
"red"
document.getElementsByClassName('scroll')[0].style.visibility="hidden"
"hidden"
document.getElementsByClassName('scroll')[0].style.visibility="visible"
"visible"