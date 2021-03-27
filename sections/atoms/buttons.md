# Buttons

Click the top right '<>' to view the source-code.

## Primary
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<div class="max-w-lg mx-auto text-center flex flex-col space-y-2">

<!-- BEGIN PRIMARY-->
                <div class="bg-white border border-purple-500 hover:border-purple-700 text-purple-600 font-bold py-2 px-2 rounded shadow-sm hover:shadow-md transition duration-200 cursor-pointer">Primary</div>

<!-- END PRIMARY -->
</div>
```

## Secondary
```html
plain: true
light: true
---
<div class="max-w-lg mx-auto text-center flex flex-col space-y-2">

<!-- BEGIN SECONDARY-->
                <div class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded shadow-sm hover:shadow-md transition duration-200 cursor-pointer">Secondary</div>
<!-- END SECONDARY-->
</div>
```


## Icon buttons
```html
plain: true
light: true
---
<div class="max-w-lg mx-auto text-center flex flex-col space-y-2">

<!-- BEGIN ICONS-->
<!-- button with search icon -->
 <div class="flex"> 

<!-- Search Button -->
    <button type="submit" class="border rounded flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 py-2 border-l">
      <svg class="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
    </button>

<!-- Bookmark button -->
    <button type="submit" class="border rounded flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 py-2 border-l">
<svg xmlns="https://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                            </svg>
    </button>


<!-- 3 -->
    <button type="submit" class="border rounded flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 py-2 border-l">
      <svg class="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
    </button>


<!-- Share button -->
    <button type="submit" class="border rounded flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 py-2 border-l">
<svg xmlns="https://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                            </svg>
    </button>

<!-- More options (horizontal) -->
    <button type="submit" class="border rounded flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 py-2 border-l">
<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 60 60" xmlns="https://www.w3.org/2000/svg">
                     <path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
                  </svg>
    </button>
</div>
```




