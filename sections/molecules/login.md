## Login

```html
plain: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<!-- Email -->
  <div class="mb-4">
    <label class="block text-md font-light mb-2" for="email1">Email</label>
    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" id="email1">
  </div>
<!-- Password -->
  <div class="mb-4">
    <label class="block text-md font-light mb-2" for="password1">Password</label>
    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password1">
  </div>
<!-- END ELEMENTS -->
```

## Login Style 2

```html
plain: true
light: true
---

<!-- BEGIN ELEMENTS -->
<!-- Email -->
  <div class="mb-4">
                    <label class="block text-gray-700 text-small font-bold mb-2" for="email2">Email</label>
    <input class="w-full border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 no-select bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email2" placeholder="Email">
  </div>
<!-- Password -->
  <div class="mb-4">
                    <label class="block text-gray-700 text-small font-bold mb-2" for="password2">Password</label>
    <input class="w-full border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 no-select bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password2" placeholder="Password">
  </div>
<!-- END ELEMENTS -->
```

## Login Style 3

```html
plain: true
light: true
---

<!-- BEGIN ELEMENTS -->
<!-- Email -->
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-small font-bold mb-2 ml-3" for="email3">Email</label>
                    <input type="text" id="email3" name="email" value="" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>
<!-- END ELEMENTS -->
```
