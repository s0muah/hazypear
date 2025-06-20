import Link from 'next/link';

export default function HomePage() {
return (
    <div style={{ textAlign: 'center', paddingTop: 100 }}>
<h1>Welcome!</h1>
<p>
        <Link href="/login"><button style={{ marginRight: 10 }}>Login</button></Link>
        <Link href="/signup"><button>Sign Up</button></Link>
</p>
    </div>
);
}
