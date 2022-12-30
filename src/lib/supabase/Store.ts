import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const SUPABASE_REFERENCE = process.env.NEXT_PUBLIC_SUPABASE_REFERENCE as string;

export const API_REST_KEY = `https://${SUPABASE_REFERENCE}.supabase.co/rest/v1`;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
