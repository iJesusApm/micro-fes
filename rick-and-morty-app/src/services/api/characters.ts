import { Character } from "../../types/character";
import { BASE_URL } from "../constants";

interface ApiResponse {
  results: Character[];
}

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    const data: ApiResponse = await response.json();
    return data.results;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
