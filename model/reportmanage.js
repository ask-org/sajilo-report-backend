const { createClient } = require("@supabase/supabase-js");
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);
const getReports = async () => {
  const { data, error } = await supabase.from("reportgenerator").select("*");
  if (error) throw new Error(error.message);
  return data;
};
