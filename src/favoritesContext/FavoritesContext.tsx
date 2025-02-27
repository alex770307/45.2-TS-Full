import React, { createContext, useContext, useState, ReactNode } from 'react';

// Интерфейс для контекста избранного
interface FavoritesContextType {
    favorites: number[]; // Массив ID избранных товаров
    addToFavorites: (id: number) => void;
    removeFromFavorites: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

// Создаем контекст
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Провайдер избранных товаров
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<number[]>([]);

    const addToFavorites = (id: number) => {
        setFavorites((prev) => [...prev, id]);
    };

    const removeFromFavorites = (id: number) => {
        setFavorites((prev) => prev.filter((favoriteId) => favoriteId !== id));
    };

    const isFavorite = (id: number) => {
        return favorites.includes(id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Хук для использования контекста
export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
