import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PunchClockIcon from '@mui/icons-material/PunchClock';
const Sidebase = () => {
    const { collapseSidebar } = useProSidebar();

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
         <Sidebar transitionDuration={1000} collapsedWidth="80px">
        <Menu>
          <MenuItem><DashboardCustomizeIcon /> Dashboard</MenuItem>
          <MenuItem><PunchClockIcon /> Timesheet</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => collapseSidebar()}>
            Collapse
          </button>
        </div>
      </main>
      </div>
    );
}
export default Sidebase;