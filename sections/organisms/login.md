# Login

Click the top right '<>' to view the source-code.

```html
plain: true
responsive: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<!-- BEGIN ELEMENTS -->
<main class="bg-white max-w-md mx-auto p-8 md:p-12 my-10 rounded-lg lg:shadow-2xl md:shadow-lg sm:shadow-sm">
        <section>
		<div class="pb-8">
            <h3 class="font-bold text-2xl text-blue-300 text-center">Log into Postogon</h3>
</div>
        </section>
        <section class="">
            <form class="flex flex-col" method="POST" action="">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-small font-bold mb-2 ml-3" for="emailoruser">Email / Username</label>
                    <input type="text" id="emailoruser" name="login_emailoruser" value="" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 vorder-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>

                <div class="mb-6 pt-3 rounded bg-gray-200">
				
                    <label class="block text-gray-700 text-small font-bold mb-2 ml-3" for="password">Password</label>
                    <input type="password" id="password" name="login_password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 vorder-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                </div>

                <div class="flex justify-end">
                    <a href="#" class="text-sm text-blue-300 hover:text-purple-700 hover:underline underline-none mb-6">Forgot Password?</a>
                </div>
                <input type="hidden" name="form_type" value="user_login">				
                <button name="login" class="border border-purple-600 bg-white hover:border-purple-700 text-purple-500 font-bold py-2 focus:outline-none rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
            </form>
                <br>
                <hr>
                <div class="flex flex-col max-w-lg mx-auto text-center mt-12">
                    <p class="text-purple-600 mb-6 font-bold">Need some help?<a href="#" class="font-normal text-blue-300 pl-2 hover:underline underline-none ml-1">Contact Us</a></p>
                <a href="#" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 focus:outline-none rounded shadow-lg hover:shadow-xl transition duration-200">Create An Account</a>
                </div>			
		
        </section>
    </main>
<!-- END ELEMENTS -->
```

```html
plain: true
responsive: true
light: true
---
<!-- Mandatory stylesheet -->
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<!-- BEGIN ELEMENTS -->
<main class="bg-white max-w-md mx-auto p-8 md:p-12 my-10 rounded-lg lg:shadow-2xl md:shadow-lg sm:shadow-sm">
<h1 class="font-semibold text-3xl pb-5 text-center md:text-left">Log into Postogon
</h1>
<form>
  <div class="mb-4">
    <label class="block text-md font-light mb-2" for="email">Email</label>
    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" id="" placeholder="Email">
  </div>
  <div class="mb-4">
    <label class="block text-md font-light mb-2" for="password">Password</label>
    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="" placeholder="Password">
  </div>

  <div class="flex items-center justify-between mb-5">
    <a href="./home" class="bg-indigo-600 flex-initial justify-items-start hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
      Log In
    </a>
    <a class="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500" href="forgotpass.php">
      Forgot Password?
    </a>
  </div>
  <p class="text-center text-md font-light">Don't have an account? <button class="modal-open focus:outline-none font-light text-md text-indigo-600">Get Started</button></p>
</form>
    </main>
<!-- END ELEMENTS -->

```

