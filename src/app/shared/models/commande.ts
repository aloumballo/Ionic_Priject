export interface Commande {
  commandeBurgers: CommandeBurger[]
  commandeMenus: CommandeMenu[]
  commandePortionFrites: CommandePortionFrite[]
  commandeTailleBoissons: CommandeTailleBoisson[]
}

export interface CommandeBurger {
  quantite: number
  burger: Burger
}

export interface Burger {}

export interface CommandeMenu {
  quantite: number
  menu: Menu
}

export interface Menu {}

export interface CommandePortionFrite {
  quantite: number
  portionFrite: PortionFrite
}

export interface PortionFrite {}

export interface CommandeTailleBoisson {
  quantite: number
  tailleBoisson: TailleBoisson
}

export interface TailleBoisson {
  boisson: Boisson
}

export interface Boisson {}
