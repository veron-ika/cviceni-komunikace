import { useState } from "react";

// Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ, který budeme dále rozvíjet.

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState('Jirka');

  return (
    <>
      <h1>Úkol 2</h1>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <button>Jirka</button>
      <button>Honza</button>
      <button>Tomáš</button>
      <button>Šimon</button>
    </>
  );
};
