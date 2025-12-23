const BASE_URL = "http://127.0.0.1:8000";

/* ✅ EXPORT THE TYPE */
export type Investment = {
  id: number;
  name: string;
  type: string;
  amount: number;
  returns: number;
};

/* ✅ FETCH FROM FASTAPI */
export async function fetchInvestments(): Promise<Investment[]> {
  const response = await fetch(`${BASE_URL}/investments`);

  if (!response.ok) {
    throw new Error("Failed to fetch investments");
  }

  return response.json();
}
