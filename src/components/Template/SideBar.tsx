import { IconHome, IconAdjustments, IconBell } from "@/components/Icons"
import { MenuItem } from "./MenuItem"

export const SideBar = () => {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Start" icon={ IconHome } />
        <MenuItem url="/adjustments" text="Adjustments" icon={ IconAdjustments } />
        <MenuItem url="/notifications" text="Notifications" icon={ IconBell } />
      </ul>
    </aside>
  )
}