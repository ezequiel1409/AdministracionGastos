export interface IGasto {
    Monto:        number;
    Descripcion:  string;
    FormaDePago:  string;
    usuarioID:    number;
    categoriaID:  number;
    beneficiario: number;
    moneda: string
}