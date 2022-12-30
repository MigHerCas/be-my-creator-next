import { createClient } from "@supabase/supabase-js";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const SUPABASE_REFERENCE = process.env.NEXT_PUBLIC_SUPABASE_REFERENCE as string;

export const API_REST_KEY = `https://${SUPABASE_REFERENCE}.supabase.co/rest/v1`;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export type Lead = {
  name: string;
  email: string;
  config: object;
};

/**
 * Insert lead
 */
export const insertLead = async () => {
  const newLead: Lead = {
    name: "Andrea",
    email: "andreacos@hotmail.com",
    config: {},
  };

  try {
    const { data } = await supabase.from("leads").insert([newLead]);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

/**
 * Fetch all leads
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
export const fetchLeads = async (
  setState: Dispatch<SetStateAction<unknown>>
) => {
  try {
    const { data } = await supabase.from("leads").select("*");

    if (setState) setState(data);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

/**
 * @param {number} channelId the currently selected Channel
 */
export const useStore = () => {
  const [leads, setLeads] = useState<unknown>([]);

  // Load initial data and set up listeners
  useEffect(() => {
    // Get Channels
    fetchLeads(setLeads);
  }, []);

  return {
    leads,
  };
};
