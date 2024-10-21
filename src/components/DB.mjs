import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.APP_DBURL;
const supabaseKey = import.meta.env.APP_DBKEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
