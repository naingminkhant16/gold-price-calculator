document.getElementById("execute").addEventListener("click", function (event) {
    event.preventDefault();
    let poutZay = document.querySelector('#poutZay');
    let yeway = document.querySelector("#yeway");
    let paeyay = document.querySelector("#paeyay");
    if (!poutZay.value || !yeway.value || !paeyay.value) {
        if (!poutZay.value) {
            document.querySelector('#poutzayErr').innerHTML = "<small style='color:red;'> *Required</small>";
        } else {
            document.querySelector('#poutzayErr').innerHTML = "";
        }
        if (!yeway.value) {
            document.querySelector('#yewayErr').innerHTML = "<small style='color:red;'> *Required</small>";
        } else {
            document.querySelector('#yewayErr').innerHTML = "";

        }
        if (!paeyay.value) {
            document.querySelector('#paeyayErr').innerHTML = "<small style='color:red;'> *Required</small>";
        } else {
            document.querySelector('#paeyayErr').innerHTML = "";

        }
    } else {
        document.querySelector('#poutzayErr').innerHTML = "";
        document.querySelector('#yewayErr').innerHTML = "";
        document.querySelector('#paeyayErr').innerHTML = "";

        poutZay = parseFloat(poutZay.value)
        yeway = parseFloat(yeway.value)
        paeyay = parseFloat(paeyay.value)
        switch (paeyay) {
            case 16:
                paeyay = 1;
                break;
            case 15:
                paeyay = 16 / 17;
                break;
            case 14:
                paeyay = 16 / 18;
                break;
            case 12:
                paeyay = 16 / 20;
                break;
            default:
                paeyay = 1;
        }
        let result = (paeyay * poutZay) / 128;

        result *= yeway;
        document.querySelector("#result").textContent = "Result is " + Math.ceil(result) + " kyats";
    }

});

document.querySelector("#executeYeway").addEventListener('click', (event) => {
    event.preventDefault();
    let kyat = document.querySelector('#kyat').value;
    let pae = document.querySelector("#pae").value;
    let y = document.querySelector("#y").value;
    if (!kyat || !pae || !y) {
        if (!kyat) {
            document.querySelector('#kyatErr').innerHTML = "<small style='color:red;'> *Required</small>";
        } else {
            document.querySelector('#kyatErr').innerHTML = "";
        }
        if (!pae) {
            document.querySelector('#paeErr').innerHTML = "<small style='color:red;'> *Required</small>";
        } else {
            document.querySelector('#paeErr').innerHTML = "";
        }
        if (!y) {
            document.querySelector('#yErr').innerHTML = "<small style='color:red;'> *Required</small>";
        } else {
            document.querySelector('#yErr').innerHTML = "";
        }
    } else {
        document.querySelector('#kyatErr').innerHTML = "";
        document.querySelector('#paeErr').innerHTML = "";
        document.querySelector('#yErr').innerHTML = "";

        kyat = parseFloat(kyat);
        pae = parseFloat(pae);
        y = parseFloat(y);

        let yewayResult = (kyat * 128) + (pae * 8) + y;
        document.querySelector("#kyatResult").textContent = "Result is " + Math.ceil(yewayResult) + " ရွေ:";

    }
})