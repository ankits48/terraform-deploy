import {addNewContact,getContacts,getContactById,updateContact,removeContact} from '../controllers/controller.js'
const routes = (app)=>{
    app.route('/contact')
    .get((req,res,next)=>{
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },getContacts)
    .post(addNewContact)

    app.route('/contact/:contactId')
    .get(getContactById)
    .put(updateContact)
    .delete(removeContact)
}
export default routes;