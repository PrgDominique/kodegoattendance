import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
const Sidebase = () => {
    const { collapseSidebar } = useProSidebar();

    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar>
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <button onClick={() => collapseSidebar()}>Collapse</button>
        </main>
      </div>
    );
}
export default Sidebase;