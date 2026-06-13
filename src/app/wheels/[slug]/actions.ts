'use server';

import { supabaseAdmin } from '@/lib/supabase';

/** Best-effort RPC — never throws, failures are silently ignored. */
export async function incrementSpinCount(slug: string): Promise<void> {
  try {
    await supabaseAdmin.rpc('increment_spin_count', { wheel_slug: slug });
  } catch {
    // analytics failure must not affect the user
  }
}
