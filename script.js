document.addEventListener("DOMContentLoaded", function (event) {

    const currencies = document.getElementById("currencies");

    axios.get("http://api.currencylayer.com/list?access_key=e7f7af55f76836aba41b41777b9e9f9d").then(response => {
        const d = response.data.currencies;

        const curr = Object.entries(d);
        console.log(curr);

        curr.forEach(c => {
            const option = createOption(c);
            currencies.append(option);

        })
    })
});

const access_key = 'e7f7af55f76836aba41b41777b9e9f9d';

function createOption(val) {
    const option = document.createElement("option");
    option.value = val;
    option.innerText = val;
    return option;
}

function createResultDiv(result) {
    const div = document.createElement("div");
    div.innerText = result;
    return div;
}

function exchangeAll() {

    const currency = document.getElementById('currencies').value;
    console.log(currency);
    const conv = currency.split(",");
    console.log(conv);
    const first = conv[0];
    console.log(first);

    const resultDiv = document.getElementById("result-div");
    resultDiv.innerHTML = "";

    axios.get(`http://api.currencylayer.com/live?access_key=${access_key}&format=1&currencies=${first}`).then(response => {

        const quotes = Object.values(response.data.quotes);

        const result = createResultDiv(quotes);
        resultDiv.append(result);

    })

}









