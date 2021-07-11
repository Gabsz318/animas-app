export interface Booking {
    $key?: string;
    client_id: number;
    start_date: string;
    end_date: string;
    cabin_id: string;
    extra_persons_quantity: number;
    disccount_id: number;
    total: number;
    voucher: any;
    notes: string;
    nights_quantity: number;
    status: string;
    deleted: boolean;
  }
  