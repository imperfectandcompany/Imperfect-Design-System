## Search bar

```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<div class="flex justify-center p-5">
<!-- Search bar / Hidden on mobile devices -->
			<div class="hidden md:block  ">		
<form class="border rounded flex" autocomplete="off" action="results.php" method="get">
    <input type="text" name="search_query" class="px-4 py-2 focus:ring-inset focus:ring-2 focus:outline-none select-none focus:ring-purple-400 focus:ring-opacity-80" placeholder="Search..."/>
	<!-- button with search icon -->
    <button type="submit" class="flex items-center focus:outline-none text-gray-400 hover:text-gray-900 justify-center px-4 border-l">
      <svg class="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
    </button>
  </form>
</div>
</div>
<!-- END ELEMENTS -->

```