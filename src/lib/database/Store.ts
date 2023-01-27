import type { SupabaseClient } from "@supabase/supabase-js";

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
export const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

export type Lead = {
  name: string;
  email: string;
  config: Omit<FormFields, "name" | "email">;
};

export type FormFields = {
  name: string;
  email: string;
  test: Array<string | number>;
  platforms: "Instagram" | "Tiktok" | "Twitter";
  teamSize: "1-5" | "10-20" | "+20";
};

/**
 * Insert a new lead into Leads table
 * @param {Lead} dataToInsert Record to be inserted
 */
export const insertLead = async (
  supabase: SupabaseClient,
  dataToInsert: Lead
) => {
  try {
    const { data } = await supabase.from("leads").insert([dataToInsert]);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
