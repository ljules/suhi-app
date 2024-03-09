import { Box } from "./Box";


/**
 * Modélise les paniers de commande de l'application.
 * @returns Un objet panier* 
 */

export class Panier {
    articles: Box[];
    validation: boolean;    // Si vrai, commande passée en préparation, si faux commande non terminée
    surPlace: boolean;      // Si vrai "sur place", si faux "à emporter"

    constructor(articles: Box[], validation: boolean, surPlace: boolean) {
        this.articles = articles;
        this.validation = validation;
        this.surPlace = surPlace;
    }

    montantTotal(): number{
        let total: number = 0;
        // TODO : La fonction parcourir tous les articles du panier pour calculer le prix total
        // en faisant le cumul de : box.prix * box.quantiteCommande
        return total;
    }
}

