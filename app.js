let INPUT_TEC_VALUE = document.getElementById("tec")
let INPUT_TIME_VALUE = document.getElementById("time")

let LIST = [{
    id: 1,
    name: "React",
    temp: 3
}, ]

function addList() {
    item = {
        id: LIST.length + 1,
        name: INPUT_TEC_VALUE.value,
        temp: parseInt(INPUT_TIME_VALUE.value)
    }

    if (item.name === "" || item.temp === "") {
        return
    }

    LIST.push(item)
    renderList()
    INPUT_TEC_VALUE.value = ""
    INPUT_TIME_VALUE.value = ""
}

function removeItem(id) {
    LIST = LIST.filter(item => item.id !== id);
    renderList()
}

function setTime(id, operation) {
    LIST = LIST.map(item => {
        if (item.id === id) {
            operation === "+" ? item.temp = item.temp + 1 : item.temp = item.temp - 1
        }
        if (item.temp <= 0) { item.temp = 1 }
        return item
    })
    renderList()
}


function renderList() {
    let trow = ""
    LIST.map(item => (
        trow += `<tr>
            <td>${item.name}</td>
            <td class="flex justify-between items-center">${item.temp}
                <div class="background-glass-light">
                    <button onClick="setTime(${item.id},'+')">+</button> 
                    <button onClick="setTime(${item.id},'-')">-</button>
                </div>
            </td>
            <td class="">
                <button class="removeBtn background-glass-light p-3 rounded color-red" onClick="removeItem(${item.id})">🗑 remover
                </button>
            <td/>
        </tr>
   `
    ))
    document.getElementById("tbody").innerHTML = trow

}

function openModal() {
    document.querySelector(".modal-overlay").classList.add("active")
}

function closeModal() {
    document.querySelector(".modal-overlay").classList.remove("active")
}

renderList()