export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string[];
}

export const Product: IProduct = {
  id: 1,
  title: "Lucky Boy ",
  price:  62910,
  description: [
    "Autora:Shanthi Sekaran",
    "Solimar es una joven indocumentada en Estados Unidos a quien un embarazo no esperado le otorga identidad en un mundo en el que es invisible, pero la fantasía acaba cuando la arrestan por su condición migratoria.",
  ],
};
