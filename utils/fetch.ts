type RequestInfo = string | Request;
const fetcher = async (input: RequestInfo): Promise<any> => {
    try {
        const f = await fetch(`${process.env.NEXT_PUBLIC_URL}${input}`).then((res) => res.json());
        return f;
    } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        return null;
    }
};
export default fetcher;
