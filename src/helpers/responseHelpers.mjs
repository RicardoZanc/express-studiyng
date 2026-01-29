export function treatForResponse(serviceFunction){
    try{
        const result = serviceFunction();
        return { success: true, data: result, status: 200 }
    } catch(error) {
        return { success: false, data: error.message, status: error.status }
    }
}