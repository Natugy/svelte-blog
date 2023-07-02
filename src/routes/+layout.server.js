/** @type {import('./$types').LayoutServerLoad} */
export async function load({cookies}) {
    let adminMode = false
    if(cookies.get('admin')){
      console.log('caca');
      adminMode = true;
    }
    return {adminMode};
}

