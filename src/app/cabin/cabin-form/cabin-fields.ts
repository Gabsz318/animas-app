export const cabinFields = [
  {
    label: '# de cabaña',
    type: 'number',
    required: true,
    fieldName: 'cabin_name',
  },
  {
    label: '# de personas',
    type: 'number',
    required: true,
    fieldName: 'quantity_persons',
  },
  {
    label: '# de camas matrimoniales',
    type: 'number',
    required: false,
    fieldName: 'matrimonial_bed_quantity',
  },
  {
    label: '# de camas king size',
    type: 'number',
    required: false,
    fieldName: 'king_size_quantity',
  },
  {
    label: '# de camas individual',
    type: 'number',
    required: false,
    fieldName: 'individual_quantity',
  },
  {
    label: '# de baños',
    type: 'number',
    required: true,
    fieldName: 'bath_quantity',
  },
  {
    label: '# de cocinetas',
    type: 'number',
    required: true,
    fieldName: 'chicken_quantity',
  },
  {
    label: '# de salas',
    type: 'number',
    required: true,
    fieldName: 'living_room_quantity',
  },
  {
    label: 'Precio por noche',
    type: 'number',
    required: true,
    fieldName: 'price',
  },
  {
    label: '# de plantas',
    type: 'number',
    required: true,
    fieldName: 'plants_quantity',
  },
  {
    label: 'Estatus',
    type: 'select',
    required: true,
    options: ['Disponible', 'Ocupada', 'Reservando', 'Reservada'],
    fieldName: 'status',
  },
];
