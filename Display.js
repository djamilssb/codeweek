const grid_size = 9;
let _curr_cell;
let _win = false;
let _mousecoord = new Float32Array(2);
function _init() {
    let t_grid = document.getElementById("grid");
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            let button = t_grid.rows[i].cells[j].childNodes[0];
            button.id = i.toString() + j.toString();
            button.addEventListener("mousemove", (e) => { _mousecoord[0] = e.clientX; _mousecoord[1] = e.clientY; });
        }
    }
}
_init();
function _showOptions(cell) {
    if (!_win) {
        _curr_cell = cell;
        let popup = document.getElementById('popup');
        if (popup) {
            popup.style.left = (_mousecoord[0] - 20) + 'px';
            popup.style.top = (_mousecoord[1] - 50) + 'px';
            popup.style.display = 'block';
        }
    }
}
function _closePopup() {
    let popup = document.getElementById('popup');
    if (popup)
        popup.style.display = 'none';
}
function _selectValue(value) {
    let id = _curr_cell.id;
    input(value, Number(id[0]), Number(id[1]));
    _closePopup();
}
function update_grid(d_grid) {
    let t_grid = document.getElementById("grid");
    if (t_grid) {
        for (let i = 0; i < grid_size; i++) {
            for (let j = 0; j < grid_size; j++) {
                let cell = t_grid.rows[i].cells[j].childNodes[0];
                let val = d_grid[i][j];
                cell.textContent = Math.abs(val).toString();
                cell.disabled = val < 0;
                cell.classList.remove("zero");
                if (val == 0)
                    cell.classList.add("zero");
            }
        }
    }
}
function display_win() {
    var grid = document.getElementById("grid");
    if (grid) {
        grid.style.backgroundColor = 'yellowgreen';
        _win = true;
    }
}
function display_error(has_error) {
    var grid = document.getElementById("grid");
    if (grid) {
        grid.style.backgroundColor = (has_error) ? 'tomato' : 'lightslategrey';
    }
}
//# sourceMappingURL=Display.js.map