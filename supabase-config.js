// Supabase — Conciliador ARO
// Chave publishable: pode ser usada no frontend.
// NUNCA coloque a service_role/secret key no navegador.

const SUPABASE_URL = "https://odvntvvcgdoerewytvum.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_IssO3agsbMYN_V243zTbTg_Flm5TFZF";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
