export function formatApiError(
    err: unknown,
    defaultMessage = 'Une erreur inattendue est survenue.'
): string {
    if (err instanceof Error) {
        const msg = err.message.toLowerCase();
        if (msg.includes('failed to fetch') || msg.includes('networkerror')) {
            return 'Impossible de se connecter au serveur. Veuillez vérifier votre connexion internet.';
        }
        if (msg.includes('unauthorized') || msg.includes('401')) {
            return "Vous n'êtes pas autorisé. Veuillez vous reconnecter.";
        }
        if (msg.includes('forbidden') || msg.includes('403')) {
            return 'Accès refusé. Permissions insuffisantes.';
        }
        if (msg.includes('not found') || msg.includes('404')) {
            return 'Ressource introuvable.';
        }
        return err.message;
    }
    const str = String(err).toLowerCase();
    if (str.includes('failed to fetch'))
        return 'Impossible de se connecter au serveur.';
    return typeof err === 'string' ? err : defaultMessage;
}
