import dotenv from "dotenv";
import { exec } from "child_process";
import FTPS from "ftps";
import path from "path";
import fs from "fs";

dotenv.config();

// Configuration
const config = {
  buildCommand: "npm run build", // Adjust this to your build command
  buildDir: path.resolve(path.dirname(""), "build"), // Adjust this to your build output directory
  ftp: {
    host: process.env.FTP_HOST,
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    remoteDir: process.env.FTP_REMOTE_DIR,
  }
};

// Function to build the project
function buildProject() {
  return new Promise((resolve, reject) => {
    console.log("Building the project...");
    exec(config.buildCommand, (error, stdout, stderr) => {
      if (error) {
        console.error("Error during build:", error.message);
        return reject(error);
      }
      if (stderr) console.error("Build stderr:", stderr);
      console.log("Build output:", stdout);
      resolve();
    });
  });
}

// Function to deploy the project to the FTPS server
function deployToFTPS() {
  return new Promise((resolve, reject) => {
    const { host, username, password, remoteDir } = config.ftp;
    const ftps = new FTPS({
      host,
      username,
      password,
      protocol: "ftp", // Use "ftp" for plain FTP if required
      additionalLftpCommands: "set ssl:verify-certificate no" // Bypass SSL verification if necessary
    });

    console.log("Starting deployment...");

    if (!fs.existsSync(config.buildDir)) {
      return reject(new Error(`Build directory does not exist: ${config.buildDir}`));
    }

    // Recursively upload the build directory
    ftps
      .mirror({
        localDir: config.buildDir,
        remoteDir,
        upload: true,
      })
      .exec((err) => {
        if (err) {
          console.error("Deployment failed:", err);
          return reject(err);
        }
        resolve();
      });
  });
}

// Main function to build and deploy
async function main() {
  try {
    await buildProject();
    await deployToFTPS();
    console.log("🚀🚀🚀 Website successfully built and deployed! 🚀🚀🚀");
  } catch (error) {
    console.error("Failed to build or deploy the website:", error.message);
  }
}

main();
