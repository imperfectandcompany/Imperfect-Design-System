## Field
```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-small font-bold mb-2 ml-3" for="id">Field Name</label>
                    <input type="text" id="id" name="name" value="" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
```

## Field
```html
plain: true
light: true
---
<!-- BEGIN ELEMENTS -->
<div class="flex justify-center p-5">
<!-- Search bar / Hidden on mobile devices -->
            <div class="hidden md:block  ">        
<form class="border rounded flex" autocomplete="off" action="results.php" method="get">
    <input type="text" name="search_query" class="px-4 py-2 focus:ring-inset focus:ring-2 focus:outline-none select-none focus:ring-purple-400 focus:ring-opacity-80" placeholder="Search..."/>
  </form>
</div>
</div>
<!-- END ELEMENTS -->
```