const btnCopy = document.getElementById("btn-copy");
const btnPaste = document.getElementById("btn-paste");
const textarea = document.getElementById("textarea");

btnCopy.addEventListener("click", async event => {
    try {
        const text = await navigator.clipboard.writeText(textarea.value);
      } catch (error) {
        console.log(`Ocurrió un error: ${error}`);
      }
});

btnPaste.addEventListener("click", async event => {
    try {
        const text = await navigator.clipboard.readText();
        const oldText = textarea1.value;
        textarea1.value = oldText + text + " ";
      } catch (error) {
          console.log(`Ocurrió un error: ${error}`);
      }
});