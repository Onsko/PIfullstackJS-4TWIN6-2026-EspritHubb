// Test d'exemple pour vérifier que Vitest fonctionne correctement
import { describe, it, expect } from 'vitest'

describe('Test d\'exemple', () => {
  it('devrait retourner vrai', () => {
    expect(true).toBe(true)
  })

  it('devrait additionner correctement', () => {
    expect(2 + 2).toBe(4)
  })
})
