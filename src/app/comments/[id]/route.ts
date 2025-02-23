import { comments } from "../data";

export async function GET(request: Request,
    {params}: {params: {id: string}}
){
    const comment1 = comments.find(
        (comment2) => comment2.id === parseInt(params.id));
    return Response.json(comment1);
}

export async function PATCH(
    request: Request,
    {params}: {params: {id: string}}
){
    const body = await request.json();
    const {text} = body;
    const index = comments.findIndex(
        (comment987) => comment987.id === parseInt(params.id)
    );
    comments[index].comment = text;
    return Response.json(comments[index]);
}

export async function DELETE(
    request: Request,
    {params}: {params: {id: string}}
){
    const index = comments.findIndex(
        (comment123) => comment123.id === parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}
