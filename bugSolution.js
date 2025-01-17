```javascript
// pages/index.js
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Next.js 15 App</h1>
      {/* Conditional rendering to avoid accessing router before initialization */}
      {router && <p>Current Route: {router.pathname}</p>}
    </div>
  );
}
```