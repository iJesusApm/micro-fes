import { Character } from '../../types/character';
import { BASE_URL } from '../constants';

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    const data: Character[] = await response.json();
    return data.filter(
      (character) => character.image !== null && character.image.trim() !== '',
    );
  } catch (error) {
    throw new Error('Error fetching data');
  }
}
