import { getSession } from '@/api/auth'
import InventoryContainer from '@/components/inventory/InventoryContainer'
import { getInventories } from '@/services/inventory'
import { redirect } from 'next/navigation'

const InventoryPage = async () => {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  const response = await getInventories(session.idToken)
  const inventories = await response.json()
  console.log(inventories)

  return <InventoryContainer inventories={inventories} />
}

export default InventoryPage
