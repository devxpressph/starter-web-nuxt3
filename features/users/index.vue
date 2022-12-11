
<script setup lang="ts">
  import EllipsisVertical from '~~/components/icons/ellipsisVertical.vue';


  interface FormProps {
    search: string
  }

  const isDrawerOpen = ref(false)

  const users = [
    {
      id: "PCG-001",
      username: "admin",
      fullname: "Admin Admin",
      lastLogin: "-",
    },
    {
      id: "PCG-002",
      username: "erika",
      fullname: "Eliza Reyes",
      lastLogin: "-",
    },
    {
      id: "PCG-003",
      username: "jcruz",
      fullname: "Dela Cruz Juan",
      lastLogin: "-",
    },
    {
      id: "PCG-004",
      username: "mtora",
      fullname: "Maria Tarhata Ora",
      lastLogin: "-",
    },
    {
      id: "PCG-001",
      username: "admin",
      fullname: "Admin Admin",
      lastLogin: "-",
    },
    {
      id: "PCG-002",
      username: "erika",
      fullname: "Eliza Reyes",
      lastLogin: "-",
    },
    {
      id: "PCG-003",
      username: "jcruz",
      fullname: "Dela Cruz Juan",
      lastLogin: "-",
    },
    {
      id: "PCG-004",
      username: "mtora",
      fullname: "Maria Tarhata Ora",
      lastLogin: "-",
    },
    {
      id: "PCG-001",
      username: "admin",
      fullname: "Admin Admin",
      lastLogin: "-",
    },
    {
      id: "PCG-002",
      username: "erika",
      fullname: "Eliza Reyes",
      lastLogin: "-",
    },
  ]
 
  const submitHandler = async (formData: FormProps) => {
    console.log(formData, `formData`)
  }

</script>

<template>
  <div class="pt-3 flex justify-between items-center">
    <div>
      <h3 class="text-xl font-bold">Users</h3>
    </div>
    <div class="flex items-center gap-3">
      <div class="mb-5">
        <button
          class="w-full text-white btn btn-md text-base rounded-default capitalize bg-primary border-primary hover:bg-white hover:text-primary hover:border-main"
          @click="isDrawerOpen = true"
        >
          Add user
        </button>
      </div>
      <div>
        <FormKit
          type="form"
          :actions="false"
          @submit="submitHandler"
        >
          <FormKit
            id="search"
            type="text"
            name="search"
            placeholder="Search"
          />
        </FormKit>
      </div>
    </div>
  </div>
  <Table>
    <!-- TODO extract array to a config -->
    <TableHeader :data="['ID', 'Username', 'Full Name', 'Last Login', 'Action']" />
    <TableBody>
      <tr v-for="user in users">
        <td class="text-sm">{{ user.id }}</td>
        <td class="text-sm">{{ user.username }}</td>
        <td class="text-sm">{{ user.fullname }}</td>
        <td class="text-sm">{{ user.lastLogin }}</td>
        <td class="text-right w-10">
          <div class="dropdown dropdown-left">
            <label tabindex="0" class="btn btn-xs btn-ghost"><EllipsisVertical /></label>
            <div tabindex="0" class="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box">
              <button class="btn btn-outline mb-3">Change Role</button>
              <button class="btn btn-outline">Enable</button>
            </div>
          </div>
        </td>
      </tr>
    </TableBody>
  </Table>
  <div class="py-3 flex justify-end">
    <TablePagination page="1" />
  </div>

  <div>
    <aside
      class="transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-20"
      :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <h3>TEST</h3>
    </aside>
    <div v-show="isDrawerOpen" class="absolute top-0 right-0 bottom-0 left-0 z-10 h-screen w-screen bg-black/50" @click="isDrawerOpen = false" />
  </div>
</template>