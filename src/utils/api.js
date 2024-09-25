const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchData = async (endpoint) => {
  // console.log("Base URL:", BASE_URL);
  // console.log("Fetching URL", [BASE_URL, endpoint].join("/"));
  try {
    const response = await fetch([BASE_URL, endpoint].join("/"));

    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error(`Unexpected content-type: ${contentType}`);
    }

    const result = await response.json();
    const { data } = result;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
