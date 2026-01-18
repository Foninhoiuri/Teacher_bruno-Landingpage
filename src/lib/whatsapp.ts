export const WHATSAPP_NUMBER = "5519987086791";

export const WHATSAPP_MESSAGES = {
    GENERAL: "Olá, gostaria de saber mais sobre as aulas de inglês.",
    PERSONALIZED: "Olá, quero um orçamento personalizado",
    PLAN_INTEREST: (planName: string) => `Olá, tenho interesse no plano ${planName}`,
    EVALUATION: "Olá, gostaria de agendar minha avaliação gratuita.",
};

export function getWhatsAppLink(message: string): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
    window.open(getWhatsAppLink(message), '_blank');
}
