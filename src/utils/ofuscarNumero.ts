export const ofuscarNumero = (numeroTarjeta: string) => {
    const ofucado = numeroTarjeta
        .replaceAll(" ", "")
        .split("")
        .map((x, i) => {
            if (i <= 11) {
                return "#";
            } else {
                return x;
            }
        })
        .map((x, i) => {
            if (i == 3 || i == 7 || i == 11) {
                return x + " ";
            } else {
                return x;
            }
        })
        .join("");

    return ofucado;
};