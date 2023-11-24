interface FaucetItem {
  barrel: {
    beer_id: number;
    created_at: string;
    current_litters: number;
    id: number;
    label: string;
    machine_id: number;
    manufacturer_code: string;
    size: string;
    status: "full" | "empty";
    updated_at: string;
  };
  beer: {
    abu_bitterness: string;
    abv_alcohol_content: string;
    beer_name: string;
    beer_url: string;
    coloring: string;
    created_at: string;
    description: string;
    id: number;
    label: string;
    price_liters: number;
    unit_id: number;
    updated_at: string;
    web_id: null | any;
  };
  conjunct: number;
  id: number;
  ip: string;
  label: string;
  machine_id: number;
  tap_barrel_id: number;
}
