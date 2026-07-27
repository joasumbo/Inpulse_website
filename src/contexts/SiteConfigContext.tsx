import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// Context para carregar configurações do site dinamicamente - João Sumbo
interface SiteConfig {
  id: string;
  site_name: string;
  site_description: string;
  logo_url: string | null;
  primary_color: string;
  secondary_color: string;
  contact_email: string;
  contact_phone: string;
  contact_address: string;
}

interface SiteConfigContextType {
  config: SiteConfig | null;
  loading: boolean;
}

const SiteConfigContext = createContext<SiteConfigContextType>({ config: null, loading: true });

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const { data, error } = await supabase
        .from('site_config')
        .select('*')
        .single();

      if (error) throw error;
      
      if (data) {
        setConfig(data);
        applyColors(data.primary_color, data.secondary_color);
      }
    } catch (error) {
      console.error('Erro ao carregar configuração:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyColors = (primary: string, secondary: string) => {
    document.documentElement.style.setProperty('--color-primary', primary);
    document.documentElement.style.setProperty('--color-secondary', secondary);
  };

  return (
    <SiteConfigContext.Provider value={{ config, loading }}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => useContext(SiteConfigContext);
