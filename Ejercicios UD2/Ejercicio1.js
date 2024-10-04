/*
Actividad 1: Contar Cartas
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja sobre la casa en la próxima mano al realizar un seguimiento del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama Conteo de Cartas.

Tener más cartas altas restantes en el mazo favorece al jugador. A cada carta se le asigna un valor de acuerdo con la siguiente tabla:

Conteo	Cartas
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, ‘J’, ‘Q’, ‘K’, ‘A’
Escribe una función para contar cartas. Recibirá un parámetro llamado card, que puede ser un número o una cadena, e incrementará o decrementará la variable count global según el valor de la carta. La función luego devolverá una cadena con el conteo actual y la cadena de texto “Bet” si el conteo es positivo, o “Hold” si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Ejemplo de salida: -3 Hold o 5 Bet.

**/
        let count=0;

        const contarCartas= (card)=>{
        
        let resultado="";

        switch (card) {
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                count++;
                resultado= card + " " + "Bet";
                break;
            case "10":
            case "J":
            case "Q":
            case "K":
            case "A":
                count--;
                resultado= card + " " + "Hold";
                break;
            case "7":
            case "8":
            case "9":
                resultado= card + " " + "Hold";
                break;
     
        }
        return resultado;

    };
        
        console.log(contarCartas("2"));
        console.log(contarCartas("J"));
        console.log(contarCartas("10"));
        console.log(contarCartas("7"));