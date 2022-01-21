import { NextComponentType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Menu } from 'semantic-ui-react';

const MenuTop: NextComponentType = () => {
  const router = useRouter();
  const { pathname } = router;


  return (
    <Menu fixed='top' inverted size='large'>
      <Container>
        <Menu.Item active={pathname === '/'}>
          <Link href={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item active={pathname === '/about'}>
          <Link href={'/about'}>About</Link>
        </Menu.Item>
        <Menu.Item active={pathname === '/register'}>
          <Link href={'/register'}>Register</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default MenuTop;
