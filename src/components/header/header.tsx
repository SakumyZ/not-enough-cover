// import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
// import { QwikLogo } from '../icons/qwik';
// import styles from './header.css?inline';
import classes from './header.module.css';
import { Box, Link } from '~/integrations/react/mui'

export default component$(() => {
  // useStylesScoped$(styles);

  return (
    <Box component='header' className={`${classes.header}`} >
      <Box className={`${classes.logo}`}>
        <Link href="/" underline="none">Not Enough Cover</Link>
      </Box>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </Box>
  );
});
