import './inner.css';
import tippy from 'tippy.js';

const button = document.querySelector("#main button");
tippy(button!, {
    content: 'Hello, tippy',
    appendTo: parent.document.body,
    trigger: 'click',
    placement: 'right'
})
