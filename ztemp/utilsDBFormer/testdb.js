// https://stackoverflow.com/questions/67475247/nextjs-mongoose-models-undefined-on-certain-but-not-other-pages-in-nextjs-site


// // UPDATE FIXED! Evidently, wepback throws this error immediately 
// /* if the model is not used in the data fetcher before Next.js recompiles the code. 
// If, say, you're using getStaticProps and you havn't used your model,
// such as const data = await Vendor.find({}); for example,
// it'll throw the error. Add that and it works fine.
//  I suppose I just never hit that error earlier on! –  */
// // Bendystraw
// // May 11, 2021 at 15:17

// dont call models if it wont be used


// import connectDB from "./utils/db";
// import Info from "./models/infoModel";
// import Work from "./models/worksModel"

// const save = async () =>{
//     const newInfo = new Info({
//         title: 'about this',
//         details: 'helooo'
//     })
    
    
//     console.log('saving: ',newInfo.title);
//     await newInfo.save()
// }

// const save = async () => {
//     const newWork = new Work({
//         title: 'my other work',
//         details: 'A landing page for delish goodies',
//         path: 'other work',
//         images: ['https://via.placeholder.com/600/24f355'],

//     })

//     await newWork.save()
// }

// export default save

