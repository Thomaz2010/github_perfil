import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log('componente iniciou')

    return () => {
      console.log('componete finalizou')
    }
  }, []);

  useEffect(() => {
    console.log('componente finalizou')
  }, []);

  useEffect(() => {
    console.log('A materiaA  mudou para :' + materiaA)
  }, [materiaA,materiaB,materiaC]);

  const alteraNome = (evento) => {
    setNome(evento.target.value);
  };

  // Função para calcular a média das notas
  const calcularMedia = () => {
    return (materiaA + materiaB + materiaC) / 3;
  };

  // Função para verificar se o aluno foi aprovado
  const foiAprovado = () => {
    const media = calcularMedia();
    return media >= 7 ?`=>${nome} * foi Aprovado *` : ` =>${nome} ** Não foi Aprovado **`;
  };

  return (
    <form>
     <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>


      {/* Input para o nome do aluno com a função de atualização */}
      <input
        type="text"
        name="Nome"
        placeholder="Nome"
        value={nome}
        onChange={alteraNome}
      />
      {/* Inputs para cada matéria com a função de atualização */}
      <input
        type="number"
        placeholder="Nota matéria A"
        value={materiaA}
        onChange={(evento) => setMateriaA(Number(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        value={materiaB}
        onChange={(evento) => setMateriaB(Number(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        value={materiaC}
        onChange={(evento) => setMateriaC(Number(evento.target.value))}
      />
      {/* Exibe a média e se o aluno foi aprovado */}
      <p>Média: {calcularMedia().toFixed(1)}</p>
      <p>{foiAprovado()}</p>
    </form>
  );
};

export default Formulario;

