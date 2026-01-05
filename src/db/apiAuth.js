import supabase, {supabaseUrl} from "./supabase";

export async function login({email, password}) {
  if (!supabase) throw new Error("Supabase not configured");
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signup({name, email, password}) {
  if (!supabase) throw new Error("Supabase not configured");
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  if (!supabase) return null;
  const {data: session, error} = await supabase.auth.getSession();
  if (!session.session) return null;

  if (error) throw new Error(error.message);
  return session.session?.user;
}

export async function logout() {
  if (!supabase) throw new Error("Supabase not configured");
  const {error} = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
