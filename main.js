// javascript code

// add cost from flavours and to booking page
function estimateCostFlavour(elem, cost, item) {
    var cur = parseInt(document.getElementById("estimateCost").innerHTML);
    var id = elem.id;
    var val = document.getElementById(id).checked;

    if (val === true) {
        var total = parseInt(cost)+cur;
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
        document.getElementById("acc1").innerHTML += item + "; "
    }
    else {
        var total = cur-parseInt(cost);
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
    }
}

// add cost from topping and to booking page
function estimateCostTopping(elem, cost, item) {
    var cur = parseInt(document.getElementById("estimateCost").innerHTML);
    var id = elem.id;
    var val = document.getElementById(id).checked;

    if (val === true) {
        var total = parseInt(cost)+cur;
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
        document.getElementById("acc2").innerHTML += item + "; "
    }
    else {
        var total = cur-parseInt(cost);
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
    }
}

// shape to booking
function sizeSelection(shape) {
    document.getElementById("acc3").innerHTML = shape;
}

// add cost of serving price 
function estimateCostServing(cost) {
    var cur = parseInt(document.getElementById("estimateCost").innerHTML);

    var prev = parseInt(document.getElementById("prev-size").innerHTML);
    if (prev !== 0) {
        var total = parseInt(cost)+cur-prev;
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
    }
    else {
        var total = parseInt(cost)+cur;
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
    }
    document.getElementById("prev-size").innerHTML = cost;
}

// serving to booking
function servingSelect(cost) {
    if (parseInt(cost) === 5) {
        document.getElementById("acc4").innerHTML = "4 servings ($5)";
    }
    else if (parseInt(cost) === 8) {
        document.getElementById("acc4").innerHTML = "8 servings ($8)";
    }
    else if (parseInt(cost) === 9) {
        document.getElementById("acc4").innerHTML = "10 servings ($9)";
    }
    else if (parseInt(cost) === 10) {
        document.getElementById("acc4").innerHTML = "12 servings ($15)";
    }
    else if (parseInt(cost) === 12) {
        document.getElementById("acc4").innerHTML = "16 servings ($12)";
    }
    else if (parseInt(cost) === 15) {
        document.getElementById("acc4").innerHTML = "24 servings ($15)";
    }
    else if (parseInt(cost) === 20) {
        document.getElementById("acc4").innerHTML = "36 servings ($20)";
    }
    else if (parseInt(cost) === 25) {
        document.getElementById("acc4").innerHTML = "48 servings ($25)";
    }
    else if (parseInt(cost) === 35) {
        document.getElementById("acc4").innerHTML = "60 servings ($35)";
    }
    else if (parseInt(cost) === 40) {
        document.getElementById("acc4").innerHTML = "72 servings ($40)";
    }
    else if (parseInt(cost) === 45) {
        document.getElementById("acc4").innerHTML = "80 servings ($45)";
    }
    else if (parseInt(cost) === 50) {
        document.getElementById("acc4").innerHTML = "100 servings ($100)";
    }
}

// add cost by style of cake
function onSelectChef(cost) {
    var cur = parseInt(document.getElementById("estimateCost").innerHTML);

    var prev = parseInt(document.getElementById("prev-chef").innerHTML);
    if (prev !== 0) {
        var total = parseInt(cost)+cur-prev;
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
    }
    else {
        var total = parseInt(cost)+cur;
        document.getElementById("estimateCost").innerHTML = total;
        document.getElementById("estimateCostBook").innerHTML = total;
    }
    document.getElementById("prev-chef").innerHTML = cost;
}

// add to booking page
function styleSelection(chef) {
    document.getElementById("acc5").innerHTML = chef;
}

// alert js code from bootstrap docs
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Your order has been placed! View the confirmation email for further instructions.', 'success')
  })
}