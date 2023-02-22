export const handleFormData = (e, type, regFormData, setRegFormData) => {
    console.log(`type: ${type}: ${e.target.value}`) 
    
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/

    const value = e.target.value
    switch(type) {
        case 'fullName' :
            if(value.length === 0)
                return setRegFormData({ ...regFormData, fullName: value, isFullNameValid: true, isFullNameEmpty: true })
            if(value.length > 2)
                return setRegFormData({ ...regFormData, fullName: value, isFullNameValid: true, isFullNameEmpty: false })
            return setRegFormData({ ...regFormData, fullName: value, isFullNameValid: false, isFullNameEmpty: false })

        case 'email' :
            if(value.length === 0)
                return setRegFormData({ ...regFormData, email: value, isEmailValid: true, isEmailEmpty: true }) 
            if(value.match(regex))
                return setRegFormData({ ...regFormData, email: value, isEmailValid: true, isEmailEmpty: false })
            return setRegFormData({ ...regFormData, email: value, isEmailValid: false, isEmailEmpty: false })
        
        case 'phoneNumber' :
            return setRegFormData({ ...regFormData, phoneNumber: value })
        
        case 'bvn' :
            return setRegFormData({ ...regFormData, bvn: value })
        
        case 'password' :
            return setRegFormData({ ...regFormData, password: value })
        default: 
        return setRegFormData({ ...regFormData })
    }

}