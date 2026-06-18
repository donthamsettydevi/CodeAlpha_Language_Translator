async function translateText() {

    const text = document.getElementById("inputText").value;
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;

    if(text.trim() === ""){
        alert("Please enter text");
        return;
    }

    const url =
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("outputText").innerText =
            data.responseData.translatedText;

    }
    catch(error){
        document.getElementById("outputText").innerText =
            "Translation failed!";
        console.error(error);
    }
}