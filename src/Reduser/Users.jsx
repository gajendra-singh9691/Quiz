const users = {
    user: []
}

const Users = (inistaildata = users, action) => {
    switch (action.type) {
        case 'add_user':
            console.log(inistaildata);
            console.log(inistaildata.user);

            return {
                ...inistaildata,
                user: [...inistaildata.user, action.payload]
            }
        case 'final_number': {
            console.log(action.payload.index);
            console.log(action.payload.test_number);
            for (let i = 0; i < inistaildata.user.length; i++) {
                if (action.payload.index == i) {
                    inistaildata.user[i].test_number = action.payload.test_number;
                    console.log(inistaildata.user[i]);
                }
            }
            const newdata = inistaildata.user;
            console.log(newdata);
            

            return {
                user: newdata
            }
        }
        default:
            return inistaildata
    }
}

export default Users