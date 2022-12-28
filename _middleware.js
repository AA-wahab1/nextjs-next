import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = process.env.SECRET;
export default function middleware(req){
    const {cookies}=req;
    const jwt=cookies.OursiteJWT;
    const url=req.url;
    if(url.includes("/main")){
        if(jwt===undefined){
            return NextResponse.redirect("/Login")
        }
        try {
            verify(jwt,secret)
            return NextResponse.next()
        } catch (e) {
            return NextResponse.redirect("/Login")
        }
    }
    return NextResponse.next()
}