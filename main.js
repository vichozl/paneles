function cantidadDePaneles(a, b, x, y) {

    const panelesEnFila = Math.floor(x / a);

    const filas = Math.floor(y / b);

    const totalPaneles = panelesEnFila * filas;

    return totalPaneles;

}

console.log(cantidadDePaneles(1, 2, 3, 4,));