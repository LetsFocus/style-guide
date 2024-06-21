// // src/components/TextEditor/TextEditor.js
// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { db } from '../../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import './Home.css';

// const TextEditor = () => {
//   const [header, setHeader] = useState('');
//   const [editorContent, setEditorContent] = useState('');
//   const [saving, setSaving] = useState(false);

//   const handleHeaderChange = (e) => {
//     setHeader(e.target.value);
//   };

//   const handleEditorChange = (content) => {
//     setEditorContent(content);
//   };

//   const handleSave = async () => {
//     try {
//       setSaving(true); // Set saving state to true during data saving
//       const docRef = await addDoc(collection(db, 'Data'), {
//         header,
//         content: editorContent,
//         createdAt: new Date(),
//       });
//       console.log('Document written with ID: ', docRef.id);
//       setHeader(''); // Clear header and content after successful save
//       setEditorContent('');
//     } catch (error) {
//       console.error('Error adding document: ', error);
//     } finally {
//       setSaving(false); // Reset saving state after saving operation completes
//     }
//   };

//   const modules = {
//     toolbar: [
//       [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ 'script': 'sub' }, { 'script': 'super' }],
//       [{ 'indent': '-1' }, { 'indent': '+1' }, { 'direction': 'rtl' }],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'align': [] }],
//       ['link', 'image', 'video'],
//       ['clean'],
//       ['table']
//     ],
//     clipboard: {
//       matchVisual: false,
//     }
//   };

//   const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video', 'color', 'background',
//     'align', 'direction', 'script', 'clean', 'table'
//   ];

//   return (
//     <div className="editor-container">
//       <input
//         type="text"
//         value={header}
//         onChange={handleHeaderChange}
//         placeholder="Enter header"
//         className="header-input"
//       />
//       <ReactQuill
//         value={editorContent}
//         onChange={handleEditorChange}
//         modules={modules}
//         formats={formats}
//         theme="snow"
//         placeholder="Write something amazing..."
//       />
//       <button onClick={handleSave} className="save-button" disabled={saving}>
//         {saving ? 'Saving...' : 'Save'}
//       </button>
//     </div>
//   );
// };

// export default TextEditor;
