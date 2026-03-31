class Temperature{
    private _celsius:number = 0;
    public set celsius(newCelsius: number){
        this._celsius = newCelsius;
    }
    public get celsius(): number{
        return this._celsius;
    }

    public get fahrenheit(): number{
        return (this._celsius * 9) / 5 + 32;
    }

    public set fahrenheit(newFah: number){
        this._celsius = (newFah - 32) * 5/9;
    }
}

const temp = new Temperature();

temp.celsius = 25;
console.log(temp.fahrenheit);
console.log(temp.celsius);

temp.fahrenheit = 77;
console.log(temp.fahrenheit);
console.log(temp.celsius);


