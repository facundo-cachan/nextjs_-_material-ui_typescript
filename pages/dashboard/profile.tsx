import { useSession } from 'next-auth/client';
import { Custom } from 'components';

const Profile = () => {
    const [session, loading] = useSession();

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null;

    // If no session exists, display access denied message
    if (!session) {
        return <Custom.AccessDenied />;
    }

    // If session exists, display content
    return (
        <>
            <h1>Protected Profile</h1>
            <p>
                <strong>Welcome</strong>
            </p>
            {loading ? <h4>Loading ... </h4> : JSON.stringify(session, null, 2)}
        </>
    );
};

export default Profile;
