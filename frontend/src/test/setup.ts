import '@testing-library/jest-dom'

// Configuration pour les tests frontend
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock pour les variables globales non définies dans l'environnement de test
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
  })),
});
