import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    values: Math.floor(Math.random()*9),
    theQuotes:[
        ` We cannot solve problems with the kind of thinking we employed when we came up with them.`,
        ` Learn as if you will live forever, live like you will die tomorrow.`,
        ` Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.`,
        ` When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.`,
        ` When you change your thoughts, remember to also change your world.`,
        ` It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.`,
        ` Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.`,
        ` Success is not final; failure is not fatal: It is the courage to continue that counts.`,
        ` It is better to fail in originality than to succeed in imitation.`,
        ` The road to success and the road to failure are almost exactly the same.`

    ],
    authors: [
        `— Albert Einstein`,
        `— Mahatma Gandhi`,
        `— Mark Twain`,
        `— Eleanor Roosevelt`,
        `— Norman Vincent Peale`,
        `— Walter Anderson`,
        `— Diane McLaren`,
        `— Winston S. Churchill`,
        `— Herman Melville`,
        `— Colin R. Davis`
    ],
    
     backgAndText: [
       { backgroundColor: "red", color:"red"},
       { backgroundColor: "blue", color:"blue"},
       { backgroundColor: "green", color:"green"},
       { backgroundColor: "orange", color:"orange"},
       { backgroundColor: "purple", color:"purple"},
       { backgroundColor: "pink", color:"pink"},
       { backgroundColor: "grey", color:"grey"},
       { backgroundColor: "navy", color:"navy"},
       { backgroundColor: "lime", color:"lime"},
       { backgroundColor: "silver", color:"silver"}

    ],
     buttonStyles: [
        { backgroundColor: "red"},
        { backgroundColor: "blue"},
        { backgroundColor: "green"},
        { backgroundColor: "orange"},
        { backgroundColor: "purple"},
        { backgroundColor: "pink"},
        { backgroundColor: "grey"},
        { backgroundColor: "navy"},
        { backgroundColor: "lime"},
        { backgroundColor: "silver"},
    ]
}

export const quoteSlice = createSlice({
    name:"quoteRandom",
    initialState,
    reducers:{
        myquotes:(state)=>{
            state.theQuotes=state.theQuotes.map(loop=>{return loop});
            state.authors=state.authors.map(loop=>{return loop});
            state.backgAndText=state.backgAndText.map(loop=>{return loop});
            state.buttonStyles=state.buttonStyles.map(loop=>{return loop});
            state.values=Math.floor(Math.random()*9);
        }
    }
})
export const {myquotes} = quoteSlice.actions
export default quoteSlice.reducer;

