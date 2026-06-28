import { useState } from 'react';
import './App.css';

export default function App() {
  const [itens, setItens] = useState([{ id: 1, text: 'Estudar React' }]);
  const [newItem, setNewItem] = useState('');
  const [editId, setEditId] = useState(null);
  const [textEdited, setTextEdited] = useState('');

  // Adicionar novo item
  function addNewItem() {
    if (newItem.trim() !== '') {
      const novo = {
        id: Date.now(),
        text: newItem
      };
      setItens((prev) => [...prev, novo]);
      setNewItem('');
    }
  }

  // Remover item
  const removeItem = (id) => {
    setItens((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  // Iniciar edição
  const startEdition = (id, text) => {
    setEditId(id);
    setTextEdited(text);
  };

  // Salvar edição
  const saveEdition = (id) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.id === id ? { ...item, text: textEdited } : item
      )
    );
    setEditId(null);
    setTextEdited('');
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
            {editId === item.id ? (
              <>
                <input
                  value={textEdited}
                  onChange={(e) => setTextEdited(e.target.value)}
                />
                <button onClick={() => saveEdition(item.id)}>Salvar</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button onClick={() => startEdition(item.id, item.text)}>Editar</button>
                <button onClick={() => removeItem(item.id)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
