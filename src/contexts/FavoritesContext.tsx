import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface FavoriteItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface FavoritesState {
  items: FavoriteItem[];
}

type FavoritesAction = 
  | { type: 'ADD_FAVORITE'; payload: FavoriteItem }
  | { type: 'REMOVE_FAVORITE'; payload: number };

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

interface FavoritesContextType {
  state: FavoritesState;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, { items: [] });

  const addFavorite = (item: FavoriteItem) => {
    dispatch({ type: 'ADD_FAVORITE', payload: item });
  };

  const removeFavorite = (id: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  const isFavorite = (id: number) => {
    return state.items.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ state, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};