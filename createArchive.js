const AdmZip = require("adm-zip");
const fs = require("fs").promises;   // allows to write asynchronous code!  (for step 4)
const path = require ("path");     // step 5


// async function createZipArchive() {
//     try {
//       const zip = new AdmZip();
//       const outputFile = "test.zip";
//       zip.addLocalFolder("./test");
//       zip.writeZip(outputFile);
//       console.log(`Created ${outputFile} successfully`);
//     } catch (e) {
//       console.log(`Something went wrong. ${e}`);
//     }
//   }
  
//   createZipArchive();     //step two worked perfectly

/////////////////////////////////////////////////////////////////////////////////
// async function readZipArchive(filepath) {
//   try {
//     const zip = new AdmZip(filepath);

//     for (const zipEntry of zip.getEntries()) {          //for of is a loop!!!!
//       //console.log(zipEntry.toString());
//       console.log(zipEntry.name)
//     }
//   } catch (e) {
//     console.log(`Something went wrong. ${e}`);
//   }
// }
// readZipArchive("./test.zip");   //step 3 worked !

////////////////////////////////////////////////////////////////////////////////////////////

// async function updateZipArchive(filepath) {
//   try {
//     const zip = new AdmZip(filepath);

//     content = await fs.readFile("./test/file4.txt");
//     zip.addFile("file4.txt", content);
//     zip.writeZip(filepath);
//     console.log(`Updated ${filepath} successfully`);
//   } catch (e) {
//     console.log(`Something went wrong. ${e}`);
//   }
// }

// updateZipArchive("./test.zip");   //step 4 worked!

async function extractArchive(filepath) {
  try {
    const zip = new AdmZip(filepath);
    const outputDir = `${path.parse(filepath).name}_extracted`;
    zip.extractAllTo(outputDir);

    console.log(`Extracted to "${outputDir}" successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}

extractArchive("./test.zip");   // step 5   (((?)))