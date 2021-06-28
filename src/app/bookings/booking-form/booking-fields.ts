export const bookingFields: {
    label: string;
    type: string;
    max?: number;
    options?: any[];
    required: boolean;
    fieldName: string;
  }[] = [
    {
      label: 'Cliente',
      type: 'select',
      fieldName: 'client_id',
      required: true,
      options: []
    },
    {
      label: 'Fecha de llegada',
      type: 'date',
      required: true,
      fieldName: 'start_date'
    },
    {
      label: 'Fecha de salida',
      type: 'date',
      required: true,
      fieldName: 'end_date'
    },
    {
      label: '# Cabaña',
      type: 'select',
      required: true,
      fieldName: 'cabin_id',
      options: []
    },
    {
      label: '# personas extra(Máx 3)',
      type: 'number',
      required: false,
      max: 3,
      fieldName: 'extra_persons_quantity'
    },
    {
      label: 'Descuento',
      type: 'select',
      required: false,
      fieldName: 'disccount_id',
      options: []
    },
    {
      label: 'Comprobante',
      required: false,
      type: 'image',
      fieldName: 'voucher'
    },
    { label: 'Notas', type: 'text-area', required: true, fieldName: 'notes' }
  ];
  