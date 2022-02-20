<template>
  <Tutorial />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { useGetBooksQuery } from '@/generated/graphql'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { result } = useQuery(useGetBooksQuery)
    console.log(result)
    const users = useResult(result, [], (data) => data?.users)

    return { users }
  },
})
</script>
