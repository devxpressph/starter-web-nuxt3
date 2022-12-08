import { generateClasses, createThemePlugin } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      text: {
        inner: "flex relative relative w-full h-[50px] px-3 rounded-default text-base text-light placeholder-gray-400 bg-white border-2 border-ink-200 formkit-invalid:border-red-500 focus:outline-none focus-within:border-primary",
        outer: 'mb-5',
        label: 'block mb-1 font-light text-sm text-ink-400 font-semibold',
        input:
          'relative w-full h-full px-3 rounded-default text-base text-light placeholder-gray-400 bg-transparent formkit-invalid:border-red-500 outline-none focus:border-none',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      textarea: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm text-ink-400 font-semibold',
        input:
        'w-full h-[100px] px-3 rounded text-base text-light placeholder-gray-400 bg-white border-2 border-ink-200 formkit-invalid:border-red-500 outline-none focus:border-primary',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      url: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm text-secondary font-semibold',
        input:
          'w-full h-[40px] px-3 rounded text-base text-light placeholder-gray-400 bg-secondary formkit-invalid:border-red-500 outline-none focus:outline-info',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      email: {
        inner: "flex relative relative w-full h-[50px] px-3 rounded-default text-base text-light placeholder-gray-400 bg-white border-2 border-ink-200 formkit-invalid:border-red-500 focus:outline-none focus-within:border-primary",
        outer: 'mb-5',
        label: 'block mb-1 font-light text-sm text-ink-400 font-semibold',
        input:
          'relative w-full h-full px-3 rounded-default text-base text-light placeholder-gray-400 bg-transparent formkit-invalid:border-red-500 outline-none focus:border-none',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      number: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm text-secondary font-semibold',
        input:
          'w-full h-[40px] px-3 rounded text-base text-light placeholder-gray-400 bg-secondary formkit-invalid:border-red-500 outline-none focus:outline-info',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      select: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm text-secondary font-semibold',
        input:
          'w-full h-[40px] px-3 rounded text-base text-light placeholder-gray-400 bg-secondary formkit-invalid:border-red-500 outline-none focus:outline-info',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      password: {
        inner: "flex relative relative w-full h-[50px] px-3 rounded-default text-base text-light placeholder-gray-400 bg-white border-2 border-ink-200 formkit-invalid:border-red-500 focus:outline-none focus-within:border-primary",
        outer: 'mb-5',
        label: 'block mb-1 font-light text-sm text-ink-400 font-semibold',
        input:
          'relative w-full h-full px-3 rounded-default text-base text-light placeholder-gray-400 bg-transparent formkit-invalid:border-red-500 outline-none focus:border-none',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      date: {
        outer: 'mb-5 focus:outline-none focus:shadow-outline',
        label: 'block mb-1 font-light text-sm text-secondary font-semibold',
        input:
          'w-full h-[40px] px-3 rounded text-base text-light placeholder-gray-400 bg-secondary formkit-invalid:border-red-500 outline-none focus:outline-info',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      button: {
        outer: 'bg-blue-500 rounded flex items-center justify-center h-[40px]',
        input: 'text-white'
      },
      submit: {
        wrapper: 'w-full h-full',
        outer: 'bg-blue-500 rounded flex items-center justify-center h-[40px]',
        input: 'text-white w-full h-full'
      },
      checkbox: {
        wrapper: 'flex flex-row gap-2 items-start',
        input: 'w-[26px] h-[26px]'
      }
    }),
  },
  
}