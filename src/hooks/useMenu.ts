import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  order_index: number;
  is_active: boolean;
}

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true });

      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error('Erro ao carregar menu:', error);
    } finally {
      setLoading(false);
    }
  };

  return { menuItems, loading };
};
