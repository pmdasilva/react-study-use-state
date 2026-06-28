import { useState } from 'react';
import './App.css';

export default function App() {
  // Estado inicial com um item
  const [itens, setItens] = useState([
    { id: 1, text: 'Estudar React' }
  ]);

  const [newItem, setNewItem] = useState('');

  // Função para adicionar um novo item
  function addNewItem() {
    if (newItem.trim() !== '') {
      const novo = {
        id: Date.now(), // ou crypto.randomUUID()
        text: newItem
      };
      setItens((prev) => [...prev, novo]);
      setNewItem('');
    }
  }

  // Função para remover item pelo ID
  const removeItem = (id) => {
    setItens((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Minha lista</h1>

      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Adicione uma nova tarefa aqui!"
      />
      <button onClick={addNewItem}>Adicionar</button>

      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
