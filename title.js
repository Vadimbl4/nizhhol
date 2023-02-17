let title
window.onblur = function () {title = document.title; document.title='ООО НХЛ Вас ждет!'}
window.onfocus = function () {document.title=title}