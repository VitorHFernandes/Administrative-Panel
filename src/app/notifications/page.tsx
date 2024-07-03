"use client"

import { Layout } from '@/components/Template/Layout';
import useAppData from '@/data/hook/UseAppData';

export default function Notifications() {

  const data = useAppData()

  return (
    <Layout title='Notifications page' subtitle='Manage your notifications.'>
      <h3>{data.name}</h3>
    </Layout>
  );
}