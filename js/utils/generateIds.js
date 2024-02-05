/**
 * 
 * Genera numeros aleatorios tomando como semilla la hora
 */
export const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(16);
  const randomPart = Math.random().toString(16).substr(2);

  return `${timestamp}-${randomPart}`;
}