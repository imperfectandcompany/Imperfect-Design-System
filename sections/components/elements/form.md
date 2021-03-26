# Form

Click the top right '<>' to view the source-code.

## Search bar

```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center items-center">

<form class="border rounded w-full flex" action="#" method="get">
    <input type="text" name="search_query" class="px-4 py-2 w-full focus:ring-inset focus:ring-2 focus:outline-none select-none focus:ring-yellow-500 focus:ring-opacity-100" placeholder="Search..."></input>
    <button type="submit" class="flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 border-l">
      <svg class="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
    </button>
  </form>

</div>
<!-- END ELEMENTS -->

```

## Buttons
```html
plain: true
light: true
---
<div class="max-w-lg mx-auto text-center flex flex-col space-y-2">

<!-- BEGIN PRIMARY-->
                <div class="bg-white border border-purple-500 hover:border-purple-700 text-purple-600 font-bold py-2 px-2 rounded shadow-sm hover:shadow-md transition duration-200 cursor-pointer">Primary</div>

<!-- END PRIMARY -->

<!-- BEGIN SECONDARY-->
                <div class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded shadow-sm hover:shadow-md transition duration-200 cursor-pointer">Secondary</div>
<!-- END SECONDARY-->
</div>
```

## Field
```html
plain: true
light: true
---
<div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-small font-bold mb-2 ml-3" for="id">Field Name</label>
                    <input type="text" id="id" name="name" value="" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
</div>
```
