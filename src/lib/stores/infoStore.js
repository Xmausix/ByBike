import { writable } from 'svelte/store';

// Początkowa wartość store'a
const initialInfo = {
  id: null,
  addressComp: '',
  addressFund: '',
  openHour: '',
  phone: '',
  whatsAppNr: '',
  nipVat: '',
  bankInfo: '',
  mapLocation: ''
};

// Prosty store
export const info = writable(initialInfo);

// Rozszerzony store z dodatkowymi metodami
function createInfoStore() {
  const { subscribe, set, update } = writable(initialInfo);

  return {
    subscribe,
    
    // Ustaw wszystkie dane info
    setInfo: (infoData) => {
      if (infoData) {
        set(infoData);
      //  console.log('Info store updated:', infoData);
      } else {
        set(initialInfo);
      }
    },
    
    // Aktualizuj konkretne pole
    updateField: (field, value) => {
      update(current => ({
        ...current,
        [field]: value
      }));
    },
    
    // Aktualizuj kilka pól naraz
    updateFields: (fields) => {
      update(current => ({
        ...current,
        ...fields
      }));
    },
    
    // Sprawdź czy dane są załadowane
    isLoaded: () => {
      let loaded = false;
      const unsubscribe = subscribe(value => {
        loaded = value.id !== null;
      });
      unsubscribe();
      return loaded;
    },
    
    // Wyczyść store
    clear: () => set(initialInfo),
    
    // Reload - helper do ponownego załadowania
    reload: async (getInfoFunction) => {
      try {
        const newInfo = await getInfoFunction();
        set(newInfo || initialInfo);
        return newInfo;
      } catch (error) {
        console.error('Błąd podczas reload info:', error);
        throw error;
      }
    }
  };
}

export const infoStore = createInfoStore();