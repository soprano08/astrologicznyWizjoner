const zodiacData = {
    aries: "Baran (21 marca - 19 kwietnia)",
    taurus: "Byk (20 kwietnia - 20 maja)",
    gemini: "Bliźnięta (21 maja - 20 czerwca)",
    cancer: "Rak (21 czerwca - 22 lipca)",
    leo: "Lew (23 lipca - 22 sierpnia)",
    virgo: "Panna (23 sierpnia - 22 września)",
    libra: "Waga (23 września - 22 października)",
    scorpio: "Skorpion (23 października - 21 listopada)",
    sagittarius: "Strzelec (22 listopada - 21 grudnia)",
    capricorn: "Koziorożec (22 grudnia - 19 stycznia)",
    aquarius: "Wodnik (20 stycznia - 18 lutego)",
    pisces: "Ryby (19 lutego - 20 marca)"
};

function displayZodiacInfo() {
    const select = document.getElementById('zodiac-signs');
    const infoDiv = document.getElementById('zodiac-info');
    const selectedZodiac = select.value;
    if (selectedZodiac) {
        infoDiv.textContent = zodiacData[selectedZodiac];
    } else {
        infoDiv.textContent = "";
    }
}
