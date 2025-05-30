type TituloProps = {
    text: string;
  };
  
  function Titulo({ text }: TituloProps) {
    return <h3> {text}</h3>;
  }
  
  export default Titulo;