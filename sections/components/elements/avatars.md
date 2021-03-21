# Avatar

Click the top right '<>' to view the source-code.

```download
title: Avatars (.zip)
subtitle: 8 KB
url: /assets/downloads/avatars/assets.zip
```

## Specified Default Profile Picture

When a user has specified a custom profile picture.

```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
<img src="../assets/img/avatars/avatar1.png" class="w-8 h-8 mr-3 transition bg-gray-500 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
<img src="../assets/img/avatars/avatar5.png" class="w-10 h-10 mr-3 transition bg-gray-500 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
<img src="../assets/img/avatars/profilepic2.png" class="w-12 h-12 mr-3 transition bg-gray-500 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->

```

### Alternative Specified Profile Picture Options 
Alternative profile picture styles a user can switch to.
- User can choose a border color that best suits their profile picture.
- User has the option to go borderless.

Option 1 (User-selected border color)
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
<img src="../assets/img/avatars/avatar12.png" class="w-8 h-8 mr-3 transition border-4 bg-indigo-500 border-indigo-500 rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
<img src="../assets/img/avatars/avatar9.png" class="w-10 h-10 mr-3 transition border-4 bg-green-500 border-green-500 rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
<img src="../assets/img/avatars/avatar2.png" class="w-12 h-12 mr-3 transition border-4 bg-blue-500 border-blue-500 rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->
```

Option 2 (User-selected border-none)
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
<img src="../assets/img/avatars/avatar12.png" class="w-8 h-8 mr-3 transition border-none rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
<img src="../assets/img/avatars/avatar9.png" class="w-10 h-10 mr-3 transition border-none rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
<img src="../assets/img/avatars/avatar2.png" class="w-12 h-12 mr-3 transition border-none rounded-full cursor-pointer select-none hover:opacity-80">
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->
```



## Unspecified Default Profile Picture

When a user has not specified a custom profile picture.

```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
   <div class="w-8 h-8 font-bold text-center transition text-white bg-gray-700 bg-center m-1 mr-2 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
      <div>?</div>
   </div>
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
   <div class="w-10 h-10 font-bold text-center transition text-white bg-gray-700 bg-center m-1 mr-2 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
      <div class="my-1">?</div>
   </div>
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
   <div class="w-12 h-12 font-bold text-center transition text-white bg-gray-700 bg-center m-1 mr-2 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
      <div class="my-2">?</div>
   </div>
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->

```

### Alternative Unspecified Profile Picture Options

Alternative profile pictures a user can switch to without uploading a picture.
- The letter corresponds to the first letter in their email by default.
- If set, User has the option to choose the first letter of their username.
- If first name is set, we use the first letter. If last name is also set, we include that as a second character.

Option 1
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
     <div class="flex transition relative w-8 h-8 bg-yellow-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white select-none cursor-pointer hover:opacity-80">F</div>
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
    <div class="flex transition relative w-10 h-10 bg-green-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white select-none cursor-pointer hover:opacity-80">L</div>
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
    <div class="flex transition relative w-12 h-12 bg-purple-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white select-none cursor-pointer hover:opacity-80">XY</div>
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->

```

Option 2
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
    <div class="flex transition relative w-8 h-8 bg-yellow-300 justify-center items-center m-1 mr-2 text-xl rounded-full text-yellow-600 select-none cursor-pointer hover:opacity-80">F</div>
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
    <div class="flex transition relative w-10 h-10 bg-green-300 justify-center items-center m-1 mr-2 text-xl rounded-full text-green-600 select-none cursor-pointer hover:opacity-80">L</div>
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
    <div class="flex transition relative w-12 h-12 bg-purple-300 justify-center items-center m-1 mr-2 text-xl rounded-full text-purple-600 select-none cursor-pointer hover:opacity-80">XY</div>
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->

```


>Different versions could indicate different interactions, for example... with border can mean the user / avatar is selected...

Option 1 (with border)
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
     <div class="flex transition relative w-8 h-8 bg-yellow-500 border-4 border-yellow-800 justify-center items-center m-1 mr-2 text-xl rounded-full text-white select-none cursor-pointer hover:opacity-80">F</div>
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
    <div class="flex transition relative w-10 h-10 bg-green-500 border-4 border-green-800 justify-center items-center m-1 mr-2 text-xl rounded-full text-white select-none cursor-pointer hover:opacity-80">L</div>
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
    <div class="flex transition relative w-12 h-12 bg-purple-500 border-4 border-purple-800 justify-center items-center m-1 mr-2 text-xl rounded-full text-white select-none cursor-pointer hover:opacity-80">XY</div>
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->

```

Option 2 (with border)
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<!-- BEGIN SMALL -->
    <div class="flex transition relative w-8 h-8 bg-yellow-300 justify-center items-center m-1 mr-2 text-xl rounded-full text-yellow-600 border-4 border-yellow-600 select-none cursor-pointer hover:opacity-80">F</div>
<!-- END SMALL -->

<!-- BEGIN MEDIUM -->
    <div class="flex transition relative w-10 h-10 bg-green-300 justify-center items-center m-1 mr-2 text-xl rounded-full text-green-600 border-4 border-green-600 select-none cursor-pointer hover:opacity-80">L</div>
<!-- END MEDIUM -->

<!-- BEGIN LARGE -->
    <div class="flex transition relative w-12 h-12 bg-purple-300 justify-center items-center m-1 mr-2 text-xl rounded-full text-purple-600 border-4 border-purple-600 select-none cursor-pointer hover:opacity-80">XY</div>
<!-- END LARGE -->

</div>
<!-- END ELEMENTS -->

```