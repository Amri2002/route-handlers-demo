import { comments } from "../data";

export async function GET(request: Request,
    {params}: {params: {id: string}}
){
    const comment1 = comments.find(
        (comment2) => comment2.id === parseInt(params.id));
    return Response.json(comment1);
}