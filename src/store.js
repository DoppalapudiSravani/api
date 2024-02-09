import  {createSlice, createAsyncThunk, configureStore} from"@reduxjs/toolkit";
 let initialData={
    users:[],
    status:"",
    error:false,
 };
 //dispatch(fetchUsers())
  export let fetchUsers=createAsyncThunk("user/fetch",async()=>{
    try{

        const response= await  fetch("https://jsonplaceholder.typicode.com/users");
         const data=await response.json();
         return data;
        } catch(error){
          throw error;
    }


 });
const userSlice=createSlice({
    name:'user',
    initialState:initialData,
        

        extraReducers:(builder)=>{
            builder
            .addCase(fetchUsers.pending,(state)=>{
                state.staus="loading";

            })
            .addCase(fetchUsers.fulfilled,(state,action)=>{
               (state.status="completed"),
                (state.users=action.payload);
            })
            .addCase(fetchUsers.rejected,(state,action)=>{
                state.status="error",
                state.users=[],
                state.error=action.error.message
            })
        
    },
});
 const store =configureStore({
    reducer:{
        user:userSlice.reducer

    }
})
export default store;
