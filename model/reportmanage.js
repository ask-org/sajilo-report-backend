const { createClient } = require("@supabase/supabase-js");
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPABASE_KEY;
console.log(supabaseURL, "urlof supabse");
console.log(supabaseKEY, "key of supabase");
const supabase = createClient(supabaseURL, supabaseKEY);
// console.log(supabase, "hello");
const getReports = async () => {
  const { data, error } = await supabase.from("reportgenerator").select("*");
  if (error) throw new Error(error.message);
  return data;
};
const postReports = async (reportData) => {
  const { data, error } = await supabase
    .from("reportgenerator")
    .insert([reportData])
    .select(); // Add this to return the inserted data
  if (error) {
    console.error("Supabase insert error:", error);
    throw new Error(error.message);
  }
  return data;
};

module.exports = { getReports, postReports };
