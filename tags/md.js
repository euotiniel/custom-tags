import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

document.addEventListener("DOMContentLoaded", function () {
    const markdownElements = document.querySelectorAll("md");

    const style = document.createElement("style");
    style.textContent = `
        md {
            font-family: sans-serif;
            /* Adicione outros estilos aqui, se desejar */
        }
    `;
    document.head.appendChild(style);

    markdownElements.forEach((element) => {
        let markdownContent = element.innerText.trim();
        
        markdownContent = markdownContent.replace(/\n/g, "<br>");

        const htmlContent = marked.parse(markdownContent);
        
        element.innerHTML = htmlContent;
    });
});
