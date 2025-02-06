export function formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Converter timestamp para milissegundos

    // Obter horas e minutos no formato 24h
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Obter nome do dia da semana
    const weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const weekday = weekdays[date.getDay()];

    // Obter dia do mês
    const day = date.getDate();

    // Obter nome do mês abreviado
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const month = months[date.getMonth()];

    // Obter ano com dois dígitos
    const year = date.getFullYear().toString().slice(-2);

    // Formatar no padrão desejado
    return `${hours}:${minutes} - ${weekday}, ${day} ${month} ‘${year}`;
}
