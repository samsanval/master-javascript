let bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'disco',
    changeColor: (newColor) => {
        this.color= newColor;
        console.log(this);
    }
};
bicicleta.changeColor('blue');