import React from 'react'

export default function UpdateForm() {
  return (
    <>
    <form class="max-w-lg w-full mx-auto px-4 sm:px-6 lg:px-8"><div class="mb-4"><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name:</label><input class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="text" name="name" value=""></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description:</label><textarea class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="description"></textarea></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Per Day:</label><input class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="text" name="price_per_day" value=""></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resolution Height:</label><input class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="text" name="resolution_height" value=""></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resolution Width:</label><input class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="text" name="resolution_width" value=""></div><div class="mb-4"><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type:</label><select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="type"><option value="indoor">indoor</option><option value="outdoor">outdoor</option></select></div><button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" type="submit">Submit</button></form>
    </>
  )
}
