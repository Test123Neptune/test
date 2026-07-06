export const API_URL = "https://script.google.com/macros/s/AKfycbx5BByJPnkfGEPnY5-wQu7Z-88NNkt1tAzUKXprm45BhV8oyr0V0vpsxdca5jVpTT6S/exec";

export interface LoginResponse {
  success: boolean;
  token?: string;
  username?: string;
  role?: string;
  message?: string;
}

export interface DataItem {
  id: string;
  title: string;
  detail: string;
  timestamp: string;
}

export interface ApiResponse {
  success: boolean;
  data?: DataItem[];
  message?: string;
  id?: string;
}

export async function apiCall(params: Record<string, string>): Promise<any> {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_URL}?${query}`, {
    method: "GET",
    redirect: "follow",
  });
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return { success: false, message: "Response parse error: " + text };
  }
}