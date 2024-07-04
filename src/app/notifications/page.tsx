"use client"

import { Layout } from '@/components/Template/Layout';
import useAppData from '@/data/hook/UseAppData';

export default function Notifications() {

  const { alterTheme } = useAppData()

  return (
    <Layout title='Notifications page' subtitle='Manage your notifications.'>
      <button onClick={alterTheme}>Alter theme</button>
    </Layout>
  );
}