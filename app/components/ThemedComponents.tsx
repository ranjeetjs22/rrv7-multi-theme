import { lazy, Suspense } from 'react';
import { getCurrentTheme } from '../loadTheme';

// Lazy load theme-specific components
const DefaultHeader = lazy(() => import('./themed/DefaultHeader'));
const Theme1Header = lazy(() => import('./themed/Theme1Header'));
const Theme2Header = lazy(() => import('./themed/Theme2Header'));

function LoadingSpinner() {
  return <div>Loading theme...</div>;
}

export function ThemedHeader() {
  const theme = getCurrentTheme();
  
  let HeaderComponent;
  
  switch (theme) {
    case 'theme1':
      HeaderComponent = Theme1Header;
      break;
    case 'theme2':
      HeaderComponent = Theme2Header;
      break;
    default:
      HeaderComponent = DefaultHeader;
  }
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeaderComponent />
    </Suspense>
  );
}
