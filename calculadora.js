import { useState } from "react";
import Button from "./Button";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [operador, setOperador] = useState(null);
  const [numTemp, setNumTemp] = useState(""); // número que el usuario está escribiendo

  const ImputNumber = (num) => {
    // concatenamos los números (por ejemplo 2 + 2 → "22")
    setNumTemp(numTemp + String(num));
  };

  const ejecutarOperacion = () => {
    if (numTemp === "") return; // si no hay número escrito, no hace nada
    const numero = Number(numTemp);

    if (operador === "+") {
      setContador(contador + numero);
    } else if (operador === "-") {
      setContador(contador - numero);
    } else if (operador === "*") {
      setContador(contador * numero);
    } else {
      // si no hay operador, es el primer número que escribe
      setContador(numero);
    }

    setNumTemp(""); // limpia el número temporal para el siguiente
  };

  const Sumar = () => {
    ejecutarOperacion();
    setOperador("+");
  };

  const Restar = () => {
    ejecutarOperacion();
    setOperador("-");
  };

  const Multiplicar = () => {
    ejecutarOperacion();
    setOperador("*");
  };

  const Igual = () => {
    ejecutarOperacion();
    setOperador(null);
  };

  const Aumentar = () => {
    setContador(contador + 1);
  };

  const Disminuir = () => {
    setContador(contador - 1);
  };

  const Reset = () => {
    setContador(0);
    setOperador(null);
    setNumTemp("");
  };

  return (
    <div>
      <label>
        Contador: {numTemp !== "" ? numTemp : contador}
      </label>
      <br />
      <button onClick={Igual}>=</button>
      <br></br>
      <Button onClick={() => ImputNumber(1)}>1</Button>
      <Button onClick={() => ImputNumber(2)}>2</Button>
      <Button onClick={() => ImputNumber(3)}>3</Button>
      <br />
      <Button onClick={() => ImputNumber(4)}>4</Button>
      <Button onClick={() => ImputNumber(5)}>5</Button>
      <Button onClick={() => ImputNumber(6)}>6</Button>
      <br />
      <Button onClick={() => ImputNumber(7)}>7</Button>
      <Button onClick={() => ImputNumber(8)}>8</Button>
      <Button onClick={() => ImputNumber(9)}>9</Button>
      <br />
      <Button onClick={() => ImputNumber(0)}>0</Button>
      <br />

      <button onClick={Aumentar}>Aumentar</button>
      <button onClick={Disminuir}>Disminuir</button>
      <button onClick={Sumar}>+</button>
      <button onClick={Restar}>-</button>
      <button onClick={Multiplicar}>X</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Contador;
