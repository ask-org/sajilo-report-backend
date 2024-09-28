const { createClient } = require("@supabase/supabase-js");
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);
console.log(supabase, "hello");
const getReports = async () => {
  const { data, error } = await supabase.from("reportgenerator").select("*");
  if (error) throw new Error(error.message);
  return data;
};
const postReports = async (reportData) => {
  const { data, error } = await supabase
    .from("reportgenerator")
    .insert([reportData]);
  if (error) throw new Error(error.message);
  return data;
};
module.exports = { getReports, postReports };
