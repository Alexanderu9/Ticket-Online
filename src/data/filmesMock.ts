export type Filme = {
  id: number;
  titulo: string;
  imagem: string;
  genero: string;
  idade: string;
  sinopse: string;
};

export const filmes: Filme[] = [
  {
    id: 1,
    titulo: "O Hobbit",
    imagem: "/Hobbit.jpg",
    genero: "Aventura",
    idade: "12+",
    sinopse: "Um hobbit embarca em uma jornada com anões para recuperar um tesouro."
  },
  {
    id: 2,
    titulo: "Matrix",
    imagem: "/Matrix.webp",
    genero: "Ficção científica",
    idade: "16+",
    sinopse: "Um hacker descobre a verdade sobre a realidade em que vive."
  },
  {
    id: 3,
    titulo: "Interestelar",
    imagem: "/Interestelar.jpg",
    genero: "Drama/Ficção",
    idade: "10+",
    sinopse: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade."
  },
  {
    id: 4,
    titulo: "Vingadores: Ultimato",
    imagem: "/VingadoresUltimato.webp",
    genero: "Ação",
    idade: "12+",
    sinopse: "Os Vingadores se reúnem para reverter o estalo de Thanos e salvar o universo."
  },
  {
    id: 5,
    titulo: "Coringa",
    imagem: "/Coringa.webp",
    genero: "Drama/Crime",
    idade: "18+",
    sinopse: "A origem sombria do vilão Coringa em meio a uma sociedade decadente."
  },
  {
    id: 6,
    titulo: "Toy Story",
    imagem: "/ToyStory.jpg",
    genero: "Animação",
    idade: "Livre",
    sinopse: "Os brinquedos ganham vida quando os humanos não estão por perto e vivem grandes aventuras."
  }
];
