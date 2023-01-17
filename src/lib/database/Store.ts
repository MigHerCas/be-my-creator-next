import { createClient } from "@supabase/supabase-js";
import type { FormFields } from "@views/new-project/NewProjectView";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const SUPABASE_REFERENCE = process.env.NEXT_PUBLIC_SUPABASE_REFERENCE as string;

export const API_REST_KEY = `https://${SUPABASE_REFERENCE}.supabase.co/rest/v1`;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export type Lead = {
  name: string;
  email: string;
  config: Omit<FormFields, "name" | "email">;
};

/**
 * Insert a new lead into Leads table
 * @param {object} dataToInsert Record to be inserted
 */
export const insertLead = async (dataToInsert: Lead) => {
  try {
    const { data } = await supabase.from("leads").insert([dataToInsert]);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};