import { useState } from "react";

const Todo = () =>{
    const [novoItem, setNovoItem] = useState('');
    const [itens, setItens] = useState([]);

    function adicionarTarefa(e){
        e.preventDefault();
        if(!novoItem.trim()) return;
        setItens([...itens, novoItem])
        setNovoItem('');
    }

    function removerTarefa(index){
        const novaLista = itens.filter((_, i) => i !== index);
        setItens(novaLista);
    }

    return(
        <div className="w-[400px] min-h-[300px] mx-auto bg-gray-800 p-4 rounded">
  <h2 className="text-4xl text-white text-center">Todo List</h2>
  <form onSubmit={adicionarTarefa} className="mb-4">
    <h4 className="text-center text-white text-2xl">Digite uma tarefa</h4>
    <input
      type="text"
      className="mx-auto block my-2 p-1 w-full"
      value={novoItem}
      onChange={(e) => setNovoItem(e.target.value)}
    />
    <button
      type="submit"
      className="mx-auto block text-white bg-blue-500 hover:bg-blue-800 py-2 px-2 w-[150px]"
    >
      Enviar
    </button>
  </form>

  <ul className="text-center text-white space-y-2 max-h-[200px] overflow-y-auto">
    {itens.map((item, index) => (
      <li key={index}>
        {item} - <button onClick={() => removerTarefa(index)}>X</button>
      </li>
    ))}
  </ul>
</div>
    )
}

export default Todo;