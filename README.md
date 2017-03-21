Installation

git clone https://github.com/alienfacepalm/ng2filebrowser.git
cd ng2filebrowser
npm install -g angular-cli
npm install
npm start

navigate browser to http://localhost:4200



-------------------------TASK-----------------------------



There are two deliverables:
 
1) Design document for the full stack of the system, including considerations for the backend performance, scalability, reliability, security, and multi-tenancy of the system. The system must support many users with millions of files.
 
2) A working implementation of the file browser, with source code and execution instructions.
•         The interface should allow sorting as well as delete and rename of files.
•         Each row should show an icon indicating file or folder as well as the name, modified, and size of the file/folder.
•         There should be a header with column titles that when clicked sort by that column along with indicating which column is being sorted currently.
•         Hovering on a row reveals buttons for rename and delete.
•         Clicking delete should require the user to confirm the deletion and then remove the file from the list if confirmed.
•         Rename allows the user to type in a new name for the file/folder.  The rename field should start with the existing name of the file/folder filled in. 
 
Angular is the preferred framework for this problem. There is no need to implement any part of the backend that was discussed in the design document.
 
Please implement the table features without a library (like ng-grid).
 
Here's an example JSON for a possible data model:
 
[
    {
        "name": "readme.txt",
        "isFolder": false,
        "modified": "2012-04-23T18:25:43.511Z",
        "size": 432424 // In bytes
    },
    {
        "name": "Pictures",
        "isFolder": true,
        "modified": null,
        "size": null
    },
    {
        "name": "Bridge.jpg",
        "isFolder": false,
        "modified": "2014-07-44T11:15:22.433Z",
        "size": 5432424 // In bytes
    },
]