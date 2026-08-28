class ApiResponse{
    constructor(statusCodes,message,data="Success"){
        this.statusCodes=statusCodes,
        this.message=message,
        this.data=data,
        this.success=statusCodes<400
    }
}

export {ApiResponse}