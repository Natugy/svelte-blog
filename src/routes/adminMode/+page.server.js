import { ADMIN_PWD } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const actions = {
	connection: async ({ cookies, request, params }) => {
	const data = await request.formData();
;
    if(data.get('adminMdp')==ADMIN_PWD){
        
        cookies.set('admin','true',{ path: "/", sameSite: true, httpOnly: true, secure: true })
        throw redirect(303, '/');
    }
    else{
        return { failed: true };
    }
}
};