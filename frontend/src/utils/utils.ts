export function formatDate(timestamp: number, timezoneOffset: number): string {
  // Ajusta o timestamp adicionando o offset (em segundos) e converte para milissegundos
  const localTimestamp = (timestamp + timezoneOffset) * 1000;
  const date = new Date(localTimestamp);

  // Como já ajustamos o timestamp, usamos os métodos getUTC* para extrair os valores corretos
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  // Lista dos dias da semana em português
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];
  const weekday = weekdays[date.getUTCDay()];

  // Obtém o dia do mês
  const day = date.getUTCDate();

  // Lista dos meses abreviados em português
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];
  const month = months[date.getUTCMonth()];

  // Obtém os dois últimos dígitos do ano
  const year = date.getUTCFullYear().toString().slice(-2);

  return `${hours}:${minutes} - ${weekday}, ${day} ${month} '${year}`;
}