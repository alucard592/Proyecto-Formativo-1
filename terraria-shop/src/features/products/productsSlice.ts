import { createSlice } from '@reduxjs/toolkit'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  category: string
  imageName: string
}

const initialState: Product[] = [
  { id: 1, name: 'Terra Blade', price: 45000, description: 'La espada definitiva del guerrero. Dispara proyectiles de energía verde con cada golpe.', category: 'Armas', imageName: 'terra-blade.png' },
  { id: 2, name: 'Zenith', price: 99000, description: 'La espada más poderosa de Terraria. Reúne fragmentos de todas las grandes espadas.', category: 'Armas', imageName: 'zenith.png' },
  { id: 3, name: 'Phantasm', price: 38000, description: 'Arco lunar que dispara cuatro flechas fantasma simultáneamente.', category: 'Armas', imageName: 'phantasm.png' },
  { id: 4, name: 'Vampire Knives', price: 32000, description: 'Cuchillos que roban vida al impactar. Esenciales para la supervivencia en el hardmode.', category: 'Armas', imageName: 'vampire-knives.png' },
  { id: 5, name: 'Solar Flare Armor', price: 72000, description: 'La armadura cuerpo a cuerpo más poderosa. Otorga escudo solar y golpe implacable.', category: 'Armaduras', imageName: 'solar-armor.png' },
  { id: 6, name: 'Nebula Armor', price: 68000, description: 'Armadura mágica del fragmento nebulosa. Genera potenciadores de daño y vida.', category: 'Armaduras', imageName: 'nebula-armor.png' },
  { id: 7, name: 'Stardust Armor', price: 65000, description: 'Invoca un guardián de polvo estelar gigante que combate a tu lado.', category: 'Armaduras', imageName: 'stardust-armor.png' },
  { id: 8, name: 'Ankh Shield', price: 28000, description: 'Escudo definitivo. Inmunidad a casi todos los debuffs del juego.', category: 'Accesorios', imageName: 'ankh-shield.png' },
  { id: 9, name: 'Wings of Betsy', price: 31000, description: 'Alas del jefe del Old One\'s Army. Vuelo largo y caída lenta.', category: 'Accesorios', imageName: 'wings-betsy.png' },
  { id: 10, name: 'Celestial Shell', price: 55000, description: 'Accesorio combinado que otorga múltiples transformaciones y stats de élite.', category: 'Accesorios', imageName: 'celestial-shell.png' },
  { id: 11, name: 'Luminite (x100)', price: 15000, description: 'Mineral del jefe final Moon Lord. Necesario para todo el equipo endgame.', category: 'Materiales', imageName: 'luminite.png' },
  { id: 12, name: 'Fragment Set (x10 c/u)', price: 22000, description: 'Pack de fragmentos Solar, Vortex, Nebula y Stardust para craftear armaduras lunares.', category: 'Materiales', imageName: 'fragments.png' },
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productsSlice.reducer
