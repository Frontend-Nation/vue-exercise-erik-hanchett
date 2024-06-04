<script setup lang="ts">
const bedrockResults = ref("");
const loading = ref(false);
async function submit(event: Event) {
  /*
 Add submit code here. You'll need to use $fetch to the `/api/ask-bedrock` end point.
 with `{ingredients}
 */
}
</script>
<template>
  <main class="flex min-h-screen flex-col items-center p-24 m-auto">
    <div
      class="pb-10 mx-auto text-center flex flex-col items-start -center max-w-3xl"
    >
      <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl">
        Meet Your Personal <span class="text-blue-600"> Recipe AI </span>
        <p class="mt-10 font-medium text-lg max-w-prose text-gray-900">
          Simply type few ingredients using the format ingredient1,
          ingredient12,..etc and Recipe AI will generate an all-new recipe on
          demand...
        </p>
      </h1>
    </div>
    <section class="w-1/2 mx-auto">
      <form
        class="p-4 flex flex-col items-center gap-4 max-w-full mx-auto"
        @submit.prevent="submit"
      >
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          required
          placeholder="Ingredient1, Ingredient2, Ingredient3,..etc"
          class="border border-black text-gray-900 p-4 rounded-lg max-w-full w-full text-xl"
        />
        <button
          type="submit"
          class="text-white p-2 rounded-lg bg-blue-500 w-1/2 text-xl"
        >
          Generate
        </button>
      </form>
    </section>

    <div v-if="loading" class="flex flex-col items-center gap-4 w-1/2 mx-auto">
      <h2 class="m-10 font-medium text-xl max-w-prose text-blue-600">
        Wait for it...
      </h2>
    </div>

    <section
      v-if="bedrockResults"
      class="mt-10 mx-auto border border-black bg-gray-50 rounded-xl"
    >
      <div
        class="p-4 flex flex-col items-center gap-4 max-w-full mx-auto text-xl font-semibold"
      >
        <h2 class="whitespace-pre-wrap">{{ bedrockResults }}</h2>
      </div>
    </section>
  </main>
</template>
