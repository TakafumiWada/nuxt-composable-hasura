<template>
  <div>
    <div v-for="book in books" :key="book.id">
      {{ book.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GetBooksDocument } from '@/generated/graphql'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { result } = useQuery(GetBooksDocument)
    const books = useResult(result, [], (data) => data?.books)

    return { books }
  },
})
</script>
