import { CabinStatus } from "../cabin-status";

export interface Cabin {
    $key?: string,
    cabin_name: string,
    quantity_persons: number,
    matrimonial_bed_quantity: number,
    king_size_quantity: number,
    individual_quantity: number,
    bath_quantity: number,
    chicken_quantity: number,
    living_room_quantity: number,
    price: number,
    plants_quantity: number,
    status: CabinStatus
  }